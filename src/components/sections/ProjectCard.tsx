import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../LiveProjectButton';
import { CheckCircle2, Terminal, Github } from 'lucide-react';
import ProjectMockup from './ProjectMockup';

export interface ProjectData {
  id:
    | 'sarkar-seva'
    | 'cultural-board'
    | 'newsmaster-ai'
    | 'Siya-3D AI mock interview'
    | 'infomind-ai-enterprise'
    | 'VIRAAT';
  number: string;
  name: string;
  category: string;
  date: string;
  link: string;
  github?: string;
  bullets: string[];
  tech: string[];
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] sm:min-h-[90vh] md:min-h-[92vh] flex items-start justify-center sticky top-20 sm:top-24 md:top-28 select-none mb-10"
      style={{
        top: `calc(${index * 24}px + 4.5rem)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between gap-6 shadow-2xl origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 sm:pb-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.5rem,5.5vw,4.5rem)] text-[#D7E2EA] leading-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                  {project.category}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                  {project.date}
                </span>
              </div>
              <h3 className="font-medium uppercase text-[clamp(1.2rem,2.4vw,2rem)] text-[#D7E2EA] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/20 text-[#D7E2EA] text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            <LiveProjectButton href={project.link} label="Live Demo" showIcon />
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          {/* Left Column (5 cols on lg) - Engineering Details & Tech Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> Key Engineering Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack badges */}
            <div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols on lg) - Custom Project UI Mockup Images */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            <div className="flex flex-col gap-4">
              <div className="h-[150px] sm:h-[185px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#161616] border border-white/10 shadow-lg">
                <ProjectMockup type={project.id} slot="small-1" />
              </div>
              <div className="h-[165px] sm:h-[210px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#161616] border border-white/10 shadow-lg">
                <ProjectMockup type={project.id} slot="small-2" />
              </div>
            </div>
            <div className="h-full min-h-[260px] sm:min-h-[360px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#161616] border border-white/10 shadow-lg">
              <ProjectMockup type={project.id} slot="large" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
