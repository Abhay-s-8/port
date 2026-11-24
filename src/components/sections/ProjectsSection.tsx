import React from 'react';
import FadeIn from '../FadeIn';
import ContactButton from '../ContactButton';
import ProjectCard, { ProjectData } from './ProjectCard';
import ProjectCircleGallery from './ProjectCircleGallery';
import {
  Trophy,
  Award,
  Shield,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
  Layers,
} from 'lucide-react';

const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'Siya-3D AI mock interview',
    number: '01',
    name: 'SIYA -- 3D AI Career Mentor',
    category: 'Agentic AI & WebGL',
    date: 'Feb 2026',
    link: 'https://github.com/Abhay-s-8/career-assistance',
    github: 'https://github.com/Abhay-s-8/career-assistance',
    bullets: [
      'Architected an interactive 3D AI Career Guidance Mentor and technical mock interview coach with real-time ARKit blendshapes and skeletal gestures.',
      'Engineered neural speech with ElevenLabs and browser-based procedural syllable lip-syncing for realistic conversational presence.',
      'Integrated Google Gemini for dynamic technical coding interviews, live test runner execution, and automated ATS resume scoring.',
      'Designed obsidian glassmorphism UI with WebAudio STT speech recognition and sub-second voice latency.',
    ],
    tech: [
      'Three.js',
      'WebGL',
      'Google Gemini',
      'ElevenLabs',
      'WebAudio API',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
    ],
  },
  {
    id: 'cultural-board',
    number: '02',
    name: 'Cultural Board Website',
    category: 'Full-Stack Platform',
    date: 'Dec 2025',
    link: 'https://cultural-board.web.app',
    github: 'https://github.com/Abhay-s-8',
    bullets: [
      'Created a modular React.js platform for events, galleries, and announcements serving 500+ active campus students.',
      'Implemented secure authentication using Firebase and Google OAuth 2.0, managing credentials securely via environment variables.',
      'Utilized Cloudinary for optimized image uploads and high-performance CDN-backed media delivery.',
      'Collaborated via Git branching and pull requests within a multi-contributor codebase, participating in code reviews to maintain code quality.',
      'Deployed a production-ready application with responsive UI and real-time fest announcement updates.',
    ],
    tech: [
      'React.js',
      'Tailwind CSS',
      'Firebase Auth',
      'Google OAuth 2.0',
      'Cloudinary CDN',
      'Git Branching',
    ],
  },
  {
    id: 'VIRAAT',
    number: '03',
    name: 'VIRAAT — Multi-Rail Fraud Defense',
    category: 'Adversarial AI & FinTech',
    date: 'Feb 2026',
    link: 'https://github.com/Abhay-s-8/VIRAAT',
    github: 'https://github.com/Abhay-s-8/VIRAAT',
    bullets: [
      'Architected a closed-loop adversarial red-team/blue-team immunity platform defending 12 active payment rails (FedNow, UPI, SWIFT, SEPA) under sub-15ms scoring latency.',
      'Engineered a 7-layer defense matrix combining deterministic invariants, 232 zero-leak causal GBDT features, tri-plane perception, and temporal graph neural networks.',
      'Implemented conformal prediction providing mathematically guaranteed 99.0% fraud coverage while maintaining a strict industrial 0.1% false-positive rate (FPR).',
      'Integrated MAP-Elites quality-diversity evolutionary adversarial engine with a 6-slot typed grammar generating 15,271 verified synthetic attack vectors for zero-day self-healing.',
    ],
    tech: [
      'FastAPI',
      'Python',
      'Temporal GNN',
      'Conformal Prediction',
      'GBDT',
      'MAP-Elites',
      'PU Learning',
    ],
  },
  {
    id: 'infomind-ai-enterprise',
    number: '04',
    name: 'InfoMind AI Enterprise',
    category: 'AI/ML & Grounded RAG',
    date: 'Feb 2026',
    link: 'https://github.com/Abhay-s-8/infomind-ai-enterprise',
    github: 'https://github.com/Abhay-s-8/infomind-ai-enterprise',
    bullets: [
      'Engineered an enterprise information management and retrieval platform with staged document ingestion (PDF, DOCX, TXT, CSV, XLSX) and SHA-256 deduplication.',
      'Trained scikit-learn classifiers (TF-IDF + Logistic Regression vs Linear SVM) with versioned models, held-out evaluation metrics, and human review queues.',
      'Implemented hybrid search combining Qdrant dense vector similarity (Nomic Embed) with BM25 keyword matching, category filtering, and date range facets.',
      'Built a grounded RAG assistant utilizing local LLaMA 3.2 via Ollama, featuring an evidence-sufficiency gate, injection defenses, and Server-Sent Events (SSE) streaming answers.',
    ],
    tech: [
      'FastAPI',
      'Python',
      'Qdrant',
      'scikit-learn',
      'Ollama / LLaMA 3.2',
      'React.js',
      'PostgreSQL',
      'Alembic',
    ],
  },
  {
    id: 'sarkar-seva',
    number: '05',
    name: 'Sarkar Seva -- Gov Form Tool',
    category: 'AI & Multilingual OCR',
    date: 'Jan 2026',
    link: 'https://sarkarseva.vercel.app',
    github: 'https://github.com/Abhay-s-8',
    bullets: [
      'Built a multilingual web application enabling users to scan or upload government forms and translate them over 10 Indian languages.',
      'Integrated OpenRouter API for OCR-based text extraction from uploaded images and camera-captured inputs.',
      'Engineered a REST API backend with endpoints for extraction, translation, field detection, and PDF generation.',
      'Implemented dynamic form field rendering and downloadable translated text files.',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'Anthropic Claude API',
      'OpenRouter API',
      'HTML5/CSS3',
      'JavaScript',
    ],
  },
  {
    id: 'newsmaster-ai',
    number: '06',
    name: 'NewsMaster AI Platform',
    category: 'AI & News Intelligence',
    date: 'May 2026',
    link: 'https://newsmaster-ai.vercel.app',
    github: 'https://github.com/Abhay-s-8',
    bullets: [
      'Built an AI-powered news platform that aggregated 20–30 articles from multiple sources using RSS feeds.',
      'Integrated Gemini via OpenRouter API for UPSC-focused summarization and insight extraction.',
      'Engineered automated pipelines for article parsing, deduplication, keyword extraction, and category-wise filtering.',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'Google Gemini',
      'OpenRouter API',
      'RSS Parser',
      'JavaScript',
    ],
  },
];

