"use client";

import React from "react";
import { site } from "@/content/site";

export function PrintSummary() {
  return (
    <div className="print-only font-mono text-black bg-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-start">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-black">
            {site.brand}
          </h1>
          <p className="text-sm font-sans text-gray-700 mt-1">
            {site.tagline} · {site.incubation}
          </p>
        </div>
        <div className="text-right text-xs">
          <div className="font-bold uppercase border border-black px-2 py-1 inline-block mb-1">
            EXECUTIVE INVESTOR BRIEF
          </div>
          <div className="text-gray-600">STATUS: {site.status.label} (TRL {site.status.trl})</div>
          <div className="text-gray-600">BENCHTOP MVP BOM: {site.status.mvpCostFormatted}</div>
        </div>
      </div>

      {/* Thesis */}
      <div className="mb-6 p-4 border border-black bg-gray-50">
        <h2 className="font-serif text-lg font-bold mb-1">
          {site.thesis.headline}
        </h2>
        <p className="text-xs font-sans text-gray-800 leading-relaxed">
          {site.thesis.subline}
        </p>
        <div className="mt-2 text-xs font-mono font-bold tracking-wider text-black">
          {site.thesis.formula}
        </div>
      </div>

      {/* Grid: Tech Moat & Problem */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-400 p-3">
          <h3 className="font-bold text-xs uppercase tracking-wider mb-2 border-b border-gray-300 pb-1">
            Core Moat: Agri-Safe Edge Controller
          </h3>
          <ul className="text-[11px] font-sans space-y-1.5 text-gray-800">
            <li>• <strong>ESP32 Closed-Loop:</strong> Dynamically modulates 15 kV ZVS flyback driver to lock pH at 6.0.</li>
            <li>• <strong>Hard 5.6 pH Cutoff:</strong> Prevents seedling acid burn automatically.</li>
            <li>• <strong>Opto-Isolation:</strong> 3.75 kV barrier protects digital logic from plasma EMI.</li>
            <li>• <strong>OpenFOAM Venturi:</strong> Custom PVDF fluidics for gas shear and dissolution.</li>
            <li>• <strong>Inert Materials:</strong> Virgin PVDF, PTFE seals, and borosilicate reaction tubes.</li>
          </ul>
        </div>

        <div className="border border-gray-400 p-3">
          <h3 className="font-bold text-xs uppercase tracking-wider mb-2 border-b border-gray-300 pb-1">
            The Structural Problem
          </h3>
          <ul className="text-[11px] font-sans space-y-1.5 text-gray-800">
            <li>• <strong>Supply Chain Risk:</strong> Dependence on volatile synthetic nitrate salts and adulteration.</li>
            <li>• <strong>Groundwater Leaching:</strong> Runoff nitrate salts contaminate water tables.</li>
            <li>• <strong>Pathogen Loss:</strong> Hydroponic Pythium forces recurring chemical biocide costs.</li>
          </ul>
        </div>
      </div>

      {/* Roadmap & The Ask */}
      <div className="border border-black p-4 mb-6">
        <div className="flex justify-between items-center mb-3 border-b border-black pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">
            12-Month Execution Roadmap
          </h3>
          <div className="text-right">
            <span className="text-xs text-gray-600">THE ASK: </span>
            <span className="font-bold text-base">{site.ask.label}</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 text-[10px]">
          {site.roadmap.map((item, idx) => (
            <div key={idx} className="p-2 border border-gray-300 bg-gray-50">
              <div className="font-bold text-gray-900">{item.trl} (Mo {item.months})</div>
              <div className="font-sans font-semibold mt-0.5 text-gray-800">{item.title}</div>
            </div>
          ))}
        </div>
        <p className="text-[10px] font-sans text-gray-600 mt-2">
          Capital allocated to: {site.ask.purpose}
        </p>
      </div>

      {/* Team */}
      <div className="border-t-2 border-black pt-4 flex justify-between items-start text-xs">
        <div>
          <div className="font-bold uppercase mb-1">Founding Team & Mentorship</div>
          <div className="font-sans text-[11px] text-gray-800">
            Pujari Rahul (CSE) · Nikhita Rangineni · Preetham Joel
          </div>
          <div className="font-sans text-[10px] text-gray-600 mt-0.5">
            Mentor: {site.mentor.name} ({site.mentor.role}, {site.mentor.note})
          </div>
        </div>
        <div className="text-right text-[10px] text-gray-500 max-w-xs">
          Confidential. Laboratory prototype stage (TRL 4). Simulation models are illustrative.
        </div>
      </div>
    </div>
  );
}
