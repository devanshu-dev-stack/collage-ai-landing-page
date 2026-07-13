import Link from "next/link";
import { Logo } from "./logo";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  FOOTER_COLUMNS,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-inverse-bg text-inverse-text">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 tablet:grid-cols-[1.2fr_1fr] tablet:px-8 desktop:gap-20">
        <div className="flex flex-col gap-5">
          <Link href="/" aria-label="Collage AI — home" className="w-fit rounded-md">
            <Logo inverse />
          </Link>
          <p className="max-w-sm text-body-m text-inverse-text/70">
            {COMPANY_TAGLINE}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 tablet:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 font-display text-h3 text-inverse-text">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="rounded-sm text-body-m text-inverse-text/70 transition-colors hover:text-inverse-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-inverse-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-body-m text-inverse-text/60 tablet:flex-row tablet:items-center tablet:justify-between tablet:px-8">
          <p>© 2026 {COMPANY_NAME}</p>
          <p>{COMPANY_ADDRESS}</p>
        </div>
      </div>
    </footer>
  );
}
