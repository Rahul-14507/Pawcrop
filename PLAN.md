# PAWCROP Investor & Pitch Website — Architecture & Execution Plan

## 1. Information Architecture & Section Hierarchy

| # | Section | ID | Tone & Theme | Core Message & Elements |
|---|---------|----|--------------|-------------------------|
| 0 | Sticky Header | `#header` | Paper (`#F3F0E8`), hairline border | Brand mark, reading progress bar, live ticker (`pH 6.0 · LOCKED`), nav jump links, "Summary (PDF)" print button |
| 1 | Hero | `#hero` | Paper | **Lead Thesis:** "Grow your own nitrogen. Keep the chemistry out of your food." Ambient air + water + electricity formula, live flickering `PlasmaArc` SVG, dual CTAs ("See how it works", "Investor summary") |
| 2 | The Problem | `#problem` | Paper, Editorial Grid | 3 stat-less editorial statements: Chemical supply chain vulnerability, Groundwater nitrate leaching, Hydroponic pathogen losses (Pythium). Margin annotations, engineering callouts |
| 3 | Inside The Reactor | `#reactor` | **Full-bleed Reactor Dark (`#0B1410`)** | *The signature dark section.* GSAP pinned step-by-step schematic: Ambient Air -> 15 kV ZVS Arc Chamber -> OpenFOAM PVDF Venturi -> PAW Dissolution -> Irrigation Stream. Live arc ignition moment on scroll |
| 4 | Agri-Safe Controller | `#agri-safe` | Paper, Instrument Console | "The Moat": Interactive closed-loop simulation with flow (1-20 L/min) & power (0-100%) sliders, SVG needle gauge (4.5 - 8.0 pH), plant-safe band (5.8-6.2), cutoff threshold (5.6), live 20s strip-chart trace, block diagram. Visible "Illustrative model, not measured data" badge |
| 5 | Why It's Different | `#comparison` | Paper, Technical Matrix | Qualitative comparison matrix: PAWCROP vs Synthetic salts + separate auto-doser + separate UV/Ozone unit (Supply chain, contaminant risk, root-zone sanitation, batch traceability, equipment footprint) |
| 6 | Food Safety & Traceability | `#traceability` | Paper, Specification Sheet | Edge IoT telemetry logs + planned certified residue testing (heavy metals, pesticides, nitrate content). "Planned, Month 3-6" badge |
| 7 | Proof Ladder (TRL) | `#proof-ladder` | Paper, Engineering Timeline | TRL 4 (Benchtop Validated, Current) to TRL 9. Engineering risk mitigation matrix: EMI -> Opto-isolation, Acid corrosion -> PVDF/PTFE/Borosilicate, Pressure variance -> Venturi CFD |
| 8 | Market & Beachheads | `#market` | Paper | Sequential rollout: (1) Commercial Hydroponic/Aeroponic, (2) Soil Crop, (3) Municipal & Corporate Parks, (4) Terrace Gardeners. Sourced data TODO slots |
| 9 | Business Model | `#business-model` | Paper, Schematic Flow | Hardware-as-a-Service (HaaS) deployment + Cloud SaaS telemetry subscription |
| 10 | Roadmap & The Ask | `#roadmap` | Paper, Milestone Grid | 12-Month execution roadmap (TRL 4 -> TRL 9). **The Ask:** Prominent single figure **₹5,00,000** for 10 ruggedized pilot units. Strictly no budget breakdown or line items |
| 11 | Team & Incubation | `#team` | Paper, Academic Roster | Pujari Rahul (Founder, CSE), Nikhita Rangineni (Co-founder), Preetham Joel (Co-founder), Dr. K. Laxminarayanamma (Mentor, Ph.D., 19 yrs exp). Incubated at IARE, MSME Idea Hackathon 6.0 |
| 12 | Pilot Application & Backing | `#contact` | Paper, Clean Form | Dual-purpose form for prospective pilot hydroponic farms and grant/angel evaluators. Client-side validation, honeypot field, mailto fallback, placeholder POST endpoint |
| 13 | Footer | `#footer` | Paper, Hairline Rule | Prototype status disclaimer, academic literature citation attribution, copyright, accessibility tags |

---

## 2. Design Tokens & Visual Language

### Color Palette
- `--paper`: `#F3F0E8` (Primary background across 11 sections)
- `--ink`: `#0F1A14` (Deep near-black green text and structural borders)
- `--leaf`: `#1F5B3A` (Primary botanical brand green)
- `--water`: `#2E6F8E` (Aqueous flow, CFD vectors, telemetry channels)
- `--arc`: `#19D3C5` (Cold plasma glow, high-voltage active indicators, live arc polyline)
- `--signal`: `#FF6A2B` (Safety threshold alerts, pH cutoff, primary action buttons, TODO tags)
- `--reactor`: `#0B1410` (The single dark section for the reactor interior)
- `--grid`: `color-mix(in srgb, var(--ink) 10%, transparent)`

### Typography
- **Display Serif**: `Fraunces` / `Instrument Serif` (Editorial authority, large scale, tight tracking)
- **Body Sans**: `Geist` / `Outfit` / `Inter` (Neutral, crisp legibility)
- **Technical Mono**: `Geist Mono` / `JetBrains Mono` (Instrument readings, status tickers, pinouts, TRL labels)

