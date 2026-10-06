"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function jaggedPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  segs = 14,
  jitter = 9
): string {
  const pts: string[] = [`M${x1},${y1}`];
  for (let i = 1; i < segs; i++) {
    const t = i / segs;
    const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * jitter;
    const y = y1 + (y2 - y1) * t + (Math.random() - 0.5) * jitter * 2;
    pts.push(`L${x.toFixed(1)},${y.toFixed(1)}`);
  }
  pts.push(`L${x2},${y2}`);
  return pts.join(" ");
}

interface PlasmaArcProps {
  active?: boolean;
  className?: string;
  width?: number;
  height?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  segments?: number;
  jitter?: number;
  showElectrodes?: boolean;
  ariaLabel?: string;
}

export function PlasmaArc({
  active = true,
  className = "",
  width = 400,
  height = 200,
  x1 = 60,
  y1 = 100,
  x2 = 340,
  y2 = 100,
  segments = 14,
  jitter = 9,
  showElectrodes = true,
  ariaLabel = "15 kV cold atmospheric plasma discharge arc between electrodes",
}: PlasmaArcProps) {
  const reduced = useReducedMotion();
  const coreRef = useRef<SVGPathElement>(null);
  const haloRef = useRef<SVGPathElement>(null);
  const secondaryRef = useRef<SVGPathElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!active || !mounted) return;

    const draw = () => {
      const d1 = jaggedPath(x1, y1, x2, y2, segments, jitter);
      const d2 = jaggedPath(x1, y1, x2, y2, Math.max(6, Math.floor(segments * 0.7)), jitter * 0.7);

      if (coreRef.current) coreRef.current.setAttribute("d", d1);
      if (haloRef.current) haloRef.current.setAttribute("d", d1);
      if (secondaryRef.current) secondaryRef.current.setAttribute("d", d2);
    };

    // Draw immediately
    draw();

    if (reduced) return;

    // ~11 fps flicker (90ms interval) for realistic cold plasma flicker without high CPU load
    const interval = setInterval(draw, 90);
    return () => clearInterval(interval);
  }, [active, reduced, mounted, x1, y1, x2, y2, segments, jitter]);

  // Static fallback path for SSR and reduced motion
  const initialPath = `M${x1},${y1} L${(x1 + x2) / 2},${(y1 + y2) / 2 - 4} L${x2},${y2}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible select-none ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <filter id="plasma-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {showElectrodes && (
        <g className="electrodes" fill="currentColor">
          {/* Left tungsten electrode */}
          <rect
            x={x1 - 32}
            y={y1 - 6}
            width={32}
            height={12}
            rx={2}
            className="fill-current opacity-80"
          />
          <circle cx={x1} cy={y1} r={6} className="fill-current" />
          
          {/* Right tungsten electrode */}
          <rect
            x={x2}
            y={y2 - 6}
            width={32}
            height={12}
            rx={2}
            className="fill-current opacity-80"
          />
          <circle cx={x2} cy={y2} r={6} className="fill-current" />
        </g>
      )}

      {active && (
        <g filter="url(#plasma-glow)">
          {/* Wide faint halo */}
          <path
            ref={haloRef}
            d={initialPath}
            stroke="var(--arc)"
            strokeOpacity="0.25"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Secondary thin discharge streamer */}
          <path
            ref={secondaryRef}
            d={initialPath}
            stroke="var(--arc)"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Intense central discharge filament */}
          <path
            ref={coreRef}
            d={initialPath}
            stroke="var(--arc)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      )}
    </svg>
  );
}
