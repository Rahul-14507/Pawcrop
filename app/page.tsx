import React from "react";
import { StickyNav } from "@/components/navigation/StickyNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ReactorSection } from "@/components/sections/ReactorSection";
import { ControllerSection } from "@/components/sections/ControllerSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TraceabilitySection } from "@/components/sections/TraceabilitySection";
import { ProofLadderSection } from "@/components/sections/ProofLadderSection";
import { MarketSection } from "@/components/sections/MarketSection";
import { BusinessModelSection } from "@/components/sections/BusinessModelSection";
import { RoadmapAskSection } from "@/components/sections/RoadmapAskSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { PrintSummary } from "@/components/ui/PrintSummary";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-paper text-ink relative">
      {/* Sticky Header Navigation */}
      <StickyNav />

      {/* Screen Presentation Views */}
      <div className="flex-1 flex flex-col">
        {/* Section 1: Hero & Food Safety Thesis */}
        <HeroSection />

        {/* Section 2: The Structural Problem */}
        <ProblemSection />

        {/* Section 3: Inside the Reactor (Full-Bleed Dark Section) */}
        <ReactorSection />

        {/* Section 4: Agri-Safe Controller & Interactive Simulator */}
        <ControllerSection />

        {/* Section 5: Qualitative System Comparison */}
        <ComparisonSection />

        {/* Section 6: Food Safety & Verifiable Traceability */}
        <TraceabilitySection />

        {/* Section 7: Proof Ladder (TRL 4-9) & Hardware Risk Matrix */}
        <ProofLadderSection />

        {/* Section 8: Beachhead Market Sequence & Sourcing */}
        <MarketSection />

        {/* Section 9: Business Model (HaaS + Cloud SaaS) */}
        <BusinessModelSection />

        {/* Section 10: 12-Month Roadmap & ₹5,00,000 Single Figure Ask */}
        <RoadmapAskSection />

        {/* Section 11: Founding Team, Mentorship & Incubation */}
        <TeamSection />

        {/* Section 12: Pilot Farm / Back the Build Application */}
        <ContactSection />

        {/* Section 13: Footer with Honesty Disclosures */}
        <FooterSection />
      </div>

      {/* Dedicated Clean 1-Page Summary for Print/PDF Engine */}
      <PrintSummary />
    </main>
  );
}
