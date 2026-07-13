// Canvas "selection handles" motif — hairline border with square corner
// handles, used by the process cards and case-study stat cards.
export function HandleFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handle = "absolute z-10 h-[9px] w-[9px] bg-ink";
  return (
    <div className={`relative ${className}`}>
      <span aria-hidden="true" className={`${handle} -left-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -right-1 -top-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -left-1`} />
      <span aria-hidden="true" className={`${handle} -bottom-1 -right-1`} />
      <div className="h-full w-full border border-ink">{children}</div>
    </div>
  );
}
