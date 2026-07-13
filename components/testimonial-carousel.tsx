"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: readonly Testimonial[];
}

const SWIPE_THRESHOLD_PX = 60;

// Sketch-styled quote card ("Testimonial Reel") with arrows + swipe
export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((current) => (current + delta + testimonials.length) % testimonials.length);
  };

  const onDragEnd = (_event: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD_PX) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD_PX) go(-1);
  };

  const active = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div className="overflow-visible">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.figure
            key={index}
            custom={direction}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 60 * direction }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -60 * direction }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            className="grid min-h-[300px] cursor-grab place-items-center rounded-[10px] border-[3px] border-ink bg-white/70 p-10 text-center shadow-sketch active:cursor-grabbing tablet:p-14"
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
          >
            <div>
              <figcaption className="mb-4 font-accent text-h3 text-accent">
                {active.author} · {active.role}
              </figcaption>
              <blockquote className="font-display text-card-h3 leading-snug text-ink">
                “{active.quote}”
              </blockquote>
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-cream text-ink transition-colors hover:bg-offwhite"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-body-s tabular-nums text-muted" aria-live="polite">
          {index + 1} / {testimonials.length}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-cream text-ink transition-colors hover:bg-offwhite"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
