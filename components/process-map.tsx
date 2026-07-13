import { ClipboardCheck, PencilLine, Presentation } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/content";

const STEP_ICONS = [PencilLine, Presentation, ClipboardCheck] as const;

// "Collage in Action" — outlined cards in a cycle, joined by dashed arrows
// on desktop (Design → Deliver → Assess → back to Design).
export function ProcessMap() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Dashed connectors, desktop only */}
      <svg
        aria-hidden="true"
        viewBox="0 0 900 620"
        className="pointer-events-none absolute inset-0 hidden h-full w-full text-ink tablet:block"
        fill="none"
      >
        <defs>
          <marker
            id="arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
          </marker>
        </defs>
        <path
          d="M330 130 H 540"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M700 300 V 370 H 620"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M300 470 H 180 V 300"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          markerEnd="url(#arrowhead)"
        />
      </svg>

      <div className="grid gap-5 tablet:grid-cols-[minmax(220px,340px)_minmax(220px,340px)] tablet:justify-between tablet:gap-y-24">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = STEP_ICONS[index];
          return (
            <article
              key={step.title}
              className={`border-2 border-ink bg-cream p-7 ${
                index === 2 ? "tablet:col-span-2 tablet:w-[360px] tablet:justify-self-center" : ""
              }`}
            >
              <div className="mb-4 text-accent" aria-hidden="true">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-card-h3 font-medium text-ink">
                {step.title}
              </h3>
              <p className="text-body-s leading-relaxed text-ink">{step.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
