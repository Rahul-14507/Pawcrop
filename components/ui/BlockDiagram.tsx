"use client";

import React from "react";

export function BlockDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full bg-paper hairline-all p-4 sm:p-6 rounded ${className}`}>
      <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
        <span className="font-semibold text-ink flex items-center gap-1.5">
          <span className="w-2 h-2 rounded bg-leaf" />
          SCHEMATIC: AGRI-SAFE ISOLATED CONTROL ARCHITECTURE
        </span>
        <span className="text-ink/50 text-[10px]">FIG. 04-B // PCB-REV-2.1</span>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 760 260"
          className="w-full min-w-[680px] h-auto select-none"
          role="img"
          aria-label="Agri-Safe block diagram showing sensors, opto-isolation, ESP32, ZVS driver, and feedback loop"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--ink)" />
            </marker>
            <marker
              id="arrow-arc"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--arc)" />
            </marker>
            <marker
              id="arrow-water"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--water)" />
            </marker>
            <pattern id="diag-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="var(--grid)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Left Block: Sensors */}
          <g transform="translate(20, 30)">
            <rect
              x="0"
              y="0"
              width="120"
              height="160"
              rx="4"
              fill="var(--paper)"
              stroke="var(--ink)"
              strokeWidth="1.5"
            />
            <rect x="0" y="0" width="120" height="24" rx="4" fill="var(--ink)" fillOpacity="0.08" />
            <text x="60" y="16" textAnchor="middle" className="font-mono text-[10px] font-bold fill-ink">
              INLINE SENSORS
            </text>

            {/* pH Sensor Box */}
            <rect x="10" y="36" width="100" height="48" rx="2" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
            <text x="60" y="56" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-ink">
              Glass pH Probe
            </text>
            <text x="60" y="72" textAnchor="middle" className="font-mono text-[8px] fill-leaf font-semibold">
              Analog 0–3.3V
            </text>

            {/* Flow Sensor Box */}
            <rect x="10" y="96" width="100" height="48" rx="2" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
            <text x="60" y="116" textAnchor="middle" className="font-mono text-[10px] font-semibold fill-ink">
              Turbine Flow
            </text>
            <text x="60" y="132" textAnchor="middle" className="font-mono text-[8px] fill-water font-semibold">
              Hall Pulse Train
            </text>
          </g>

          {/* Signal Connection Lines into Isolation */}
          <line x1="140" y1="90" x2="180" y2="90" stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <line x1="140" y1="150" x2="180" y2="150" stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Opto-Isolation Barrier 1 */}
          <g transform="translate(180, 20)">
            <rect
              x="0"
              y="0"
              width="50"
              height="180"
              rx="3"
              fill="url(#diag-hatch)"
              stroke="var(--signal)"
              strokeWidth="1.5"
              strokeDasharray="4,2"
            />
            <text
              x="25"
              y="95"
              textAnchor="middle"
              transform="rotate(-90 25 95)"
              className="font-mono text-[9px] font-bold fill-signal uppercase tracking-wider"
            >
              OPTO-ISOLATION (3.75 kV)
            </text>
          </g>

          <line x1="230" y1="110" x2="265" y2="110" stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Center Block: ESP32 Edge Logic */}
          <g transform="translate(265, 30)">
            <rect
              x="0"
              y="0"
              width="150"
              height="160"
              rx="4"
              fill="var(--paper)"
              stroke="var(--leaf)"
              strokeWidth="2"
            />
            <rect x="0" y="0" width="150" height="26" rx="4" fill="var(--leaf)" fillOpacity="0.15" />
            <text x="75" y="18" textAnchor="middle" className="font-mono text-[11px] font-bold fill-leaf">
              ESP32 CORE LOGIC
            </text>

            <rect x="10" y="36" width="130" height="34" rx="2" fill="var(--paper)" stroke="var(--ink)" strokeOpacity="0.3" />
            <text x="75" y="52" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-ink">
              Dual-Core FreeRTOS
            </text>
            <text x="75" y="64" textAnchor="middle" className="font-mono text-[8px] fill-ink opacity-60">
              100 Hz Sampling Loop
            </text>

            <rect x="10" y="78" width="130" height="38" rx="2" fill="var(--leaf)" fillOpacity="0.08" stroke="var(--leaf)" strokeWidth="1" />
            <text x="75" y="94" textAnchor="middle" className="font-mono text-[9px] font-bold fill-leaf">
              Agri-Safe pH Throttle
            </text>
            <text x="75" y="107" textAnchor="middle" className="font-mono text-[8px] fill-signal font-semibold">
              Hard 5.6 pH Cut-Off
            </text>

            <rect x="10" y="124" width="130" height="24" rx="2" fill="var(--paper)" stroke="var(--ink)" strokeOpacity="0.3" />
            <text x="75" y="140" textAnchor="middle" className="font-mono text-[8px] font-mono fill-ink opacity-80">
              MQTT / TLS Telemetry
            </text>
          </g>

          {/* Connection Lines from ESP32 to High-Voltage Barrier */}
          <line x1="415" y1="110" x2="445" y2="110" stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Opto-Isolation Barrier 2 */}
          <g transform="translate(445, 20)">
            <rect
              x="0"
              y="0"
              width="50"
              height="180"
              rx="3"
              fill="url(#diag-hatch)"
              stroke="var(--signal)"
              strokeWidth="1.5"
              strokeDasharray="4,2"
            />
            <text
              x="25"
              y="95"
              textAnchor="middle"
              transform="rotate(-90 25 95)"
              className="font-mono text-[9px] font-bold fill-signal uppercase tracking-wider"
            >
              PWM OPTO-BARRIER
            </text>
          </g>

          <line x1="495" y1="110" x2="525" y2="110" stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* High Voltage ZVS & Plasma Arc Block */}
          <g transform="translate(525, 30)">
            <rect
              x="0"
              y="0"
              width="210"
              height="160"
              rx="4"
              fill="#0B1410"
              stroke="var(--arc)"
              strokeWidth="2"
            />
            <rect x="0" y="0" width="210" height="26" rx="4" fill="var(--arc)" fillOpacity="0.15" />
            <text x="105" y="18" textAnchor="middle" className="font-mono text-[11px] font-bold fill-arc">
              15 kV PLASMA ENGINE
            </text>

            {/* ZVS Flyback */}
            <rect x="12" y="36" width="186" height="34" rx="2" fill="#14241D" stroke="var(--arc)" strokeOpacity="0.4" />
            <text x="105" y="52" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-white">
              ZVS Resonant Flyback Driver
            </text>
            <text x="105" y="64" textAnchor="middle" className="font-mono text-[8px] fill-arc">
              15 kV Peak · 20–40 kHz Resonance
            </text>

            {/* Plasma Reaction Chamber */}
            <rect x="12" y="78" width="186" height="34" rx="2" fill="#14241D" stroke="var(--arc)" strokeOpacity="0.4" />
            <text x="105" y="94" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-white">
              Borosilicate CAP Chamber
            </text>
            <text x="105" y="106" textAnchor="middle" className="font-mono text-[8px] fill-arc">
              RONS Synthesis (NOx + O₃)
            </text>

            {/* Venturi */}
            <rect x="12" y="120" width="186" height="30" rx="2" fill="#14241D" stroke="var(--water)" strokeOpacity="0.6" />
            <text x="105" y="138" textAnchor="middle" className="font-mono text-[9px] font-semibold fill-water">
              PVDF Venturi Injector (OpenFOAM)
            </text>
          </g>

          {/* Feedback Return Loop Line */}
          <path
            d="M 630 190 L 630 225 L 80 225 L 80 190"
            fill="none"
            stroke="var(--water)"
            strokeWidth="1.5"
            strokeDasharray="4,3"
            markerEnd="url(#arrow-water)"
          />
          <text x="350" y="240" textAnchor="middle" className="font-mono text-[9px] font-bold fill-water tracking-wider">
            CLOSED-LOOP HYDRAULIC FEEDBACK & pH STABILIZATION STREAM (6.0 pH)
          </text>
        </svg>
      </div>
    </div>
  );
}
