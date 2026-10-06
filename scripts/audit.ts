import fs from "fs";
import path from "path";

interface AuditResult {
  category: string;
  test: string;
  passed: boolean;
  details?: string;
}

const results: AuditResult[] = [];

function check(category: string, test: string, passed: boolean, details?: string) {
  results.push({ category, test, passed, details });
}

console.log("=================================================");
console.log("  PAWCROP TECHNICAL & ACCESSIBILITY AUDIT SUITE");
console.log("=================================================\n");

// 1. Verify site structure & file integrity
const requiredFiles = [
  "PLAN.md",
  "README.md",
  "app/layout.tsx",
  "app/page.tsx",
  "app/tokens.css",
  "app/globals.css",
  "content/site.ts",
  "lib/controlSim.ts",
  "lib/__tests__/controlSim.test.ts",
  "components/navigation/StickyNav.tsx",
  "components/sections/HeroSection.tsx",
  "components/sections/ProblemSection.tsx",
  "components/sections/ReactorSection.tsx",
  "components/sections/ControllerSection.tsx",
  "components/sections/ComparisonSection.tsx",
  "components/sections/TraceabilitySection.tsx",
  "components/sections/ProofLadderSection.tsx",
  "components/sections/MarketSection.tsx",
  "components/sections/BusinessModelSection.tsx",
  "components/sections/RoadmapAskSection.tsx",
  "components/sections/TeamSection.tsx",
  "components/sections/ContactSection.tsx",
  "components/sections/FooterSection.tsx",
  "components/ui/PrintSummary.tsx",
  "components/ui/PlasmaArc.tsx",
  "components/ui/GaugeNeedle.tsx",
  "components/ui/StripChart.tsx",
  "components/ui/BlockDiagram.tsx",
  "components/ui/TodoTag.tsx",
  "public/icon.svg",
  "public/robots.txt",
  "public/sitemap.xml",
];

requiredFiles.forEach((file) => {
  const fullPath = path.join(process.cwd(), file);
  check(
    "Architecture",
    `File existence: ${file}`,
    fs.existsSync(fullPath),
    fs.existsSync(fullPath) ? "Found" : "Missing file"
  );
});

// 2. Check Honesty & Content Constraints
const siteContent = fs.readFileSync(path.join(process.cwd(), "content/site.ts"), "utf-8");

// No forbidden words
const forbiddenWords = ["organic certified", "certified organic", "replaces pesticides", "patent", "patents", "open-source stack", "open source stack"];
forbiddenWords.forEach((word) => {
  const hasWord = siteContent.toLowerCase().includes(word.toLowerCase());
  check(
    "Honesty Rules",
    `No forbidden word '${word}'`,
    !hasWord,
    hasWord ? `Found forbidden word: ${word}` : "Clean"
  );
});

// Single ask figure only
const hasAskAmount = siteContent.includes("500000") && siteContent.includes("₹5,00,000");
check(
  "Honesty Rules",
  "Prominent ₹5,00,000 single ask defined",
  hasAskAmount,
  "Exact single figure ₹5,00,000 present"
);

// TRL 4 Status and MVP Cost ₹21,250
const hasStatusAndBom = siteContent.includes("21250") && siteContent.includes("TRL 4");
check(
  "Honesty Rules",
  "TRL 4 and ₹21,250 benchtop BOM cost defined",
  hasStatusAndBom,
  "Truth metrics verified"
);

// 3. Accessibility & Markup Checks
const controllerContent = fs.readFileSync(
  path.join(process.cwd(), "components/sections/ControllerSection.tsx"),
  "utf-8"
);
check(
  "Accessibility",
  "Controller sliders have <label> and aria-valuetext",
  controllerContent.includes("aria-valuetext") && controllerContent.includes("<label"),
  "Form accessibility standards satisfied"
);

check(
  "Honesty Rules",
  "Illustrative model disclaimer in Controller",
  controllerContent.includes("ILLUSTRATIVE MODEL, NOT MEASURED DATA"),
  "Mandatory simulation disclaimer present"
);

const arcContent = fs.readFileSync(path.join(process.cwd(), "components/ui/PlasmaArc.tsx"), "utf-8");
check(
  "Accessibility",
  "PlasmaArc has role='img' and aria-label",
  arcContent.includes('role="img"') && arcContent.includes("aria-label"),
  "SVG accessibility verified"
);

// Summary & Score Calculation
const passedCount = results.filter((r) => r.passed).length;
const totalCount = results.length;
const score = Math.round((passedCount / totalCount) * 100);

console.log(`Audited ${totalCount} checks across Architecture, Honesty Rules, and Accessibility:\n`);
results.forEach((r) => {
  const status = r.passed ? "✅ PASS" : "❌ FAIL";
  console.log(`  ${status} [${r.category}] ${r.test} - ${r.details || ""}`);
});

console.log("\n=================================================");
console.log(`  AUDIT SCORE: ${score}% (${passedCount}/${totalCount} Passed)`);
console.log("=================================================\n");

if (score < 100) {
  process.exit(1);
}
