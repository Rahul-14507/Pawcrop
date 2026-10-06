/**
 * Agri-Safe Control Loop Simulation Model
 *
 * NOTE: Illustrative mathematical model, not measured calibration data.
 * Designed to demonstrate closed-loop pH stabilization at 6.0 and emergency
 * shutdown threshold at pH <= 5.6.
 */

export const TARGET_PH = 6.0;
export const CUTOFF_PH = 5.6; // hard safety cut-off, illustrative
export const SOURCE_PH = 7.2; // incoming unactivated water pH, illustrative
export const HYSTERESIS_REARM_PH = TARGET_PH + 0.2; // pH >= 6.2 to re-arm after cutoff

export type SimState = {
  ph: number;
  power: number;
  cutoff: boolean;
};

export const INITIAL_SIM_STATE: SimState = {
  ph: 6.0,
  power: 38,
  cutoff: false,
};

/**
 * Calculates theoretical equilibrium pH for a given electrical arc power and hydraulic flow.
 * Acid load (NOx synthesis) rises with arc power (0..100%) and dilutes with flow (1..20 L/min).
 */
export function targetPhFor(power: number, flow: number): number {
  const load = power / Math.max(flow, 0.5);
  return SOURCE_PH - 1.8 * Math.log10(1 + load * 0.35);
}

/**
 * Steps the closed-loop control system forward by dt seconds.
 *
 * @param s Current simulation state
 * @param requestedPower User-selected maximum power ceiling (0..100)
 * @param flow Hydraulic flow rate (L/min)
 * @param dt Time step in seconds (clamped to 0.05s)
 * @returns Next simulation state
 */
export function step(
  s: SimState,
  requestedPower: number,
  flow: number,
  dt: number
): SimState {
  const safeDt = Math.min(Math.max(dt, 0.001), 0.05);

  // Controller: proportional throttle toward TARGET_PH, hard cut-off below CUTOFF_PH
  const err = s.ph - TARGET_PH; // positive = too basic, can increase power
  const kp = 14;
  let power = Math.min(requestedPower, Math.max(0, s.power + kp * err * safeDt));
  let cutoff = s.cutoff;

  if (s.ph <= CUTOFF_PH) {
    power = 0;
    cutoff = true;
  } else if (s.ph >= HYSTERESIS_REARM_PH) {
    cutoff = false; // hysteresis, re-arm
  }

  if (cutoff) {
    power = 0;
  }

  // Plant: pH relaxes toward the value implied by current power and flow
  const tau = 2.5; // system relaxation time constant in seconds
  const targetPh = targetPhFor(power, flow);
  const ph = s.ph + ((targetPh - s.ph) * safeDt) / tau;

  return { ph, power, cutoff };
}
