import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rotate3d,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Sparkles,
  Terminal,
  Maximize2,
  X,
  Play,
  Pause,
} from 'lucide-react';

export interface GalleryProject {
  id: string;
  number: string;
  title: string;
  category: 'AI & LLMs' | 'Full-Stack' | 'Systems & C++' | 'Cloud & Tools';
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  stats: string;
  color: string;
  gradient: string;
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'career-assistance',
    number: '01',
    title: 'SIYA — 3D AI Career Mentor',
    category: 'AI & LLMs',
    description:
      'Production-ready 3D AI Career Guidance Mentor & mock interview coach with real-time ARKit blendshapes, ElevenLabs voice, and ATS resume scoring.',
    image: '/siya-preview.jpg',
    tech: ['Three.js', 'Google Gemini', 'ElevenLabs', 'WebAudio', 'Vite'],
    liveUrl: 'https://github.com/Abhay-s-8/career-assistance',
    githubUrl: 'https://github.com/Abhay-s-8/career-assistance',
    stats: '3D Avatar • Gemini + ElevenLabs',
    color: '#ec4899',
    gradient: 'from-purple-500/20 to-pink-500/10',
  },
  {
    id: 'cultural-board',
    number: '02',
    title: 'Cultural Board AIT',
    category: 'Full-Stack',
    description:
      'Comprehensive campus event platform serving 500+ students, equipped with Google OAuth, CDN-powered media gallery, and announcements.',
    image: '/cultural-board-events.png',
    tech: ['React.js', 'Tailwind CSS', 'Firebase Auth', 'Cloudinary CDN'],
    liveUrl: 'https://cultural-board.web.app',
    githubUrl: 'https://github.com/Abhay-s-8',
    stats: '500+ Active Users • OAuth 2.0',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'viraat-fraud-defense',
    number: '03',
    title: 'VIRAAT Multi-Rail Defense',
    category: 'AI & LLMs',
    description:
      'Autonomous multi-rail fraud immunity engine with 7-layer defense, 232 zero-leak causal features, MAP-Elites adversarial loop, and <15ms scoring latency.',
    image: '/viraat-preview.svg',
    tech: ['FastAPI', 'Python', 'Temporal GNN', 'Conformal Pred', 'MAP-Elites'],
    liveUrl: 'https://github.com/Abhay-s-8/VIRAAT',
    githubUrl: 'https://github.com/Abhay-s-8/VIRAAT',
    stats: '<15ms Latency • 99.0% Coverage',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 to-purple-500/10',
  },
  {
    id: 'infomind-ai-enterprise',
    number: '04',
    title: 'InfoMind AI Enterprise',
    category: 'AI & LLMs',
    description:
      'AI/ML information retrieval & management: document ingestion, scikit-learn classification, Qdrant hybrid search, and grounded RAG with verifiable citations.',
    image: '/infomind-preview.svg',
    tech: ['FastAPI', 'Python', 'Qdrant', 'scikit-learn', 'Ollama', 'React'],
    liveUrl: 'https://github.com/Abhay-s-8/infomind-ai-enterprise',
    githubUrl: 'https://github.com/Abhay-s-8/infomind-ai-enterprise',
    stats: 'Grounded RAG • Hybrid Search',
    color: '#38bdf8',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    id: 'sarkar-seva',
    number: '05',
    title: 'Sarkar Seva AI',
    category: 'AI & LLMs',
    description:
      'Multilingual OCR web platform enabling citizens to scan, extract, and translate official government forms across 10+ Indian regional languages.',
    image: '/sarkar-seva-preview.png',
    tech: ['React.js', 'Node.js', 'Claude API', 'OpenRouter', 'OCR'],
    liveUrl: 'https://sarkarseva.vercel.app',
    githubUrl: 'https://github.com/Abhay-s-8',
    stats: '10+ Languages • PDF Export',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-emerald-500/10',
  },
  {
    id: 'newsmaster-ai',
    number: '06',
    title: 'NewsMaster AI',
    category: 'AI & LLMs',
    description:
      'Intelligent news summarization engine that aggregates 20–30 RSS feeds, eliminates duplicate reports, and produces UPSC syllabus-aligned briefs.',
    image: '/newsmaster-article.png',
    tech: ['React.js', 'Node.js', 'Google Gemini', 'RSS Parser'],
    liveUrl: 'https://newsmaster-ai.vercel.app',
    githubUrl: 'https://github.com/Abhay-s-8',
    stats: '20+ Global Feeds • 9 Topics',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
];

const CATEGORIES = ['All', 'AI & LLMs', 'Full-Stack'] as const;

