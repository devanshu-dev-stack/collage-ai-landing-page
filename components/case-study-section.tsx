/* eslint-disable @next/next/no-img-element */
import { Button } from "./button";
import { CTA_HREF } from "@/lib/site";
import {
  CASE_STUDY_BODY,
  CASE_STUDY_CAPTION,
  CASE_STUDY_CHART_ALT,
  CASE_STUDY_CHART_SRC,
  CASE_STUDY_CREST_SRC,
  CASE_STUDY_DEPARTMENT,
  CASE_STUDY_HEADING,
  CASE_STUDY_INSTITUTION,
  CASE_STUDY_STATS,
} from "@/lib/content";

// Corner "selection handles" motif from the export's stat cards
function HandleFrame({ children }: { children: React.ReactNode }) {
  const handle = "absolute h-1.5 w-1.5 bg-ink";
  return (
    <div className="relative border-[1.5px] border-ink bg-offwhite/60 p-5">
      <span aria-hidden="true" className={`${handle} -left-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -right-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -left-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -right-1`} />
      {children}
    </div>
  );
}

// Case study — Harvard deployment story on the left, the hand-annotated
// gains chart on the right. Reused on Home and /case-study.
export function CaseStudySection() {
  return (
    <section
      id="case-study"
      aria-labelledby="case-study-heading"
      className="mx-auto max-w-6xl px-5 py-24 tablet:px-8"
    >
      <header className="mb-14 text-center">
        <h2
          id="case-study-heading"
          className="mb-3 font-display text-section-h2 font-medium text-ink"
        >
          {CASE_STUDY_CAPTION}
        </h2>
        <p className="text-body-m text-muted">{CASE_STUDY_HEADING}</p>
      </header>

      <div className="grid items-center gap-12 tablet:grid-cols-2 tablet:gap-16">
        <div className="max-w-lg">
          <div className="mb-7 flex items-center gap-3">
            <img
              src={CASE_STUDY_CREST_SRC}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto"
              loading="lazy"
            />
            <div>
              <p className="font-display text-h3 font-semibold uppercase tracking-[0.06em] text-ink">
                {CASE_STUDY_INSTITUTION}
              </p>
              <p className="text-body-s text-muted">{CASE_STUDY_DEPARTMENT}</p>
            </div>
          </div>

          <p className="mb-8 text-body-m leading-relaxed text-ink">
            {CASE_STUDY_BODY}
          </p>

          <Button href={CTA_HREF}>Learn more</Button>

          <dl className="mt-10 grid grid-cols-1 gap-5 tablet:grid-cols-2">
            {CASE_STUDY_STATS.map((stat) => (
              <HandleFrame key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-center font-accent text-stat font-bold text-accent">
                  {stat.value}
                  {stat.suffix && <span className="text-card-h3">{stat.suffix}</span>}
                </dd>
                <dd className="mt-2 text-center font-display text-body-m leading-snug text-ink">
                  {stat.label}
                </dd>
              </HandleFrame>
            ))}
          </dl>
        </div>

        <img
          src={CASE_STUDY_CHART_SRC}
          alt={CASE_STUDY_CHART_ALT}
          className="mx-auto w-full max-w-xl"
          loading="lazy"
        />
      </div>
    </section>
  );
}
