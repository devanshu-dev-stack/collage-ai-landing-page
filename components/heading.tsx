import type { JSX } from "react";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const LEVEL_CLASSES: Record<HeadingLevel, string> = {
  h1: "font-display text-h1 font-normal",
  h2: "font-display text-h2-l font-normal salt",
  h3: "font-display text-h3 font-normal",
};

export function Heading({ as = "h2", children, className = "", id }: HeadingProps) {
  const Tag: keyof JSX.IntrinsicElements = as;
  return (
    <Tag id={id} className={`${LEVEL_CLASSES[as]} text-primary ${className}`}>
      {children}
    </Tag>
  );
}
