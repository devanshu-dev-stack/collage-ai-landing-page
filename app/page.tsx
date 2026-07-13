import { AboutSection } from "@/components/about-section";
import { Accordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { Caption } from "@/components/caption";
import { FeatureComparison } from "@/components/feature-comparison";
import { Heading } from "@/components/heading";
import { HeroVideo } from "@/components/hero-video";
import { SignupForm } from "@/components/signup-form";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";
import {
  FAQ_CAPTION,
  FAQ_HEADING,
  FAQ_ITEMS,
  FEATURES_CAPTION,
  FEATURES_HEADING,
  FEATURES_SUBHEAD,
  FEATURE_COMPARISON_ITEMS,
  HERO_HEADING,
  HERO_SUBHEAD,
  TESTIMONIALS,
  TESTIMONIALS_HEADING,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[720px] w-[900px] -translate-x-1/2 bg-radial-1"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-64 top-24 h-[560px] w-[560px] bg-radial-3"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-64 top-0 h-[560px] w-[560px] bg-radial-2 opacity-50"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-24 text-center tablet:px-8 tablet:pt-32">
          <Heading as="h1" id="hero-heading" className="mx-auto max-w-4xl">
            {HERO_HEADING}
          </Heading>
          <p className="salt mx-auto mt-6 max-w-2xl text-body-l text-primary-200">
            {HERO_SUBHEAD}
          </p>
          <div className="mt-10">
            <Button href={CTA_HREF} showArrow>
              {CTA_LABEL}
            </Button>
          </div>
          <HeroVideo />
        </div>
      </section>

      <AboutSection />

      {/* Feature comparison */}
      <section
        id="features"
        aria-labelledby="features-heading"
        className="mx-auto max-w-6xl px-5 py-20 tablet:px-8 tablet:py-28"
      >
        <div className="mb-12 text-center">
          <Caption className="mb-4">{FEATURES_CAPTION}</Caption>
          <Heading as="h2" id="features-heading">
            {FEATURES_HEADING}
          </Heading>
          <p className="mx-auto mt-4 max-w-xl text-body-m text-primary-textsecondary">
            {FEATURES_SUBHEAD}
          </p>
        </div>
        <FeatureComparison items={FEATURE_COMPARISON_ITEMS} />
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonials-heading"
        className="mx-auto max-w-6xl px-5 py-20 tablet:px-8 tablet:py-28"
      >
        <div className="mb-12 text-center">
          <Caption className="mb-4">Testimonials</Caption>
          <Heading as="h2" id="testimonials-heading">
            {TESTIMONIALS_HEADING}
          </Heading>
        </div>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-6xl px-5 py-20 tablet:px-8 tablet:py-28"
      >
        <div className="mb-12 text-center">
          <Caption className="mb-4">{FAQ_CAPTION}</Caption>
          <Heading as="h2" id="faq-heading">
            {FAQ_HEADING}
          </Heading>
        </div>
        <Accordion items={FAQ_ITEMS} />
      </section>

      <SignupForm />
    </>
  );
}
