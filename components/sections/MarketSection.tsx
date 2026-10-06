"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TodoTag } from "@/components/ui/TodoTag";
import { Layers, Target, Sprout, Building, Home, BookOpen } from "lucide-react";

export function MarketSection() {
  const { sequence, figures } = site.market;
  const icons = [Layers, Sprout, Building, Home];

  return (
    <section
      id="market"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 07"
          category="BEACHHEAD EXPANSION SEQUENCE"
          title="Sequential market beachheads by sensitivity to chemical purity."
          subtitle="Targeting high-value protected agriculture first where chemical adulteration and root-zone Pythium cause acute daily yield losses."
        />

        {/* 4-Stage Beachhead Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {sequence.map((item, idx) => {
            const Icon = icons[idx] || Target;
            const isPrimary = idx === 0;

            return (
              <div
                key={item.order}
                className={`p-6 rounded border flex flex-col justify-between transition-all ${
                  isPrimary
                    ? "bg-leaf/5 border-leaf shadow-subtle"
                    : "bg-paper hairline-all"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                    <span className="font-bold text-ink text-sm">STAGE {item.order}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isPrimary
                          ? "bg-leaf text-paper"
                          : "bg-ink/5 text-ink/70"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </div>

                  <div className="mb-4">
                    <Icon
                      className={`w-6 h-6 mb-3 ${
                        isPrimary ? "text-leaf" : "text-ink/60"
                      }`}
                    />
                    <h3 className="font-display text-lg font-bold text-ink leading-snug">
                      {item.segment}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-ink/75 leading-relaxed">
                    {item.fit}
                  </p>
                </div>

                <div className="mt-6 pt-3 hairline-t font-mono text-[10px] text-ink/50 flex items-center justify-between">
                  <span>DEPLOYMENT TIER 0{idx + 1}</span>
                  <span>{isPrimary ? "● IMMEDIATE FOCUS" : "ROADMAP"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Citation & Market Data Transparency Row */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Academic Literature Citation Box */}
          <div className="lg:col-span-7 bg-paper hairline-all rounded p-6 shadow-subtle border-l-4 border-l-leaf">
            <div className="flex items-center justify-between pb-3 mb-3 hairline-b text-xs font-mono">
              <span className="font-bold text-ink flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-leaf" />
                ACADEMIC LITERATURE CITATION
              </span>
              <span className="text-[10px] text-ink/60">PEER-REVIEWED PAW STUDIES</span>
            </div>
            <p className="text-xs font-sans text-ink/80 leading-relaxed">
              {site.claims.biomass.context}
            </p>
            <div className="mt-4 pt-3 hairline-t flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="font-semibold text-leaf">
                {site.claims.biomass.text}
              </span>
              <TodoTag
                value={site.claims.biomass.citation}
                fallback={<span className="italic text-ink/50 text-[11px]">Citation reference placeholder</span>}
              />
            </div>
          </div>

          {/* Sourced Market Sizing Box (Strictly No Invented TAM) */}
          <div className="lg:col-span-5 bg-paper hairline-all rounded p-6 shadow-subtle border-l-4 border-l-water">
            <div className="flex items-center justify-between pb-3 mb-3 hairline-b text-xs font-mono">
              <span className="font-bold text-ink flex items-center gap-1.5">
                <Target className="w-4 h-4 text-water" />
                MARKET SIZING AUDIT
              </span>
              <span className="text-[10px] text-ink/60">SOURCE VERIFICATION</span>
            </div>
            <p className="text-xs font-sans text-ink/80 leading-relaxed mb-4">
              We strictly decline to fabricate inflated TAM/SAM figures. Formal market sizing models will be populated exclusively using audited ministry and industry agricultural reports.
            </p>
            <div className="pt-2 hairline-t flex items-center justify-between text-xs font-mono">
              <span className="text-ink/60 text-[11px]">AUDITED SIZING:</span>
              <TodoTag
                value={figures}
                fallback={<span className="text-[11px] text-ink/50 italic">Awaiting sourced figures</span>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
