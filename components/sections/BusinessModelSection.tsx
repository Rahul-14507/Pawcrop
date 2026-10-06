"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Cpu, Cloud, RefreshCcw, FileText, ArrowRight, ShieldCheck } from "lucide-react";

export function BusinessModelSection() {
  const { haas, saas } = site.businessModel;

  return (
    <section
      id="business-model"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 08"
          category="COMMERCIALIZATION ARCHITECTURE"
          title="Hardware-as-a-Service and Cloud SaaS telemetry."
          subtitle="A recurring subscription model aligning grower cash-flow with zero upfront CAPEX barriers, ongoing appliance maintenance, and food safety certificates."
        />

        {/* Business Model Flow Diagram (HaaS + SaaS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          {/* HaaS Tier (6 cols) */}
          <div className="lg:col-span-6 bg-paper hairline-all rounded p-6 sm:p-8 shadow-subtle flex flex-col justify-between h-full border-t-4 border-t-leaf">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                <span className="font-bold text-ink flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-leaf" />
                  TIER 1: HARDWARE SUBSCRIPTION
                </span>
                <span className="px-2 py-0.5 bg-leaf/10 text-leaf font-bold rounded">
                  HaaS MODEL
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-ink mb-3">
                {haas.title}
              </h3>

              <p className="text-sm font-sans text-ink/80 leading-relaxed mb-6">
                {haas.desc}
              </p>

              <ul className="space-y-2.5 font-sans text-xs text-ink/85 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                  <span>Zero heavy initial machinery CAPEX for growers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                  <span>Regular tungsten electrode refresh & Venturi cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                  <span>Continuous over-the-air firmware updates to Agri-Safe logic</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 hairline-t font-mono text-xs text-ink/60 flex items-center justify-between">
              <span>DEPLOYMENT: DIRECT INLINE SKID</span>
              <span className="text-leaf font-bold">RECURRING LEASE</span>
            </div>
          </div>

          {/* SaaS Telemetry Tier (6 cols) */}
          <div className="lg:col-span-6 bg-paper hairline-all rounded p-6 sm:p-8 shadow-subtle flex flex-col justify-between h-full border-t-4 border-t-water">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                <span className="font-bold text-ink flex items-center gap-1.5">
                  <Cloud className="w-4 h-4 text-water" />
                  TIER 2: DATA & TRACEABILITY
                </span>
                <span className="px-2 py-0.5 bg-water/10 text-water font-bold rounded">
                  CLOUD SaaS
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-ink mb-3">
                {saas.title}
              </h3>

              <p className="text-sm font-sans text-ink/80 leading-relaxed mb-6">
                {saas.desc}
              </p>

              <ul className="space-y-2.5 font-sans text-xs text-ink/85 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-water shrink-0 mt-0.5" />
                  <span>Real-time dashboard for pH, flow rate, and power metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-water shrink-0 mt-0.5" />
                  <span>Instant SMS/MQTT alerts on flow drops or threshold events</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-water shrink-0 mt-0.5" />
                  <span>Verifiable "PAWCROP-Synthesized" batch provenance exports</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 hairline-t font-mono text-xs text-ink/60 flex items-center justify-between">
              <span>TELEMETRY: SECURE MQTT / TLS</span>
              <span className="text-water font-bold">MONTHLY / ANNUAL TIER</span>
            </div>
          </div>
        </div>

        {/* Value Integration Banner */}
        <div className="mt-8 p-6 bg-paper hairline-all rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-ink">
          <div className="flex items-center gap-3">
            <RefreshCcw className="w-5 h-5 text-leaf shrink-0" />
            <div>
              <span className="font-bold block text-sm">INTEGRATED VALUE CYCLE:</span>
              <span className="text-ink/70">
                Hardware synth generates the input data ➔ Cloud telemetry verifies purity ➔ Grower sells premium residue-free produce.
              </span>
            </div>
          </div>
          <span className="px-3 py-1 bg-ink text-paper rounded font-semibold text-xs shrink-0">
            High Retention Architecture
          </span>
        </div>
      </div>
    </section>
  );
}
