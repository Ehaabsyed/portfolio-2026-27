"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060709] border-t border-white/[0.08] py-16 px-5 sm:px-8 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-white/[0.06] gap-8">
          {/* Brand info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot-pulse" />
              <span className="text-white text-base font-bold tracking-widest uppercase">
                EHAAB<span className="text-zinc-400">.DEV</span>
              </span>
            </div>
            <p className="text-zinc-500 font-sans text-xs max-w-sm">
              Syed Mohammed Ehaab — Full-stack developer exploring web systems, backend engineering, and practical AI applications.
            </p>
          </div>

          {/* Social and Top */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://github.com/Ehaabsyed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/syed-mohammed-ehaab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:syedehaab12@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/[0.08] bg-[#111319] hover:bg-[#181a22] text-zinc-300 hover:text-white transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-zinc-300" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-zinc-500 text-[11px] gap-4">
          <div>
            <span>© 2026 Syed Mohammed Ehaab. Designed &amp; engineered in Mangalore, India.</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-600">
            <span>NEXT.JS 16</span>
            <span>•</span>
            <span>REACT 19</span>
            <span>•</span>
            <span>TAILWIND 4</span>
            <span>•</span>
            <span>GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
