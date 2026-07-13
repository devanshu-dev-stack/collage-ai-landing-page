import {
  BookOpenText,
  ChartLine,
  ClipboardCheck,
  MessagesSquare,
  PencilLine,
  Workflow,
} from "lucide-react";
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

// Icons stand in for the export's hand-drawn illustrations, one per note
const NOTE_ICONS = [Workflow, PencilLine, BookOpenText, MessagesSquare, ChartLine, ClipboardCheck] as const;

// "Release Features" — sticky notes pinned to a grid board, as on the live site
export function FeatureBoard() {
  return (
    <div className="relative grid gap-5 border border-ink/10 bg-grid-board bg-[length:160px_160px] p-6 tablet:block tablet:min-h-[900px] tablet:bg-[length:220px_220px] tablet:p-0">
      {FEATURE_NOTES.map((note, index) => {
        const Icon = NOTE_ICONS[index];
        return (
          <article
            key={note.title}
            className={`relative w-full border border-ink/10 p-6 pt-10 shadow-note tablet:absolute tablet:w-[250px] tablet:rotate-[var(--rotate)] ${NOTE_COLORS[note.color]} ${NOTE_POSITIONS[index]}`}
            style={{ "--rotate": `${note.rotate}deg` } as React.CSSProperties}
          >
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink"
            />
            <div
              className="mb-4 grid h-9 w-9 place-items-center rounded-md bg-offwhite/90 text-accent shadow-note"
              aria-hidden="true"
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2.5 font-display text-h3 font-medium text-ink">
              {note.title}
            </h3>
            <p className="text-body-s leading-relaxed text-ink">{note.text}</p>
          </article>
        );
      })}
    </div>
  );
}
