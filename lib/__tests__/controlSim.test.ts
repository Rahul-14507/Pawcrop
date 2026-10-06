import { describe, it, expect } from "vitest";
import {
  step,
  targetPhFor,
  TARGET_PH,
  CUTOFF_PH,
  SOURCE_PH,
  HYSTERESIS_REARM_PH,
  SimState,
} from "../controlSim";

describe("Agri-Safe Controller Model (lib/controlSim.ts)", () => {
  it("should calculate higher acid load (lower equilibrium pH) with higher power", () => {
    const phLowPower = targetPhFor(10, 5);
    const phHighPower = targetPhFor(80, 5);
    expect(phHighPower).toBeLessThan(phLowPower);
    expect(phLowPower).toBeLessThan(SOURCE_PH);
  });

  it("should calculate higher equilibrium pH when flow rate increases (dilution)", () => {
    const phLowFlow = targetPhFor(50, 2);
    const phHighFlow = targetPhFor(50, 15);
    expect(phHighFlow).toBeGreaterThan(phLowFlow);
  });

  it("should converge toward TARGET_PH (6.0) under moderate flow and power requested", () => {
    let state: SimState = { ph: 7.2, power: 0, cutoff: false };
    const requestedPower = 80;
    const flow = 6;
    const dt = 0.02; // 20ms steps

    // Simulate 30 seconds of control loop execution
    for (let t = 0; t < 1500; t++) {
      state = step(state, requestedPower, flow, dt);
    }

    // Should stabilize close to target pH 6.0
    expect(state.ph).toBeGreaterThan(5.95);
    expect(state.ph).toBeLessThan(6.05);
    expect(state.power).toBeGreaterThan(0);
    expect(state.cutoff).toBe(false);
  });

  it("should trigger safety cutoff and shut down arc power if pH drops <= 5.6", () => {
    let state: SimState = { ph: 5.58, power: 50, cutoff: false };
    const requestedPower = 100;
    const flow = 2;
    const dt = 0.02;

    state = step(state, requestedPower, flow, dt);

    expect(state.cutoff).toBe(true);
    expect(state.power).toBe(0);
  });

  it("should maintain cutoff status and zero power until pH recovers past hysteresis threshold 6.2", () => {
    let state: SimState = { ph: 5.5, power: 0, cutoff: true };
    const requestedPower = 100;
    const flow = 10;
    const dt = 0.02;

    // While recovering at 5.8 (still below 6.2)
    state.ph = 5.8;
    state = step(state, requestedPower, flow, dt);
    expect(state.cutoff).toBe(true);
    expect(state.power).toBe(0);

    // Once fresh water raises pH >= 6.2, controller re-arms
    state.ph = 6.25;
    state = step(state, requestedPower, flow, dt);
    expect(state.cutoff).toBe(false);
  });

  it("should never exceed the user-requested power ceiling", () => {
    let state: SimState = { ph: 7.2, power: 0, cutoff: false };
    const requestedPower = 35;
    const flow = 15;
    const dt = 0.02;

    for (let t = 0; t < 300; t++) {
      state = step(state, requestedPower, flow, dt);
      expect(state.power).toBeLessThanOrEqual(requestedPower);
    }
  });
});
