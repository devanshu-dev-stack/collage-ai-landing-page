import { GeistSans } from "geist/font/sans";
import { Onest } from "next/font/google";

// Geist — body copy & captions (official Vercel package; exposes --font-geist-sans)
export const geist = GeistSans;

// Onest — buttons & nav labels
export const onest = Onest({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

// Copernicus (display) and DK Formosa (accent) are custom licensed fonts,
// declared via @font-face in globals.css. Drop the woff2 files into
// /public/fonts (see README) — until then the serif fallbacks render.