export const ProjectCircleGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateY, setRotateY] = useState<number>(0);
  const [rotateX, setRotateX] = useState<number>(-10);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<GalleryProject | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  // Responsive cylinder radius and card size - zoomed in for maximum clarity
  const [radius, setRadius] = useState<number>(380);
  const [cardWidth, setCardWidth] = useState<number>(330);
  const [cardHeight, setCardHeight] = useState<number>(450);

  const lastMouseX = useRef<number>(0);
  const lastMouseY = useRef<number>(0);
  const velocity = useRef<number>(0);
  const requestRef = useRef<number | null>(null);

  // Update 3D dimensions based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(230);
        setCardWidth(200);
        setCardHeight(280);
      } else if (width < 1024) {
        setRadius(300);
        setCardWidth(260);
        setCardHeight(360);
      } else {
        setRadius(380);
        setCardWidth(330);
        setCardHeight(450);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects if category selected
  const filteredProjects =
    selectedCategory === 'All'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === selectedCategory);

  const totalItems = filteredProjects.length;
  const angleStep = 360 / Math.max(1, totalItems);

  const [currentDirection, setCurrentDirection] = useState<'forward' | 'backward'>('forward');
  const rotationDirection = useRef<'forward' | 'backward'>('forward');
  const accumulatedCycle = useRef<number>(0);
  const pauseCountdown = useRef<number>(0);

  // Smooth rotation animation loop: rotates 360° forward through all projects starting at SIYA,
  // then smoothly reverses and rotates back 360° in reverse from the back side!
  const animate = useCallback(() => {
    if (autoRotate && !isDragging && !isHovered) {
      if (pauseCountdown.current > 0) {
        pauseCountdown.current -= 1;
      } else {
        const step = 0.35;
        accumulatedCycle.current += step;

        if (rotationDirection.current === 'forward') {
          setRotateY((prev) => prev - step);
          if (accumulatedCycle.current >= 360) {
            accumulatedCycle.current = 0;
            rotationDirection.current = 'backward';
            setCurrentDirection('backward');
            pauseCountdown.current = 50; // ~0.8s gentle pause at completion
          }
        } else {
          setRotateY((prev) => prev + step);
          if (accumulatedCycle.current >= 360) {
            accumulatedCycle.current = 0;
            rotationDirection.current = 'forward';
            setCurrentDirection('forward');
            pauseCountdown.current = 50; // ~0.8s gentle pause at completion
          }
        }
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [autoRotate, isDragging, isHovered]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // Track active front-facing project
  useEffect(() => {
    const normalizedAngle = ((-rotateY % 360) + 360) % 360;
    const index = Math.round(normalizedAngle / angleStep) % totalItems;
    setActiveProjectIndex(index);
  }, [rotateY, angleStep, totalItems]);

  // Pointer & Drag handling for interactive 3D rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastMouseX.current = e.clientX;
    lastMouseY.current = e.clientY;
    velocity.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMouseX.current;
    const deltaY = e.clientY - lastMouseY.current;

    setRotateY((prev) => prev + deltaX * 0.7);
    setRotateX((prev) => Math.max(-25, Math.min(10, prev - deltaY * 0.3)));

    velocity.current = deltaX;
    lastMouseX.current = e.clientX;
    lastMouseY.current = e.clientY;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Wheel scroll interaction
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      setRotateY((prev) => prev + e.deltaX * 0.5);
    } else {
      // Optional subtle spin on scroll inside container
      setRotateY((prev) => prev + (e.deltaY > 0 ? 12 : -12));
    }
  };

  const stepNext = () => {
    setRotateY((prev) => prev - angleStep);
  };

  const stepPrev = () => {
    setRotateY((prev) => prev + angleStep);
  };

  const activeProject = filteredProjects[activeProjectIndex] || filteredProjects[0];

  return (
    <div className="relative w-full overflow-hidden select-none py-12 md:py-20 flex flex-col items-center">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header and Subtitle */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#BBCCD7] font-medium uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive 3D Circle Showcase</span>
        </div>

        <h3 className="hero-heading font-black uppercase text-[clamp(2rem,6vw,4.5rem)] leading-none tracking-tight">
          3D Project Cylinder
        </h3>
        <p className="text-white/70 text-sm sm:text-base font-light mt-3 max-w-xl mx-auto leading-relaxed">
          Spin, drag, or scroll to rotate through live projects in 3D circular space. Hover to pause or click any card for a full breakdown.
        </p>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Cylinder Stage Viewport - Zoomed-in for dominant showcase */}
      <div
        ref={containerRef}
        className="relative w-full h-[480px] sm:h-[580px] md:h-[650px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        style={{ perspective: 1000 }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onWheel={handleWheel}
      >
        {/* Floor Glow & Ambient Disc */}
        <div
          className="absolute w-[500px] sm:w-[720px] h-[180px] sm:h-[240px] rounded-full blur-2xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.22) 0%, rgba(168,85,247,0.12) 50%, transparent 80%)',
            transform: 'translateY(240px) rotateX(75deg)',
          }}
        />

        {/* Dynamic Shadow Ring */}
        <div
          className="absolute w-[420px] sm:w-[600px] h-[120px] rounded-full bg-black/90 blur-xl pointer-events-none"
          style={{
            transform: 'translateY(250px) rotateX(70deg)',
          }}
        />

        {/* The 3D Rotating Cylinder Slider Container - single perspective */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {filteredProjects.map((project, index) => {
            const angle = index * angleStep;

            return (
              <div
                key={project.id}
                className="absolute inset-0 transition-all duration-300 group cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                }}
                onClick={() => setActiveModalProject(project)}
              >
                {/* FRONT FACE (Visible when facing the viewer) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0e0e14] border-2 border-white/20 shadow-2xl transition-all duration-300 group-hover:border-white/50"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    boxShadow: `0 20px 45px -10px rgba(0,0,0,0.95), 0 0 30px ${project.color}35`,
                  }}
                >
                  {/* 100% Full-Bleed Crystal-Clear Project Image */}
                  <div className="relative w-full h-full overflow-hidden bg-[#08080c]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                      loading="eager"
                      decoding="async"
                    />

                    {/* Top Floating Glass Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-white/25 text-white font-bold shadow-md">
                        {project.number}
                      </span>
                      <span
                        className="text-[9px] px-2.5 py-0.5 rounded-full backdrop-blur-md border font-semibold uppercase tracking-wider shadow-md"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          borderColor: `${project.color}80`,
                          color: project.color,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Bottom Frosted Glass Caption Bar */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 bg-gradient-to-t from-black/95 via-black/85 to-transparent backdrop-blur-md border-t border-white/10 z-10 flex flex-col gap-1 transition-all">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors truncate">
                          {project.title}
                        </h4>
                        <span className="text-[10px] text-cyan-400 font-medium shrink-0 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/70">
                        <span className="truncate text-white/50 max-w-[170px]">{project.stats}</span>
                        <span className="text-cyan-300 font-mono text-[10px] shrink-0 font-medium">Inspect &rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK FACE (Visible when rotating across the rear / back side of the cylinder) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0c14]/90 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 group-hover:border-cyan-400/50"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    boxShadow: `0 15px 35px -10px rgba(0,0,0,0.9), 0 0 25px ${project.color}25`,
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden flex flex-col justify-between p-4 sm:p-5">
                    {/* Background subtle preview image with dark ambient veil */}
                    <img
                      src={project.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-25 filter blur-[1px] pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/85 via-[#0e0e16]/90 to-[#07070d]/95 pointer-events-none" />

                    {/* Top row */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white font-bold">
                        {project.number}
                      </span>
                      <span
                        className="text-[9px] px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wider"
                        style={{
                          borderColor: `${project.color}70`,
                          color: project.color,
                          backgroundColor: `${project.color}20`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Middle preview info */}
                    <div className="relative z-10 text-center px-2 py-2">
                      <div
                        className="w-9 h-9 mx-auto mb-2 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${project.color}15`,
                          borderColor: `${project.color}40`,
                          color: project.color,
                        }}
                      >
                        <Rotate3d className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base line-clamp-1 mb-1 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom tag bar */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] pt-2.5 border-t border-white/10 text-white/70">
                      <span className="font-mono text-cyan-300">{project.stats.split('•')[0]}</span>
                      <span className="text-cyan-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Inspect</span>
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="relative z-20 w-full max-w-xl mx-auto px-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navigation Step Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={stepPrev}
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-all ${
              autoRotate
                ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white/70'
            }`}
          >
            {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>
              {autoRotate
                ? currentDirection === 'forward'
                  ? 'Auto-Rotating'
                  : 'Rotating Back'
                : 'Paused'}
            </span>
          </button>

          <button
            type="button"
            onClick={stepNext}
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95"
            aria-label="Next Project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Current Active Indicator */}
        <div className="flex items-center gap-2 text-xs text-white/60 font-light">
          <Rotate3d className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>
            Active:{' '}
            <strong className="text-white font-medium">
              {activeProject?.title || 'Explore'}
            </strong>{' '}
            ({activeProjectIndex + 1}/{totalItems})
          </span>
        </div>
      </div>

      {/* Quick View / Full Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#141414] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-cyan-400">
                    {activeModalProject.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeModalProject.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-white/50">
                      {activeModalProject.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden mt-5 bg-black/60 border border-white/10">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Modal Body */}
              <div className="mt-5 space-y-4">
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {activeModalProject.description}
                </p>

                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Technologies & Tools
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-cyan-300 font-mono">
                    {activeModalProject.stats}
                  </span>

                  <div className="flex items-center gap-3">
                    {activeModalProject.githubUrl && (
                      <a
                        href={activeModalProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {activeModalProject.liveUrl && (
                      <a
                        href={activeModalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCircleGallery;
