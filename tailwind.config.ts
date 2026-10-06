import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        leaf: "var(--leaf)",
        water: "var(--water)",
        arc: "var(--arc)",
        signal: "var(--signal)",
        reactor: "var(--reactor)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "2px",
        md: "4px",
        lg: "6px",
      },
      boxShadow: {
        hairline: "0 0 0 1px var(--ink)",
        subtle: "0 1px 3px rgba(15, 26, 20, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
