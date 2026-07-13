import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-grid-paper bg-[length:420px_420px]">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-40 text-center tablet:px-8">
        <p className="text-caption font-bold uppercase text-accent">404</p>
        <h1 className="font-display text-[clamp(34px,4.5vw,60px)] font-medium leading-tight tracking-tight text-ink">
          Page not found
        </h1>
        <p className="max-w-md text-body-m text-muted">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
