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
  HERO_HEADING_LINES,
  HERO_SUBHEAD,
  PROCESS_HEADING,
  PROCESS_SUBHEAD,
  TESTIMONIALS,
  TESTIMONIALS_HEADING,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero — cream field, blue/pink radial glows, hairline canvas guides */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[446px] top-[77px] h-[729px] w-[729px] rounded-full bg-glow-cyan opacity-60 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[323px] -top-[131px] h-[903px] w-[903px] rounded-full bg-glow-pink opacity-60 blur-2xl"
        />
        {/* Canvas guide lines + plus markers (Figma hero) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden tablet:block">
          <div className="absolute bottom-0 left-[2.85%] top-0 w-px bg-ink/10" />
          <div className="absolute bottom-0 right-[17.4%] top-0 w-px bg-ink/10" />
          <div className="absolute bottom-[48px] left-0 right-0 h-px bg-ink/10" />
          {["2.4%", "41.3%", "82.3%"].map((left) => (
            <div key={left} className="absolute bottom-[43px]" style={{ left }}>
              <span className="absolute h-[11px] w-px bg-[#cac6bd]" />
              <span className="absolute top-[5px] h-px w-[11px] -translate-x-[5px] bg-[#cac6bd]" />
            </div>
          ))}
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 pb-32 pt-24 tablet:px-[200px] tablet:pt-[101px]">
          <div className="max-w-[885px]">
            <h1
              id="hero-heading"
              className="mb-[52px] font-display text-hero font-normal text-ink"
            >
              {HERO_HEADING_LINES.map((line, i) => (
                <span key={line} className={i > 0 ? "tablet:block" : ""}>
                  {i > 0 && <span className="tablet:hidden"> </span>}
                  {line}
                </span>
              ))}
            </h1>
            <p className="mb-[52px] max-w-[700px] text-body-l text-ink/80">
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
        <header className="mx-auto mb-14 flex max-w-[760px] flex-col items-center gap-4 text-center">
          <h2
            id="features-heading"
            className="font-display text-section-h2 font-normal text-ink"
          >
            {FEATURES_HEADING}
          </h2>
          <p className="text-body-l text-ink/80">{FEATURES_SUBHEAD}</p>
        </header>
        <FeatureBoard />
      </section>

      {/* Collage in Action — process map */}
      <section
        aria-labelledby="process-heading"
        className="mx-auto max-w-6xl px-5 py-24 tablet:px-8"
      >
        <header className="mx-auto mb-14 flex max-w-[760px] flex-col items-center gap-4 text-center">
          <h2
            id="process-heading"
            className="font-display text-section-h2 font-normal text-ink"
          >
            {PROCESS_HEADING}
          </h2>
          <p className="text-body-l text-ink/80">{PROCESS_SUBHEAD}</p>
        </header>
        <ProcessMap />
      </section>

      <CaseStudySection />

      {/* Voices from the Classroom */}
      <section
        aria-labelledby="testimonials-heading"
        className="mx-auto max-w-6xl px-5 py-24 tablet:px-8"
      >
        <header className="mb-10 text-center">
          <h2
            id="testimonials-heading"
            className="font-display text-section-h2 font-normal text-ink"
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
