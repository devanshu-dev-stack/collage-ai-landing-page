import { AboutSection } from "@/components/about-section";
import { Button } from "@/components/button";
import { CaseStudySection } from "@/components/case-study-section";
import { FeatureBoard } from "@/components/feature-board";
import { HeroVideo } from "@/components/hero-video";
import { LogoStrip } from "@/components/logo-strip";
import { ProcessMap } from "@/components/process-map";
import { SignupForm } from "@/components/signup-form";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";
import {
  FEATURES_HEADING,
  FEATURES_SUBHEAD,
  HERO_HEADING,
  HERO_SUBHEAD,
  PROCESS_HEADING,
  PROCESS_SUBHEAD,
  TESTIMONIALS,
  TESTIMONIALS_HEADING,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero — grid paper + cyan/pink glows, left-aligned */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-ink/10 bg-grid-paper bg-[length:420px_420px]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-52 top-28 h-[520px] w-[520px] rounded-full bg-glow-cyan opacity-55 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-glow-pink opacity-55 blur-2xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-20 tablet:px-8">
          <div className="max-w-2xl">
            <h1
              id="hero-heading"
              className="mb-8 font-display text-hero font-medium text-ink"
            >
              {HERO_HEADING}
            </h1>
            <p className="mb-12 max-w-lg text-body-m leading-relaxed text-muted">
              {HERO_SUBHEAD}
            </p>
            <Button href={CTA_HREF}>{CTA_LABEL}</Button>
          </div>
          <HeroVideo />
        </div>
      </section>

      <LogoStrip />

      <AboutSection />

      {/* Release Features — sticky-note board */}
      <section
        id="features"
        aria-labelledby="features-heading"
        className="mx-auto max-w-6xl px-5 py-24 tablet:px-8"
      >
        <header className="mb-12 text-center">
          <h2
            id="features-heading"
            className="mb-3 font-display text-section-h2 font-medium text-ink"
          >
            {FEATURES_HEADING}
          </h2>
          <p className="text-body-m text-muted">{FEATURES_SUBHEAD}</p>
        </header>
        <FeatureBoard />
      </section>

      {/* Collage in Action — process map */}
      <section
        aria-labelledby="process-heading"
        className="mx-auto max-w-6xl px-5 py-24 tablet:px-8"
      >
        <header className="mb-12 text-center">
          <h2
            id="process-heading"
            className="mb-3 font-display text-section-h2 font-medium text-ink"
          >
            {PROCESS_HEADING}
          </h2>
          <p className="text-body-m text-muted">{PROCESS_SUBHEAD}</p>
        </header>
        <ProcessMap />
      </section>

      <CaseStudySection />

      {/* Voices from the Classroom */}
      <section
        aria-labelledby="testimonials-heading"
        className="mx-auto max-w-6xl px-5 py-24 tablet:px-8"
      >
        <header className="mb-12 text-center">
          <h2
            id="testimonials-heading"
            className="font-display text-section-h2 font-medium text-ink"
          >
            {TESTIMONIALS_HEADING}
          </h2>
        </header>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </section>

      <SignupForm />
    </>
  );
}
