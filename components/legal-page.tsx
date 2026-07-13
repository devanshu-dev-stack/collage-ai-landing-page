import Link from "next/link";
import { Heading } from "./heading";
import type { LegalDocument } from "@/lib/legal-content";

interface LegalPageProps {
  document: LegalDocument;
  // Sidebar is sticky on /privacy, static on /terms (spec §11)
  stickySidebar: boolean;
}

export function LegalPage({ document, stickySidebar }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 tablet:px-8 tablet:py-24">
      <header className="mb-12 max-w-3xl">
        <Heading as="h1">{document.title}</Heading>
        <p className="mt-4 text-body-m text-primary-textsecondary">
          {document.updated}
        </p>
        <p className="mt-6 text-body-l salt text-primary-200">{document.intro}</p>
      </header>

      <div className="grid gap-12 tablet:grid-cols-[240px_1fr]">
        <nav
          aria-label={`${document.title} table of contents`}
          className={`hidden tablet:block ${stickySidebar ? "self-start" : ""}`}
        >
          <div className={stickySidebar ? "sticky top-28" : ""}>
            <h2 className="mb-4 font-body text-caption font-medium uppercase text-primary-textsecondary">
              On this page
            </h2>
            <ul className="flex flex-col gap-2 border-l border-primary-highlight/20 pl-4">
              {document.sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className="rounded-sm text-body-m text-primary-200 transition-colors hover:text-primary"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <article className="max-w-3xl">
          {document.sections.map((section) => (
            <section key={section.id} className="mb-12 scroll-mt-28" id={section.id}>
              <h2 className="mb-4 font-display text-h3 text-primary tablet:text-[24px]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-body-m leading-relaxed text-primary-200">
                  {paragraph}
                </p>
              ))}
              {section.subsections?.map((subsection) => (
                <section key={subsection.id} className="mt-6 scroll-mt-28" id={subsection.id}>
                  <h3 className="mb-3 font-display text-h3 text-primary">
                    {subsection.title}
                  </h3>
                  {subsection.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-4 text-body-m leading-relaxed text-primary-200"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
