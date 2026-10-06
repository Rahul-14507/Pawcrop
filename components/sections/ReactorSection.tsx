"use client";

import React, { useState, useEffect, useRef } from "react";
import { site } from "@/content/site";
import { PlasmaArc } from "@/components/ui/PlasmaArc";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Zap, Wind, Waves, Droplet, Sparkles, CheckCircle2 } from "lucide-react";

export function ReactorSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [arcIgnited, setArcIgnited] = useState(true);
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      num: 1,
      fig: "Fig. 02-A",
      icon: Wind,
      title: "Ambient Air & Oxygen Intake",
      desc: "Atmospheric air (78% N₂, 21% O₂) is drawn directly through an inline particulate filter into the reaction chamber. Zero bottled gas, zero chemical precursors required.",
      spec: "AIR FLOW: 1.5–4.0 SLPM · AMBIENT TEMP",
    },
    {
      num: 2,
      fig: "Fig. 02-B",
      icon: Zap,
      title: "15 kV Cold Atmospheric Plasma Arc",
      desc: "A Zero-Voltage Switching (ZVS) resonant flyback driver delivers a 15 kV peak high-frequency discharge between tungsten electrodes, ionizing air into Reactive Nitrogen and Oxygen Species (RONS: NO, NO₂, O₃).",
      spec: "VOLTAGE: 15 kV PEAK · FREQ: 25.4 kHz · COLD DISCHARGE",
    },
    {
      num: 3,
      fig: "Fig. 02-C",
      icon: Waves,
      title: "OpenFOAM CFD PVDF Venturi Shearing",
      desc: "Irrigation water flows through a custom-modeled PVDF Venturi constriction. The localized sub-atmospheric pressure draws plasma gas and shears it into high-surface-area micro-bubbles under turbulent mixing.",
      spec: "GEOMETRY: CFD OPTIMIZED · MATERIAL: VIRGIN PVDF",
    },
    {
      num: 4,
      fig: "Fig. 02-D",
      icon: Sparkles,
      title: "Plasma-Activated Water (PAW) Synthesis",
      desc: "Nitrogen gas dissolves into bioavailable nitrate (NO₃⁻) for vegetative growth, while transient dissolved ozone (O₃) and reactive oxygen species provide immediate pathogen sanitation (Pythium suppression).",
      spec: "CHEMISTRY: NO₃⁻ + O₃ · BIOAVAILABLE FRACTION",
    },
    {
      num: 5,
      fig: "Fig. 02-E",
      icon: Droplet,
      title: "Inline Direct Delivery at pH 6.0",
      desc: "The stabilized Plasma-Activated Water flows directly into the crop's drip or NFT hydroponic channels at an automated, plant-safe pH 6.0, preventing acid-burn while nourishing roots.",
      spec: "DELIVERY: DIRECT INLINE · SAFEGUARD: LOCKED pH 6.0",
    },
  ];

  return (
    <section
      id="reactor"
      ref={sectionRef}
      className="relative bg-reactor text-gray-100 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-y border-ink/40 overflow-hidden"
    >
      {/* Subtle high-tech reactor grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #19D3C5 1px, transparent 1px), linear-gradient(to bottom, #19D3C5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          figNumber="FIG. 02"
          category="THE REACTOR CORE"
          title="Inside the Cold Atmospheric Plasma Chamber."
          subtitle="How ambient air, water, and electricity undergo gas-phase ionization and turbulent Venturi dissolution into bioavailable Plasma-Activated Water."
          dark={true}
        />

        {/* Step Selector Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8 font-mono text-xs">
          {steps.map((s) => {
            const isSelected = activeStep === s.num;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                type="button"
                className={`p-3 text-left rounded-sm border transition-all ${
                  isSelected
                    ? "bg-arc/15 border-arc text-arc font-bold shadow-[0_0_12px_rgba(25,211,197,0.15)]"
                    : "bg-[#122019] border-white/10 text-gray-400 hover:border-white/25 hover:text-gray-200"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] opacity-70 mb-1">
                  <span>STEP 0{s.num}</span>
                  <span>{s.fig}</span>
                </div>
                <div className="truncate text-xs">{s.title.split(" ")[0]} {s.title.split(" ")[1] || ""}</div>
              </button>
            );
          })}
        </div>

        {/* Main Reactor Visualization Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070E0B] border border-arc/30 rounded p-6 sm:p-8 shadow-2xl">
          {/* Left Visual Area (7 cols): Chamber Cutaway Diagram with Live Plasma Arc */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-xs">
              <span className="text-arc flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-arc animate-ping" />
                REACTION CHAMBER CUTAWAY // ACTIVE SCHEMATIC
              </span>
              <span className="text-gray-400 text-[11px]">{steps[activeStep - 1].fig}</span>
            </div>

            {/* Chamber Diagram SVG with dynamic highlights */}
            <div className="relative bg-[#0B1511] border border-white/15 rounded p-4 min-h-[300px] flex items-center justify-center">
              <svg
                viewBox="0 0 540 280"
                className="w-full h-auto select-none"
                role="img"
                aria-label="Cross-section diagram of PAWCROP plasma reactor chamber and Venturi mixer"
              >
                {/* Water Pipe Inflow (Left to Right) */}
                <path
                  d="M 20 220 L 160 220 L 220 235 L 320 235 L 380 220 L 520 220"
                  fill="none"
                  stroke="var(--water)"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M 20 220 L 160 220 L 220 235 L 320 235 L 380 220 L 520 220"
                  fill="none"
                  stroke="#1B4D68"
                  strokeWidth="22"
                  strokeLinecap="round"
                />

                {/* Animated Water Flow Particles */}
                <g className="water-particles" opacity="0.8">
                  <circle cx="60" cy="220" r="3" fill="#7FD6FF" />
                  <circle cx="120" cy="220" r="2.5" fill="#7FD6FF" />
                  <circle cx="270" cy="235" r="2" fill="#7FD6FF" />
                  <circle cx="430" cy="220" r="3" fill="#19D3C5" />
                  <circle cx="490" cy="220" r="3.5" fill="#19D3C5" />
                </g>

                {/* Borosilicate Reaction Chamber Cylinder (Top) */}
                <rect
                  x="140"
                  y="20"
                  width="260"
                  height="120"
                  rx="6"
                  fill="#0E211A"
                  stroke={activeStep === 2 ? "var(--arc)" : "#224336"}
                  strokeWidth={activeStep === 2 ? "2" : "1.5"}
                />
                <text x="270" y="42" textAnchor="middle" className="font-mono text-[9px] fill-arc opacity-70">
                  BOROSILICATE DIELECTRIC CHAMBER
                </text>

                {/* Air Inlet Valve */}
                <path d="M 270 5 L 270 20" stroke="#718096" strokeWidth="6" strokeLinecap="round" />
                <text x="270" y="14" textAnchor="middle" className="font-mono text-[8px] fill-gray-300">
                  AIR INLET (N₂ + O₂)
                </text>

                {/* Plasma Discharge Electrodes & Arc */}
                <g transform="translate(0, 0)">
                  {/* Left Tungsten Electrode */}
                  <rect x="160" y="70" width="30" height="12" rx="2" fill="#CBD5E0" stroke="#4A5568" />
                  <circle cx="190" cy="76" r="6" fill="#E2E8F0" />

                  {/* Right Tungsten Electrode */}
                  <rect x="350" y="70" width="30" height="12" rx="2" fill="#CBD5E0" stroke="#4A5568" />
                  <circle cx="350" cy="76" r="6" fill="#E2E8F0" />

                  {/* The Plasma Arc */}
                  <g className={activeStep >= 2 ? "opacity-100" : "opacity-30"}>
                    <line x1="190" y1="76" x2="350" y2="76" stroke="var(--arc)" strokeWidth="4" strokeOpacity="0.4" />
                    <line x1="190" y1="76" x2="350" y2="76" stroke="var(--arc)" strokeWidth="1.5" />
                  </g>
                </g>

                {/* Gas Transfer Channel from Arc Chamber to Venturi Throat */}
                <path
                  d="M 270 140 L 270 230"
                  stroke={activeStep >= 3 ? "var(--arc)" : "#224336"}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="4,2"
                />
                <text x="310" y="180" textAnchor="start" className="font-mono text-[8px] fill-arc opacity-80">
                  RONS GAS (NOx + O₃)
                </text>

                {/* PVDF Venturi Throat Outline */}
                <path
                  d="M 210 200 L 270 225 L 330 200 L 330 260 L 270 245 L 210 260 Z"
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />

                {/* Labels */}
                <text x="40" y="255" className="font-mono text-[9px] fill-gray-400">
                  RAW WATER IN
                </text>
                <text x="440" y="255" className="font-mono text-[9px] fill-arc font-bold">
                  PAW OUT (pH 6.0)
                </text>
              </svg>
            </div>

            {/* Chamber Status Readouts */}
            <div className="mt-4 grid grid-cols-3 gap-3 font-mono text-[11px] border-t border-white/10 pt-3">
              <div>
                <span className="text-gray-400 block text-[9px]">DIELECTRIC</span>
                <span className="text-gray-200">Borosilicate 3.3</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[9px]">SHEAR INJECTOR</span>
                <span className="text-gray-200">PVDF Venturi (OpenFOAM)</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[9px]">OUTPUT SPECIES</span>
                <span className="text-arc font-semibold">NO₃⁻ + O₃ (aq)</span>
              </div>
            </div>
          </div>

          {/* Right Detail Card (5 cols): Active Step Deep-Dive */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#0E1A14] border border-white/10 rounded p-6">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
                <span className="px-2 py-0.5 bg-arc/20 text-arc rounded border border-arc/40 font-bold">
                  PHASE 0{activeStep} OF 05
                </span>
                <span className="text-gray-400">{steps[activeStep - 1].fig}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-paper tracking-tight">
                {steps[activeStep - 1].title}
              </h3>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed font-body">
                {steps[activeStep - 1].desc}
              </p>

              {/* Engineering Spec Chip */}
              <div className="mt-6 p-3 bg-black/40 border border-white/10 rounded font-mono text-xs text-arc">
                <span className="text-gray-400 block text-[10px] mb-0.5">ENGINEERING SPECIFICATION:</span>
                <span className="font-semibold">{steps[activeStep - 1].spec}</span>
              </div>
            </div>

            {/* Step Navigation Controls */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <button
                onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 5))}
                type="button"
                className="px-3 py-1.5 border border-white/20 rounded hover:bg-white/10 text-gray-300"
              >
                ← PREV STEP
              </button>
              <span className="text-gray-400 text-[11px]">0{activeStep} / 05</span>
              <button
                onClick={() => setActiveStep((prev) => (prev < 5 ? prev + 1 : 1))}
                type="button"
                className="px-3 py-1.5 bg-arc text-reactor font-bold rounded hover:opacity-90 transition-opacity"
              >
                NEXT STEP →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
