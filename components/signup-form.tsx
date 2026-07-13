"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Caption } from "./caption";
import { Heading } from "./heading";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface SubscribeErrorBody {
  errorCode?: string;
  message?: string;
}

const INPUT_CLASSES =
  "w-full rounded-xl border border-primary-highlight/25 bg-white px-4 py-3 text-body-m text-primary placeholder:text-primary-textsecondary/60 shadow-soft";

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
      className="mx-auto max-w-6xl px-5 py-20 tablet:px-8 tablet:py-28"
    >
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-soft tablet:p-12">
        <div className="mb-8 text-center">
          <Caption className="mb-3">Contact</Caption>
          <Heading as="h2" id="stay-updated-heading">
            Stay Updated
          </Heading>
          <p className="mt-3 text-body-m text-primary-textsecondary">
            Be the first to know about releases and updates
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate={false} className="flex flex-col gap-5">
          <div className="grid gap-5 tablet:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className="text-body-m font-medium text-primary">
                First name <span aria-hidden="true">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                required
                className={INPUT_CLASSES}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className="text-body-m font-medium text-primary">
                Last name <span aria-hidden="true">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
                className={INPUT_CLASSES}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-body-m font-medium text-primary">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={INPUT_CLASSES}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="institution" className="text-body-m font-medium text-primary">
              Institution/Organization <span aria-hidden="true">*</span>
            </label>
            <input
              id="institution"
              name="institution"
              autoComplete="organization"
              required
              className={INPUT_CLASSES}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-body-m font-medium text-primary">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${INPUT_CLASSES} resize-y`}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 accent-primary-highlight"
            />
            <label htmlFor="consent" className="text-body-m text-primary-200">
              I agree to receive updates about Collage AI{" "}
              <span aria-hidden="true">*</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={state === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-btn-gradient px-7 py-3 font-ui text-button font-medium text-white shadow-soft transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === "submitting" ? "Submitting…" : "Stay Updated"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <p aria-live="polite" className="min-h-5 text-center text-body-m">
            {state === "success" && (
              <span className="text-primary">
                Thanks — you’re on the list. We’ll be in touch.
              </span>
            )}
            {state === "error" && errorMessage && (
              <span className="text-primary-600">{errorMessage}</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
