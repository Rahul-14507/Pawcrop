"use client";

import React from "react";
import { CUTOFF_PH, TARGET_PH } from "@/lib/controlSim";

interface DataPoint {
  time: number;
  ph: number;
  power: number;
}

interface StripChartProps {
  history: DataPoint[]; // array of recent sample points
  className?: string;
}

export function StripChart({ history, className = "" }: StripChartProps) {
  // Fixed dimensions for SVG coordinate system
  const width = 500;
  const height = 140;
  const padL = 40;
  const padR = 20;
  const padT = 15;
  const padB = 25;

  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const minPh = 4.5;
  const maxPh = 8.0;

  // Convert pH value to SVG y-coordinate
  const phToY = (val: number) => {
    const clamped = Math.min(Math.max(val, minPh), maxPh);
    const ratio = (clamped - minPh) / (maxPh - minPh);
    return padT + chartH * (1 - ratio);
  };

  // Convert power (0-100) to SVG y-coordinate
  const powerToY = (p: number) => {
    const ratio = Math.min(Math.max(p, 0), 100) / 100;
    return padT + chartH * (1 - ratio);
  };

  const targetY = phToY(TARGET_PH);
  const cutoffY = phToY(CUTOFF_PH);

  // Generate SVG path for pH trace
  const phPoints = history.map((pt, i) => {
    const x = padL + (i / Math.max(history.length - 1, 1)) * chartW;
    const y = phToY(pt.ph);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const phPath = phPoints.length > 0 ? `M${phPoints.join(" L")}` : "";

  // Generate SVG path for Power trace
  const powerPoints = history.map((pt, i) => {
    const x = padL + (i / Math.max(history.length - 1, 1)) * chartW;
    const y = powerToY(pt.power);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const powerPath = powerPoints.length > 0 ? `M${powerPoints.join(" L")}` : "";

  return (
    <div className={`w-full bg-paper/50 hairline-all p-3 rounded select-none ${className}`}>
      <div className="flex items-center justify-between text-[11px] font-mono mb-2 pb-1 hairline-b">
        <span className="font-semibold text-ink/80 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
          LIVE 20s TELEMETRY STRIP-CHART
        </span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-leaf font-semibold">
            <span className="w-3 h-0.5 bg-leaf" /> pH Trace
          </span>
          <span className="flex items-center gap-1 text-water font-semibold">
            <span className="w-3 h-0.5 bg-water stroke-dashed" /> Power %
          </span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="Real-time pH and power strip chart over 20 seconds"
      >
        {/* Background chart frame */}
        <rect
          x={padL}
          y={padT}
          width={chartW}
          height={chartH}
          fill="var(--paper)"
          stroke="var(--grid)"
          strokeWidth="1"
        />

        {/* Horizontal grid lines */}
        {[5.0, 6.0, 7.0, 8.0].map((gridVal) => {
          const y = phToY(gridVal);
          return (
            <g key={gridVal}>
              <line
                x1={padL}
                y1={y}
                x2={padL + chartW}
                y2={y}
                stroke="var(--grid)"
                strokeDasharray="2,2"
              />
              <text
                x={padL - 6}
                y={y + 3}
                textAnchor="end"
                className="font-mono text-[9px] fill-ink opacity-50"
              >
                {gridVal.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Target 6.0 pH guideline */}
        <line
          x1={padL}
          y1={targetY}
          x2={padL + chartW}
          y2={targetY}
          stroke="var(--leaf)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />

        {/* Cutoff 5.6 pH guideline */}
        <line
          x1={padL}
          y1={cutoffY}
          x2={padL + chartW}
          y2={cutoffY}
          stroke="var(--signal)"
          strokeOpacity="0.6"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
        <text
          x={padL + chartW - 4}
          y={cutoffY - 4}
          textAnchor="end"
          className="font-mono text-[8px] fill-signal font-semibold opacity-80"
        >
          CUTOFF 5.6 pH
        </text>

        {/* Power Trace */}
        {powerPath && (
          <path
            d={powerPath}
            fill="none"
            stroke="var(--water)"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            strokeDasharray="3,2"
          />
        )}

        {/* pH Trace */}
        {phPath && (
          <path
            d={phPath}
            fill="none"
            stroke="var(--leaf)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Current Value Dot */}
        {history.length > 0 && (
          <circle
            cx={padL + chartW}
            cy={phToY(history[history.length - 1].ph)}
            r={3.5}
            fill="var(--leaf)"
            stroke="var(--paper)"
            strokeWidth="1.5"
          />
        )}

        {/* X-axis time labels */}
        <text
          x={padL}
          y={height - 8}
          textAnchor="start"
          className="font-mono text-[8px] fill-ink opacity-40"
        >
          -20s
        </text>
        <text
          x={padL + chartW / 2}
          y={height - 8}
          textAnchor="middle"
          className="font-mono text-[8px] fill-ink opacity-40"
        >
          -10s
        </text>
        <text
          x={padL + chartW}
          y={height - 8}
          textAnchor="end"
          className="font-mono text-[8px] fill-ink opacity-40"
        >
          NOW (0s)
        </text>
      </svg>
    </div>
  );
}
