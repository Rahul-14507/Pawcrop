"use client";

import React, { useState, useEffect, useRef } from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GaugeNeedle } from "@/components/ui/GaugeNeedle";
import { StripChart } from "@/components/ui/StripChart";
import { BlockDiagram } from "@/components/ui/BlockDiagram";
import { step, INITIAL_SIM_STATE, TARGET_PH, CUTOFF_PH, SimState } from "@/lib/controlSim";
import { Sliders, AlertTriangle, ShieldCheck, Cpu, RefreshCw } from "lucide-react";

export function ControllerSection() {
  // User input states
  const [flow, setFlow] = useState<number>(6.0); // 1..20 L/min
  const [requestedPower, setRequestedPower] = useState<number>(75); // 0..100%

  // Simulation running state
  const [simState, setSimState] = useState<SimState>(INITIAL_SIM_STATE);
  const [history, setHistory] = useState<Array<{ time: number; ph: number; power: number }>>([]);

  // Simulation RAF refs
  const stateRef = useRef<SimState>(INITIAL_SIM_STATE);
  const flowRef = useRef<number>(6.0);
  const powerRef = useRef<number>(75);
  const lastTimeRef = useRef<number>(0);
  const historyCounterRef = useRef<number>(0);

  // Keep refs synchronized
  useEffect(() => {
    flowRef.current = flow;
  }, [flow]);

  useEffect(() => {
    powerRef.current = requestedPower;
  }, [requestedPower]);

  // Main 60fps RAF simulation loop
  useEffect(() => {
    let animId: number;

    const loop = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = timestamp;

      // Step simulation using pure TypeScript model
      const nextState = step(stateRef.current, powerRef.current, flowRef.current, dt);
      stateRef.current = nextState;
      setSimState(nextState);

      // Record historical trace point every 100ms
      historyCounterRef.current += dt;
      if (historyCounterRef.current >= 0.1) {
        historyCounterRef.current = 0;
        setHistory((prev) => {
          const next = [...prev, { time: Date.now(), ph: nextState.ph, power: nextState.power }];
          return next.slice(-200); // retain last 20 seconds (200 points @ 100ms)
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleReset = () => {
    stateRef.current = { ph: 7.2, power: 0, cutoff: false };
    setSimState(stateRef.current);
    setFlow(6.0);
    setRequestedPower(75);
  };

  const isCutoff = simState.cutoff;
  const isLocked = Math.abs(simState.ph - TARGET_PH) <= 0.15 && !isCutoff;

  return (
    <section
      id="agri-safe"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 03"
          category="THE ARCHITECTURAL MOAT"
          title="The Agri-Safe Closed-Loop Edge Controller."
          subtitle="Direct plasma discharge synthesizes nitric acid precursors that can burn plant roots if unmanaged. The Agri-Safe controller continuously modulates 15 kV ZVS driver duty cycle, holding irrigation streams at plant-safe pH 6.0."
        />

        {/* Interactive Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column (5 cols): Control Sliders & Safeguard Readouts */}
          <div className="lg:col-span-5 bg-paper hairline-all rounded p-6 sm:p-7 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-3 hairline-b text-xs font-mono">
              <span className="font-bold text-ink flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-leaf" />
                SIMULATOR PARAMETERS
              </span>
              <button
                onClick={handleReset}
                type="button"
                className="inline-flex items-center gap-1 text-[11px] text-ink/70 hover:text-ink hairline-all px-2 py-0.5 rounded"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Model
              </button>
            </div>

            {/* Slider 1: Irrigation Flow Rate */}
            <div>
              <div className="flex justify-between items-baseline mb-2 text-xs font-mono">
                <label htmlFor="flow-slider" className="font-semibold text-ink">
                  HYDRAULIC FLOW RATE (L/min)
                </label>
                <span className="font-mono font-bold text-water text-sm">
                  {flow.toFixed(1)} L/min
                </span>
              </div>
              <input
                id="flow-slider"
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={flow}
                onChange={(e) => setFlow(parseFloat(e.target.value))}
                aria-valuemin={1}
                aria-valuemax={20}
                aria-valuenow={flow}
                aria-valuetext={`${flow.toFixed(1)} Liters per minute`}
                className="w-full accent-water cursor-pointer h-2 bg-ink/10 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-ink/40 mt-1">
                <span>1.0 L/min (High Conc.)</span>
                <span>20.0 L/min (High Dilution)</span>
              </div>
            </div>

            {/* Slider 2: Arc Power Ceiling */}
            <div>
              <div className="flex justify-between items-baseline mb-2 text-xs font-mono">
                <label htmlFor="power-slider" className="font-semibold text-ink">
                  REQUESTED ARC POWER CEILING (%)
                </label>
                <span className="font-mono font-bold text-signal text-sm">
                  {requestedPower}%
                </span>
              </div>
              <input
                id="power-slider"
                type="range"
                min="0"
                max="100"
                step="1"
                value={requestedPower}
                onChange={(e) => setRequestedPower(parseInt(e.target.value))}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={requestedPower}
                aria-valuetext={`${requestedPower} percent maximum arc power`}
                className="w-full accent-signal cursor-pointer h-2 bg-ink/10 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-ink/40 mt-1">
                <span>0% (Driver Off)</span>
                <span>100% (15 kV Max Duty)</span>
              </div>
            </div>

            {/* Live Controller State Badge */}
            <div className="p-4 rounded hairline-all bg-paper/60 space-y-2 font-mono text-xs">
              <div className="text-[10px] text-ink/50 uppercase tracking-wider">
                CONTROLLER DYNAMIC STATUS
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink/80">Active Driver Power:</span>
                <span className="font-bold text-water text-sm">
                  {simState.power.toFixed(1)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink/80">Calculated Stream pH:</span>
                <span
                  className={`font-bold text-sm ${
                    isCutoff
                      ? "text-signal animate-pulse"
                      : isLocked
                      ? "text-leaf"
                      : "text-ink"
                  }`}
                >
                  {simState.ph.toFixed(2)} pH
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-ink/10">
                <span className="text-ink/80">Safeguard State:</span>
                {isCutoff ? (
                  <span className="font-bold text-signal flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    SHUTDOWN (pH ≤ 5.6)
                  </span>
                ) : isLocked ? (
                  <span className="font-bold text-leaf flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    LOCKED @ 6.0 pH
                  </span>
                ) : (
                  <span className="text-ink/60">THROTTLING</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Precision Gauge & Telemetry Strip-Chart */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-paper hairline-all rounded p-6 sm:p-7 shadow-subtle flex flex-col items-center">
              {/* Illustrative Model Requirement Banner */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 hairline-b font-mono text-xs">
                <span className="px-2 py-0.5 bg-ink/5 border border-ink/20 rounded font-semibold text-ink/80">
                  ILLUSTRATIVE MODEL, NOT MEASURED DATA
                </span>
                <span className="text-[10px] text-ink/50">SAMPLE: 100 Hz</span>
              </div>

              {/* Live Status String */}
              <div className="w-full my-2 text-center font-mono text-xs sm:text-sm font-bold tracking-wider py-1.5 px-3 rounded hairline-all bg-paper">
                {isCutoff ? (
                  <span className="text-signal flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-signal animate-ping" />
                    pH {simState.ph.toFixed(2)} · POWER 0% · EMERGENCY CUTOFF TRIGGERED
                  </span>
                ) : isLocked ? (
                  <span className="text-leaf flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-leaf" />
                    pH {simState.ph.toFixed(2)} · POWER {simState.power.toFixed(0)}% · LOCKED @ 6.0
                  </span>
                ) : (
                  <span className="text-ink/80 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-water" />
                    pH {simState.ph.toFixed(2)} · POWER {simState.power.toFixed(0)}% · ADAPTING
                  </span>
                )}
              </div>

              {/* The SVG Needle Gauge */}
              <GaugeNeedle ph={simState.ph} cutoff={isCutoff} />
            </div>

            {/* Live 20s Strip Chart Trace */}
            <StripChart history={history} />
          </div>
        </div>

        {/* Hardware Architecture Schematic Diagram */}
        <BlockDiagram />
      </div>
    </section>
  );
}
