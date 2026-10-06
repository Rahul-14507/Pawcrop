"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AlertCircle, ShieldAlert, Droplets, Biohazard } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      fig: "FIG. 01-A",
      icon: ShieldAlert,
      title: "Vulnerable Chemical Supply Chains & Adulteration",
      editorial:
        "Commercial hydroponic and soil growers remain entirely chained to imported synthetic nitrate salts. Global price spikes, international freight bottlenecks, and unverified bulk batches introduce heavy metal impurities and carrier fillers directly into food crops.",
      marginAnnotation: "RISK: Unverified chemical origin, batch-to-batch volatility, and import inflation.",
      tag: "SUPPLY CHAIN VULNERABILITY",
    },
    {
      num: "02",
      fig: "FIG. 01-B",
      icon: Droplets,
      title: "Groundwater Nitrate Leaching & Soil Runoff",
      editorial:
        "Over-application of conventional synthetic fertilizers inevitably leaches into water tables. Unabsorbed nitrate salts cause systemic groundwater contamination and algae blooms, creating strict regulatory headaches and permanent environmental harm.",
      marginAnnotation: "ECOLOGICAL IMPACT: Aquifer contamination, nitrate toxicity, and downstream runoff.",
      tag: "ENVIRONMENTAL DEGRADATION",
    },
    {
      num: "03",
      fig: "FIG. 01-C",
      icon: Biohazard,
      title: "Pathogen Loss & Chemical Sterilizer Cycles",
      editorial:
        "Hydroponic systems are chronically prone to Pythium root rot and stubborn bacterial biofilms. To survive, growers purchase separate automated chemical dosers, hydrogen peroxide drums, and costly UV sterilizers that leave persistent residues in the root zone.",
      marginAnnotation: "OPERATIONAL FRICTION: Multiple disconnected skids, chemical handling, and residue risks.",
      tag: "ROOT-ZONE PATHOGEN STRESS",
    },
  ];

  return (
    <section
      id="problem"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 01"
          category="THE STRUCTURAL PROBLEM"
          title="Why the synthetic chemical supply chain fails modern agriculture."
          subtitle="Growers bear all the risks of centralized chemical manufacturing: price volatility, adulteration, groundwater contamination, and pathogen outbreaks."
        />

        {/* Editorial Layout: Stat-less Large Statements with Margin Annotations */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start hairline-t pt-8 group"
              >
                {/* Left Margin Index & Fig # (3 cols) */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full font-mono text-xs">
                  <div className="flex items-center gap-2 text-ink/70">
                    <span className="font-bold text-ink text-sm sm:text-base">{p.num}</span>
                    <span className="opacity-30">/</span>
                    <span className="text-[11px] px-1.5 py-0.5 bg-ink/5 hairline-all rounded">
                      {p.fig}
                    </span>
                  </div>

                  <div className="mt-4 lg:mt-8 p-3 bg-paper hairline-all rounded-sm text-[11px] text-ink/70 leading-normal border-l-2 border-l-signal">
                    <span className="text-signal font-bold block mb-1">MARGIN NOTE:</span>
                    {p.marginAnnotation}
                  </div>
                </div>

                {/* Right Body Statement (9 cols) */}
                <div className="lg:col-span-9">
                  <div className="inline-flex items-center gap-2 mb-3 text-[11px] font-mono text-ink/60 uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5 text-signal" />
                    <span>{p.tag}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-ink font-semibold tracking-tight leading-snug">
                    {p.title}
                  </h3>

                  <p className="mt-4 text-base sm:text-lg text-ink/80 leading-relaxed font-body">
                    {p.editorial}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Synthesis Callout */}
        <div className="mt-16 p-6 sm:p-8 bg-paper hairline-all rounded-sm border-l-4 border-l-leaf">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-ink/80">
            <div>
              <span className="font-bold text-ink text-sm block mb-1">
                PAWCROP ARCHITECTURAL THESIS:
              </span>
              <span>
                Shift from centralized chemical batch shipping to decentralized, on-demand edge synthesis directly in the irrigation pipe.
              </span>
            </div>
            <div className="shrink-0 px-3 py-1.5 bg-leaf/10 text-leaf border border-leaf/30 rounded font-semibold text-xs">
              Zero Synthetic Salts Required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
