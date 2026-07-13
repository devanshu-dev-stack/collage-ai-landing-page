/* eslint-disable @next/next/no-img-element */
import { FEATURE_NOTES } from "@/lib/content";
import type { NoteColor } from "@/lib/content";

const NOTE_COLORS: Record<NoteColor, string> = {
  green: "bg-note-green",
  yellow: "bg-note-yellow",
  gold: "bg-note-gold",
  blue: "bg-note-blue",
  purple: "bg-note-purple",
  lavender: "bg-note-lavender",
};

// Pinned positions on the desktop board canvas (mobile stacks them)
const NOTE_POSITIONS: readonly string[] = [
  "tablet:left-[10%] tablet:top-[8%]",
  "tablet:left-[41%] tablet:top-[6%]",
  "tablet:right-[8%] tablet:top-[5%]",
  "tablet:left-[9%] tablet:top-[52%]",
  "tablet:left-[36%] tablet:top-[60%]",
  "tablet:right-[16%] tablet:top-[42%]",
];

// Hand-drawn icons extracted from the Framer note cards, one per note
const NOTE_ICONS: readonly string[] = [
  "/images/icons/note-lms.png",
  "/images/icons/note-courses.png",
  "/images/icons/note-library.png",
  "/images/icons/note-faculty.png",
  "/images/icons/note-analytics.png",
  "/images/icons/note-grading.png",
];

// "Release Features" — sticky notes pinned to the exported board canvas
// (grid + selection handles), as on the live site.
export function FeatureBoard() {
  return (
    <div
      className="relative grid gap-5 p-6 tablet:block tablet:min-h-[900px] tablet:p-0"
      style={{
        backgroundImage: "url(/images/board-grid.png)",
        backgroundSize: "100% 100%",
      }}
    >
      {FEATURE_NOTES.map((note, index) => (
        <article
          key={note.title}
          className={`relative w-full border border-ink/10 p-6 pt-10 shadow-note tablet:absolute tablet:w-[250px] tablet:rotate-[var(--rotate)] ${NOTE_COLORS[note.color]} ${NOTE_POSITIONS[index]}`}
          style={{ "--rotate": `${note.rotate}deg` } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink"
          />
          <img
            src={NOTE_ICONS[index]}
            alt=""
            aria-hidden="true"
            className="mb-4 h-12 w-auto"
            loading="lazy"
          />
          <h3 className="mb-2.5 font-display text-h3 font-medium text-ink">
            {note.title}
          </h3>
          <p className="text-body-s leading-relaxed text-ink">{note.text}</p>
        </article>
      ))}
    </div>
  );
}
