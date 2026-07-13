import localFont from "next/font/local";
import { Caveat, Onest } from "next/font/google";

// Geist — body copy & captions, self-hosted from the brand's font files.
// Keeps the --font-geist-sans variable the Tailwind config expects.
export const geist = localFont({
  src: [
    { path: "../public/fonts/Geist-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Geist-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Geist-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

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

// Copernicus — display headings, self-hosted licensed font declared via
// @font-face in globals.css (public/fonts/Copernicus-Regular.woff2).
