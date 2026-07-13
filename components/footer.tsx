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
    <footer className="border-t border-offwhite/10 bg-ink text-offwhite">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 tablet:grid-cols-[1.2fr_1fr] tablet:px-8 desktop:gap-20">
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="Collage AI — home" className="w-fit rounded-md">
            <Logo inverse />
          </Link>
          <p className="max-w-sm text-body-s leading-relaxed text-soft">
            {COMPANY_TAGLINE}
          </p>
          <p className="text-body-s text-soft">© 2026 {COMPANY_NAME}</p>
          <p className="text-body-s text-soft">{COMPANY_ADDRESS}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 tablet:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 font-display text-h3 font-medium text-offwhite">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="rounded-sm text-body-s text-soft transition-colors hover:text-offwhite"
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
    </footer>
  );
}
