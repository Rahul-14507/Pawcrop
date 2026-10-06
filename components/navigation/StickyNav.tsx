"use client";

import React, { useState, useEffect } from "react";
import { site } from "@/content/site";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Printer, Menu, X, ArrowUpRight, Zap } from "lucide-react";

export function StickyNav() {
  const scrollProgress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navLinks = [
    { id: "problem", label: "Problem", href: "#problem" },
    { id: "reactor", label: "Reactor", href: "#reactor" },
    { id: "agri-safe", label: "Agri-Safe", href: "#agri-safe" },
    { id: "comparison", label: "Comparison", href: "#comparison" },
    { id: "traceability", label: "Traceability", href: "#traceability" },
    { id: "proof-ladder", label: "TRL Proof", href: "#proof-ladder" },
    { id: "market", label: "Market", href: "#market" },
    { id: "roadmap", label: "Roadmap", href: "#roadmap" },
    { id: "team", label: "Team", href: "#team" },
  ];

  // Detect when user is in the dark reactor section or track active section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkActiveSection = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar height
      const reactorElem = document.getElementById("reactor");

      if (reactorElem) {
        const top = reactorElem.offsetTop;
        const bottom = top + reactorElem.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setIsOverDarkSection(true);
        } else {
          setIsOverDarkSection(false);
        }
      }

      // Determine active section for nav link indicator
      const sectionIds = ["hero", "problem", "reactor", "agri-safe", "comparison", "traceability", "proof-ladder", "market", "roadmap", "team", "contact"];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sectionIds[i]);
        if (elem && window.scrollY >= elem.offsetTop - 120) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", checkActiveSection, { passive: true });
    checkActiveSection();
    return () => window.removeEventListener("scroll", checkActiveSection);
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 select-none ${
        isOverDarkSection
          ? "bg-[#0B1410] text-gray-100 border-b border-arc/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-[#F3F0E8] text-ink border-b border-ink/15 shadow-[0_2px_10px_rgba(15,26,20,0.05)]"
      }`}
    >
      {/* Top scroll reading progress bar */}
      <div className={`w-full h-[2px] overflow-hidden ${isOverDarkSection ? "bg-white/10" : "bg-ink/10"}`}>
        <div
          className={`h-full transition-all duration-75 ${
            isOverDarkSection ? "bg-arc" : "bg-signal"
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3 lg:gap-6">
        {/* Brand & Ticker */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="PAWCROP Home"
          >
            {/* Minimal Arc Droplet Icon */}
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center relative overflow-hidden transition-colors border ${
                isOverDarkSection
                  ? "bg-[#122019] border-arc/40 text-arc group-hover:border-arc"
                  : "bg-paper border-ink/20 text-leaf group-hover:border-ink"
              }`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor">
                <path
                  d="M12 2.5C12 2.5 5 11 5 16C5 19.866 8.134 23 12 23C15.866 23 19 19.866 19 16C19 11 12 2.5 12 2.5Z"
                  stroke={isOverDarkSection ? "var(--arc)" : "var(--leaf)"}
                  strokeWidth="1.8"
                />
                <path
                  d="M9 15.5L11.5 12.5L12.5 17L15 14"
                  stroke={isOverDarkSection ? "#FFF" : "var(--arc)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className={`font-display font-bold text-lg sm:text-xl tracking-tight ${
                isOverDarkSection ? "text-white" : "text-ink"
              }`}
            >
              {site.brand}
            </span>
          </a>

          {/* Live Status Ticker */}
          <div
            className={`hidden md:flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono border whitespace-nowrap ${
              isOverDarkSection
                ? "bg-[#14261E] border-arc/30 text-arc"
                : "bg-ink/5 border-ink/10 text-ink/80"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                isOverDarkSection ? "bg-arc" : "bg-leaf"
              }`}
            />
            <span className={`font-semibold ${isOverDarkSection ? "text-arc" : "text-leaf"}`}>
              pH 6.0
            </span>
            <span className="opacity-40">·</span>
            <span className="tracking-wider">LOCKED</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-2.5 xl:gap-4 text-[11px] xl:text-xs font-mono whitespace-nowrap"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`py-1 px-1.5 rounded relative transition-colors whitespace-nowrap ${
                  isOverDarkSection
                    ? isActive
                      ? "text-arc font-bold bg-white/5"
                      : "text-gray-300 hover:text-arc hover:bg-white/5"
                    : isActive
                    ? "text-leaf font-bold bg-ink/[0.03]"
                    : "text-ink/75 hover:text-ink hover:bg-ink/[0.03]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-1.5 right-1.5 h-0.5 rounded-full ${
                      isOverDarkSection ? "bg-arc" : "bg-leaf"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: PDF Print & Apply CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            onClick={handlePrint}
            type="button"
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-xs font-mono rounded border transition-colors whitespace-nowrap ${
              isOverDarkSection
                ? "bg-[#14261E] border-white/20 text-gray-200 hover:bg-white/10 hover:border-white/40"
                : "bg-paper border-ink/20 text-ink hover:bg-ink/5"
            }`}
            title="Print clean 1-page executive summary"
          >
            <Printer className="w-3.5 h-3.5 opacity-80" />
            <span>Summary (PDF)</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-[11px] xl:text-xs font-mono font-bold bg-signal text-white hover:opacity-90 rounded transition-all shadow-sm whitespace-nowrap"
          >
            <span>Pilot / Back</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            className={`lg:hidden p-1.5 rounded border ${
              isOverDarkSection
                ? "border-white/20 text-gray-200 hover:bg-white/10"
                : "border-ink/20 text-ink hover:bg-ink/5"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`lg:hidden border-t p-4 max-h-[80vh] overflow-y-auto ${
            isOverDarkSection
              ? "bg-[#0B1410] border-arc/20 text-gray-200"
              : "bg-[#F3F0E8] border-ink/10 text-ink"
          }`}
        >
          <div
            className={`flex items-center justify-between pb-3 mb-3 border-b text-xs font-mono ${
              isOverDarkSection ? "border-white/10 text-gray-400" : "border-ink/10 text-ink/60"
            }`}
          >
            <span>NAVIGATION INDEX</span>
            <div
              className={`flex items-center gap-1.5 font-semibold ${
                isOverDarkSection ? "text-arc" : "text-leaf"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  isOverDarkSection ? "bg-arc" : "bg-leaf"
                }`}
              />
              pH 6.0 LOCKED
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`p-2.5 rounded border transition-colors whitespace-nowrap ${
                  isOverDarkSection
                    ? "border-white/10 hover:bg-white/10 text-gray-200"
                    : "border-ink/10 hover:bg-ink/5 text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className={`mt-3 pt-3 border-t ${isOverDarkSection ? "border-white/10" : "border-ink/10"}`}>
            <button
              onClick={() => {
                setMobileOpen(false);
                handlePrint();
              }}
              className={`w-full flex items-center justify-center gap-2 p-2.5 text-xs font-mono rounded border ${
                isOverDarkSection
                  ? "border-white/20 text-gray-200 hover:bg-white/10"
                  : "border-ink/20 text-ink hover:bg-ink/5"
              }`}
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
