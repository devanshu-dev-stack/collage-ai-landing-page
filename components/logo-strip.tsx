/* eslint-disable @next/next/no-img-element */
import { PARTNER_LOGOS } from "@/lib/content";

// Scrolling marquee of partner institution logos (assets from the Framer
// export). Duplicated once for the seamless loop; respects reduced motion.
export function LogoStrip() {
  return (
    <section
      aria-label="Partner institutions"
      className="overflow-hidden border-b border-ink/10 py-9"
    >
      <div className="flex w-max animate-marquee gap-16 motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-16"
          >
            {PARTNER_LOGOS.map((logo) => (
              <li key={logo.name} className="shrink-0">
                <img
                  src={logo.src}
                  alt={copy === 0 ? logo.name : ""}
                  className="h-12 w-auto object-contain"
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
