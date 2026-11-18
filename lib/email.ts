import "server-only";
import { Resend } from "resend";
import type { ContactInput } from "@/lib/validations/contact";

export async function sendContactEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return { ok: false as const, reason: "unconfigured" as const };

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from, to, replyTo: input.email,
    subject: `Portfolio inquiry: ${input.subject}`,
    html: renderContactEmail(input),
  });
  if (result.error) return { ok: false as const, reason: "delivery" as const };
  return { ok: true as const };
}

function escapeHtml(value: string) {
  const replacements: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (character) => replacements[character]);
}

function renderContactEmail({ name, email, subject, message }: Pick<ContactInput, "name" | "email" | "subject" | "message">) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
  return `<div style="font-family:Arial,sans-serif;color:#172033;line-height:1.6"><h1 style="font-size:20px">New portfolio message</h1><p><strong>From:</strong> ${safeName} (${safeEmail})</p><p><strong>Subject:</strong> ${safeSubject}</p><p>${safeMessage}</p></div>`;
}
