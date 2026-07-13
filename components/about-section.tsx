import { Caption } from "./caption";
import { Heading } from "./heading";
import { ABOUT_BODY, ABOUT_CAPTION, ABOUT_HEADING } from "@/lib/content";

// Reused on Home and Case Study (spec §8–9)
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-5 py-20 tablet:px-8 tablet:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Caption className="mb-4">{ABOUT_CAPTION}</Caption>
        <Heading as="h2" id="about-heading">
          {ABOUT_HEADING}
        </Heading>
        <p className="salt mt-6 text-body-l text-primary-200">{ABOUT_BODY}</p>
      </div>
    </section>
  );
}
