import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 12_000) return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    body = JSON.parse(rawBody) as unknown;
  } catch { return NextResponse.json({ error: "Send a valid JSON request." }, { status: 400 }); }

  // Honeypot: accept quietly so automated senders don't learn which field caught them.
  if (body && typeof body === "object" && "website" in body && typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields.", fields: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  // Add shared-store/IP rate limiting here before delivery (for example, Upstash Redis).
  try {
    const result = await sendContactEmail(parsed.data);
    if (!result.ok && result.reason === "unconfigured") {
      return NextResponse.json({ error: "Email delivery is not configured yet. Please try again later." }, { status: 503 });
    }
    if (!result.ok) return NextResponse.json({ error: "We couldn't deliver your message. Please try again shortly." }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "We couldn't deliver your message. Please try again shortly." }, { status: 502 });
  }
}
