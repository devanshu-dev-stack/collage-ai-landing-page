// tailwind.config.ts — Collage AI design system
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(87, 62, 105)",   // Primary/Primary
          200: "rgb(125, 95, 146)",
          600: "rgb(72, 57, 83)",
          highlight: "rgb(159, 128, 218)",
          textsecondary: "rgb(152, 128, 171)",
          bg: "rgb(247, 240, 250)",       // Primary/Background
        },
        inverse: {
          text: "rgb(251, 245, 255)",
          bg: "rgb(39, 31, 54)",
          border: "rgba(180, 156, 197, 0.2)",
        },
        white: "rgb(255, 255, 255)",
        white50: "rgba(255, 255, 255, 0.5)",
      },
      boxShadow: {
        soft: "0 8px 40px rgba(180, 156, 197, 0.08)",
      },
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(135deg, rgb(153,155,255) 0%, rgb(135,101,215) 50%, rgb(218,158,240) 100%)",
        "feature-gradient":
          "linear-gradient(135deg, rgba(204,205,255,.7) 0%, rgba(235,203,247,.7) 50%, rgba(166,140,225,.7) 100%)",
        "radial-1": "radial-gradient(circle, rgba(208,208,255,0.5), transparent 70%)",
        "radial-2": "radial-gradient(circle, rgb(236,216,243), transparent 70%)",
        "radial-3": "radial-gradient(circle, rgba(170,143,228,0.2), transparent 70%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Copernicus", "Georgia", "serif"],
        body: ["var(--font-geist-sans)", "Geist", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "Onest", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "DK Formosa", "Georgia", "serif"],
      },
      fontSize: {
        // Responsive per spec §5 via clamp(): mobile → desktop
        h1: ["clamp(38px, 2.7vw + 28px, 72px)", { lineHeight: "1.2", letterSpacing: "-0.05em" }],
        "h2-l": ["clamp(32px, 2.4vw + 23px, 62px)", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        h3: ["clamp(18px, 0.2vw + 17px, 20px)", { lineHeight: "1.4", letterSpacing: "0" }],
        "body-l": ["clamp(18px, 0.5vw + 16px, 24px)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-m": ["15px", { lineHeight: "1.4", letterSpacing: "0" }],
        caption: ["clamp(12px, 0.1vw + 12px, 13px)", { lineHeight: "1.5", letterSpacing: "0.06em" }],
        button: ["18px", { lineHeight: "1.5", letterSpacing: "0" }],
      },
      screens: {
        // Framer breakpoints (mobile-first)
        tablet: "810px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
