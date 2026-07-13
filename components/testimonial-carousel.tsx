"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIAL_AUTOPLAY_SECONDS, TESTIMONIAL_CITE } from "@/lib/content";

export interface Testimonial {
  tag: string;
  front: string;
  back: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: readonly Testimonial[];
}

const EXIT_MS = 380;
const ENTER_MS = 520;

// Flashcard deck ported from the original Framer FlashcardTestimonials
// component: the top card flips on tap to reveal the full comment; arrows
// shuffle the deck with two cards peeking behind; auto-advances every few
// seconds, pausing on hover/focus and under reduced motion.
export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const count = testimonials.length;
  const [order, setOrder] = useState<number[]>(() =>
    testimonials.map((_, i) => i)
  );
  const [flipped, setFlipped] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [entering, setEntering] = useState(false);
  const [paused, setPaused] = useState(false);
  const animating = useRef(false);
  const reduceMotion = useReducedMotion();

  const advance = (direction: 1 | -1) => {
    if (animating.current || count < 2) return;
    animating.current = true;
    setFlipped(false);

    if (reduceMotion) {
      setOrder((current) => {
        const next = current.slice();
        if (direction === 1) next.push(next.shift() as number);
        else next.unshift(next.pop() as number);
        return next;
      });
      animating.current = false;
      return;
    }

    if (direction === 1) {
      // NEXT: slide the top card off, then rotate the deck
      setExiting(true);
      window.setTimeout(() => {
        setOrder((current) => {
          const next = current.slice();
          next.push(next.shift() as number);
          return next;
        });
        setExiting(false);
        animating.current = false;
      }, EXIT_MS);
    } else {
      // PREV: rotate first, then let the returning card drop in
      setOrder((current) => {
        const next = current.slice();
        next.unshift(next.pop() as number);
        return next;
      });
      setEntering(true);
      window.setTimeout(() => setEntering(false), 30);
      window.setTimeout(() => {
        animating.current = false;
      }, ENTER_MS);
    }
  };

  // Auto-advance, paused while hovered/focused and under reduced motion
  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const id = window.setInterval(
      () => advance(1),
      TESTIMONIAL_AUTOPLAY_SECONDS * 1000
    );
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reduceMotion, count]);

  const visible = order.slice(0, Math.min(3, count));
  const topIndex = order[0];

  return (
    <div
      className="relative mx-auto w-full max-w-[1100px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* DECK */}
      <div className="relative h-[440px] w-full tablet:h-[430px]">
        {visible
          .map((cardIndex, depth) => ({ cardIndex, depth }))
          .reverse()
          .map(({ cardIndex, depth }) => {
            const isTop = depth === 0;
            const card = testimonials[cardIndex];

            let transform = `translateY(${depth * 12}px) scale(${1 - depth * 0.045})`;
            let opacity = 1;
            let transition =
              "transform .45s cubic-bezier(.34,1.3,.5,1), opacity .45s ease";
            if (isTop && exiting) {
              transform = "translateX(120%) rotate(8deg)";
              opacity = 0;
              transition = "transform .5s cubic-bezier(.5,0,.7,.5), opacity .5s ease";
            }
            if (isTop && entering) {
              transform = "translateX(120%) rotate(8deg)";
              opacity = 0;
              transition = "none";
            }
            if (reduceMotion) transition = "none";

            return (
              <div
                key={cardIndex}
                className="absolute inset-0"
                style={{
                  zIndex: 10 - depth,
                  transform,
                  opacity,
                  transition,
                  perspective: "1200px",
                }}
              >
                <button
                  type="button"
                  disabled={!isTop}
                  onClick={isTop ? () => setFlipped((f) => !f) : undefined}
                  aria-label={
                    isTop
                      ? `Testimonial ${topIndex + 1} of ${count} — tap to flip`
                      : undefined
                  }
                  aria-pressed={isTop ? flipped : undefined}
                  tabIndex={isTop ? 0 : -1}
                  className="block h-full w-full cursor-pointer rounded-[14px] disabled:cursor-default"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: reduceMotion
                      ? "none"
                      : "transform .7s cubic-bezier(.4,0,.2,1)",
                    transform:
                      isTop && flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT */}
                  <span
                    className={`absolute inset-0 flex flex-col items-center justify-center rounded-[14px] border-2 border-inkcard bg-white p-6 text-center [backface-visibility:hidden] tablet:p-9 ${
                      isTop ? "shadow-[7px_9px_0px_#04243f]" : ""
                    } ${reduceMotion && isTop && flipped ? "invisible" : ""}`}
                  >
                    <span className="mb-5 font-accent text-attribution font-semibold uppercase text-accent">
                      {card.tag}
                    </span>
                    <span className="block max-w-3xl font-display text-quote text-inkcard">
                      “{card.front}”
                    </span>
                    {isTop && (
                      <span className="mt-6 font-accent text-attribution font-semibold text-accent">
                        {TESTIMONIAL_CITE}
                      </span>
                    )}
                  </span>
                  {/* BACK */}
                  <span
                    className={`absolute inset-0 flex flex-col items-center justify-center rounded-[14px] border-2 border-inkcard bg-inkcard p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] tablet:p-9 ${
                      isTop ? "shadow-[7px_9px_0px_#fcf8ec]" : ""
                    } ${reduceMotion && isTop && !flipped ? "invisible" : ""}`}
                  >
                    <span className="block max-w-3xl text-[clamp(17px,2vw,26px)] leading-normal text-cream">
                      {card.back}
                    </span>
                    <span className="mt-6 font-accent text-attribution font-semibold text-accent">
                      — {card.author}
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
      </div>

      {/* CONTROLS */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => advance(-1)}
          aria-label="Previous testimonial"
          className="grid h-[42px] w-[42px] place-items-center rounded-full border border-inkcard bg-transparent text-inkcard transition-colors hover:bg-offwhite"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="sr-only" aria-live="polite">
          Testimonial {topIndex + 1} of {count}
        </p>
        <button
          type="button"
          onClick={() => advance(1)}
          aria-label="Next testimonial"
          className="grid h-[42px] w-[42px] place-items-center rounded-full border border-inkcard bg-inkcard text-cream transition-opacity hover:opacity-85"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
