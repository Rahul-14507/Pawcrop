export type Todo = { todo: string };

export const isTodo = (v: unknown): v is Todo =>
  typeof v === "object" && v !== null && "todo" in v;

export const site = {
  brand: "PAWCROP",
  tagline: "Decentralized On-Site Nitrogen & Root-Zone Sanitization",
  thesis: {
    headline: "Grow your own nitrogen. Keep the chemistry out of your food.",
    subline:
      "Ambient air, water, and electricity converted on-site into bioavailable nitrate and sanitizer. Food safety, provenance, and zero supply chain contamination.",
    formula: "AIR + WATER + ELECTRICITY  ➔  PAW (NO₃⁻ + O₃)",
  },
  contactEmail: { todo: "Add contact email" } as Todo | string,
  ask: {
    amountINR: 500000,
    label: "₹5,00,000",
    purpose: "Finalize the design and build 10 ruggedized field-pilot units.",
  },
  status: {
    trl: 4,
    label: "Benchtop Validated",
    mvpCostINR: 21250,
    mvpCostFormatted: "₹21,250",
    details:
      "Operational 15 kV ZVS flyback driver, PVDF Venturi manifold, ESP32 closed-loop logic, tank-scale NOx/O₃ dissolution.",
  },
  roadmap: [
    {
      months: "1–2",
      trl: "TRL 4",
      title: "Finalize Benchtop MVP",
      desc: "Optimize C++ pH safeguard firmware, refine optical isolation against plasma EMI, validate continuous 48-hour dissolution stability.",
    },
    {
      months: "3–6",
      trl: "TRL 5–6",
      title: "Commercial Hydroponic Field Pilot",
      desc: "Deploy single 'Pro' pilot unit on a commercial hydroponic farm. Monitor live biomass, root health, and inline nutrient logs.",
    },
    {
      months: "7–9",
      trl: "TRL 7",
      title: "Batch of 10 Ruggedized Pilot Units",
      desc: "Fabricate 10 field-hardened units using custom injection-molded PVDF blocks and IP66 enclosures for multi-site field trials.",
    },
    {
      months: "10–12",
      trl: "TRL 8–9",
      title: "MSME Supply Chain & HaaS Rollout",
      desc: "Establish localized MSME fabrication supply chain, launch cloud SaaS telemetry dashboard, and initiate Hardware-as-a-Service model.",
    },
  ],
  problems: [
    {
      id: "01",
      title: "Vulnerable Chemical Supply Chains",
      body: "Growers depend entirely on imported, price-volatile synthetic fertilizers subject to adulteration, heavy metal impurities, and shipping disruptions.",
      annotation: "Ref: Global Urea & Calcium Nitrate Volatility (2022–2024)",
    },
    {
      id: "02",
      title: "Groundwater Leaching & Eutrophication",
      body: "Over-application of standard synthetic nitrogen salts leaches unchecked into surrounding soil tables, contaminating potable water supplies.",
      annotation: "Environmental Risk: Runoff Nitrates & Soil Acidification",
    },
    {
      id: "03",
      title: "Chemical Dosing for Pathogen Control",
      body: "Hydroponic root rot (Pythium) and biofilm force growers into recurring pesticide and chemical sterilizer purchases that leave persistent residues.",
      annotation: "Crop Loss Factor: Hydroponic Pythium Infestation",
    },
  ],
  reactorSteps: [
    {
      step: "01",
      fig: "Fig. 01",
      title: "Ambient Air & Oxygen Intake",
      desc: "Atmospheric air is drawn through a particulate filter into the reaction chamber without bottled gas tanks.",
    },
    {
      step: "02",
      fig: "Fig. 02",
      title: "15 kV Cold Atmospheric Plasma Arc",
      desc: "A ZVS high-voltage flyback driver excites nitrogen and oxygen molecules into reactive nitrogen and oxygen species (RONS: NO, NO₂, O₃).",
    },
    {
      step: "03",
      fig: "Fig. 03",
      title: "OpenFOAM CFD PVDF Venturi Injector",
      desc: "High-velocity water flow creates a localized vacuum, shearing plasma gas into micro-bubbles with maximum contact surface area.",
    },
    {
      step: "04",
      fig: "Fig. 04",
      title: "Plasma-Activated Water (PAW) Dissolution",
      desc: "Nitrogen species dissolve cleanly into bioavailable nitrate (NO₃⁻) for plant nutrition while dissolved ozone (O₃) provides root-zone sanitation.",
    },
    {
      step: "05",
      fig: "Fig. 05",
      title: "Inline Direct Delivery to Root Zone",
      desc: "Freshly synthesized nutrient and sanitizing water feeds directly into the irrigation line at plant-safe pH 6.0.",
    },
  ],
  controllerMoat: {
    title: "The Agri-Safe Edge Controller",
    subtitle: "Real-time closed-loop pH throttling with hardware-isolated safeguard",
    summary:
      "Direct plasma activation produces nitric acid precursors that can drop water pH below 4.0 if unmanaged. The Agri-Safe controller runs on an ESP32 microcontroller, continuously reading pH and flow rate sensors to dynamically modulate 15 kV ZVS driver duty cycle, locking irrigation water at plant-safe pH 6.0.",
    specifications: [
      { label: "Target Setpoint", value: "pH 6.0 ± 0.1", note: "Optimal nutrient bioavailability" },
      { label: "Safety Cutoff", value: "pH 5.6", note: "Immediate arc shutdown prevents acid burn" },
      { label: "Driver Voltage", value: "15 kV AC / Peak", note: "High-frequency ZVS resonant circuit" },
      { label: "Signal Isolation", value: "High-Speed Optocoupler", note: "Shields logic from plasma EMI noise" },
      { label: "Wetted Materials", value: "PVDF, PTFE, Borosilicate", note: "100% resistant to nitric acid & ozone" },
      { label: "Telemetry Interface", value: "MQTT / TLS", note: "Inline flow, pH, and power telemetry" },
    ],
  },
  comparison: {
    headers: ["Capability / Vector", "PAWCROP System", "Conventional Synthetic Salts + Doser + UV"],
    rows: [
      {
        feature: "Nitrogen Source & Supply Chain",
        pawcrop: "Synthesized on-site from ambient air and electricity",
        conventional: "Imported synthetic nitrate salts with freight & vendor markups",
      },
      {
        feature: "Contaminant & Adulteration Risk",
        pawcrop: "Zero chemical supply chain exposure; synthesized pure at point of use",
        conventional: "Risk of heavy metal impurities and synthetic carrier fillers",
      },
      {
        feature: "Root-Zone Sanitation (Pythium / Biofilm)",
        pawcrop: "Simultaneous inline ozone/ROS sanitation without chemical sanitizers",
        conventional: "Requires separate hydrogen peroxide, chlorine, or expensive UV units",
      },
      {
        feature: "pH Acid-Burn Safeguard",
        pawcrop: "Integrated ESP32 Agri-Safe hardware loop with hard 5.6 pH cut-off",
        conventional: "Dependent on external pH-down/up dosing pumps and buffer chemicals",
      },
      {
        feature: "Batch Traceability & Verification",
        pawcrop: "Automated IoT telemetry logs of every milligram synthesized",
        conventional: "Manual mixing records with zero automated provenance logging",
      },
      {
        feature: "Equipment Footprint & Complexity",
        pawcrop: "Single inline appliance connecting directly into standard plumbing",
        conventional: "3+ disconnected units: dosing skids, acid tanks, standalone UV sterilizers",
      },
    ],
  },
  claims: {
    biomass: {
      text: "Reported in academic PAW literature",
      citation: { todo: "Add citation" } as Todo | string,
      context:
        "Academic studies in plasma-activated water demonstrate up to 45% biomass enhancements in controlled leafy green trials due to enhanced nitrogen uptake and pathogen suppression. Benchmarking PAWCROP's specific crop yields will occur during Phase 2 pilots.",
    },
  },
  foodSafety: {
    title: "Food Safety, Provenance & Verifiable Traceability",
    description:
      "Food safety starts with the inputs. When nitrogen is synthesized on-site from clean electricity and ambient air, growers eliminate contaminated bulk chemical batches. Every irrigation cycle generates an indelible digital ledger of pH, dissolution rate, and energy consumption.",
    labReport: {
      status: "Planned, Month 3–6",
      file: { todo: "Upload lab report when available" } as Todo | string,
      testingProtocols: [
        "Heavy metal screening (ICP-MS: Lead, Cadmium, Arsenic)",
        "Synthetic pesticide residue analysis (LC-MS/MS screen)",
        "Bioavailable nitrate vs. nitrite ion chromatography",
        "Microbial pathogen suppression (E. coli, Pythium ultimum)",
      ],
    },
  },
  proofLadder: [
    {
      trl: 4,
      status: "CURRENT",
      title: "Benchtop Validated (TRL 4)",
      achieved: true,
      points: [
        "15 kV ZVS flyback driver operational under continuous bench testing",
        "OpenFOAM CFD-modeled PVDF Venturi manifold fabricated and tested",
        "ESP32 closed-loop control board with opto-isolated sensor interfaces",
        "Sub-₹22,000 prototype bill-of-materials established (₹21,250)",
      ],
    },
    {
      trl: 6,
      status: "MONTH 3–6",
      title: "Commercial Farm Pilot (TRL 5–6)",
      achieved: false,
      points: [
        "Inline installation at pilot commercial hydroponic farm",
        "Real-time crop biomass and root health tracking against control lines",
        "Third-party laboratory residue and heavy metal verification testing",
        "Firmware refinement for 24/7 autonomous field stability",
      ],
    },
    {
      trl: 7,
      status: "MONTH 7–9",
      title: "Ruggedized 10-Unit Fleet (TRL 7)",
      achieved: false,
      points: [
        "Tooling for precision injection-molded PVDF injector blocks",
        "IP66 NEMA rated industrial enclosure with integrated thermal dissipation",
        "Multi-site deployment across 10 commercial hydroponic facilities",
      ],
    },
    {
      trl: 9,
      status: "MONTH 10–12",
      title: "Commercial HaaS Production (TRL 8–9)",
      achieved: false,
      points: [
        "MSME certified manufacturing and assembly line in India",
        "Cloud SaaS telemetry dashboard for grower monitoring and traceability certificates",
        "Commercial Hardware-as-a-Service leasing rollout",
      ],
    },
  ],
  riskMitigations: [
    {
      risk: "Plasma EMI Noise",
      consequence: "Electromagnetic interference disrupting ESP32 ADC and sensor readings",
      mitigation: "High-speed optocouplers, grounded Faraday PCB shielding, and separate isolated power rails",
    },
    {
      risk: "Nitric Acid & Ozone Corrosion",
      consequence: "Degradation of internal seals and manifold failure",
      mitigation: "Strict use of 100% virgin PVDF, PTFE seals, and borosilicate plasma reaction tubes",
    },
    {
      risk: "Hydraulic Pressure Variance",
      consequence: "Inconsistent Venturi suction and gas-liquid dissolution",
      mitigation: "Integrated differential pressure compensation and dynamic ZVS power modulation",
    },
  ],
  market: {
    sequence: [
      {
        order: "01",
        segment: "Commercial Hydroponic & Aeroponic Farms",
        priority: "Primary Beachhead",
        fit: "High input sensitivity, immediate need for clean nitrate and root-zone Pythium sanitation without chemical biocides.",
      },
      {
        order: "02",
        segment: "Soil-Based Specialty & High-Value Crop Farmers",
        priority: "Secondary Expansion",
        fit: "Drip-irrigated horticulture (berries, greenhouse vegetables) requiring localized, unadulterated nitrogen dosing.",
      },
      {
        order: "03",
        segment: "Corporate Campuses, Municipalities & Urban Greenhouses",
        priority: "Institutional",
        fit: "Zero-chemical landscape maintenance and sustainable water treatment initiatives.",
      },
      {
        order: "04",
        segment: "Terrace & Indoor Home Enthusiasts",
        priority: "Consumer Tier",
        fit: "Compact plug-and-play appliance for urban balcony food production.",
      },
    ],
    figures: { todo: "Add sourced market figures" } as Todo | string,
  },
  businessModel: {
    haas: {
      title: "Hardware-as-a-Service (HaaS)",
      desc: "Low upfront deployment barrier. Commercial growers subscribe to an appliance lease covering hardware installation, routine electrode maintenance, and lifetime firmware updates.",
    },
    saas: {
      title: "Cloud Telemetry & Traceability SaaS",
      desc: "Live water telemetry dashboard, automated pH/dissolution logging, alerting, and batch-by-batch verifiable food safety certificates.",
    },
  },
  team: [
    {
      name: "Pujari Rahul",
      role: "Founder, CSE",
      initials: "PR",
      focus: "Embedded Firmware, Closed-Loop Control, Power Electronics",
      photo: null,
    },
    {
      name: "Nikhita Rangineni",
      role: "Co-founder",
      initials: "NR",
      focus: "Fluidics Manifold Design, Hydroponic System Integration",
      photo: null,
    },
    {
      name: "Preetham Joel",
      role: "Co-founder",
      initials: "PJ",
      focus: "Plasma Reactor Physics, Mechanical Fabrication & Materials",
      photo: null,
    },
  ],
  mentor: {
    name: "Dr. K. Laxminarayanamma",
    role: "Assistant Professor, IARE",
    note: "Ph.D., 19 years' academic and engineering research experience",
    initials: "KL",
  },
  incubation: "Incubated at IARE · MSME Idea Hackathon 6.0",
};
