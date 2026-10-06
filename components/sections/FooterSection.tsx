"use client";

import React from "react";
import { site } from "@/content/site";
import { Shield, ArrowUp, Info } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-paper hairline-t py-16 px-4 sm:px-6 lg:px-8 font-mono text-xs text-ink/75">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Comprehensive Honesty & Regulatory Disclaimers */}
        <div className="p-6 bg-ink/5 hairline-all rounded space-y-3">
          <div className="flex items-center gap-2 font-bold text-ink text-xs">
            <Info className="w-4 h-4 text-leaf" />
            <span>HONESTY & REGULATORY DISCLOSURES (TRL 4 STAGE)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] font-sans text-ink/75 leading-relaxed">
            <p>
              • <strong>Prototype Status:</strong> PAWCROP is currently at Technology Readiness Level 4 (TRL 4, Benchtop Validated). Figures, simulations, and telemetry traces presented on this pitch website are illustrative mathematical models designed for engineering demonstration, not commercial field calibration data.
            </p>
            <p>
              • <strong>Nutritional Bounds:</strong> PAWCROP synthesizes the bioavailable nitrogen fraction (NO₃⁻) and inline dissolved ozone sanitization. It does not replace phosphorus, potassium, calcium, magnesium, or micronutrients, which growers add separately.
            </p>
            <p>
              • <strong>Academic Literature Note:</strong> Biomass growth enhancements up to 45% are documented in peer-reviewed academic plasma-activated water literature; PAWCROP-specific farm yield benchmarks will be measured during Phase 2 pilots.
            </p>
            <p>
              • <strong>Sanitation vs. Pesticides:</strong> PAWCROP provides root-zone aqueous ozone sanitation to reduce chemical biocide dependency; it makes no claims of formal organic certification or replacing regulated pest control.
            </p>
          </div>
        </div>

        {/* Footer Navigation & Metadata Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 hairline-t">
          <div>
            <div className="font-display font-bold text-lg text-ink">
              {site.brand}
            </div>
            <p className="text-[11px] text-ink/60 mt-1">
              {site.tagline} · {site.incubation}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#hero" className="hover:text-ink transition-colors">Hero</a>
            <a href="#problem" className="hover:text-ink transition-colors">Problem</a>
            <a href="#reactor" className="hover:text-ink transition-colors">Reactor</a>
            <a href="#agri-safe" className="hover:text-ink transition-colors">Agri-Safe</a>
            <a href="#comparison" className="hover:text-ink transition-colors">Comparison</a>
            <a href="#proof-ladder" className="hover:text-ink transition-colors">Proof Ladder</a>
            <a href="#roadmap" className="hover:text-ink transition-colors">Roadmap (₹5L)</a>
            <a href="#team" className="hover:text-ink transition-colors">Team</a>
            
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 hairline-all rounded hover:bg-ink/5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Copyright & Registration */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] text-ink/50 pt-4 hairline-t">
          <div>
            © {new Date().getFullYear()} PAWCROP. All rights reserved. Engineering prototype stage.
          </div>
          <div>
            DESIGNED WITH TACTILE PRECISION // NO PLACEHOLDERS // NO TEMPLATES
          </div>
        </div>
      </div>
    </footer>
  );
}
