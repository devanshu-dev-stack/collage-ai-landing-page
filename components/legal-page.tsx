import Link from "next/link";
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
        <h1 className="font-display text-[clamp(34px,4vw,56px)] font-medium leading-tight tracking-tight text-ink">
          {document.title}
        </h1>
        <p className="mt-4 text-body-s text-muted">{document.updated}</p>
        <p className="mt-6 text-body-m leading-relaxed text-ink">{document.intro}</p>
      </header>

      <div className="grid gap-12 tablet:grid-cols-[240px_1fr]">
        <nav
          aria-label={`${document.title} table of contents`}
          className={`hidden tablet:block ${stickySidebar ? "self-start" : ""}`}
        >
          <div className={stickySidebar ? "sticky top-24" : ""}>
            <h2 className="mb-4 text-caption font-bold uppercase text-muted">
              On this page
            </h2>
            <ul className="flex flex-col gap-2 border-l border-line pl-4">
              {document.sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className="rounded-sm text-body-s text-muted transition-colors hover:text-accent"
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
            <section key={section.id} className="mb-12 scroll-mt-24" id={section.id}>
              <h2 className="mb-4 font-display text-card-h3 font-medium text-ink">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-body-m leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              {section.subsections?.map((subsection) => (
                <section key={subsection.id} className="mt-6 scroll-mt-24" id={subsection.id}>
                  <h3 className="mb-3 font-display text-h3 font-medium text-ink">
                    {subsection.title}
                  </h3>
                  {subsection.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-4 text-body-m leading-relaxed text-muted"
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
