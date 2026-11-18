"use client";

import React, { useRef, useEffect } from "react";
import { BookOpen, GraduationCap, MapPin, Waves } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const els = document.querySelectorAll<HTMLElement>(".edu-animate");
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
        ".edu-animate",
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
            gsap.set(".edu-animate", { clearProps: "all" });
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
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.06] bg-[#090a0d] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4 uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-zinc-300" />
          <span>INDEX: 04 // EDUCATION &amp; EXTRACURRICULAR INTERESTS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Card */}
          <div className="lg:col-span-7 edu-animate" style={{ opacity: 1 }}>
            <div className="editorial-card rounded-lg p-6 sm:p-8 bg-[#111319] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                    ACADEMIC FOUNDATION
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    B.E. DEGREE
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Bachelor of Engineering
                </h3>
                <div className="text-lg text-zinc-300 font-mono font-medium mb-4">
                  Information Science Engineering
                </div>

                <div className="space-y-3 pt-2 text-zinc-300 text-sm">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span className="text-white font-medium">
                      AJ Institute of Engineering and Technology (AJIET)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-400">
                    <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>Mangalore, Karnataka, India</span>
                  </div>
                </div>

                <p className="mt-6 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed pt-4 border-t border-white/[0.04]">
                  Academically grounded in computer science fundamentals, data structures, algorithms, database management systems, network protocols, and software development methodologies.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                <span>VERIFIED ACADEMIC RECORD</span>
                <span className="text-emerald-400">ACTIVE ENROLLMENT</span>
              </div>
            </div>
          </div>

          {/* Interests Card */}
          <div className="lg:col-span-5 edu-animate" style={{ opacity: 1 }}>
            <div className="editorial-card rounded-lg p-6 sm:p-8 bg-[#111319] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                    BEYOND THE TERMINAL
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    DISCIPLINE &amp; INQUIRY
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-white tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Interests &amp; Habits
                </h3>

                <div className="space-y-4 pt-1">
                  <div className="p-3.5 rounded-md bg-[#090a0c] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold mb-1">
                      <Waves className="w-4 h-4 text-zinc-400" />
                      <span>Swimming &amp; Running for Fitness</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      Regular aerobic conditioning and distance running. Maintaining mental endurance, physical discipline, and sharp focus for rigorous engineering work.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-md bg-[#090a0c] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold mb-1">
                      <BookOpen className="w-4 h-4 text-zinc-400" />
                      <span>Reviewing Technology Articles</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      Consistently analyzing technical articles, architecture breakdowns, AI retrieval benchmarks, and software engineering papers to sharpen critical thinking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500">
                <span>VERIFIED RESUME INTERESTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
