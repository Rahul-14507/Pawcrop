import React from "react";

interface SectionHeaderProps {
  figNumber?: string;
  category?: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  figNumber,
  category,
  title,
  subtitle,
  className = "",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${className}`}>
      {/* Registration / Meta header */}
      <div className="flex items-center justify-between gap-4 pb-3 mb-4 hairline-b text-xs font-mono tracking-wider">
        <div className="flex items-center gap-2">
          {figNumber && (
            <span
              className={`px-1.5 py-0.5 font-bold ${
                dark
                  ? "bg-arc/20 text-arc border border-arc/40"
                  : "bg-leaf/10 text-leaf border border-leaf/30"
              }`}
            >
              {figNumber}
            </span>
          )}
          {category && (
            <span className={dark ? "text-gray-400" : "text-ink/60"}>
              // {category.toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 opacity-40 font-mono text-[10px]">
          <span>LOC: PAWCROP-LAB-01</span>
          <span>+</span>
        </div>
      </div>

      {/* Main Section Title */}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-3xl leading-relaxed ${
            dark ? "text-gray-300" : "text-ink/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
