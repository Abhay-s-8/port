import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedCharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const isSpace = char === ' ';

  return (
    <span className={`relative inline-block ${isSpace ? 'w-[0.35em]' : ''}`}>
      <span className="invisible select-none">{isSpace ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className={`absolute inset-0 select-none text-[#D7E2EA] ${isSpace ? 'w-[0.35em]' : ''}`}
      >
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let globalCharIndex = 0;
  const totalCharacters = text.length;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {words.map((word, wordIndex) => {
        const chars = word.split('');
        const wordCharElements = chars.map((char) => {
          const charIndex = globalCharIndex++;
          const start = charIndex / totalCharacters;
          const end = Math.min(1, (charIndex + 1) / totalCharacters);

          return (
            <AnimatedCharacter
              key={`char-${charIndex}`}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });

        // Add space tracking if not the last word
        if (wordIndex < words.length - 1) {
          const spaceIndex = globalCharIndex++;
          const spaceStart = spaceIndex / totalCharacters;
          const spaceEnd = Math.min(1, (spaceIndex + 1) / totalCharacters);

          return (
            <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
              {wordCharElements}
              <AnimatedCharacter
                key={`space-${spaceIndex}`}
                char=" "
                progress={scrollYProgress}
                range={[spaceStart, spaceEnd]}
              />
            </span>
          );
        }

        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {wordCharElements}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;

