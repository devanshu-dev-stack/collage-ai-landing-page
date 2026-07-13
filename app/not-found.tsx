import { Button } from "@/components/button";
import { Caption } from "@/components/caption";
import { Heading } from "@/components/heading";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 bg-radial-1"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-40 text-center tablet:px-8">
        <Caption>404</Caption>
        <Heading as="h1">Page not found</Heading>
        <p className="max-w-md text-body-m text-primary-textsecondary">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button href="/" showArrow>
          Back to home
        </Button>
      </div>
    </section>
  );
}
