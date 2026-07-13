import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { Caption } from "@/components/caption";
import { Heading } from "@/components/heading";
import { SignupForm } from "@/components/signup-form";
import { CASE_STUDY_CAPTION, CASE_STUDY_HEADING } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Study",
};

export default function CaseStudyPage() {
  return (
    <>
      <section
        aria-labelledby="case-study-heading"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 bg-radial-1"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-24 text-center tablet:px-8 tablet:pt-32">
          <Caption className="mb-4">{CASE_STUDY_CAPTION}</Caption>
          <Heading as="h1" id="case-study-heading" className="mx-auto max-w-4xl">
            {CASE_STUDY_HEADING}
          </Heading>
        </div>
      </section>

      <AboutSection />
      <SignupForm />
    </>
  );
}
