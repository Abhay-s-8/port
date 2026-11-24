import React from 'react';
import {
  Calendar,
  Users,
  ShieldCheck,
  Languages,
  Scan,
  Download,
  BookOpen,
  Filter,
  Sparkles,
} from 'lucide-react';

interface ProjectMockupProps {
  type:
  | 'sarkar-seva'
  | 'cultural-board'
  | 'newsmaster-ai'
  | 'Siya-3D AI mock interview'
  | 'infomind-ai-enterprise'
  | 'VIRAAT';
  slot: 'small-1' | 'small-2' | 'large' | 'main';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, slot }) => {
  // -1. VIRAAT — Autonomous Fraud Defense Engine
  if (type === 'VIRAAT') {
    if (slot === 'small-1') {
      return (
        <div className="relative w-full h-full bg-[#120d26] group overflow-hidden select-none border border-rose-500/30">
          <img
            src="/viraat-preview.svg"
            alt="VIRAAT 7-Layer Defense Matrix"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-950/80 backdrop-blur-md border border-rose-500/40 text-rose-300 font-semibold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-rose-400" /> 7-Tier Defense
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
              &lt;15ms Latency
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>232 Causal Zero-Leak Feats</span>
            <span className="text-rose-400 font-medium">99.0% Conformal</span>
          </div>
        </div>
      );
    }

    if (slot === 'small-2') {
      return (
        <div className="relative w-full h-full bg-[#120d26] group overflow-hidden select-none border border-purple-500/30">
          <img
            src="/viraat-preview.svg"
            alt="VIRAAT Multi-Rail Lifecycle"
            className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-purple-300 font-semibold uppercase tracking-wider">
              12 Payment Rails
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 font-bold">
              FPR @ 0.1%
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>FedNow • UPI • SWIFT • Cards</span>
            <span className="text-purple-400 font-medium">MAP-Elites</span>
          </div>
        </div>
      );
    }

    // Large main showcase for VIRAAT
    return (
      <div className="relative w-full h-full bg-[#120d26] group overflow-hidden select-none border border-rose-500/30 flex flex-col justify-between">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/viraat-preview.svg"
            alt="VIRAAT Multi-Rail Fraud Defense Engine"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-rose-950/80 backdrop-blur-md border border-rose-500/40 text-rose-300 font-semibold tracking-wider uppercase">
              VIRAAT Multi-Rail Immunity Engine
            </span>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 backdrop-blur-md border border-rose-500/30 font-medium">
            Red/Blue Team MAP-Elites
          </span>
        </div>

        {/* Bottom Floating Info Bar */}
        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 z-10 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Closed-Loop Adversarial Payment Defense</span>
            <span className="text-[10px] text-rose-400">Temporal GNN + Conformal Prediction</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>75+ Attack Taxonomy • Tri-Plane Perception • 12 Active Payment Rails</span>
            <span className="text-emerald-400 font-medium">&lt;15ms Latency</span>
          </div>
        </div>
      </div>
    );
  }
  // 0. InfoMind AI Enterprise
  if (type === 'infomind-ai-enterprise') {
    if (slot === 'small-1') {
      return (
        <div className="relative w-full h-full bg-[#0d1b2a] group overflow-hidden select-none border border-cyan-500/30">
          <img
            src="/infomind-preview.svg"
            alt="InfoMind Ingestion Pipeline"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-semibold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Ingestion &amp; Extract
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
              SHA-256 Validated
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>PDF • DOCX • CSV • XLSX</span>
            <span className="text-cyan-400 font-medium">Staged Pipeline</span>
          </div>
        </div>
      );
    }

    if (slot === 'small-2') {
      return (
        <div className="relative w-full h-full bg-[#0d1b2a] group overflow-hidden select-none border border-blue-500/30">
          <img
            src="/infomind-preview.svg"
            alt="InfoMind Vector Search"
            className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-500/40 text-blue-300 font-semibold uppercase tracking-wider">
              Hybrid Search
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 font-bold">
              Qdrant + BM25
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>Dense Semantic + Keyword</span>
            <span className="text-blue-400 font-medium">FastAPI + Ollama</span>
          </div>
        </div>
      );
    }

    // Large main showcase for InfoMind
    return (
      <div className="relative w-full h-full bg-[#0d1b2a] group overflow-hidden select-none border border-cyan-500/30 flex flex-col justify-between">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/infomind-preview.svg"
            alt="InfoMind AI Enterprise Interface"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-semibold tracking-wider uppercase">
              InfoMind AI Enterprise
            </span>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/30 font-medium">
            Grounded RAG + Citations
          </span>
        </div>

        {/* Bottom Floating Info Bar */}
        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 z-10 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Intelligent Document Ingestion &amp; Hybrid Retrieval</span>
            <span className="text-[10px] text-cyan-400">FastAPI + Qdrant + LLaMA 3.2</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>Scikit-Learn Classifier • Evidence Sufficiency Gating • SSE Streaming</span>
            <span className="text-emerald-400 font-medium">100% Verifiable</span>
          </div>
        </div>
      </div>
    );
  }
  // 1. Siya 3D AI Mock Interview Platform
  if (type === 'Siya-3D AI mock interview') {
    if (slot === 'small-1') {
      return (
        <div className="relative w-full h-full bg-[#110c22] group overflow-hidden select-none border border-purple-500/30">
          <img
            src="/siya-preview.jpg"
            alt="Siya 3D AI Interview Avatar"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-purple-300 font-semibold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-400" /> 3D AI Avatar
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
              Live Voice
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>ARKit Blendshapes</span>
            <span className="text-purple-400 font-medium">Three.js + Studio Rig</span>
          </div>
        </div>
      );
    }

    if (slot === 'small-2') {
      return (
        <div className="relative w-full h-full bg-[#110c22] group overflow-hidden select-none border border-pink-500/30">
          <img
            src="/siya-preview.jpg"
            alt="Siya Conversation & ATS Resume Intelligence"
            className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-950/80 backdrop-blur-md border border-pink-500/40 text-pink-300 font-semibold uppercase tracking-wider">
              Career &amp; Mock Interview
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 font-bold">
              Gemini Live
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>ATS Resume Intelligence</span>
            <span className="text-pink-400 font-medium">ElevenLabs Voice</span>
          </div>
        </div>
      );
    }

    // Large main showcase for Siya
    return (
      <div className="relative w-full h-full bg-[#110c22] group overflow-hidden select-none border border-purple-500/30 flex flex-col justify-between">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/siya-preview.jpg"
            alt="Siya 3D AI Career Guidance Mentor Interface"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-purple-300 font-semibold tracking-wider uppercase">
              SIYA · 3D AI Career Guidance Mentor
            </span>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/30 font-medium">
            Gemini 3.5-Flash
          </span>
        </div>

        {/* Bottom Floating Info Bar */}
        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 z-10 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Interactive 3D Avatar &amp; Live Interview Coach</span>
            <span className="text-[10px] text-pink-400">Three.js + Obsidian Glassmorphism</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>Neural Speech • ARKit Expressions • Coding Arena • ATS Resume Audit</span>
            <span className="text-emerald-400 font-medium">Real-Time Voice</span>
          </div>
        </div>
      </div>
    );
  }
  // 1. Sarkar Seva Real Image Screenshots
  if (type === 'sarkar-seva') {
    if (slot === 'small-1') {
      return (
        <div className="relative w-full h-full bg-[#0A1017] group overflow-hidden select-none border border-cyan-500/20">
          <img
            src="/sarkar-seva-preview.png"
            alt="Sarkar Seva Translation Preview"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-semibold uppercase tracking-wider flex items-center gap-1">
              <Scan className="w-3 h-3 text-cyan-400" /> Translation Preview
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
              English → Hindi
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span className="flex items-center gap-1"><Languages className="w-3 h-3 text-cyan-400" /> 10+ Languages</span>
            <span className="text-cyan-300 font-medium flex items-center gap-1"><Download className="w-3 h-3" /> PDF Export</span>
          </div>
        </div>
      );
    }

    if (slot === 'small-2') {
      return (
        <div className="relative w-full h-full bg-[#0A1017] group overflow-hidden select-none border border-cyan-500/20">
          <img
            src="/sarkar-seva-main.png"
            alt="Sarkar Seva Form Uploader"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-950/80 backdrop-blur-md border border-orange-500/40 text-orange-300 font-semibold uppercase tracking-wider">
              Sarkar Seva AI
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
              OCR Uploader
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>Gov Form Translator</span>
            <span className="text-emerald-400 font-medium">Camera / Drop Area</span>
          </div>
        </div>
      );
    }

    // Large main showcase
    return (
      <div className="relative w-full h-full bg-[#0A1017] group overflow-hidden select-none border border-cyan-500/30 flex flex-col justify-between">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/sarkar-seva-preview.png"
            alt="Sarkar Seva AI Full Interface"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-semibold tracking-wider uppercase">
              Sarkar Seva AI Workspace
            </span>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 backdrop-blur-md border border-emerald-500/30 font-medium">
            Live on Vercel
          </span>
        </div>

        {/* Bottom Floating Info Bar */}
        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 z-10 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Government Form Language Barrier Tool</span>
            <span className="text-[10px] text-cyan-300">Claude 3.5 + OpenRouter OCR</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>Dynamic Form Field Extraction • Text-to-Speech</span>
            <span className="text-emerald-400 font-medium">PDF & TXT Export</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. NewsMaster AI Real Image Screenshots
  if (type === 'newsmaster-ai') {
    if (slot === 'small-1') {
      return (
        <div className="relative w-full h-full bg-[#1A1813] group overflow-hidden select-none border border-amber-500/20">
          <img
            src="/newsmaster-dropdown.png"
            alt="NewsMaster Category Filter"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3 h-3 text-amber-400" /> Topic Filter
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
              9 Categories
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>Business • Defence • Politics</span>
            <span className="text-amber-400 font-medium">UPSC Focus</span>
          </div>
        </div>
      );
    }

    if (slot === 'small-2') {
      return (
        <div className="relative w-full h-full bg-[#1A1813] group overflow-hidden select-none border border-amber-500/20">
          <img
            src="/newsmaster-composing.png"
            alt="NewsMaster AI Edition Composer"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-purple-300 font-semibold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-400" /> Edition Composer
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
              RSS Feed Aggregator
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
            <span>20-30 Global Feeds</span>
            <span className="text-purple-400 font-medium">Decoupled Pipeline</span>
          </div>
        </div>
      );
    }

    // Large main showcase for NewsMaster AI
    return (
      <div className="relative w-full h-full bg-[#14120D] group overflow-hidden select-none border border-amber-500/30 flex flex-col justify-between">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/newsmaster-article.png"
            alt="NewsMaster AI Business Digest"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold tracking-wider uppercase flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> NewsMaster AI Newspaper
            </span>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/30 font-medium">
            Live on Vercel
          </span>
        </div>

        {/* Bottom Floating Info Bar */}
        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 z-10 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">UPSC News Intelligence & Digest Generator</span>
            <span className="text-[10px] text-amber-300">Gemini via OpenRouter API</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>Automated RSS Parsing • Deduplication • GS Syllabus Categorization</span>
            <span className="text-amber-400 font-medium">Fast Summary Digest</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Cultural Board Platform Real Screenshots & Mockups
  if (slot === 'small-1') {
    return (
      <div className="relative w-full h-full bg-[#0D1412] group overflow-hidden select-none border border-emerald-500/20">
        <img
          src="/cultural-board-events.png"
          alt="Cultural Board Events Grid"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-1">
            <Calendar className="w-3 h-3 text-emerald-400" /> Events Portal
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
            500+ Students
          </span>
        </div>
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
          <span>Akriti • Fresher&apos;s • Fests</span>
          <span className="text-emerald-400 font-medium">React + Tailwind</span>
        </div>
      </div>
    );
  }

  if (slot === 'small-2') {
    return (
      <div className="relative w-full h-full bg-[#0D1412] group overflow-hidden select-none border border-emerald-500/20">
        <img
          src="/cultural-board-team.jpg"
          alt="Cultural Board Team 2K25-26"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-500/40 text-blue-300 font-semibold uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-blue-400" /> Team 2K26 - 27
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 text-white/80 backdrop-blur-md border border-white/10">
            AIT Pune
          </span>
        </div>
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] text-white/80">
          <span>Google OAuth 2.0</span>
          <span className="text-blue-400 font-medium">Cloudinary CDN</span>
        </div>
      </div>
    );
  }

  // Large main showcase for Cultural Board
  return (
    <div className="relative w-full h-full bg-[#0D1412] group overflow-hidden select-none border border-emerald-500/30 flex flex-col justify-between">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/cultural-board-team.jpg"
          alt="AIT Cultural Board Platform"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* Top Floating Badge Bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-semibold tracking-wider uppercase">
            AIT Cultural Board Platform
          </span>
        </div>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 backdrop-blur-md border border-emerald-500/30 font-medium flex items-center gap-1">
          <Users className="w-3 h-3" /> 500+ Active Students
        </span>
      </div>
    </div>
  );
};

export default ProjectMockup;
