"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Shield, CheckCircle2, CircleDashed, AlertTriangle } from "lucide-react";

export function ProofLadderSection() {
  const { proofLadder, riskMitigations } = site;

  return (
    <section
      id="proof-ladder"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 06"
          category="TECHNOLOGY READINESS (TRL)"
          title="What we've proven vs. what we're about to prove."
          subtitle="Honest engineering readiness ladder from laboratory benchtop validation to commercial production, coupled with active risk mitigation strategies."
        />

        {/* TRL Progress Ladder (Horizontal / Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {proofLadder.map((step) => {
            const isCurrent = step.status === "CURRENT";
            return (
              <div
                key={step.trl}
                className={`p-6 rounded border flex flex-col justify-between transition-all ${
                  isCurrent
                    ? "bg-leaf/5 border-leaf shadow-subtle ring-1 ring-leaf/40"
                    : "bg-paper hairline-all text-ink/75"
                }`}
              >
                <div>
                  {/* Status Tag */}
                  <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                    <span
                      className={`px-2 py-0.5 rounded font-bold ${
                        isCurrent
                          ? "bg-leaf text-paper"
                          : "bg-ink/5 text-ink/70"
                      }`}
                    >
                      TRL {step.trl}
                    </span>
                    <span
                      className={`font-semibold text-[10px] uppercase tracking-wider ${
                        isCurrent ? "text-leaf animate-pulse" : "text-ink/40"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-xl font-bold tracking-tight mb-4 ${
                      isCurrent ? "text-leaf" : "text-ink"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 text-xs font-sans">
                    {step.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {step.achieved ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
                        ) : (
                          <CircleDashed className="w-3.5 h-3.5 text-ink/40 shrink-0 mt-0.5" />
                        )}
                        <span className={step.achieved ? "text-ink font-medium" : "text-ink/70"}>
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 hairline-t font-mono text-[10px] text-ink/50 flex items-center justify-between">
                  <span>{step.achieved ? "VALIDATED IN LAB" : "PLANNED ROADMAP"}</span>
                  <span>{isCurrent ? "● ACTIVE PHASE" : "○"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Known Engineering Risks & Mitigation Matrix */}
        <div className="mt-16 bg-paper hairline-all rounded p-6 sm:p-8 shadow-subtle">
          <div className="flex items-center justify-between pb-4 mb-6 hairline-b text-xs font-mono">
            <span className="font-bold text-ink flex items-center gap-2">
              <Shield className="w-4 h-4 text-leaf" />
              KNOWN HARDWARE RISKS & ARCHITECTURAL MITIGATIONS
            </span>
            <span className="text-ink/50 text-[10px]">RISK MATRIX REV-1.0</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {riskMitigations.map((r, idx) => (
              <div
                key={idx}
                className="p-4 bg-paper/50 hairline-all rounded border-l-2 border-l-leaf space-y-2"
              >
                <div className="flex items-center gap-1.5 text-signal font-bold">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{r.risk}</span>
                </div>
                <div className="text-[11px] font-sans text-ink/70">
                  <strong className="text-ink font-mono text-[10px] block mb-0.5">FAILURE MODE:</strong>
                  {r.consequence}
                </div>
                <div className="text-[11px] font-sans text-leaf bg-leaf/5 p-2 rounded hairline-all mt-2">
                  <strong className="font-mono text-[10px] block mb-0.5 text-leaf font-bold">
                    ENGINEERED MITIGATION:
                  </strong>
                  {r.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
