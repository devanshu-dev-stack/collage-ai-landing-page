/* eslint-disable @next/next/no-img-element */
// Brand wordmark exported from the Figma design file (583×165 vector).
// `inverse` swaps to the cream version for dark surfaces.
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <img
      src={inverse ? "/images/logo-light.svg" : "/images/logo.svg"}
      alt="Collage AI"
      className="h-[26px] w-auto"
    />
  );
}
