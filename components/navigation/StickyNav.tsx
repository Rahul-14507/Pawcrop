"use client";

import React, { useState } from "react";
import { site } from "@/content/site";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Printer, Menu, X, ArrowUpRight } from "lucide-react";

export function StickyNav() {
  const scrollProgress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Reactor", href: "#reactor" },
    { label: "Agri-Safe", href: "#agri-safe" },
    { label: "Comparison", href: "#comparison" },
    { label: "Traceability", href: "#traceability" },
    { label: "TRL Proof", href: "#proof-ladder" },
    { label: "Market", href: "#market" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Team", href: "#team" },
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm hairline-b select-none">
      {/* Top scroll reading progress bar */}
      <div className="w-full h-0.5 bg-ink/5 overflow-hidden">
        <div
          className="h-full bg-signal transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Brand & Ticker */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#hero"
            className="flex items-center gap-2 group text-ink focus:outline-none"
            aria-label="PAWCROP home"
          >
            {/* Minimal Arc Droplet Icon */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded hairline-all bg-paper flex items-center justify-center relative overflow-hidden group-hover:border-ink transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
                <path
                  d="M12 2.5C12 2.5 5 11 5 16C5 19.866 8.134 23 12 23C15.866 23 19 19.866 19 16C19 11 12 2.5 12 2.5Z"
                  stroke="var(--leaf)"
                  strokeWidth="1.7"
                />
                <path
                  d="M9 15.5L11.5 12.5L12.5 17L15 14"
                  stroke="var(--arc)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-ink">
              {site.brand}
            </span>
          </a>

          {/* Live Status Ticker */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 bg-ink/5 hairline-all rounded text-[11px] font-mono text-ink/80">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
            <span className="font-semibold text-leaf">pH 6.0</span>
            <span className="opacity-40">·</span>
            <span className="tracking-wider">LOCKED</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-5 text-xs font-mono text-ink/75"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-leaf group-hover:w-full transition-all duration-150" />
            </a>
          ))}
        </nav>

        {/* Action Controls: PDF Print & Apply CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrint}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono hairline-all bg-paper hover:bg-ink/5 text-ink rounded transition-colors"
            title="Print clean 1-page executive summary"
          >
            <Printer className="w-3.5 h-3.5 text-ink/70" />
            <span>Summary (PDF)</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 text-xs font-mono font-semibold bg-signal text-white hover:opacity-90 rounded transition-opacity shadow-sm"
          >
            <span>Pilot / Back</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            className="xl:hidden p-1.5 hairline-all rounded text-ink/80 hover:text-ink"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-paper hairline-t p-4 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 hairline-b text-xs font-mono">
            <span className="text-ink/60">NAVIGATION INDEX</span>
            <div className="flex items-center gap-1.5 text-leaf font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
              pH 6.0 LOCKED
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="p-2 hairline-all rounded hover:bg-ink/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 pt-3 hairline-t">
            <button
              onClick={() => {
                setMobileOpen(false);
                handlePrint();
              }}
              className="w-full flex items-center justify-center gap-2 p-2 text-xs font-mono hairline-all rounded hover:bg-ink/5"
            >
              <Printer className="w-4 h-4" />
              <span>Download One-Page Summary (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
