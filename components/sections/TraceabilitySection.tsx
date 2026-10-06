"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TodoTag } from "@/components/ui/TodoTag";
import { ShieldCheck, FileCheck, Database, FlaskConical, AlertCircle, CheckCircle } from "lucide-react";

export function TraceabilitySection() {
  const { labReport } = site.foodSafety;

  return (
    <section
      id="traceability"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 05"
          category="FOOD SAFETY & AUDIT TRAIL"
          title="Verifiable food provenance from edge telemetry to consumer plate."
          subtitle="Food safety starts with the inputs. By generating nitrogen on-site from clean electricity and ambient air, growers eliminate bulk chemical contaminants and produce an indelible IoT ledger."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Left Column (6 cols): The Digital Provenance Chain */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-paper hairline-all rounded p-6 sm:p-7 shadow-subtle">
              <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                <span className="font-bold text-ink flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-leaf" />
                  AUTOMATED EDGE TELEMETRY LOGGING
                </span>
                <span className="text-leaf font-semibold">MQTT / TLS</span>
              </div>

              <p className="text-sm text-ink/80 leading-relaxed font-body mb-6">
                Every milligram of nitrate synthesized and every liter of sanitized water is logged in real-time by the onboard ESP32 controller. This creates an unalterable record of crop inputs.
              </p>

              {/* Telemetry Mock Ledger Box */}
              <div className="bg-[#0F1A14] text-paper font-mono text-xs rounded p-4 space-y-2 border border-ink/20">
                <div className="text-[10px] text-gray-400 border-b border-white/10 pb-1 flex justify-between">
                  <span>TELEMETRY BATCH LOG #8842-HYDRO</span>
                  <span className="text-arc">LIVE SYNCED</span>
                </div>
                <div className="text-[11px] text-gray-300 space-y-1 pt-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Nitrogen Synthesized:</span>
                    <span className="text-arc">142.6 g NO₃⁻-N</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Average Stream pH:</span>
                    <span className="text-green-400">6.01 ± 0.04</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ozone Contact Dose:</span>
                    <span className="text-arc">0.45 mg/L · Complete Sanitization</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Synthetic Chemical Additives:</span>
                    <span className="text-signal font-bold">0.00 mg (ZERO)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Crucial Honesty Disclosure Box */}
            <div className="p-5 bg-paper hairline-all rounded border-l-4 border-l-signal text-xs font-mono text-ink/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-ink text-sm">
                <AlertCircle className="w-4 h-4 text-signal shrink-0" />
                <span>INPUT HONESTY & CHEMISTRY DISCLOSURE</span>
              </div>
              <p className="font-sans text-xs text-ink/75 leading-relaxed">
                PAWCROP synthesizes pure bioavailable nitrate (NO₃⁻) and dissolved ozone sanitization. It does <strong>not</strong> replace essential macro/micronutrients (Phosphorus, Potassium, Calcium, Magnesium, Iron, Zinc), which growers add separately as needed. The nitrate produced is chemically identical to pure laboratory nitrate; the core advantage is absolute on-site purity, supply chain independence, and zero pesticide/sanitizer residues.
              </p>
            </div>
          </div>

          {/* Right Column (6 cols): Planned Laboratory Certification */}
          <div className="lg:col-span-6 bg-paper hairline-all rounded p-6 sm:p-7 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-3 hairline-b text-xs font-mono">
              <span className="font-bold text-ink flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-water" />
                THIRD-PARTY RESIDUE SCREENING
              </span>
              <span className="px-2 py-0.5 bg-signal/10 text-signal border border-signal/30 rounded text-[10px] font-bold">
                {labReport.status}
              </span>
            </div>

            <p className="text-sm text-ink/80 leading-relaxed font-body">
              During Phase 2 commercial farm pilots (Months 3–6), PAWCROP-irrigated produce will undergo formal multi-spectrum laboratory assay at an accredited analytical chemistry testing facility.
            </p>

            {/* Testing Protocol Breakdown */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-[11px] font-bold text-ink/70 block uppercase tracking-wider">
                COMMISSIONED TESTING PROTOCOLS:
              </span>
              {labReport.testingProtocols.map((protocol, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 hairline-all rounded bg-paper/50"
                >
                  <CheckCircle className="w-4 h-4 text-water shrink-0 mt-0.5" />
                  <span className="text-ink/85 font-sans text-xs font-medium">
                    {protocol}
                  </span>
                </div>
              ))}
            </div>

            {/* Document Slot / TODO */}
            <div className="pt-4 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-ink/60" />
                <span className="text-ink/70">LAB REPORT ATTACHMENT:</span>
              </div>
              <TodoTag
                value={labReport.file}
                fallback={
                  <span className="text-xs font-mono text-ink/60 italic">
                    Scheduled for Month 3–6 Pilot Validation
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
