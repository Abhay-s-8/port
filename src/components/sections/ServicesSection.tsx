import React from 'react';
import FadeIn from '../FadeIn';

interface SkillCategory {
  number: string;
  name: string;
  description: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    name: 'Languages',
    description:
      'Strong foundations in modern systems programming and high-performance development, object-oriented concepts, and algorithmic problem-solving.',
    skills: ['C++17', 'Java', 'Python', 'JavaScript (ES6+)'],
  },
  {
    number: '02',
    name: 'Software Development & Core CS',
    description:
      'In-depth knowledge of Data Structures & Algorithms, Standard Template Library (STL), Object-Oriented Programming (OOP), Design Patterns (Basics), and REST APIs.',
    skills: [
      'Data Structures & Algorithms',
      'STL',
      'Object-Oriented Programming',
      'REST APIs',
      'Problem Solving',
      'Design Patterns (Basics)',
      '5-Star HackerRank',
    ],
  },
  {
    number: '03',
    name: 'AI & LLMs',
    description:
      'Designing intelligent workflows, AI agent architectures, autonomous task executors, prompt engineering, multi-source RAG, and multi-model integrations.',
    skills: [
      'Prompt Engineering',
      'OpenRouter API Integration',
      'LangChain',
      'Hugging Face',
      'SmolAgents',
      'AI Agent Development',
      'Retrieval-Augmented Generation (RAG)',
      'Claude API',
      'Gemini API',
    ],
  },
  {
    number: '04',
    name: 'Backend Engineering',
    description:
      'Designing decoupled REST backends, modular routing endpoints, document and relational databases, validation pipelines, and secure server-side logic.',
    skills: ['Node.js', 'Express.js', 'Django', 'MongoDB', 'SQL', 'REST API Architecture'],
  },
  {
    number: '05',
    name: 'Frontend Development',
    description:
      'Crafting highly responsive, interactive, modern web user interfaces with clean component architectures, animation libraries, and utility styling.',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    number: '06',
    name: 'Developer Tools & Platforms',
    description:
      'Proficient with industry-standard development workflows, version control branching, automated API testing, cloud authentication, and CDN media optimization.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Firebase', 'Cloudinary'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/60 font-semibold block mb-2">
            Technical Proficiency
          </span>
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Skills
          </h2>
        </FadeIn>

        {/* Skills Categories List */}
        <div className="w-full flex flex-col">
          {SKILL_CATEGORIES.map((category, index) => (
            <FadeIn
              key={category.number}
              delay={index * 0.08}
              y={30}
              className={`w-full py-8 sm:py-10 md:py-12 ${
                index !== 0 ? 'border-t border-[#0C0C0C]/15' : ''
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[clamp(90px,16vw,170px)_1fr] items-start md:items-center gap-6 md:gap-12">
                {/* Number */}
                <div className="font-black text-[clamp(2.8rem,9vw,120px)] text-[#0C0C0C] leading-none select-none">
                  {category.number}
                </div>

                {/* Name, Description, and Skill Tags */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium uppercase text-[clamp(1.1rem,2.2vw,2rem)] text-[#0C0C0C] leading-tight">
                    {category.name}
                  </h3>
                  <p className="font-light text-[#0C0C0C] opacity-75 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.5vw,1.2rem)]">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#0C0C0C]/5 hover:bg-[#0C0C0C]/10 border border-[#0C0C0C]/10 text-[#0C0C0C] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
