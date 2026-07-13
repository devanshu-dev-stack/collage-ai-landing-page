import { GeistSans } from "geist/font/sans";
import { Caveat, Onest } from "next/font/google";

// Geist — body copy & captions (official Vercel package; exposes --font-geist-sans)
export const geist = GeistSans;

// Caveat — handwritten accents (stat numbers, testimonial attribution, chart notes)
export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

// Onest — buttons & nav labels
export const onest = Onest({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

// Copernicus (display headings) is a custom licensed font declared via
// @font-face in globals.css. Drop the woff2 into /public/fonts (see README) —
// until then the serif fallback renders.
