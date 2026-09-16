import React from 'react';
import HeroSection from './components/sections/HeroSection';
import MarqueeSection from './components/sections/MarqueeSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';

export const App: React.FC = () => {
  return (
    <div
      className="bg-[#0C0C0C] min-h-screen text-white font-kanit antialiased w-full relative"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. SERVICES SECTION (SKILLS) */}
      <ServicesSection />

      {/* 5. PROJECTS & ACHIEVEMENTS SECTION */}
      <ProjectsSection />
    </div>
  );
};

export default App;
