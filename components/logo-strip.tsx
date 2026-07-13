/* eslint-disable @next/next/no-img-element */
import { PARTNER_LOGOS } from "@/lib/content";

// Scrolling marquee of partner institution logos. The list is duplicated and
// the track animates exactly -50%, with identical gaps inside and between the
// copies (gap + matching padding-right), so the loop has no visible seam.
// Respects reduced motion.
export function LogoStrip() {
  return (
    <section
      aria-label="Partner institutions"
      className="overflow-hidden py-[40px]"
    >
      <div className="flex w-max animate-marquee motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-[88px]">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
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