const CERTIFICATIONS = [
  'AWS Educate Machine Learning Foundations Training (AWS Educate, 2026)',
  'Claude 101 -- Anthropic (2025)',
  'AI Tools & ChatGPT Workshop -- be10x (2026)',
  'Fundamentals of Agents -- Hugging Face (2025)',
  'Deloitte Australia Cyber Job Simulation -- Forage (2026)',
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: '5-Star HackerRank Badge (C++)',
    desc: 'Solved 300+ Data Structures & Algorithms problems primarily using Modern C++ with a focus on optimal complexity.',
  },
  {
    icon: Award,
    title: '2nd Runner-Up -- Commit 1.0 Hackathon',
    desc: 'Collaborated and engineered a real-time full-stack solution under competitive hackathon timelines.',
  },
  {
    icon: Trophy,
    title: 'AICTE YASHASVI Scholarship',
    desc: 'Prestigious national scholarship awarded for academic and technical merit.',
  },
  {
    icon: Award,
    title: 'Indian Express & Bombay Sappers Scholarship',
    desc: 'Merit-cum-means scholarship recipient recognizing high academic rank (9.19 CGPA).',
  },
  {
    icon: Shield,
    title: "NCC Cadet -- 'B' Certificate (AAA Grade)",
    desc: 'Completed rigorous military training focused on leadership, endurance, discipline, and teamwork.',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-28 md:pt-32 pb-24 px-4 sm:px-6 md:px-10 z-10 select-none"
    >
      {/* 1. Main Projects Section Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-8 sm:mb-12">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Projects
        </h2>
      </FadeIn>

      {/* 2. SECTION A: 3D Circle Project Gallery (The YouTube Short 3D Cylindrical Scroll) */}
      <FadeIn delay={0.1} y={30} className="w-full mb-20 sm:mb-28">
        <ProjectCircleGallery />
      </FadeIn>

      {/* 3. SECTION B: Featured Flagship Case Studies (Sticky Stacking Cards) */}
      <div className="w-full max-w-6xl mx-auto pt-16 pb-8 border-t border-white/10">
        <FadeIn delay={0.1} y={30} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#BBCCD7] font-medium uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering Architecture</span>
          </div>
          <h3 className="hero-heading font-black uppercase text-[clamp(2.2rem,6vw,4rem)] leading-none tracking-tight">
            Flagship Case Studies
          </h3>
          <p className="text-white/60 text-sm sm:text-base font-light mt-3 max-w-2xl mx-auto">
            Deep-dive into flagship production works — featuring SIYA (3D AI Career Guidance Mentor), Cultural Board Platform, VIRAAT Multi-Rail Fraud Defense, and InfoMind AI Enterprise.
          </p>
        </FadeIn>

        {/* Sticky Stacking Project Cards Container */}
        <div className="relative w-full flex flex-col gap-10 pb-20">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={FEATURED_PROJECTS.length}
            />
          ))}
        </div>
      </div>

      {/* 5. Achievements & Certifications Section */}
      <div id="achievements" className="w-full max-w-6xl mx-auto pt-24 pb-16 border-t border-white/10">
        <FadeIn delay={0.1} y={30} className="text-center mb-12 sm:mb-16">
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light">
            Recognitions &amp; Credentials
          </span>
          <h3 className="hero-heading font-black uppercase text-[clamp(2rem,6vw,4rem)] leading-none mt-2">
            Achievements &amp; Certifications
          </h3>
        </FadeIn>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={i}
                delay={i * 0.08}
                y={20}
                className="p-5 sm:p-6 rounded-3xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all flex flex-col gap-3 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#BBCCD7] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-[#D7E2EA] font-semibold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm font-light mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Certifications List */}
        <FadeIn delay={0.2} y={20} className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10">
          <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center gap-2 mb-4">
            <FileCheck className="w-4 h-4 text-cyan-400" /> Verified Certifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* 6. Contact Section / Footer */}
      <div id="contact" className="w-full max-w-6xl mx-auto pt-24 border-t border-white/10 flex flex-col items-center text-center">
        <FadeIn delay={0.1} y={30} className="flex flex-col items-center gap-6">
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-light">
            Let&apos;s Connect
          </span>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,5.5rem)] leading-none tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[#D7E2EA] font-light max-w-lg text-sm sm:text-base leading-relaxed opacity-85 mt-2 mb-4">
            Open to software engineering roles, backend &amp; AI internships, collaborative projects, and technical discussions.
          </p>

          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-6 text-left">
            <a
              href="mailto:abhay2662006@gmail.com"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-colors flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 text-[#D7E2EA] group-hover:text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase text-white/50 tracking-wider block">Email</span>
                <span className="text-xs sm:text-sm text-[#D7E2EA] font-medium truncate block">
                  abhay2662006@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+916387421928"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-colors flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 text-[#D7E2EA] group-hover:text-white">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-white/50 tracking-wider block">Phone</span>
                <span className="text-xs sm:text-sm text-[#D7E2EA] font-medium block">
                  +91-6387421928
                </span>
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#D7E2EA]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-white/50 tracking-wider block">Location</span>
                <span className="text-xs sm:text-sm text-[#D7E2EA] font-medium block">
                  Pune, India
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <ContactButton
              label="Send Email"
              href="mailto:abhay2662006@gmail.com"
            />
            <a
              href="https://portfolio-abhay99.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer select-none"
            >
              <span>Live Portfolio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Footer Bottom Bar */}
        <div className="w-full mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[#D7E2EA]/60 text-xs tracking-wider uppercase gap-4">
          <p>© {new Date().getFullYear()} Abhay Singh. Army Institute of Technology, Pune.</p>
          <div className="flex gap-6 items-center">
            <a
              href="https://linkedin.com/in/abhay8s"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href="https://github.com/Abhay-s-8"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://portfolio-abhay99.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> Web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
