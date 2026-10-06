"use client";

import React from "react";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Award, Building2, User } from "lucide-react";

export function TeamSection() {
  const { team, mentor, incubation } = site;

  return (
    <section
      id="team"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-ink/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          figNumber="FIG. 10"
          category="FOUNDING TEAM & MENTORSHIP"
          title="Engineered by founders with embedded hardware and fluidics expertise."
          subtitle="Interdisciplinary engineering team incubated at Institute of Aeronautical Engineering (IARE), recognized in MSME Idea Hackathon 6.0."
        />

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-6 bg-paper hairline-all rounded shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {/* Initials in Circle Badge */}
                  <div className="w-14 h-14 rounded-full bg-ink text-paper font-mono font-bold text-lg flex items-center justify-center shrink-0 border border-ink/20">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-leaf font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="pt-3 hairline-t text-xs font-sans text-ink/75 leading-relaxed">
                  <strong className="font-mono text-[10px] text-ink/50 block mb-0.5 uppercase">
                    FOCUS AREA:
                  </strong>
                  {member.focus}
                </div>
              </div>

              <div className="mt-6 pt-3 hairline-t font-mono text-[10px] text-ink/40 flex items-center justify-between">
                <span>FOUNDING COHORT</span>
                <span>IARE // CSE & ENGR</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mentor & Incubation Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Mentor Profile (7 cols) */}
          <div className="lg:col-span-7 bg-paper hairline-all rounded p-6 sm:p-8 shadow-subtle border-l-4 border-l-leaf flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                <span className="font-bold text-ink flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-leaf" />
                  FACULTY MENTOR & ADVISOR
                </span>
                <span className="text-leaf font-semibold">ACADEMIC RESEARCH</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-leaf text-paper font-mono font-bold text-base flex items-center justify-center shrink-0">
                  {mentor.initials}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-ink">
                    {mentor.name}
                  </h4>
                  <p className="font-mono text-xs text-ink/70">
                    {mentor.role}
                  </p>
                </div>
              </div>

              <p className="text-xs font-sans text-ink/80 leading-relaxed">
                {mentor.note}. Providing high-level academic mentorship on dielectric barrier discharge phenomena, experimental validation protocols, and analytical chemical testing frameworks.
              </p>
            </div>

            <div className="mt-6 pt-3 hairline-t font-mono text-[10px] text-ink/50">
              FACULTY OF ENGINEERING & RESEARCH // IARE
            </div>
          </div>

          {/* Incubation & Recognition (5 cols) */}
          <div className="lg:col-span-5 bg-paper hairline-all rounded p-6 sm:p-8 shadow-subtle flex flex-col justify-between border-l-4 border-l-water">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                <span className="font-bold text-ink flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-water" />
                  INCUBATION & RECOGNITION
                </span>
                <span className="text-water font-semibold">GOVERNMENT GRANTS</span>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-paper/60 hairline-all rounded">
                  <span className="font-mono text-[10px] text-ink/50 uppercase block mb-0.5">
                    HOST INSTITUTION:
                  </span>
                  <span className="font-sans font-semibold text-sm text-ink block">
                    Institute of Aeronautical Engineering (IARE)
                  </span>
                  <span className="text-xs text-ink/70">
                    Laboratory bench space, high-voltage testing infrastructure, and fabrication tooling.
                  </span>
                </div>

                <div className="p-3 bg-paper/60 hairline-all rounded">
                  <span className="font-mono text-[10px] text-ink/50 uppercase block mb-0.5">
                    HACKATHON RECOGNITION:
                  </span>
                  <span className="font-sans font-semibold text-sm text-ink block">
                    MSME Idea Hackathon 6.0
                  </span>
                  <span className="text-xs text-ink/70">
                    Selected agritech hardware innovation candidate.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 hairline-t font-mono text-[10px] text-ink/50">
              {incubation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
