interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

// "Tag / Caption" style — uppercase, tracked-out, Text Secondary (spec §5)
export function Caption({ children, className = "" }: CaptionProps) {
  return (
    <p
      className={`font-body text-caption font-medium uppercase text-primary-textsecondary ${className}`}
    >
      {children}
    </p>
  );
}
