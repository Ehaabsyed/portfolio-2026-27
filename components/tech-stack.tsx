"use client";

import React, { useState } from "react";

interface TechItem {
  name: string;
  category: "all" | "frontend" | "backend" | "ai" | "tools";
  icon: React.ReactNode;
}

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const technologies: TechItem[] = [
    // Core & Frontend
    {
      name: "Typescript",
      category: "frontend",
      icon: (
        <svg className="w-4 h-4 rounded-xs shrink-0" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 10.5H5.5V12.2H7.5V18.5H9.5V12.2H11.5V10.5Z" fill="white" />
          <path
            d="M12.5 16.8C13.2 17.5 14.3 17.8 15.3 17.5C16.4 17.2 17 16.3 17 15.2C17 13.5 15.2 13 14.2 12.6C13.2 12.2 12.7 11.8 12.7 11.2C12.7 10.5 13.3 10 14.2 10C15 10 15.8 10.3 16.4 10.8L17.2 9.5C16.4 8.8 15.3 8.5 14.2 8.5C12.2 8.5 11 9.8 11 11.3C11 13 12.7 13.5 13.7 13.9C14.7 14.3 15.3 14.7 15.3 15.4C15.3 16.2 14.5 16.7 13.6 16.7C12.6 16.7 11.7 16.2 11.1 15.4L12.5 16.8Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "React",
      category: "frontend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Next",
      category: "frontend",
      icon: (
        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
          <span className="text-[10px] font-black font-sans text-black leading-none">N</span>
        </div>
      ),
    },
    {
      name: "Express",
      category: "backend",
      icon: (
        <span className="text-[10px] font-mono font-bold text-zinc-300 border border-zinc-700 px-1 py-0.2 rounded bg-zinc-900 leading-none shrink-0">
          ex
        </span>
      ),
    },
    {
      name: "MongoDB",
      category: "backend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C11.5 3 7 7.5 7 13.5C7 17.5 9.5 20.5 12 22C14.5 20.5 17 17.5 17 13.5C17 7.5 12.5 3 12 2Z"
            fill="#47A248"
          />
          <path
            d="M12 2V22C14.5 20.5 17 17.5 17 13.5C17 7.5 12.5 3 12 2Z"
            fill="#499D4A"
          />
          <path
            d="M12 12C11.5 13 11 15 11 17C11 19 11.5 20.5 12 21.5V12Z"
            fill="#E8E8E8"
            opacity="0.3"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind",
      category: "frontend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 8.1 10.65 8.7C11.56 9.155 12.21 9.815 12.93 10.545C14.1 11.73 15.45 13.1 18.5 13.1C20.9 13.1 22.4 11.9 23 9.5C22.1 10.7 21.05 11 19.85 10.4C18.94 9.945 18.29 9.285 17.57 8.555C16.4 7.37 15.05 6 12 6ZM5.5 13.1C3.1 13.1 1.6 14.3 1 16.7C1.9 15.5 2.95 15.2 4.15 15.8C5.06 16.255 5.71 16.915 6.43 17.645C7.6 18.83 8.95 20.2 12 20.2C14.4 20.2 15.9 19 16.5 16.6C15.6 17.8 14.55 18.1 13.35 17.5C12.44 17.045 11.79 16.385 11.07 15.655C9.9 14.47 8.55 13.1 5.5 13.1Z"
            fill="#06B6D4"
          />
        </svg>
      ),
    },
    {
      name: "Redis",
      category: "backend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M2 17.5L12 22.5L22 17.5L12 12.5L2 17.5Z" fill="#A81F1D" />
          <path d="M2 12.5L12 17.5L22 12.5L12 7.5L2 12.5Z" fill="#C62828" />
          <path d="M2 7.5L12 12.5L22 7.5L12 2.5L2 7.5Z" fill="#E53935" />
          <circle cx="12" cy="7.5" r="1.5" fill="white" opacity="0.6" />
        </svg>
      ),
    },
    {
      name: "NodeJS",
      category: "backend",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7.2V17.6L12 22.8L21 17.6V7.2L12 2Z" fill="#339933" />
          <path d="M12 3.8L19.2 8V16.8L12 21L4.8 16.8V8L12 3.8Z" fill="#5FA04E" />
          <path d="M12 12L4.8 8L12 3.8L19.2 8L12 12Z" fill="#68A063" />
        </svg>
      ),
    },
    {
      name: "LangChain",
      category: "ai",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 17L17 7M17 7H10M17 7V14"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="17" r="3" fill="#ffffff" />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "ai",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 4.9H12.1V5.4H5.3C3.5 5.4 2 6.8 2 8.7C2 10.6 3 11.5 4.6 11.5H5.8V9.8C5.8 7.8 7.5 7.8 7.5 7.8H12V7.3C12 5.5 13.5 4.9 15.3 4.9H15.5C14.7 3.2 13.5 2 11.9 2Z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22C15.4 22 15.2 20.6 15.2 20.6L15.2 19.1H11.9V18.6H18.7C20.5 18.6 22 17.2 22 15.3C22 13.4 21 12.5 19.4 12.5H18.2V14.2C18.2 16.2 16.5 16.2 16.5 16.2H12V16.7C12 18.5 10.5 19.1 8.7 19.1H8.5C9.3 20.8 10.5 22 12.1 22Z"
            fill="#FFD43B"
          />
          <circle cx="10" cy="3.7" r="0.6" fill="white" />
          <circle cx="14" cy="20.3" r="0.6" fill="white" />
        </svg>
      ),
    },
    {
      name: "ChromaDB",
      category: "ai",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-orange-400" />
        </div>
      ),
    },
    {
      name: "FastEmbed (BGE)",
      category: "ai",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
        </div>
      ),
    },
    {
      name: "Gemini 2.5 Flash",
      category: "ai",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="#4E82EE"
          />
        </svg>
      ),
    },
    {
      name: "FastAPI",
      category: "backend",
      icon: (
        <div className="w-4 h-4 rounded-full bg-[#009688] flex items-center justify-center shrink-0">
          <span className="text-[9px] font-bold text-white leading-none">⚡</span>
        </div>
      ),
    },
    {
      name: "Git",
      category: "tools",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.6 10.9L13.1 2.4C12.5 1.8 11.5 1.8 10.9 2.4L9.1 4.2L11.3 6.4C11.8 6.2 12.5 6.4 12.9 6.8C13.4 7.3 13.5 8 13.2 8.5L15.3 10.6C15.8 10.4 16.5 10.5 17 11C17.6 11.6 17.6 12.6 17 13.2C16.4 13.8 15.4 13.8 14.8 13.2C14.4 12.7 14.2 12.1 14.4 11.6L12.5 9.7V14.6C12.7 14.8 12.8 15.1 12.8 15.5C12.8 16.5 12 17.3 11 17.3C10 17.3 9.2 16.5 9.2 15.5C9.2 14.7 9.7 14.1 10.4 13.8V8.9C9.7 8.6 9.2 8 9.2 7.2C9.2 6.8 9.3 6.5 9.5 6.2L7.3 4L2.4 8.9C1.8 9.5 1.8 10.5 2.4 11.1L10.9 19.6C11.5 20.2 12.5 20.2 13.1 19.6L21.6 11.1C22.1 10.5 22.1 9.5 21.6 10.9Z"
            fill="#F05032"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      category: "tools",
      icon: (
        <svg className="w-4 h-4 shrink-0 text-white fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "GSAP",
      category: "frontend",
      icon: (
        <div className="w-4 h-4 rounded-full bg-zinc-700 flex items-center justify-center shrink-0">
          <span className="text-[8px] font-black text-white">G</span>
        </div>
      ),
    },
    {
      name: "Zod",
      category: "backend",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-[#3E67B1] flex items-center justify-center shrink-0">
          <span className="text-[9px] font-mono font-bold text-white">Z</span>
        </div>
      ),
    },
    {
      name: "Postman",
      category: "tools",
      icon: (
        <div className="w-4 h-4 rounded-full bg-[#FF6C37] flex items-center justify-center shrink-0">
          <span className="text-[8px] font-bold text-white">P</span>
        </div>
      ),
    },
    {
      name: "Vercel",
      category: "tools",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 2L24 22H0L12 2Z" />
        </svg>
      ),
    },
    {
      name: "Render",
      category: "tools",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
        </div>
      ),
    },
    {
      name: "Cloudinary",
      category: "tools",
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"
            fill="#3448C5"
          />
        </svg>
      ),
    },
    {
      name: "Resend",
      category: "tools",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
          <span className="text-[9px] font-mono font-bold text-white">R</span>
        </div>
      ),
    },
    {
      name: "PDFKit",
      category: "backend",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
          <span className="text-[8px] font-mono font-bold text-zinc-300">PDF</span>
        </div>
      ),
    },
    {
      name: "QR Systems",
      category: "backend",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
          <span className="text-[8px] font-mono font-bold text-zinc-300">QR</span>
        </div>
      ),
    },
    {
      name: "Nodemailer",
      category: "backend",
      icon: (
        <div className="w-4 h-4 rounded-xs bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
          <span className="text-[8px] font-mono font-bold text-zinc-300">✉</span>
        </div>
      ),
    },
  ];

  const filtered =
    activeFilter === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeFilter);

  return (
    <section
      id="stack"
      className="py-20 sm:py-28 px-5 sm:px-8 border-b border-white/[0.06] relative bg-[#090a0c]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching reference */}
        <div className="mb-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Tech that I use
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans">
            Languages, frameworks, vector stores, and development tools I work with daily.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 text-xs font-mono scrollbar-none">
          {[
            { id: "all", label: "All Tech" },
            { id: "ai", label: "AI & RAG" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend & DB" },
            { id: "tools", label: "Tools & Cloud" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "bg-[#14161c] text-zinc-400 border border-white/[0.06] hover:text-white hover:border-white/[0.15]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* The Exact Pill Cloud matching the user reference screenshot */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#13151a] hover:bg-[#1a1d24] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-200 cursor-default shadow-sm hover:shadow-md hover:scale-[1.02]"
            >
              {tech.icon}
              <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Technical Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-lg border border-white/[0.06] bg-[#111318] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span>
              Verified across real project implementations, freelance work, and local Python vector pipelines.
            </span>
          </div>
          <span className="text-zinc-500 font-mono text-[11px]">
            {filtered.length} TECHNOLOGIES LOADED
          </span>
        </div>
      </div>
    </section>
  );
}
