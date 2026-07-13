"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SIGNUP_ART_SRC, SIGNUP_HEADING, SIGNUP_SUBHEAD } from "@/lib/content";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface SubscribeErrorBody {
  errorCode?: string;
  message?: string;
}

const INPUT_CLASSES =
  "w-full rounded-[10px] border-0 bg-offwhite px-4 py-3.5 text-body-m text-ink shadow-[inset_0_0_12px_rgba(102,102,102,0.12)] placeholder:text-muted/60";

// Navy "Stay Updated" section with the oversized COLLAGE AI bookmark art
export function SignupForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as SubscribeErrorBody;
        setErrorMessage(body.message ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setErrorMessage("Network error. Please try again.");
      setState("error");
    }
  };

  return (
    <section
      id="stay-updated"
      aria-labelledby="stay-updated-heading"
      className="bg-ink text-offwhite"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 py-24 tablet:grid-cols-2 tablet:gap-20 tablet:px-8 tablet:py-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SIGNUP_ART_SRC}
          alt=""
          aria-hidden="true"
          className="mx-auto hidden w-full max-w-md tablet:block"
          loading="lazy"
        />

        <form onSubmit={onSubmit} className="grid max-w-lg gap-4">
          <header className="mb-4">
            <h2
              id="stay-updated-heading"
              className="mb-3 font-display text-section-h2 font-medium text-offwhite"
            >
              {SIGNUP_HEADING}
            </h2>
            <p className="text-body-m text-soft">{SIGNUP_SUBHEAD}</p>
          </header>

          <div className="grid gap-4 tablet:grid-cols-2">
            <label className="grid gap-1.5 text-caption text-offwhite" htmlFor="firstName">
              First name *
              <input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                required
                placeholder="Jane"
                className={INPUT_CLASSES}
              />
            </label>
            <label className="grid gap-1.5 text-caption text-offwhite" htmlFor="lastName">
              Last name *
              <input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
                placeholder="Smith"
                className={INPUT_CLASSES}
              />
            </label>
          </div>

          <label className="grid gap-1.5 text-caption text-offwhite" htmlFor="email">
            Email *
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jane.smith@university.edu"
              className={INPUT_CLASSES}
            />
          </label>

          <label className="grid gap-1.5 text-caption text-offwhite" htmlFor="institution">
            Institution/Organization *
            <input
              id="institution"
              name="institution"
              autoComplete="organization"
              required
              placeholder="University of Somewhere"
              className={INPUT_CLASSES}
            />
          </label>

          <label className="grid gap-1.5 text-caption text-offwhite" htmlFor="message">
            Message (Optional)
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your needs or questions…"
              className={`${INPUT_CLASSES} min-h-[110px] resize-y`}
            />
          </label>

          <label className="flex items-start gap-2.5 text-body-s text-soft" htmlFor="consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 accent-accent"
            />
            I agree to receive updates about Collage AI *
          </label>

          <button
            type="submit"
            disabled={state === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-offwhite px-4 py-3 font-ui text-button font-bold text-ink transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === "submitting" ? "Submitting…" : "Stay Updated"}
            <span
              className="grid h-[18px] w-[18px] place-items-center rounded-full bg-ink text-offwhite"
              aria-hidden="true"
            >
              <ArrowRight className="h-3 w-3" />
            </span>
          </button>

          <p aria-live="polite" className="min-h-5 text-center text-body-s">
            {state === "success" && (
              <span className="text-offwhite">
                Thanks — you’re on the list. We’ll be in touch.
              </span>
            )}
            {state === "error" && errorMessage && (
              <span className="text-accent">{errorMessage}</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
