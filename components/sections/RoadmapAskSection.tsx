"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calendar, Target, CheckCircle2, ArrowRight, IndianRupee } from "lucide-react";

export function RoadmapAskSection() {
  const { roadmap, ask } = site;

  return (
    <section
      id="roadmap"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 09"
          category="EXECUTION ROADMAP & THE ASK"
          title="12-month milestones to commercial field readiness."
          subtitle="From benchtop MVP optimization to a 10-unit ruggedized pilot fleet deployed across commercial hydroponic facilities."
        />

        {/* 12-Month Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-16">
          {roadmap.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded border flex flex-col justify-between transition-all ${
                idx === 0
                  ? "bg-leaf/5 border-leaf shadow-subtle ring-1 ring-leaf/30"
                  : "bg-paper hairline-all"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                  <span className="font-bold text-ink">MONTHS {item.months}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      idx === 0 ? "bg-leaf text-paper" : "bg-ink/5 text-ink/70"
                    }`}
                  >
                    {item.trl}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-ink mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-sans text-ink/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 hairline-t font-mono text-[10px] text-ink/50 flex items-center justify-between">
                <span>PHASE 0{idx + 1}</span>
                <span>{idx === 0 ? "● CURRENT BENCH" : "○"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Ask Callout Card: STRICT SINGLE FIGURE ONLY */}
        <div className="bg-paper hairline-all rounded p-8 sm:p-12 shadow-subtle border-l-8 border-l-signal">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-signal/10 border border-signal/30 rounded text-xs font-mono text-signal font-bold mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>SEED CATALYST CAPITAL</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
                Funding Requirement: The Ask
              </h3>

              <p className="mt-4 text-base sm:text-lg text-ink/80 font-body leading-relaxed">
                {ask.purpose}
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs font-mono text-ink/60">
                <span>* Laboratory benchtop validated (TRL 4)</span>
                <span>·</span>
                <span>* 10-unit field-hardened pilot cohort</span>
              </div>
            </div>

            {/* Single Prominent Figure Display */}
            <div className="shrink-0 bg-ink text-paper p-6 sm:p-8 rounded hairline-all flex flex-col items-center justify-center text-center min-w-[260px]">
              <span className="font-mono text-xs text-arc uppercase tracking-widest block mb-1">
                TOTAL CAPITAL REQUIRED
              </span>
              <span className="font-display text-4xl sm:text-5xl font-bold text-paper tracking-tight">
                {ask.label}
              </span>
              <span className="font-mono text-[11px] text-gray-400 mt-2">
                Single Stage Pilot Milestone
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
