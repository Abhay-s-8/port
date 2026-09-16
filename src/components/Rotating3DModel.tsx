import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rotate3d, Sparkles, Navigation, Award, Cpu, GraduationCap } from 'lucide-react';

interface StoryPoint {
  title: string;
  badge: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STORY_POINTS: StoryPoint[] = [
  {
    title: 'Academic Excellence',
    badge: 'AIT Pune • 9.19 CGPA',
    desc: 'Pursuing B.E. in Electronics & Telecom with top academic rank and merit scholarships.',
    icon: GraduationCap,
  },
  {
    title: 'Backend & High-Performance C++',
    badge: '200+ DSA • 5★ HackerRank',
    desc: 'Architecting scalable Node.js REST APIs and solving complex algorithmic challenges.',
    icon: Cpu,
  },
  {
    title: 'Agentic AI Systems',
    badge: 'Claude • Gemini • LangChain',
    desc: 'Building intelligent multilingual OCR translators and automated RSS news pipelines.',
    icon: Sparkles,
  },
  {
    title: 'Leadership & Hackathons',
    badge: 'Commit 1.0 • NCC Cadet AAA',
    desc: 'Secretary of Cultural Board leading 1000+ students & 2nd Runner-up in Hackathon.',
    icon: Award,
  },
];

export const Rotating3DModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateY, setRotateY] = useState(15);
  const [rotateX, setRotateX] = useState(5);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const lastMousePos = useRef({ x: 0, y: 0 });



  // Auto rotation loop when not dragging
  useEffect(() => {
    if (!autoRotate || isDragging) return;

    const interval = setInterval(() => {
      setRotateY((prev) => (prev + 0.6) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Cycle story points periodically
  useEffect(() => {
    const storyInterval = setInterval(() => {
      setActiveStoryIndex((prev) => (prev + 1) % STORY_POINTS.length);
    }, 4000);

    return () => clearInterval(storyInterval);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    setRotateY((prev) => prev + deltaX * 0.8);
    setRotateX((prev) => Math.max(-25, Math.min(25, prev - deltaY * 0.5)));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const activeStory = STORY_POINTS[activeStoryIndex];
  const ActiveIcon = activeStory.icon;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto flex flex-col items-center select-none py-6"
    >
      {/* Interactive Speech / Story Bubble ("Tell About Me") */}
      <motion.div
        key={activeStoryIndex}
        initial={{ opacity: 0, y: -15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-30 mb-6 w-full max-w-lg p-4 sm:p-5 rounded-3xl bg-[#151515]/90 backdrop-blur-md border border-red-500/30 shadow-[0_10px_30px_rgba(220,38,38,0.15)] flex items-start gap-3.5"
      >
        <div className="p-2.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
          <ActiveIcon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
              {activeStory.title}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 font-medium">
              {activeStory.badge}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#D7E2EA] font-light mt-1 leading-relaxed">
            {activeStory.desc}
          </p>
        </div>

        {/* Pointer Triangle */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#151515] border-r border-b border-red-500/30 rotate-45" />
      </motion.div>

      {/* 3D Model Stage Container */}
      <div
        className="relative w-full h-[300px] sm:h-[380px] md:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ perspective: 1200 }}
      >
        {/* Underglow Glow Effect */}
        <div className="absolute w-[240px] sm:w-[320px] h-[70px] bg-red-600/25 rounded-full blur-2xl pointer-events-none -bottom-2" />

        {/* Dynamic Shadow */}
        <motion.div
          style={{
            transform: `rotateX(75deg) rotateZ(${-rotateY}deg)`,
          }}
          className="absolute bottom-4 w-[220px] sm:w-[280px] h-[90px] bg-black/80 rounded-full blur-md pointer-events-none"
        />

        {/* The 3D Rotating Model */}
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
          className="relative w-[260px] sm:w-[340px] md:w-[400px] flex items-center justify-center"
        >
          {/* Main 3D Scooter Image */}
          <motion.img
            src="/scooter-3d.png"
            alt="3D Red Scooter"
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none select-none"
            draggable={false}
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: 'easeInOut',
            }}
          />

          {/* Interactive Floating Hotspots */}
          <div className="absolute top-[28%] right-[10%] transform translate-z-10 pointer-events-auto">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveStoryIndex(0);
              }}
              className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-red-600/90 text-white shadow-lg shadow-red-600/50 hover:scale-125 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping absolute" />
              <Navigation className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="absolute bottom-[25%] left-[12%] transform translate-z-10 pointer-events-auto">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveStoryIndex(1);
              }}
              className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-red-600/90 text-white shadow-lg shadow-red-600/50 hover:scale-125 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping absolute" />
              <Cpu className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Model Controls & Story Milestones Navigation */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 px-4 z-20">
        {/* Story Milestone Dots */}
        <div className="flex items-center gap-2">
          {STORY_POINTS.map((pt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveStoryIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStoryIndex === i
                  ? 'w-8 bg-red-500'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Milestone ${i + 1}: ${pt.title}`}
            />
          ))}
        </div>

        {/* 3D Mode Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              autoRotate
                ? 'bg-red-500/20 border border-red-500/40 text-red-300'
                : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
            }`}
          >
            <Rotate3d className="w-3.5 h-3.5" />
            <span>{autoRotate ? 'Auto-Rotating' : 'Spin Paused'}</span>
          </button>
          <span className="text-[11px] text-white/40 hidden sm:inline">
            Drag to rotate in 3D
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rotating3DModel;
