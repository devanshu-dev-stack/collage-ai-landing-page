import { NextResponse } from "next/server";

interface SubscribePayload {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  message: string;
  consent: boolean;
}

interface FieldError {
  field: string;
  errorCode: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

function parsePayload(body: unknown): { payload?: SubscribePayload; errors: FieldError[] } {
  const errors: FieldError[] = [];
  if (typeof body !== "object" || body === null) {
    return { errors: [{ field: "body", errorCode: "INVALID_BODY" }] };
  }
  const record = body as Record<string, unknown>;

  const requireString = (field: string, maxLength: number): string => {
    const value = record[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      errors.push({ field, errorCode: "REQUIRED" });
      return "";
    }
    if (value.length > maxLength) {
      errors.push({ field, errorCode: "TOO_LONG" });
      return "";
    }
    return value.trim();
  };

  const firstName = requireString("firstName", MAX_FIELD_LENGTH);
  const lastName = requireString("lastName", MAX_FIELD_LENGTH);
  const email = requireString("email", MAX_FIELD_LENGTH);
  const institution = requireString("institution", MAX_FIELD_LENGTH);

  const rawMessage = record["message"];
  const message = typeof rawMessage === "string" ? rawMessage.slice(0, MAX_MESSAGE_LENGTH) : "";

  // Checkbox arrives as "on" from FormData, or boolean from JSON clients
  const consent = record["consent"] === "on" || record["consent"] === true;

  if (email && !EMAIL_PATTERN.test(email)) {
    errors.push({ field: "email", errorCode: "INVALID_EMAIL" });
  }
  if (!consent) {
    errors.push({ field: "consent", errorCode: "CONSENT_REQUIRED" });
  }

  if (errors.length > 0) return { errors };
  return {
    payload: { firstName, lastName, email, institution, message, consent },
    errors,
  };
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { errorCode: "INVALID_JSON", message: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { payload, errors } = parsePayload(body);
  if (!payload) {
    return NextResponse.json(
      {
        errorCode: "VALIDATION_FAILED",
        message: "Please fill in all required fields.",
        fields: errors,
      },
      { status: 422 }
    );
  }

  // TODO: wire to an email/marketing provider (e.g. Loops, Mailchimp) using an
  // API key from process.env.SUBSCRIBE_PROVIDER_API_KEY. Until then this route
  // accepts the submission and discards it.

  return NextResponse.json({ ok: true }, { status: 200 });
}
