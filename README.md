# Collage AI — Marketing Website

Standalone rebuild of the Collage AI marketing site (migrated out of Framer).

**Stack:** Next.js (App Router) + TypeScript · Tailwind CSS · Framer Motion · Deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, about, feature comparison, testimonials, FAQ, signup form |
| `/case-study` | Case study — reuses About block + Stay Updated form |
| `/privacy` | Privacy Policy — sticky TOC sidebar |
| `/terms` | Terms of Service — static TOC sidebar |
| `/404` | Branded not-found page |

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_HERO_VIDEO_URL` | External CDN URL (Mux / Cloudflare Stream / Bunny) for the hero "play on scroll" video. If unset, the hero renders without video. |
| `SUBSCRIBE_PROVIDER_API_KEY` | API key for the form provider (Loops / Mailchimp) — not yet wired, see TODO below. |

## TODOs before launch

1. **Font files** — Copernicus and DK Formosa are custom licensed fonts. Export the
   woff2 files from Framer (or license them) and place them at:
   - `public/fonts/Copernicus-Regular.woff2`
   - `public/fonts/DKFormosa-Regular.woff2`

   They are declared via `@font-face` in `app/globals.css`; until the files exist,
   serif fallbacks render. Geist and Onest load automatically via `next/font/google`.
2. **Hero video** — upload the hero video to an external CDN (Mux, Cloudflare
   Stream, or Bunny — do not use Framer asset URLs) and set
   `NEXT_PUBLIC_HERO_VIDEO_URL`.
3. **Form backend** — `app/api/subscribe/route.ts` validates and accepts
   submissions but discards them. Wire it to a provider (Loops, Mailchimp, …)
   using `SUBSCRIBE_PROVIDER_API_KEY`.
4. **Brand assets** — download the favicon SVGs and social image from the Framer
   project into `/public` (`favicon-light.svg`, `favicon-dark.svg`, `og.png`) —
   they are referenced in `app/layout.tsx` but not hotlinked.
5. **Legal copy** — `lib/legal-content.ts` contains placeholder copy; replace
   with counsel-approved text.

## Design system

All colors, gradients, fonts, and the responsive type scale live in
`tailwind.config.ts`, mapped 1:1 from the Framer design tokens. Breakpoints:
mobile-first, `tablet` ≥ 810px, `desktop` ≥ 1200px.
