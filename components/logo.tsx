// Text wordmark until the SVG logo assets from spec §1 are downloaded locally.
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      className={`font-display text-h3 font-normal tracking-tight ${
        inverse ? "text-inverse-text" : "text-primary"
      }`}
    >
      Collage{" "}
      <span className={inverse ? "text-primary-highlight" : "text-primary-highlight"}>
        AI
      </span>
    </span>
  );
}
