import { Landmark } from "lucide-react";
import { Button } from "./button";
import { CTA_HREF } from "@/lib/site";
import {
  CASE_STUDY_BODY,
  CASE_STUDY_CAPTION,
  CASE_STUDY_DEPARTMENT,
  CASE_STUDY_HEADING,
  CASE_STUDY_INSTITUTION,
  CASE_STUDY_STATS,
} from "@/lib/content";

// Case study block — heading, institution, stats and the hand-sketched
// "student growth" axis, as on the live site.
export function CaseStudySection() {
  return (
    <section
      id="case-study"
      aria-labelledby="case-study-heading"
      className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-24 tablet:grid-cols-2 tablet:gap-20 tablet:px-8"
    >
      <div>
        <header className="mb-10">
          <h2
            id="case-study-heading"
            className="mb-3 font-display text-section-h2 font-medium text-ink"
          >
            {CASE_STUDY_CAPTION}
          </h2>
          <p className="text-body-m text-muted">{CASE_STUDY_HEADING}</p>
        </header>

        <p className="mb-1 flex items-center gap-2 text-h3 font-black uppercase tracking-[0.08em] text-ink">
          <Landmark className="h-5 w-5 shrink-0" aria-hidden="true" />
          {CASE_STUDY_INSTITUTION}
        </p>
        <p className="mb-7 text-caption uppercase tracking-[0.12em] text-muted">
          {CASE_STUDY_DEPARTMENT}
        </p>

        <p className="mb-8 text-body-m leading-relaxed text-ink">{CASE_STUDY_BODY}</p>

        <Button href={CTA_HREF}>Learn more</Button>

        <dl className="mt-14 grid max-w-md grid-cols-1 gap-4 tablet:grid-cols-2">
          {CASE_STUDY_STATS.map((stat) => (
            <div key={stat.value} className="min-h-[120px] border-2 border-ink p-5">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-accent text-stat text-accent">{stat.value}</dd>
              <dd className="mt-2 text-caption text-ink">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div aria-hidden="true" className="relative hidden min-h-[420px] opacity-80 tablet:block">
        <div className="absolute inset-x-20 inset-y-[70px] -skew-x-[20deg] border-b border-l border-ink/20" />
        <span className="absolute left-[190px] top-[170px] -rotate-[20deg] font-accent text-card-h3 text-accent">
          student growth
        </span>
      </div>
    </section>
  );
}
