"use client";

import React, { useRef, useEffect } from "react";
import { Cpu, Globe, MapPin, Terminal, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const els = document.querySelectorAll<HTMLElement>(".about-animate");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-animate",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            gsap.set(".about-animate", { clearProps: "all" });
          },
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, 800);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.06] bg-[#090a0d] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4 uppercase tracking-wider">
          <User className="w-4 h-4 text-zinc-300" />
          <span>INDEX: 02 // BACKGROUND &amp; ENGINEERING PHILOSOPHY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Main Copy */}
          <div className="lg:col-span-7 space-y-6 about-animate" style={{ opacity: 1 }}>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Curious by default. <br />
              <span className="text-zinc-400">Building by doing.</span>
            </h2>

            <div className="space-y-5 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed pt-2">
              <p>
                I&apos;m an Information Science Engineering student who enjoys turning ideas into working software.
              </p>
              <p>
                My projects span full-stack web applications, backend engineering, freelance client websites, and Python-based AI experiments. I enjoy understanding the systems behind a product, from authentication and API design to document ingestion and retrieval.
              </p>
              <p>
                I&apos;m continuously improving my engineering skills by building practical applications and exploring how AI can solve real problems.
              </p>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono">
              <div className="p-3.5 rounded bg-[#111319] border border-white/[0.06]">
                <div className="text-zinc-500 uppercase tracking-widest text-[10px] mb-1">
                  CURRENT BASE
                </div>
                <div className="text-zinc-200 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Mangalore, Karnataka, India</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#111319] border border-white/[0.06]">
                <div className="text-zinc-500 uppercase tracking-widest text-[10px] mb-1">
                  CORE FOCUS
                </div>
                <div className="text-zinc-200 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Full-Stack &amp; AI Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Real Highlights */}
          <div className="lg:col-span-5 space-y-4 about-animate" style={{ opacity: 1 }}>
            <div className="editorial-card rounded-lg p-6 bg-[#111319]">
              <div className="text-xs font-mono text-zinc-200 mb-2 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-zinc-400" />
                <span>01. Practical AI &amp; Retrieval Systems</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Moving past naive wrappers to understand document chunking, embeddings with FastEmbed, local persistence in ChromaDB, cosine similarity scoring, and strict context grounding with Gemini.
              </p>
            </div>

            <div className="editorial-card rounded-lg p-6 bg-[#111319]">
              <div className="text-xs font-mono text-zinc-200 mb-2 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span>02. Robust Backend Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Implementing secure authentication with JSON Web Tokens, email OTP verification, server-side Zod validation, and defensive API route structures to ensure data integrity.
              </p>
            </div>

            <div className="editorial-card rounded-lg p-6 bg-[#111319]">
              <div className="text-xs font-mono text-zinc-200 mb-2 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-zinc-400" />
                <span>03. Client Delivery &amp; Freelance Ownership</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Translating client concepts into production-grade websites like POGO Kids Watches and Al Saquib Limited, focusing on performance, accessibility, and clean communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
