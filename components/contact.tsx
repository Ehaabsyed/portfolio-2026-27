"use client";

import React, { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

const initialFields: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("syedehaab12@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const updateField = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setStatusMessage("Transmitting your message...");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        fields?: Record<string, string[]>;
      };

      if (!res.ok) {
        if (data.fields) {
          const fieldErrors: Record<string, string> = {};
          for (const [key, val] of Object.entries(data.fields)) {
            if (val?.[0]) fieldErrors[key] = val[0];
          }
          setErrors(fieldErrors);
        }
        setStatus("error");
        setStatusMessage(data.error || "Submission could not be completed. Please review errors.");
        return;
      }

      setFields(initialFields);
      setStatus("success");
      setStatusMessage("Message delivered successfully. I will respond to your inquiry shortly.");
    } catch {
      setStatus("error");
      setStatusMessage("Network error: Could not reach the server. Please check your connection or contact directly via email.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 relative tech-grid-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4 uppercase tracking-wider">
          <MessageSquare className="w-4 h-4 text-zinc-300" />
          <span>INDEX: 05 // INITIATE DIRECT CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries and Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&apos;s build <br />
                <span className="text-zinc-400">something durable.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
                Whether you need a performant freelance web application, want to collaborate on AI retrieval systems, or have an engineering internship opportunity, my inbox is open.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="p-4 rounded-lg bg-[#111319] border border-white/[0.08] flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white/[0.04] text-zinc-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Direct Email
                    </div>
                    <a
                      href="mailto:syedehaab12@gmail.com"
                      className="text-zinc-200 hover:text-white transition-colors"
                    >
                      syedehaab12@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 text-zinc-400 hover:text-white rounded transition-colors cursor-pointer"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-lg bg-[#111319] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white/[0.04] text-zinc-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Direct Phone
                    </div>
                    <a
                      href="tel:+918217201069"
                      className="text-zinc-200 hover:text-white transition-colors"
                    >
                      +91 8217201069
                    </a>
                  </div>
                </div>
                <span className="text-[10px] text-zinc-500">VOICE / WA</span>
              </div>

              {/* Location */}
              <div className="p-4 rounded-lg bg-[#111319] border border-white/[0.08] flex items-center gap-3">
                <div className="p-2 rounded bg-white/[0.04] text-zinc-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Location Base
                  </div>
                  <div className="text-zinc-200">
                    Mangalore, Karnataka, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Ehaabsyed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#111319] hover:bg-[#181a22] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/syed-mohammed-ehaab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#111319] hover:bg-[#181a22] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Next.js + Resend Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card rounded-lg p-6 sm:p-8 bg-[#111319] border border-white/[0.08] relative">
              <div className="crosshair-corner crosshair-tl" />
              <div className="crosshair-corner crosshair-tr" />
              <div className="crosshair-corner crosshair-bl" />
              <div className="crosshair-corner crosshair-br" />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Direct Inquiries // Server Route
                </span>
                <span className="text-[10px] font-mono text-zinc-300 bg-white/[0.06] border border-white/[0.1] px-2 py-0.5 rounded">
                  ZOD + RESEND
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider"
                    >
                      Your Name <span className="text-zinc-200">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={fields.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded bg-[#090a0c] border ${
                        errors.name ? "border-rose-500" : "border-white/[0.08] focus:border-white"
                      } text-white font-sans text-sm focus:outline-none transition-colors placeholder:text-zinc-600`}
                    />
                    {errors.name && (
                      <span id="name-error" className="block text-rose-400 text-xs font-mono mt-1">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider"
                    >
                      Email Address <span className="text-zinc-200">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={fields.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded bg-[#090a0c] border ${
                        errors.email ? "border-rose-500" : "border-white/[0.08] focus:border-white"
                      } text-white font-sans text-sm focus:outline-none transition-colors placeholder:text-zinc-600`}
                    />
                    {errors.email && (
                      <span id="email-error" className="block text-rose-400 text-xs font-mono mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider"
                  >
                    Subject <span className="text-zinc-200">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={fields.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    placeholder="Project Inquiry, Internship, or Collaboration"
                    className={`w-full px-4 py-3 rounded bg-[#090a0c] border ${
                      errors.subject ? "border-rose-500" : "border-white/[0.08] focus:border-white"
                    } text-white font-sans text-sm focus:outline-none transition-colors placeholder:text-zinc-600`}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="block text-rose-400 text-xs font-mono mt-1">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider"
                  >
                    Message <span className="text-zinc-200">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={fields.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Share scope, timelines, or context..."
                    className={`w-full px-4 py-3 rounded bg-[#090a0c] border ${
                      errors.message ? "border-rose-500" : "border-white/[0.08] focus:border-white"
                    } text-white font-sans text-sm focus:outline-none transition-colors placeholder:text-zinc-600 resize-y`}
                  />
                  {errors.message && (
                    <span id="message-error" className="block text-rose-400 text-xs font-mono mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Anti-spam Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    name="website"
                    value={fields.website}
                    onChange={(e) => updateField("website", e.target.value)}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-zinc-200 disabled:opacity-60 text-[#090a0c] font-mono font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-md shadow-white/5"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-zinc-500">
                    Typically responds within 24 hours.
                  </span>
                </div>

                {/* Live Status Feedback Banner */}
                {status !== "idle" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`p-3.5 rounded text-xs font-mono border ${
                      status === "success"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : status === "error"
                        ? "bg-rose-500/10 border-rose-500/20 text-rose-400"
                        : "bg-white/[0.04] border-white/[0.08] text-zinc-300"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
