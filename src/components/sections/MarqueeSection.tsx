import React, { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Cpu,
  Server,
  Database,
  Cloud,
  Layers,
  Sparkles,
  Bot,
  BrainCircuit,
  FileCode,
  Terminal,
  ShieldCheck,
  Zap,
  Globe,
  Boxes,
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  color: string;
}

const TECH_ROW_1: TechItem[] = [
  { name: 'C++17 & STL', category: 'Language', icon: Terminal, tag: 'DSA & High Perf', color: 'from-blue-500/20 to-indigo-500/10' },
  { name: 'Node.js & Express', category: 'Backend', icon: Server, tag: 'REST APIs', color: 'from-emerald-500/20 to-teal-500/10' },
  { name: 'Claude API (Anthropic)', category: 'AI & LLMs', icon: Bot, tag: 'Prompt & Agents', color: 'from-amber-500/20 to-orange-500/10' },
  { name: 'Gemini via OpenRouter', category: 'AI & LLMs', icon: Sparkles, tag: 'Summarization', color: 'from-purple-500/20 to-pink-500/10' },
  { name: 'LangChain & SmolAgents', category: 'AI Systems', icon: BrainCircuit, tag: 'Agent Workflows', color: 'from-cyan-500/20 to-blue-500/10' },
  { name: 'React.js & TypeScript', category: 'Frontend', icon: Code2, tag: 'Modern Web', color: 'from-sky-500/20 to-blue-500/10' },
  { name: 'MongoDB & SQL', category: 'Databases', icon: Database, tag: 'Data Architecture', color: 'from-green-500/20 to-emerald-500/10' },
  { name: 'Docker & Microservices', category: 'DevOps', icon: Boxes, tag: 'Containerization', color: 'from-indigo-500/20 to-violet-500/10' },
  { name: 'AWS Cloud & ML', category: 'Cloud', icon: Cloud, tag: 'AWS Educate', color: 'from-yellow-500/20 to-orange-500/10' },
  { name: 'Postman & REST Testing', category: 'API Testing', icon: Zap, tag: 'Endpoint QA', color: 'from-orange-500/20 to-rose-500/10' },
  { name: 'Data Structures & Algorithms', category: 'Core CS', icon: Cpu, tag: '5★ HackerRank', color: 'from-fuchsia-500/20 to-pink-500/10' },
];

const TECH_ROW_2: TechItem[] = [
  { name: 'RAG & Vector Retrieval', category: 'AI Architecture', icon: BrainCircuit, tag: 'Information Extr', color: 'from-purple-500/20 to-indigo-500/10' },
  { name: 'Python & Django', category: 'Languages', icon: FileCode, tag: 'Backend Framework', color: 'from-yellow-500/20 to-amber-500/10' },
  { name: 'Tailwind CSS', category: 'UI & Styling', icon: Layers, tag: 'Responsive UI', color: 'from-teal-500/20 to-cyan-500/10' },
  { name: 'Firebase & OAuth 2.0', category: 'Auth & Hosting', icon: ShieldCheck, tag: 'Production Auth', color: 'from-amber-500/20 to-orange-500/10' },
  { name: 'Cloudinary CDN', category: 'Media Delivery', icon: Globe, tag: 'Asset Optimization', color: 'from-blue-500/20 to-sky-500/10' },
  { name: 'OCR Text Extraction', category: 'Computer Vision', icon: Zap, tag: 'Multilingual Scan', color: 'from-rose-500/20 to-red-500/10' },
  { name: 'RSS News Pipelines', category: 'Automation', icon: Server, tag: 'Decoupled Feeds', color: 'from-violet-500/20 to-purple-500/10' },
  { name: 'Git & GitHub Collaboration', category: 'Workflow', icon: Code2, tag: 'Branching & PRs', color: 'from-slate-500/20 to-zinc-500/10' },
  { name: 'Hugging Face & Models', category: 'AI Ecosystem', icon: Bot, tag: 'Transformer Basics', color: 'from-yellow-500/20 to-orange-500/10' },
  { name: 'Object-Oriented Design', category: 'Architecture', icon: Boxes, tag: 'Design Patterns', color: 'from-emerald-500/20 to-teal-500/10' },
];

const ROW_1_TRIPLED = [...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1];
const ROW_2_TRIPLED = [...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    handleScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const row1Translate = (offset - 200) - 2000;
  const row2Translate = -(offset - 200) - 1000;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves Right */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-3 will-change-transform"
            style={{
              transform: `translate3d(${row1Translate}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            {ROW_1_TRIPLED.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r1-${index}`}
                  className="flex-shrink-0 w-[280px] h-[160px] sm:w-[340px] sm:h-[180px] md:w-[380px] md:h-[200px] rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-[#131313] border border-white/10 hover:border-white/20 transition-colors duration-300 relative overflow-hidden group shadow-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#D7E2EA]">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl tracking-tight leading-snug">
                      {item.name}
                    </h4>
                    <span className="inline-block mt-1 text-xs text-white/50 font-light">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 - Moves Left */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-3 will-change-transform"
            style={{
              transform: `translate3d(${row2Translate}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            {ROW_2_TRIPLED.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r2-${index}`}
                  className="flex-shrink-0 w-[280px] h-[160px] sm:w-[340px] sm:h-[180px] md:w-[380px] md:h-[200px] rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-[#131313] border border-white/10 hover:border-white/20 transition-colors duration-300 relative overflow-hidden group shadow-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#D7E2EA]">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl tracking-tight leading-snug">
                      {item.name}
                    </h4>
                    <span className="inline-block mt-1 text-xs text-white/50 font-light">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
