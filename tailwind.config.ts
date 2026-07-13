// tailwind.config.ts — Collage AI design system (matched to collage-ai.com)
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fdf8eb",
        ink: "#002341",
        // Testimonial flip-card stroke/surface (Figma: #04243f)
        inkcard: "#04243f",
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
        accent: ["var(--font-accent)", "Caveat", "cursive"],
      },
      fontSize: {
        // Figma: H1 72px / -3.6px / 86.4px line height
        hero: ["clamp(44px, 5vw, 72px)", { lineHeight: "1.2", letterSpacing: "-0.05em" }],
        // Figma: section H2 40px / -1.6px / 40px
        "section-h2": ["40px", { lineHeight: "1", letterSpacing: "-0.04em" }],
        h3: ["20px", { lineHeight: "1.4", letterSpacing: "0" }],
        "card-h3": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        // Figma: Body L 24px / -0.24px / 31.2px — subheads, about, case study
        "body-l": ["clamp(19px, 1.7vw, 24px)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-m": ["16px", { lineHeight: "1.55", letterSpacing: "0" }],
        "body-s": ["13px", { lineHeight: "1.5", letterSpacing: "0" }],
        label: ["15px", { lineHeight: "1.4", letterSpacing: "0" }],
        caption: ["12px", { lineHeight: "1.5", letterSpacing: "0.12em" }],
        // Figma: quote 34px / 42.5px
        quote: ["clamp(24px, 2.5vw, 34px)", { lineHeight: "1.25", letterSpacing: "0" }],
        // Figma: attribution 25px / +2.5px tracking
        attribution: ["clamp(20px, 1.8vw, 25px)", { lineHeight: "1.2", letterSpacing: "0.1em" }],
        // Figma: stat numerals 128px
        stat: ["clamp(88px, 9vw, 128px)", { lineHeight: "1", letterSpacing: "0" }],
        "stat-label": ["19.5px", { lineHeight: "1.3", letterSpacing: "-0.05em" }],
      },
      screens: {
        tablet: "810px",
        desktop: "1200px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 2rem))" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
