"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SIGNUP_ART_SRC, SIGNUP_HEADING, SIGNUP_SUBHEAD } from "@/lib/content";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface SubscribeErrorBody {
  errorCode?: string;
  message?: string;
}

// Figma input: cream fill, 10px radius, 20/16 padding, hairline border,
// soft inset shadow
const INPUT_CLASSES =
  "w-full rounded-[10px] border border-black/20 bg-cream px-5 py-4 text-[16px] text-ink shadow-[inset_0_0_12px_rgba(102,102,102,0.12)] placeholder:text-[#666666]/50";

const LABEL_CLASSES = "grid gap-2.5 text-label text-cream";

// Navy "Stay Updated" section — bookmark artwork left, form right (Figma 67:689)
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
      className="bg-ink text-cream"
    >
      <div className="mx-auto grid max-w-[1200px] items-end gap-[10px] px-5 pb-[150px] pt-[100px] tablet:grid-cols-[1fr_553px] tablet:px-10 tablet:pt-[200px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SIGNUP_ART_SRC}
          alt=""
          aria-hidden="true"
          className="mx-auto hidden w-full max-w-[471px] tablet:block"
          loading="lazy"
        />

        <div className="flex flex-col gap-10">
          <header className="flex flex-col items-center gap-4 text-center">
            <h2
              id="stay-updated-heading"
              className="font-display text-section-h2 font-normal text-cream"
            >
              {SIGNUP_HEADING}
            </h2>
            <p className="text-body-l text-cream/80">{SIGNUP_SUBHEAD}</p>
          </header>

          <form onSubmit={onSubmit} className="grid gap-[14px]">
            <div className="grid gap-[14px] tablet:grid-cols-2">
              <label className={LABEL_CLASSES} htmlFor="firstName">
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
              <label className={LABEL_CLASSES} htmlFor="lastName">
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

            <label className={LABEL_CLASSES} htmlFor="email">
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

            <label className={LABEL_CLASSES} htmlFor="institution">
              Institution/Organization *
              <input
                id="institution"
                name="institution"
                autoComplete="organization"
                required
                placeholder="University of Example"
                className={INPUT_CLASSES}
              />
            </label>

            <label className={LABEL_CLASSES} htmlFor="message">
              Message (Optional)
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about your needs or questions..."
                className={`${INPUT_CLASSES} min-h-[100px] resize-y`}
              />
            </label>

            <label
              className="flex items-center gap-2.5 pt-2 text-[14px] font-medium tracking-[-0.02em] text-cream"
              htmlFor="consent"
            >
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="h-4 w-4 rounded border border-[#f8f3e6] accent-accent"
              />
              I agree to receive updates about Collage AI *
            </label>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="mt-3 inline-flex h-[52px] w-full items-center rounded-[40px] bg-cream p-[2px] font-ui text-[20px] font-medium text-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="flex-1 text-center leading-none">
                {state === "submitting" ? "Submitting…" : "Stay Updated"}
              </span>
              <span
                className="grid aspect-square h-full place-items-center rounded-full bg-ink text-cream"
                aria-hidden="true"
              >
                <ArrowRight className="h-5 w-5" />
              </span>
            </button>

            <p aria-live="polite" className="min-h-5 text-center text-body-s">
              {state === "success" && (
                <span className="text-cream">
                  Thanks — you’re on the list. We’ll be in touch.
                </span>
              )}
              {state === "error" && errorMessage && (
                <span className="text-accent">{errorMessage}</span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
