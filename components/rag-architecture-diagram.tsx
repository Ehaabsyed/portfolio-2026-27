"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, Database } from "lucide-react";
import type { ArchitectureStage } from "@/lib/projects";

interface Props {
  stages: ArchitectureStage[];
}

export default function RagArchitectureDiagram({ stages }: Props) {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const implementedStages = stages.filter((s) => s.status === "implemented");
  const conceptualStages = stages.filter((s) => s.status === "conceptual");

  return (
    <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#0c0d12] p-4 sm:p-6 overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/[0.06] gap-2">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-zinc-300" />
          <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-white">
            Verified RAG Architecture Diagram
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Implemented ({implementedStages.length})
          </span>
          <span className="inline-flex items-center gap-1.5 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-500" />
            Conceptual ({conceptualStages.length})
          </span>
        </div>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="mb-6 overflow-x-auto pb-3">
        <div className="flex items-center min-w-[700px] gap-2">
          {stages.map((stage, idx) => {
            const isImplemented = stage.status === "implemented";
            const isSelected = activeStageIndex === idx;

            return (
              <React.Fragment key={stage.stage}>
                <button
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`flex-1 p-2.5 rounded border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-white bg-white/[0.08] shadow-sm"
                      : isImplemented
                      ? "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.2]"
                      : "border-zinc-800 bg-zinc-900/[0.4] hover:border-zinc-700 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className="text-zinc-400">{stage.stage.split(".")[0]}</span>
                    {isImplemented ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Clock className="w-3 h-3 text-zinc-500" />
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-200 truncate">
                    {stage.component}
                  </div>
                </button>
                {idx < stages.length - 1 && (
                  <span className="text-zinc-600 font-mono text-xs select-none">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Detailed Inspector for Selected Stage */}
      {stages[activeStageIndex] && (
        <div className="p-4 rounded-md bg-[#101218] border border-white/[0.08] text-xs font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">
                {stages[activeStageIndex].stage}
              </span>
              <span className="text-zinc-500">::</span>
              <span className="text-zinc-200 font-semibold">
                {stages[activeStageIndex].component}
              </span>
            </div>
            <span
              className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                stages[activeStageIndex].status === "implemented"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-zinc-800 text-zinc-400 border border-zinc-700"
              }`}
            >
              {stages[activeStageIndex].status}
            </span>
          </div>
          <p className="text-zinc-300 font-sans text-xs leading-relaxed">
            {stages[activeStageIndex].details}
          </p>
        </div>
      )}

      {/* Implemented vs Conceptual Disclaimer Banner */}
      <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] text-zinc-400 flex items-center justify-between">
        <span className="font-mono text-zinc-500">
          Source: <code className="text-zinc-300">ingestion_pipeline.py</code> &amp; <code className="text-zinc-300">retrievel_pipeline.py</code>
        </span>
        <span className="font-mono text-zinc-300">ChromaDB (Local Cosine HNSW)</span>
      </div>
    </div>
  );
}
