/* eslint-disable @next/next/no-img-element */
import { PARTNER_LOGOS } from "@/lib/content";

// Scrolling marquee of partner institution logos — Figma: 200px cells with
// large centered logos. Duplicated once for the seamless loop; respects
// reduced motion.
export function LogoStrip() {
  return (
    <section
      aria-label="Partner institutions"
      className="overflow-hidden py-[20px]"
    >
      <div className="flex w-max animate-marquee gap-[10px] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-[10px]"
          >
            {PARTNER_LOGOS.map((logo) => (
              <li
                key={logo.name}
                className="grid h-[160px] w-[200px] shrink-0 place-items-center"
              >
                <img
                  src={logo.src}
                  alt={copy === 0 ? logo.name : ""}
                  className="max-h-[95px] max-w-[160px] object-contain"
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
