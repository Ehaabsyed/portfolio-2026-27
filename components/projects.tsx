"use client";

import React, { useRef, useEffect } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "./project-card";
import { FolderGit2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const cards = document.querySelectorAll<HTMLElement>(".project-card-animate");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      cards.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-animate",
        { opacity: 0, y: 30 },
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
            gsap.set(".project-card-animate", { clearProps: "all" });
          },
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      cards.forEach((el) => {
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
      id="work"
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.06] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
              <FolderGit2 className="w-4 h-4 text-zinc-300" />
              <span>INDEX: 01 // SELECTED WORK &amp; VERIFIED PROJECTS</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Engineered for Production.
            </h2>
          </div>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-md leading-relaxed">
            Real freelance client deliveries, backend access control systems, and Python retrieval pipelines. No dummy templates or exaggerated claims.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-10 sm:space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="project-card-animate" style={{ opacity: 1 }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 p-6 rounded-lg border border-white/[0.06] bg-[#111318] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span>All repository links, client work, and technologies reflect verified implementations.</span>
          </div>
          <a
            href="https://github.com/Ehaabsyed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:text-white transition-colors underline underline-offset-4"
          >
            Explore additional experiments on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
