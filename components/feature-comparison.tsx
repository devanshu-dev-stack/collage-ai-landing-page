import { Check, X } from "lucide-react";
import { Heading } from "./heading";

export interface FeatureComparisonItem {
  title: string;
  withIt: string;
  withoutIt: string;
}

interface FeatureComparisonProps {
  items: readonly FeatureComparisonItem[];
}

// "With it / Without it" comparison blocks on the feature gradient (spec §8)
export function FeatureComparison({ items }: FeatureComparisonProps) {
  return (
    <div className="grid gap-6 tablet:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="flex flex-col gap-5 rounded-3xl bg-feature-gradient p-7 shadow-soft"
        >
          <Heading as="h3">{item.title}</Heading>

          <div className="flex flex-col gap-3 rounded-2xl bg-white/70 p-5">
            <p className="flex items-start gap-2 text-body-m text-primary">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-primary-highlight"
                aria-hidden="true"
              />
              <span>
                <span className="font-medium">With Collage:</span> {item.withIt}
              </span>
            </p>
            <p className="flex items-start gap-2 text-body-m text-primary-textsecondary">
              <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                <span className="font-medium">Without:</span> {item.withoutIt}
              </span>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
