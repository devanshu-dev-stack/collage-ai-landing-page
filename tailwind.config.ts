// tailwind.config.ts — Collage AI design system (matched to collage-ai.com)
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fdf8eb",
        ink: "#002341",
        muted: "#5d6870",
        soft: "#b2b2b2",
        accent: "#ff6713",
        offwhite: "#fffaf0",
        line: "rgba(0, 35, 65, 0.18)",
        note: {
          green: "#baf4a8",
          yellow: "#ffe797",
          gold: "#ffe99f",
          blue: "#b7d6ff",
          purple: "#cbbaff",
          lavender: "#cfc4ff",
        },
      },
      boxShadow: {
        note: "0 10px 18px rgba(0, 35, 65, 0.07)",
        sketch: "8px 8px 0 #002341",
      },
      backgroundImage: {
        "grid-paper":
          "linear-gradient(rgba(0,35,65,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,35,65,.1) 1px, transparent 1px)",
        "grid-board":
          "linear-gradient(rgba(0,35,65,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(0,35,65,.14) 1px, transparent 1px)",
        "glow-cyan": "radial-gradient(circle, rgba(127,222,255,.65), transparent 65%)",
        "glow-pink": "radial-gradient(circle, rgba(255,128,158,.55), transparent 65%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Copernicus", "Georgia", "serif"],
        body: ["var(--font-geist-sans)", "Geist", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "Onest", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "DK Formosa", "cursive"],
      },
      fontSize: {
        hero: ["clamp(56px, 7vw, 92px)", { lineHeight: "0.96", letterSpacing: "-0.045em" }],
        "section-h2": ["36px", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        kicker: ["34px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h3: ["20px", { lineHeight: "1.4", letterSpacing: "0" }],
        "card-h3": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-m": ["16px", { lineHeight: "1.55", letterSpacing: "0" }],
        "body-s": ["13px", { lineHeight: "1.5", letterSpacing: "0" }],
        caption: ["12px", { lineHeight: "1.5", letterSpacing: "0.12em" }],
        button: ["12px", { lineHeight: "1", letterSpacing: "0" }],
        stat: ["52px", { lineHeight: "0.9", letterSpacing: "0" }],
      },
      screens: {
        tablet: "810px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
