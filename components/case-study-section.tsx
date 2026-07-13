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

// Case study — centered heading, Harvard story + exported stat cards left,
// annotated gains chart right. Stacks to one column on mobile.
export function CaseStudySection() {
  return (
    <section
      id="case-study"
      aria-labelledby="case-study-heading"
      className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-[100px] tablet:gap-[64px] tablet:px-[100px] tablet:py-[150px]"
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

      <div className="grid w-full items-center justify-center gap-12 tablet:grid-cols-[minmax(0,584px)_minmax(0,577px)] tablet:gap-[50px]">
        <div className="flex flex-col gap-10 tablet:gap-[46px]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <img
                src={CASE_STUDY_CREST_SRC}
                alt=""
                aria-hidden="true"
                className="h-[52px] w-auto tablet:h-[64px]"
                loading="lazy"
              />
              <div>
                <p className="font-display text-[22px] font-semibold uppercase leading-tight tracking-[0.04em] text-ink tablet:text-[26px]">
                  {CASE_STUDY_INSTITUTION}
                </p>
                <p className="text-body-m text-ink/70">{CASE_STUDY_DEPARTMENT}</p>
              </div>
            </div>
            <p className="max-w-[470px] text-body-l text-ink">{CASE_STUDY_BODY}</p>
          </div>

          {/* Exported stat cards — brush-stroke numerals from the design */}
          <dl className="grid max-w-[542px] grid-cols-1 gap-6 min-[480px]:grid-cols-2 tablet:gap-[46px]">
            {CASE_STUDY_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">
                  {stat.value}
                  {stat.suffix ?? ""} — {stat.label}
                </dt>
                <dd>
                  <img
                    src={stat.imageSrc}
                    alt=""
                    className="w-full max-w-[248px]"
                    loading="lazy"
                  />
                </dd>
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
