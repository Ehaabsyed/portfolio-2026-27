"use client";

import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Code, Database, Sparkles, Terminal } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const telemetryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          copyRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          actionsRef.current,
          {
            opacity: 0,
            y: 16,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          telemetryRef.current,
          {
            opacity: 0,
            scale: 0.96,
            y: 24,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 px-5 sm:px-8 flex flex-col justify-between tech-grid-bg border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6 sm:py-12">
          {/* Main Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Hero Eyebrow Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-[#12141a]/90 text-[11px] font-mono tracking-wider text-zinc-300 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot-pulse" />
              <span className="uppercase text-zinc-300">
                FULL-STACK DEVELOPER · AI ENGINEERING · MANGALORE, INDIA
              </span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-[#f4f5f7] leading-[1.02] mb-6 sm:mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              I build products, <br className="hidden sm:inline" />
              <span className="text-zinc-500 hover:text-zinc-400 transition-colors">not just</span>{" "}
              <span className="text-white">interfaces.</span>
            </h1>

            {/* Supporting Copy */}
            <p
              ref={copyRef}
              className="text-base sm:text-lg text-zinc-400 font-sans max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal"
            >
              I&apos;m <span className="text-white font-medium">Syed Mohammed Ehaab</span> — a full-stack developer exploring the intersection of web engineering, backend systems, and practical AI applications.
            </p>

            {/* Call to Actions & Availability */}
            <div ref={actionsRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("#work")}
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-zinc-200 text-[#090a0c] font-mono font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer shadow-lg shadow-white/5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 hover:border-zinc-500 bg-[#12141a] hover:bg-[#181a22] text-zinc-200 hover:text-white font-mono text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Availability Pill */}
            <div className="mt-8 flex items-center gap-2.5 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Open to internships, freelance work and collaborations.</span>
            </div>
          </div>

          {/* Right Column: Modern Gray/Black Technical Telemetry Panel */}
          <div ref={telemetryRef} className="lg:col-span-5 relative">
            <div className="relative rounded-lg bg-[#111318] border border-white/[0.1] p-5 sm:p-6 shadow-2xl shadow-black/90">
              {/* Crosshair accents */}
              <div className="crosshair-corner crosshair-tl" />
              <div className="crosshair-corner crosshair-tr" />
              <div className="crosshair-corner crosshair-bl" />
              <div className="crosshair-corner crosshair-br" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 pl-2">
                    sys.telemetry.sh
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.1]">
                  NODE_ONLINE
                </span>
              </div>

              {/* Technical Telemetry Content */}
              <div className="space-y-4 font-mono text-xs">
                {/* Coordinates & Location */}
                <div className="p-3 rounded bg-[#090a0c]/80 border border-white/[0.04]">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 flex items-center justify-between">
                    <span>GEO_COORDINATES</span>
                    <span className="text-zinc-400">IN / KA</span>
                  </div>
                  <div className="text-zinc-200 font-semibold tracking-wider flex items-center justify-between">
                    <span>12.9141° N, 74.8560° E</span>
                    <span className="text-[10px] text-zinc-400">MANGALORE</span>
                  </div>
                </div>

                {/* Verified Core Systems */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 text-[11px] py-1 border-b border-white/[0.04]">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Code className="w-3.5 h-3.5 text-zinc-400" />
                      Full-Stack Web
                    </span>
                    <span className="text-zinc-400">Next.js 16 · React 19 · Node</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400 text-[11px] py-1 border-b border-white/[0.04]">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Database className="w-3.5 h-3.5 text-zinc-400" />
                      Vector Store
                    </span>
                    <span className="text-zinc-400">ChromaDB · FastEmbed BGE</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400 text-[11px] py-1 border-b border-white/[0.04]">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                      AI Retrieval &amp; LLM
                    </span>
                    <span className="text-zinc-400">Google GenAI · Gemini Flash</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400 text-[11px] py-1">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                      Client Deliveries
                    </span>
                    <span className="text-zinc-400">POGO Watches · Al Saquib</span>
                  </div>
                </div>

                {/* Terminal prompt snippet */}
                <div className="p-3 rounded bg-black/60 border border-white/[0.06] text-[11px] text-zinc-300">
                  <div className="text-zinc-500 mb-1">$ python retrievel_pipeline.py</div>
                  <div className="text-zinc-200">
                    &gt; ChromaDB collection loaded. 0.5 threshold active.
                  </div>
                  <div className="text-zinc-400 mt-1">
                    &gt; Ready for queries. Grounded response mode.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="max-w-7xl mx-auto w-full pt-6 flex items-center justify-between text-zinc-500 text-[11px] font-mono border-t border-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="text-zinc-600">{"//"}</span>
          <span>INDEX: 00 — HERO</span>
        </div>
        <button
          type="button"
          onClick={() => scrollTo("#work")}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-400" />
        </button>
      </div>
    </section>
  );
}
