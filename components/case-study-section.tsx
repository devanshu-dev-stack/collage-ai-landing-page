/* eslint-disable @next/next/no-img-element */
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

// Figma stat card: 248×236, hairline border, 7px corner handles, handwritten
// orange numeral over a Copernicus label
function StatCard({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const handle = "absolute h-[7px] w-[7px] bg-ink";
  return (
    <div className="relative h-[236px] w-full max-w-[248px]">
      <span aria-hidden="true" className={`${handle} left-0 top-0`} />
      <span aria-hidden="true" className={`${handle} right-0 top-0`} />
      <span aria-hidden="true" className={`${handle} bottom-0 left-0`} />
      <span aria-hidden="true" className={`${handle} bottom-0 right-0`} />
      <div className="absolute inset-[3px] flex flex-col items-center border-[0.75px] border-ink px-3 pt-1">
        <dd className="font-accent text-[96px] font-bold leading-none text-accent">
          {value}
          {suffix && <span className="text-[32px]">{suffix}</span>}
        </dd>
        <dd className="mt-auto pb-5 text-center font-display text-stat-label text-ink">
          {label}
        </dd>
      </div>
    </div>
  );
}

// Case study — centered heading, Harvard story + stats left, annotated
// gains chart right (Figma 67:1011). Reused on Home and /case-study.
export function CaseStudySection() {
  return (
    <section
      id="case-study"
      aria-labelledby="case-study-heading"
      className="mx-auto flex max-w-[1440px] flex-col items-center gap-[64px] px-5 py-[100px] tablet:px-[100px] tablet:py-[150px]"
    >
      <header className="flex max-w-[760px] flex-col items-center gap-4 text-center">
        <h2
          id="case-study-heading"
          className="font-display text-section-h2 font-normal text-ink"
        >
          {CASE_STUDY_CAPTION}
        </h2>
        <p className="text-body-l text-ink/80">{CASE_STUDY_HEADING}</p>
      </header>

      <div className="grid w-full items-center justify-center gap-[50px] tablet:grid-cols-[minmax(0,584px)_minmax(0,577px)]">
        <div className="flex flex-col gap-[46px]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <img
                src={CASE_STUDY_CREST_SRC}
                alt=""
                aria-hidden="true"
                className="h-[64px] w-auto"
                loading="lazy"
              />
              <div>
                <p className="font-display text-[26px] font-semibold uppercase tracking-[0.04em] leading-tight text-ink">
                  {CASE_STUDY_INSTITUTION}
                </p>
                <p className="text-body-m text-ink/70">{CASE_STUDY_DEPARTMENT}</p>
              </div>
            </div>
            <p className="max-w-[470px] text-body-l text-ink">{CASE_STUDY_BODY}</p>
          </div>

          <dl className="grid max-w-[542px] grid-cols-1 gap-6 min-[480px]:grid-cols-2 tablet:gap-[46px]">
            {CASE_STUDY_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </dl>
        </div>

        <img
          src={CASE_STUDY_CHART_SRC}
          alt={CASE_STUDY_CHART_ALT}
          className="mx-auto w-full max-w-[577px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
