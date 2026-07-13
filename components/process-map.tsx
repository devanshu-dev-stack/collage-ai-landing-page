import { Zap } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/content";

// "Collage in Action" — outlined process cards (Design / Deliver / Assess)
export function ProcessMap() {
  return (
    <div className="grid justify-center gap-5 tablet:grid-cols-[repeat(2,minmax(220px,340px))] tablet:gap-x-[260px] tablet:gap-y-[140px]">
      {PROCESS_STEPS.map((step, index) => (
        <article
          key={step.title}
          className={`min-h-[230px] border-2 border-ink bg-cream p-7 ${
            index === 2 ? "tablet:col-span-2 tablet:w-[340px] tablet:justify-self-center" : ""
          }`}
        >
          <div className="mb-4 text-accent" aria-hidden="true">
            <Zap className="h-7 w-7" />
          </div>
          <h3 className="mb-3 font-display text-card-h3 font-medium text-ink">
            {step.title}
          </h3>
          <p className="text-body-m text-ink">{step.text}</p>
        </article>
      ))}
    </div>
  );
}
