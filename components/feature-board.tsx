import { Sparkles, Grid2x2 } from "lucide-react";
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

// Pinned positions on the desktop cork-board canvas (mobile stacks them)
const NOTE_POSITIONS: readonly string[] = [
  "tablet:left-[13%] tablet:top-[11%]",
  "tablet:left-[43%] tablet:top-[10%]",
  "tablet:right-[10%] tablet:top-[9%]",
  "tablet:left-[12%] tablet:top-[49%]",
  "tablet:left-[32%] tablet:top-[63%]",
  "tablet:right-[27%] tablet:top-[43%]",
];

// "Release Features" — sticky notes pinned to a grid board, as on the live site
export function FeatureBoard() {
  return (
    <div className="relative grid gap-5 border border-ink/10 bg-grid-board bg-[length:160px_160px] p-6 tablet:block tablet:min-h-[1000px] tablet:bg-[length:220px_220px] tablet:p-0">
      {FEATURE_NOTES.map((note, index) => (
        <article
          key={note.title}
          className={`relative w-full min-h-[210px] border border-ink/20 p-6 pt-9 shadow-note tablet:absolute tablet:w-[230px] tablet:rotate-[var(--rotate)] ${NOTE_COLORS[note.color]} ${NOTE_POSITIONS[index]}`}
          style={{ "--rotate": `${note.rotate}deg` } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink"
          />
          <div className="mb-4 text-accent" aria-hidden="true">
            {index % 2 ? (
              <Sparkles className="h-5 w-5" />
            ) : (
              <Grid2x2 className="h-5 w-5" />
            )}
          </div>
          <h3 className="mb-2.5 font-display text-h3 font-medium text-ink">
            {note.title}
          </h3>
          <p className="text-body-s leading-relaxed text-ink">{note.text}</p>
        </article>
      ))}
    </div>
  );
}
