"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, X, Shield, ArrowRight } from "lucide-react";

export function ComparisonSection() {
  const { headers, rows } = site.comparison;

  return (
    <section
      id="comparison"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 04"
          category="SYSTEM COMPARISON"
          title="Why PAWCROP replaces three disconnected agricultural skids."
          subtitle="A qualitative comparison of decentralized on-site synthesis versus conventional synthetic fertilizer mixing, auto-dosers, and separate sterilizers."
        />

        {/* Qualitative Comparison Table */}
        <div className="overflow-x-auto bg-paper hairline-all rounded shadow-subtle mt-8">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-ink/5 hairline-b font-mono text-xs text-ink">
                <th className="py-4 px-6 font-bold w-1/3 border-r border-ink/10">
                  {headers[0]}
                </th>
                <th className="py-4 px-6 font-bold w-1/3 bg-leaf/10 text-leaf border-r border-ink/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-leaf" />
                    <span>{headers[1]}</span>
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold w-1/3 text-ink/70">
                  {headers[2]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10 font-mono text-xs">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-ink/[0.02] transition-colors group"
                >
                  {/* Feature Label */}
                  <td className="py-4 px-6 font-semibold text-ink border-r border-ink/10">
                    <span className="text-[10px] text-ink/40 block mb-0.5">
                      CRITERION 0{idx + 1}
                    </span>
                    {row.feature}
                  </td>

                  {/* PAWCROP Solution */}
                  <td className="py-4 px-6 bg-leaf/[0.04] text-ink border-r border-ink/10">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans text-xs sm:text-sm font-medium text-ink">
                        {row.pawcrop}
                      </span>
                    </div>
                  </td>

                  {/* Conventional Legacy Solution */}
                  <td className="py-4 px-6 text-ink/75">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans text-xs sm:text-sm text-ink/70">
                        {row.conventional}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technical Summary Callout */}
        <div className="mt-8 p-4 bg-paper hairline-all rounded-sm flex items-center justify-between font-mono text-xs text-ink/70">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-leaf" />
            <span>
              Qualitative comparison based on laboratory physical architecture. Zero fabricated claims.
            </span>
          </div>
          <span className="text-[10px] hidden sm:inline">REF: PAWCROP-BENCH-2026</span>
        </div>
      </div>
    </section>
  );
}
