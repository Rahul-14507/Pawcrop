"use client";

import React from "react";
import { TARGET_PH, CUTOFF_PH } from "@/lib/controlSim";

interface GaugeNeedleProps {
  ph: number;
  cutoff: boolean;
  className?: string;
}

export function GaugeNeedle({ ph, cutoff, className = "" }: GaugeNeedleProps) {
  // Domain: 4.5 to 8.0 (range = 3.5)
  // Angle: -120 deg (pH 4.5) to +120 deg (pH 8.0)
  const minPh = 4.5;
  const maxPh = 8.0;
  const minAngle = -120;
  const maxAngle = 120;

  const phToAngle = (val: number) => {
    const clamped = Math.min(Math.max(val, minPh), maxPh);
    const ratio = (clamped - minPh) / (maxPh - minPh);
    return minAngle + ratio * (maxAngle - minAngle);
  };

  const needleAngle = phToAngle(ph);

  // Function to calculate SVG arc coordinate given polar angle and radius
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    // 0 deg is top (90 deg counter-clockwise from standard 0)
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
  };

  const cx = 150;
  const cy = 135;
  const r = 95;

  const plantSafeStartAngle = phToAngle(5.8);
  const plantSafeEndAngle = phToAngle(6.2);
  const cutoffAngle = phToAngle(CUTOFF_PH);

  const ticks = [4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 300 210"
        className="w-full max-w-[280px] sm:max-w-[320px] overflow-visible"
        role="img"
        aria-label={`pH indicator gauge displaying ${ph.toFixed(2)} pH`}
      >
        <defs>
          <filter id="gauge-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Base background track */}
        <path
          d={describeArc(cx, cy, r, minAngle, maxAngle)}
          fill="none"
          stroke="var(--ink)"
          strokeOpacity="0.12"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Plant-Safe Green Band (5.8 - 6.2) */}
        <path
          d={describeArc(cx, cy, r, plantSafeStartAngle, plantSafeEndAngle)}
          fill="none"
          stroke="var(--leaf)"
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* Acid Burn Warning Zone (4.5 - 5.6) */}
        <path
          d={describeArc(cx, cy, r, minAngle, cutoffAngle)}
          fill="none"
          stroke="var(--signal)"
          strokeOpacity="0.25"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Cutoff Threshold Marker (5.6 pH) */}
        {(() => {
          const ptInner = polarToCartesian(cx, cy, r - 12, cutoffAngle);
          const ptOuter = polarToCartesian(cx, cy, r + 12, cutoffAngle);
          return (
            <line
              x1={ptInner.x}
              y1={ptInner.y}
              x2={ptOuter.x}
              y2={ptOuter.y}
              stroke="var(--signal)"
              strokeWidth="2.5"
              strokeDasharray="2,2"
            />
          );
        })()}

        {/* Target Marker (6.0 pH) */}
        {(() => {
          const targetAngle = phToAngle(TARGET_PH);
          const ptInner = polarToCartesian(cx, cy, r - 14, targetAngle);
          const ptOuter = polarToCartesian(cx, cy, r + 14, targetAngle);
          return (
            <line
              x1={ptInner.x}
              y1={ptInner.y}
              x2={ptOuter.x}
              y2={ptOuter.y}
              stroke="var(--leaf)"
              strokeWidth="3"
            />
          );
        })()}

        {/* Tick marks & Numeric labels */}
        {ticks.map((t) => {
          const angle = phToAngle(t);
          const isMajor = t === 6.0 || t === 5.6;
          const p1 = polarToCartesian(cx, cy, r - (isMajor ? 8 : 4), angle);
          const p2 = polarToCartesian(cx, cy, r + (isMajor ? 8 : 4), angle);
          const pLabel = polarToCartesian(cx, cy, r - 22, angle);

          return (
            <g key={t}>
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="var(--ink)"
                strokeOpacity={isMajor ? 0.8 : 0.3}
                strokeWidth={isMajor ? 1.5 : 1}
              />
              <text
                x={pLabel.x}
                y={pLabel.y + 3}
                textAnchor="middle"
                className={`font-mono text-[9px] fill-current ${
                  t === 6.0
                    ? "font-bold fill-leaf"
                    : t === 5.6
                    ? "fill-signal font-semibold"
                    : "opacity-60 fill-ink"
                }`}
              >
                {t.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Needle with pivot hub */}
        <g
          transform={`rotate(${needleAngle} ${cx} ${cy})`}
          style={{ transition: "transform 0.08s ease-out" }}
        >
          {/* Needle shadow */}
          <polygon
            points={`${cx - 3},${cy} ${cx},${cy - r + 2} ${cx + 3},${cy} ${cx},${cy + 14}`}
            fill="rgba(0,0,0,0.15)"
            transform="translate(1, 2)"
          />
          {/* Needle body */}
          <polygon
            points={`${cx - 3},${cy} ${cx},${cy - r + 4} ${cx + 3},${cy} ${cx},${cy + 14}`}
            fill={cutoff ? "var(--signal)" : "var(--ink)"}
          />
          {/* Needle tip accent */}
          <circle
            cx={cx}
            cy={cy - r + 5}
            r={2}
            fill={cutoff ? "var(--signal)" : "var(--leaf)"}
          />
        </g>

        {/* Central Hub */}
        <circle cx={cx} cy={cy} r={7} fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
        <circle cx={cx} cy={cy} r={3} fill={cutoff ? "var(--signal)" : "var(--leaf)"} />

        {/* Gauge Labeling */}
        <text
          x={cx}
          y={cy + 34}
          textAnchor="middle"
          className="font-mono text-[10px] font-semibold tracking-wider fill-ink uppercase opacity-70"
        >
          IRRIGATION STREAM pH
        </text>
        <text
          x={cx}
          y={cy + 48}
          textAnchor="middle"
          className="font-mono text-[8px] fill-ink opacity-50"
        >
          TARGET: 6.0 · CUTOFF: 5.6
        </text>
      </svg>
    </div>
  );
}
