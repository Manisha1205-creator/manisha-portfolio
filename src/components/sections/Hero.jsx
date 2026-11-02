import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Shield, Cpu, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const ROTATING_TITLES = [
  "Aspiring Software Developer",
  "Computer Science Engineering Student",
  "Full-Stack Web Enthusiast",
  "Practical Problem Solver",
];

export const Hero = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentFullTitle = ROTATING_TITLES[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1627] border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-glow-cyan/20 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-medium">Available for Software Development Roles &amp; Internships</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Role - Fixed Height & Sizing to prevent clipping */}
            <div className="min-h-[4rem] sm:min-h-[3.25rem] w-full flex items-center justify-center lg:justify-start my-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)] leading-tight">
                {displayText}
                <span className="inline-block w-[3px] h-6 sm:h-7 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mt-4 mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/assets/Manisha_Pandey_Resume.pdf"
                download="Manisha_Pandey_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md group"
                aria-label="Download Manisha Pandey Resume PDF"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Highlights */}
            <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-slate-400 font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Manisha"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:block h-4 w-[1px] bg-white/15" />

              <div className="text-xs font-mono text-cyan-300 flex items-center gap-2 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>CHAKRAVYUH 1.0 Hackathon Participant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait Visual */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Subtle Ambient Glow frame matching dark theme */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/25 to-sky-400/30 blur-2xl opacity-75 animate-pulse-slow pointer-events-none" />

              {/* Portrait Container with subtle cyan-purple border */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-cyan-500/60 via-purple-600/60 to-cyan-400/60 shadow-2xl overflow-hidden glass-panel-elevated">
                <div className="relative rounded-[22px] overflow-hidden bg-[#080c16] aspect-[4/5]">
                  <img
                    src="/assets/profile.png"
                    alt="Manisha Pandey - Computer Science Engineering Student & Aspiring Software Developer"
                    className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />

                  {/* Subtle contrast gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06090f]/95 via-[#06090f]/30 to-transparent pointer-events-none" />

                  {/* Top Floating Status Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#0a0f1d]/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-lg">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>Software Dev</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0a0f1d]/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-md shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available for Roles</span>
                    </span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel-elevated bg-[#0a0f1d]/90 border border-white/15 backdrop-blur-md space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                          Manisha Pandey
                        </h2>
                        <p className="text-xs font-mono text-cyan-300">
                          B.Tech Computer Science &bull; Final Year
                        </p>
                      </div>
                      <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <Code2 className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Quick Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/10 text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">Java</span>
                      <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">React.js</span>
                      <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Node.js</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-extrabold gradient-text">Final Year</div>
            <p className="text-xs text-slate-300 font-mono font-medium">B.Tech Computer Science</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">4 Key Projects</div>
            <p className="text-xs text-slate-300 font-mono font-medium">AI, Full-Stack &amp; Web Apps</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-300">CHAKRAVYUH 1.0</div>
            <p className="text-xs text-slate-300 font-mono font-medium">Hackathon Participant</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-purple-300">Scaler Topics</div>
            <p className="text-xs text-slate-300 font-mono font-medium">Java Fundamentals Certified</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-colors group"
          >
            <span>Scroll to discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