### Geometry & Texture
- Corner radius: `4px` maximum (industrial feel, zero pill buttons)
- Grid: 12-column hairline overlay (`.grid-overlay`)
- Paper Grain: Inline SVG fractal turbulence noise filter (`opacity: 0.04 - 0.05`)
- Technical Callouts: Engineering leader lines, figure stamps (`Fig. 01`, `Fig. 02`), crosshair registration marks (`+`)

---

## 3. Component Architecture

```
app/
├── globals.css              # Global baseline, grain, grid, custom scrollbars, print styles
├── tokens.css               # CSS variable token definitions
├── layout.tsx               # Root layout, fonts, metadata, OpenGraph, JSON-LD
├── page.tsx                 # Single-page assembly of all 12 sections
├── sitemap.ts               # Automated XML sitemap
└── robots.ts                # Robots configuration
components/
├── navigation/
│   ├── StickyNav.tsx        # Sticky header with reading progress, ticker, PDF print trigger
│   └── MobileNav.tsx        # Compact mobile drawer
├── sections/
│   ├── HeroSection.tsx      # Section 1: Hero & Food Safety thesis
│   ├── ProblemSection.tsx   # Section 2: Three stat-less structural problems
│   ├── ReactorSection.tsx   # Section 3: Dark section, GSAP pinned reactor diagram & arc ignition
│   ├── ControllerSection.tsx# Section 4: Agri-Safe simulator, needle gauge, live strip-chart
│   ├── ComparisonSection.tsx# Section 5: Qualitative comparison matrix
│   ├── TraceabilitySection.tsx # Section 6: IoT telemetry & planned lab certification
│   ├── ProofLadderSection.tsx  # Section 7: TRL 4-9 ladder & engineering risk matrix
│   ├── MarketSection.tsx    # Section 8: Beachhead customer sequence & TODO slots
│   ├── BusinessModelSection.tsx # Section 9: HaaS + SaaS flow
│   ├── RoadmapAskSection.tsx# Section 10: 12-month roadmap & ₹5,00,000 single ask
│   ├── TeamSection.tsx      # Section 11: Founders, mentor, IARE / MSME Hackathon
│   ├── ContactSection.tsx   # Section 12: Pilot application & grant inquiry form
│   └── FooterSection.tsx    # Footer with honesty disclaimers & academic notes
├── ui/
│   ├── PlasmaArc.tsx        # Jagged polyline flickering arc SVG (reduced-motion safe)
│   ├── GaugeNeedle.tsx      # SVG precision needle gauge (pH 4.5 - 8.0, safety zones)
│   ├── StripChart.tsx       # Real-time 20-second historical pH/power waveform canvas
│   ├── BlockDiagram.tsx     # Hardware architecture SVG (ESP32, opto-isolator, ZVS driver)
│   ├── ReactorSvg.tsx       # Reactor chamber cutaway diagram
│   ├── VenturiSvg.tsx       # OpenFOAM CFD Venturi cross-section diagram
│   ├── TodoTag.tsx          # Dev-mode signal-orange marker / Prod clean renderer
│   ├── PrintSummary.tsx     # Hidden on screen, rendered on @media print for 1-page PDF
│   └── SectionHeader.tsx    # Standardized lab notebook figure header
content/
└── site.ts                  # Single source of truth with strict Todo types
lib/
├── controlSim.ts            # Pure TypeScript first-order Agri-Safe control loop model
└── __tests__/
    └── controlSim.test.ts   # Vitest unit tests for controller stability and cutoff
hooks/
├── useReducedMotion.ts      # prefers-reduced-motion media query hook
└── useScrollProgress.ts     # Window scroll tracker for reading bar
scripts/
└── list-todos.ts            # CLI script to audit and report remaining TODO items
```

---

## 4. Interactive Simulation Specification (`lib/controlSim.ts`)

- **State Model**: `{ ph: number; power: number; cutoff: boolean }`
- **Target pH**: `6.0` (optimal root bioavailability)
- **Cutoff pH**: `5.6` (emergency acid-burn safeguard)
- **Incoming Source pH**: `7.2` (alkaline/neutral ground or municipal water)
- **Dynamic Response**:
  - Proportional feedback controller ($K_p = 14$) throttles 15 kV ZVS flyback driver power.
  - Dilution term: Acid load scales with arc power and dilutes with hydraulic flow ($1 - 20\text{ L/min}$).
  - Cutoff triggers instantly at $\le 5.6\text{ pH}$ ($power \to 0\%$).
  - Hysteresis re-arm required ($pH \ge 6.2$) before driver restarts.
  - Visualization: Real-time 60fps RAF loop, SVG arc needle, dual numeric readouts, 20-second rolling strip-chart.

---

## 5. Execution Phases

- **Phase 0**: Project initialization (Next.js App Router, Tailwind, GSAP, Lucide, Vitest, tokens, fonts, git init).
- **Phase 1**: Type system, `site.ts`, `controlSim.ts`, unit tests, `list-todos.ts`, and core motion hooks.
- **Phase 2**: Navigation, technical layout, custom SVGs, `PlasmaArc`, printable investor summary.
- **Phase 3**: Hero, Problem, Reactor (dark section with GSAP ignition), Agri-Safe simulator console.
- **Phase 4**: Comparison matrix, Traceability, Proof Ladder, Market, Business Model, Roadmap & ₹5 Lakh Ask, Team, Contact Form, Footer.
- **Phase 5**: SEO, OpenGraph card, Lighthouse audit (Perf/A11y/Best Practices >= 90), responsiveness testing, final verification.
