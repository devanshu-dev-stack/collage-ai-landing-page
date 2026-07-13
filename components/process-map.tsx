/* eslint-disable @next/next/no-img-element */
import { HandleFrame } from "./handle-frame";
import { PROCESS_STEPS } from "@/lib/content";

// Hand-drawn icons from the Framer export, matching the reference:
// pencil/paper (Design), hand + squares (Deliver), orange cards (Assess)
const STEP_ICONS: readonly string[] = [
  "/images/icons/note-courses.png",
  "/images/icons/note-lms.png",
  "/images/icons/note-grading.png",
];

// Open-chevron arrowhead for the dashed connectors
function Chevron({
  direction,
  className,
}: {
  direction: "right" | "left" | "up";
  className: string;
}) {
  const rotation = { right: "rotate-0", left: "rotate-180", up: "-rotate-90" }[direction];
  return (
    <svg
      viewBox="0 0 18 18"
      className={`${className} ${rotation} h-[38px] w-[38px] text-ink`}
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 2.5 L14 9 L5 15.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

// "Collage in Action" — Design / Deliver / Assess cycle: handle-framed cards
// joined by dashed connectors with chevron arrowheads (desktop).
export function ProcessMap() {
  return (
    <div className="relative mx-auto max-w-[1040px]">
      {/* Dashed connectors, desktop only */}
      <div aria-hidden="true" className="absolute inset-0 hidden tablet:block">
        {/* Design → Deliver */}
        <div className="absolute left-[35.5%] right-[47%] top-[19%] border-t-2 border-dashed border-ink" />
        <Chevron direction="right" className="absolute right-[44.2%] top-[19%] -translate-y-1/2" />
        {/* Deliver → Assess */}
        <div className="absolute bottom-[22.5%] right-[8%] top-[42%] border-l-2 border-dashed border-ink" />
        <div className="absolute bottom-[22.5%] right-[8%] w-[13%] border-t-2 border-dashed border-ink" />
        <Chevron direction="left" className="absolute bottom-[22.5%] right-[20%] -translate-y-1/2" />
        {/* Assess → Design */}
        <div className="absolute bottom-[27%] left-[9%] right-[62%] border-t-2 border-dashed border-ink" />
        <div className="absolute bottom-[27%] left-[9%] top-[45%] border-l-2 border-dashed border-ink" />
        <Chevron direction="up" className="absolute left-[9%] top-[42%] -translate-x-1/2" />
      </div>

      <div className="grid gap-6 tablet:grid-cols-[34%_35%] tablet:justify-between tablet:gap-y-28">
        {PROCESS_STEPS.map((step, index) => (
          <HandleFrame
            key={step.title}
            className={
              index === 2
                ? "tablet:col-span-2 tablet:w-[34%] tablet:justify-self-center tablet:translate-x-[10%]"
                : ""
            }
          >
            <article className="bg-cream/60 p-7">
              <img
                src={STEP_ICONS[index]}
                alt=""
                aria-hidden="true"
                className="mb-5 h-14 w-auto"
                loading="lazy"
              />
              <h3 className="mb-4 font-display text-[40px] font-normal leading-none tracking-[-0.03em] text-ink">
                {step.title}
              </h3>
              <p className="text-[19px] leading-[1.35] tracking-[-0.01em] text-ink">
                {step.text}
              </p>
            </article>
          </HandleFrame>
        ))}
      </div>
    </div>
  );
}
