import React from 'react';
import FadeIn from '../FadeIn';
import AnimatedText from '../AnimatedText';
import ContactButton from '../ContactButton';
import { Award, GraduationCap, Code, Trophy, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const aboutText =
    "Software Engineering student with strong foundations in Modern C++, Object-Oriented Programming, STL, and Data Structures & Algorithms. Experienced in developing scalable applications and solving algorithmic problems, with hands-on exposure to REST APIs, React.js, and software development practices. Quick learner with a CGPA of 9.19, passionate about building efficient, reliable software.";

  const highlights = [
    {
      icon: GraduationCap,
      label: '9.19 / 10 CGPA',
      sub: 'Army Institute of Tech, Pune',
    },
    {
      icon: Code,
      label: '200+ DSA Solved',
      sub: '5-Star HackerRank (C++)',
    },
    {
      icon: Trophy,
      label: '2nd Runner-Up',
      sub: 'Commit 1.0 Hackathon',
    },
    {
      icon: Award,
      label: 'Scholarship Holder',
      sub: 'AICTE YASHASVI & Indian Express',
    },
    {
      icon: Shield,
      label: 'NCC Cadet',
      sub: "‘B’ Certificate (AAA Grade)",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Decorative 3D Images in Corners */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Asset"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Asset"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative Asset"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative Asset"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center Content Container */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Character-by-Character Paragraph */}
        <AnimatedText text={aboutText} />

        {/* Highlight Stats Grid */}
        <FadeIn delay={0.15} y={30} className="w-full mt-12 sm:mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center gap-2 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="p-2 rounded-xl bg-white/5 text-[#BBCCD7]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs sm:text-sm text-white">{item.label}</h5>
                    <p className="text-[10px] sm:text-xs text-white/50 font-light mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Gap between text block and button */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton href="#contact" label="Get In Touch" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
