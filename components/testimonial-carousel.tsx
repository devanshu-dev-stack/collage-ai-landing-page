"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

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
const MAX_RATING = 5;

function Rating({ value }: { value: number }) {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`Rated ${value} out of ${MAX_RATING} stars`}
    >
      {Array.from({ length: MAX_RATING }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`h-4 w-4 ${
            i < value
              ? "fill-primary-highlight text-primary-highlight"
              : "fill-none text-primary-textsecondary/40"
          }`}
        />
      ))}
    </div>
  );
}

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
      <div className="overflow-hidden">
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
            className="flex cursor-grab flex-col gap-6 rounded-3xl bg-white p-8 shadow-soft active:cursor-grabbing tablet:p-12"
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
          >
            <Rating value={active.rating} />
            <blockquote className="font-display text-body-l salt text-primary">
              “{active.quote}”
            </blockquote>
            <figcaption className="text-body-m text-primary-textsecondary">
              <span className="font-medium text-primary">{active.author}</span>
              {" — "}
              {active.role}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="rounded-full border border-primary-highlight/30 bg-white p-3 text-primary shadow-soft transition-colors hover:bg-primary-bg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-body-m tabular-nums text-primary-textsecondary" aria-live="polite">
          {index + 1} / {testimonials.length}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="rounded-full border border-primary-highlight/30 bg-white p-3 text-primary shadow-soft transition-colors hover:bg-primary-bg"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
