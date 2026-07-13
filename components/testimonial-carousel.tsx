"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIAL_CITE } from "@/lib/content";

export interface Testimonial {
  quote: string;
  author: string;
  why: string;
}

interface TestimonialCarouselProps {
  testimonials: readonly Testimonial[];
}

// Figma testimonial deck: stacked cards, white front with hard navy offset
// shadow; tapping flips to the navy back ("tap to see why →").
export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((current) => (current + delta + testimonials.length) % testimonials.length);
  };

  const active = testimonials[index];

  const face =
    "absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-[14px] border-2 border-inkcard p-9 text-center [backface-visibility:hidden]";

  return (
    <div
      className="relative mx-auto w-full max-w-[1100px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div className="relative px-3.5 pb-[18px] pt-3.5" style={{ perspective: "1600px" }}>
        {/* Decorative cards peeking from behind the deck */}
        <div
          aria-hidden="true"
          className="absolute inset-x-8 bottom-1 top-6 -rotate-1 rounded-[14px] border-2 border-inkcard bg-white"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-4 bottom-2 top-3 rotate-[0.6deg] rounded-[14px] border-2 border-inkcard bg-white"
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="relative"
          >
            <motion.button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              animate={reduceMotion ? undefined : { rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="relative block min-h-[420px] w-full cursor-pointer rounded-[14px] [transform-style:preserve-3d]"
              aria-pressed={flipped}
              aria-label={`Testimonial ${index + 1} of ${testimonials.length} — tap to flip`}
            >
              {/* Front */}
              <span
                className={`${face} bg-white shadow-[7px_9px_0px_#04243f] ${
                  reduceMotion && flipped ? "invisible" : ""
                }`}
              >
                <span className="font-accent text-attribution font-semibold uppercase text-accent">
                  {active.author}
                </span>
                <span className="block max-w-3xl font-display text-quote text-inkcard">
                  “{active.quote}”
                </span>
                <span className="font-accent text-attribution font-semibold text-accent">
                  {TESTIMONIAL_CITE}
                </span>
              </span>
              {/* Back */}
              <span
                className={`${face} bg-inkcard shadow-[7px_9px_0px_#fcf8ec] [transform:rotateY(180deg)] ${
                  reduceMotion && !flipped ? "invisible" : ""
                }`}
              >
                <span className="font-accent text-attribution font-semibold uppercase text-accent">
                  {active.author}
                </span>
                <span className="block max-w-3xl font-display text-quote text-cream">
                  {active.why}
                </span>
                <span className="font-accent text-attribution font-semibold text-accent">
                  ← tap to flip back
                </span>
              </span>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-[42px] w-[42px] place-items-center rounded-full border-2 border-ink bg-transparent text-ink transition-colors hover:bg-offwhite"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="sr-only" aria-live="polite">
          Testimonial {index + 1} of {testimonials.length}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-[42px] w-[42px] place-items-center rounded-full border-2 border-ink bg-ink text-cream transition-opacity hover:opacity-85"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
