# PAWCROP — Investor & Technical Pitch Website

A single-page, scroll-driven pitch website for **PAWCROP**, an early-stage Indian agritech hardware startup building decentralized Cold Atmospheric Plasma (CAP) fertilizer appliances.

Incubated at **Institute of Aeronautical Engineering (IARE)** · Recognized in **MSME Idea Hackathon 6.0**.

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js 15 (App Router, Static Export: `output: "export"`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Custom Properties (`app/tokens.css`)
- **Simulation:** Pure TypeScript closed-loop Agri-Safe controller model (`lib/controlSim.ts`)
- **Motion & Visuals:** Inline SVG Cold Plasma discharge flicker with `prefers-reduced-motion` fallbacks, real-time strip chart, SVG needle gauge
- **Testing:** Vitest for mathematical control loop convergence & safety cutoff validation

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Run Controller Unit Tests
```bash
npm test
```

### 4. Audit Active Content TODOs
```bash
npm run list-todos
```

### 5. Build Static Export Bundle
```bash
npm run build
```
Static production output will be exported to the `/out` directory, ready to deploy to Vercel, Cloudflare Pages, or any static host.

---

## 📄 One-Page Executive Summary (PDF)

The website includes a dedicated print stylesheet. Users can click the **"Summary (PDF)"** button in the top navigation or trigger standard browser print (`Ctrl+P` / `Cmd+P`) to generate a clean, high-density 1-page executive brief formatted for grant committees and investors.

---

## ⚖️ Honesty & Technical Integrity Rules

1. **TRL 4 Prototype Status:** Current operational benchtop MVP cost is ₹21,250.
2. **Interactive Simulation:** All simulation models carry a visible disclaimer: *"Illustrative model, not measured data."*
3. **Nutrient Boundaries:** PAWCROP supplies the bioavailable nitrogen fraction ($NO_3^-$) plus inline dissolved ozone ($O_3$) root-zone sanitization; it does not replace P, K, Ca, Mg, or micronutrients.
4. **Funding Request:** Single milestone ask of **₹5,00,000** for fabricating 10 ruggedized field-pilot units.

---

## 👥 Founding Team & Mentorship

- **Pujari Rahul** (Founder, CSE)
- **Nikhita Rangineni** (Co-founder)
- **Preetham Joel** (Co-founder)
- **Dr. K. Laxminarayanamma** (Faculty Mentor, Assistant Professor, IARE)
