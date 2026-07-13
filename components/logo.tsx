// Text wordmark matching the live site brand ("Collage" serif + "Ai" sans)
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      className={`font-display text-[19px] font-bold tracking-tight ${
        inverse ? "text-offwhite" : "text-ink"
      }`}
    >
      Collage
      <span className="ml-px font-body font-bold">Ai</span>
    </span>
  );
}
