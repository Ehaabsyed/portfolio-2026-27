"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronUp, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import RagArchitectureDiagram from "./rag-architecture-diagram";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(project.isFeatured);

  return (
    <article
      className="editorial-card rounded-lg p-6 sm:p-8 flex flex-col justify-between group relative transition-all duration-300"
      style={{
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Corner crosshairs on hover */}
      <div className="crosshair-corner crosshair-tl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="crosshair-corner crosshair-tr opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="crosshair-corner crosshair-bl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="crosshair-corner crosshair-br opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Meta Line: Number + Category */}
        <div className="flex items-center justify-between gap-4 mb-4 font-mono text-xs">
          <span className="text-zinc-400 font-semibold tracking-wider">
            PROJECT // {project.number}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] text-zinc-400">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-zinc-200 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>

        {/* Primary Description */}
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Optional Visual Preview (Real Screenshot for POGO Kids Watches) */}
        {project.image && (
          <div className="mb-6 rounded-md overflow-hidden border border-white/[0.1] bg-[#090b10] relative aspect-[16/9] group-hover:border-zinc-600 transition-all">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-center filter brightness-95 group-hover:scale-[1.01] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm border border-white/[0.1] text-[10px] font-mono text-zinc-300">
              Verified Client Deployment
            </div>
          </div>
        )}

        {/* Expandable Architecture & Technical Breakdown */}
        {project.verifiedTech && (
          <div className="mb-6">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>{expanded ? "Hide Technical Specifications" : "View Verified Tech Breakdown"}</span>
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {expanded && (
              <div className="mt-3 p-4 rounded-md bg-[#0c0e14] border border-white/[0.06] space-y-2 text-xs font-mono">
                {project.extendedDescription && (
                  <p className="font-sans text-zinc-300 mb-3 text-xs leading-relaxed">
                    {project.extendedDescription}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/[0.04]">
                  {project.verifiedTech.map((item) => (
                    <div key={item.label} className="flex flex-col py-1">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.label}</span>
                      <span className="text-zinc-200 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Custom RAG Architecture Diagram for Python RAG Pipeline */}
        {project.isRag && project.architecture && (
          <RagArchitectureDiagram stages={project.architecture} />
        )}
      </div>

      {/* Footer Meta: Tags and Action Links */}
      <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Technology tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-[#161820] border border-white/[0.06] text-[11px] font-mono text-zinc-300 group-hover:border-white/[0.12] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-white hover:bg-zinc-200 text-[#090a0c] text-xs font-mono font-semibold transition-all shadow-sm hover:shadow-md"
            >
              <span>Visit Live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
