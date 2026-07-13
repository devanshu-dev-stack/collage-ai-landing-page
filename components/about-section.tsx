import { ABOUT_HEADING, ABOUT_KICKER, ABOUT_PARAGRAPHS } from "@/lib/content";

// About block — serif kicker, orange heading, bold body (as on the live site).
// Reused on Home and Case Study.
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-5xl px-5 py-16 tablet:px-8 tablet:py-20"
    >
      <p className="mb-1 font-display text-kicker text-ink">{ABOUT_KICKER}</p>
      <h2 id="about-heading" className="mb-5 text-h3 font-semibold text-accent">
        {ABOUT_HEADING}
      </h2>
      {ABOUT_PARAGRAPHS.map((paragraph) => (
        <p
          key={paragraph}
          className="mb-4 max-w-[850px] text-body-m font-semibold leading-relaxed text-ink"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}
