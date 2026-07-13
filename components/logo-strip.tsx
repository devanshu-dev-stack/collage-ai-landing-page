import { PARTNER_LOGOS } from "@/lib/content";

// TODO: swap text placeholders for real institution logo assets
export function LogoStrip() {
  return (
    <section
      aria-label="Partner institutions"
      className="border-b border-ink/10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-6 px-5 py-10 tablet:grid-cols-7 tablet:gap-8 tablet:px-8">
        {PARTNER_LOGOS.map((name) => (
          <div
            key={name}
            className="grid min-h-[58px] place-items-center text-center text-caption font-extrabold tracking-tight text-ink/90"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
