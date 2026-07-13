/* eslint-disable @next/next/no-img-element */
import { PARTNER_LOGOS } from "@/lib/content";

// Scrolling marquee of partner institution logos. The list renders four
// times so the track always covers wide viewports, and the animation moves
// exactly -50% (two list-widths) with identical gaps inside and between
// copies — an infinite loop with no visible end. Respects reduced motion.
export function LogoStrip() {
  return (
    <section
      aria-label="Partner institutions"
      className="overflow-hidden py-[40px]"
    >
      <div className="flex w-max animate-marquee motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-[88px]">
        {[0, 1, 2, 3].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center gap-[88px] pr-[88px]"
          >
            {PARTNER_LOGOS.map((logo) => (
              <li key={logo.name} className="flex h-[120px] shrink-0 items-center">
                <img
                  src={logo.src}
                  alt={copy === 0 ? logo.name : ""}
                  className="max-h-[95px] max-w-[170px] object-contain"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
