import React from 'react';
import { motion } from 'framer-motion';
import ContactButton from '../ContactButton';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#BBCCD7]/10 via-[#646973]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full px-6 md:px-10 pt-6 md:pt-8 z-30 flex items-center justify-between"
      >
        <a
          href="#"
          className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
        >
          Abhay Singh
        </a>

        <div className="flex items-center gap-5 sm:gap-8 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.15rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-6 sm:mt-4 md:-mt-5 text-[13.5vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m abhay
        </motion.h1>
      </div>

      {/* Hero Portrait: Static Cutout Image without Any Animation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none flex justify-center items-end">
        <img
          src="/abhay-cutout.png"
          alt="Abhay Singh"
          className="w-[380px] sm:w-[380px] md:w-[460px] lg:w-[530px] xl:w-[590px] max-h-[82vh] sm:max-h-[86vh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] select-none"
          draggable={false}
          loading="eager"
        />
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[230px] md:max-w-[280px] text-[clamp(0.75rem,1.35vw,1.4rem)]"
        >
          a software engineer driven by crafting robust backend systems and intelligent ai solutions
        </motion.p>

        {/* Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton href="#contact" label="Get In Touch" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
