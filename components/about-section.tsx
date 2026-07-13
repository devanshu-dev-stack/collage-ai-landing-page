import { ABOUT_HEADING, ABOUT_KICKER, ABOUT_PARAGRAPHS } from "@/lib/content";

// About block — Copernicus kicker, orange subheading, Geist body (Figma:
// left column, 500px wide). Reused on Home and Case Study.
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1440px] px-5 py-[100px] tablet:px-[100px]"
    >
      <div className="flex max-w-[520px] flex-col gap-4">
        <p className="font-display text-section-h2 text-ink">{ABOUT_KICKER}</p>
        <h2 id="about-heading" className="text-body-l text-accent">
          {ABOUT_HEADING}
        </h2>
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph} className="text-body-l text-ink/80">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
