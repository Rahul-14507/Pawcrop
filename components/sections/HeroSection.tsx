"use client";

import React from "react";
import { site } from "@/content/site";
import { PlasmaArc } from "@/components/ui/PlasmaArc";
import { ArrowDown, FileText, Zap, ShieldCheck, Waves } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-ink/10 overflow-hidden"
    >
      {/* 12-column grid lines background */}
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Engineering Drawing Header Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 hairline-b text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 font-bold bg-leaf text-paper rounded-sm">
              DOC: PITCH-2026-V4
            </span>
            <span className="text-ink/70 hidden sm:inline">
              // CLASSIFICATION: INVESTOR & TECHNICAL SUMMARY
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-ink/80">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
              STATUS: <strong className="font-semibold text-leaf">TRL {site.status.trl}</strong> ({site.status.label})
            </span>
            <span className="hidden md:inline text-ink/40">|</span>
            <span className="hidden md:inline font-mono">
              BOM: <strong className="font-semibold text-ink">{site.status.mvpCostFormatted}</strong>
            </span>
          </div>
        </div>

        {/* Hero Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Lead Narrative & Thesis */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Thesis Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink/5 hairline-all rounded text-xs font-mono mb-6 w-fit text-ink">
              <Zap className="w-3.5 h-3.5 text-signal" />
              <span className="font-bold tracking-wide">DECENTRALIZED FERTILIZER APPLIANCE</span>
            </div>

            {/* Lead Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6.5xl tracking-tight text-ink leading-[1.08] font-bold">
              Grow your own nitrogen.{" "}
              <span className="italic font-normal text-leaf block sm:inline">
                Keep the chemistry out of your food.
              </span>
            </h1>

            {/* Subline */}
            <p className="mt-6 text-lg sm:text-xl text-ink/80 font-body leading-relaxed max-w-2xl">
              {site.thesis.subline}
            </p>

            {/* Chemical & Energy Transformation Formula Box */}
            <div className="mt-8 p-4 bg-paper hairline-all rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-ink text-paper text-[10px] font-bold">FORMULA</span>
                <span className="text-ink/90 font-bold tracking-wider">{site.thesis.formula}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-leaf font-semibold">
                <ShieldCheck className="w-4 h-4 text-leaf" />
                <span>Zero Synthetic Salts</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#reactor"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink hover:bg-leaf text-paper font-mono text-xs font-bold tracking-wider rounded transition-colors shadow-sm"
              >
                <span>SEE HOW IT WORKS</span>
                <ArrowDown className="w-4 h-4 text-arc" />
              </a>

              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-paper hover:bg-ink/5 text-ink font-mono text-xs font-semibold hairline-all rounded transition-colors"
              >
                <FileText className="w-4 h-4 text-ink/70" />
                <span>INVESTOR SUMMARY (₹5L ASK)</span>
              </a>
            </div>

            {/* Micro-footnotes */}
            <div className="mt-8 flex items-center gap-4 text-[11px] font-mono text-ink/60">
              <span>* 100% on-site synthesis</span>
              <span>·</span>
              <span>* Plant-safe pH 6.0 lock</span>
              <span>·</span>
              <span>* {site.incubation}</span>
            </div>
          </div>

          {/* Right Column (5 cols): Live Arc Instrument Viewport */}
          <div className="lg:col-span-5">
            <div className="relative bg-paper hairline-all rounded p-5 shadow-subtle">
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-arc border border-ink animate-pulse" />
                  <span className="font-bold text-ink tracking-wider">FIG. 00 // LIVE CAP DISCHARGE</span>
                </div>
                <span className="text-[10px] text-leaf font-bold bg-leaf/10 px-2 py-0.5 rounded">
                  15 kV ACTIVE
                </span>
              </div>

              {/* Chamber Visual Area */}
              <div className="relative bg-[#0E1B15] text-paper rounded p-4 overflow-hidden min-h-[220px] flex flex-col justify-between border border-ink/20">
                {/* Background grid */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #19D3C5 1px, transparent 1px), linear-gradient(to bottom, #19D3C5 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Top readout overlay */}
                <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-gray-300">
                  <span>CHAMBER: BOROSILICATE / PVDF</span>
                  <span className="text-arc font-semibold">25.4 kHz RESONANCE</span>
                </div>

                {/* The Live Jagged Plasma Arc */}
                <div className="relative z-10 my-auto py-2">
                  <PlasmaArc
                    active={true}
                    width={360}
                    height={120}
                    x1={40}
                    y1={60}
                    x2={320}
                    y2={60}
                    segments={16}
                    jitter={11}
                  />
                </div>

                {/* Bottom telemetry indicators */}
                <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-gray-300 border-t border-white/10 pt-2">
                  <div className="flex items-center gap-1.5 text-arc">
                    <Waves className="w-3.5 h-3.5" />
                    <span>NOx + O₃ FLUX</span>
                  </div>
                  <span className="text-leaf font-bold bg-leaf/20 text-green-300 px-1.5 py-0.5 rounded">
                    pH 6.0 LOCKED
                  </span>
                </div>
              </div>

              {/* Technical Annotation below Viewport */}
              <div className="mt-4 pt-3 hairline-t grid grid-cols-2 gap-3 text-[11px] font-mono">
                <div>
                  <span className="text-ink/50 block text-[9px]">HIGH VOLTAGE SOURCE</span>
                  <span className="font-semibold text-ink">15 kV ZVS Flyback</span>
                </div>
                <div>
                  <span className="text-ink/50 block text-[9px]">SOLUBILITY MANIFOLD</span>
                  <span className="font-semibold text-ink">PVDF Venturi Shearing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
