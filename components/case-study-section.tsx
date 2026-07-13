/* eslint-disable @next/next/no-img-element */
import {
  CASE_STUDY_CAPTION,
  CASE_STUDY_CHART_ALT,
  CASE_STUDY_CHART_SRC,
  CASE_STUDY_HEADING,
  CASE_STUDY_STATS,
} from "@/lib/content";

// Corner "selection handles" motif from the export's stat cards
function HandleFrame({ children }: { children: React.ReactNode }) {
  const handle = "absolute h-1.5 w-1.5 bg-ink";
  return (
    <div className="relative border-[1.5px] border-ink bg-offwhite/60 p-6">
      <span aria-hidden="true" className={`${handle} -left-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -right-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -left-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -right-1`} />
      {children}
    </div>
  );
}

// Case study — heading, the hand-annotated gains chart from the live site,
// and the two stat cards. Reused on Home and /case-study.
export function CaseStudySection() {
  return (
    <section
      id="case-study"
      aria-labelledby="case-study-heading"
      className="mx-auto max-w-6xl px-5 py-24 tablet:px-8"
    >
      <header className="mb-12 text-center">
        <h2
          id="case-study-heading"
          className="mb-3 font-display text-section-h2 font-medium text-ink"
        >
          {CASE_STUDY_CAPTION}
        </h2>
        <p className="text-body-m text-muted">{CASE_STUDY_HEADING}</p>
      </header>

      <img
        src={CASE_STUDY_CHART_SRC}
        alt={CASE_STUDY_CHART_ALT}
        className="mx-auto w-full max-w-3xl"
        loading="lazy"
      />

      <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 tablet:grid-cols-2">
        {CASE_STUDY_STATS.map((stat) => (
          <HandleFrame key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-center font-accent text-stat text-accent">
              {stat.value}
              {stat.suffix && <span className="text-card-h3">{stat.suffix}</span>}
            </dd>
            <dd className="mt-3 text-center font-display text-h3 leading-snug text-ink">
              {stat.label}
            </dd>
          </HandleFrame>
        ))}
      </dl>
    </section>
  );
}
