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
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-glow-cyan/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Software Development Roles &amp; Internships</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium text-slate-300">
                  {displayText}
                  <span className="inline-block w-[3px] h-6 sm:h-7 ml-1 bg-cyan-400 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.shortBio}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 glass-panel hover:bg-white/10 border border-white/15 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Manisha"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:block h-4 w-[1px] bg-white/10" />

              <div className="text-xs font-mono text-cyan-400/90 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>CHAKRAVYUH 1.0 Hackathon Participant</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Terminal Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-cyan-500/30 blur-xl opacity-75 animate-pulse-slow" />

              {/* Code Terminal Container */}
              <div className="relative rounded-2xl glass-panel-elevated bg-[#0a0f1d]/90 border border-white/15 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080c16] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>manisha_developer.profile</span>
                  </div>
                  <span className="text-[10px] text-slate-500">v2.0</span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 space-y-3.5 text-slate-300">
                  <div>
                    <span className="text-purple-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-cyan-300">name:</span>{' '}
                      <span className="text-amber-300">"Manisha Pandey"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">degree:</span>{' '}
                      <span className="text-amber-300">"B.Tech Computer Science"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">graduationStatus:</span>{' '}
                      <span className="text-emerald-400">"Final Year Student"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">coreLanguages:</span> [
                      <span className="text-amber-300">"Java"</span>,{' '}
                      <span className="text-amber-300">"React"</span>,{' '}
                      <span className="text-amber-300">"Node.js"</span>,{' '}
                      <span className="text-amber-300">"SQL"</span>],
                    </div>
                    <div>
                      <span className="text-cyan-300">hackathonTrack:</span>{' '}
                      <span className="text-purple-300">"CHAKRAVYUH 1.0 (AI/Security)"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">mindset:</span>{' '}
                      <span className="text-amber-300">"Continuous learning &amp; practical code"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-300">readyToContribute:</span>{' '}
                      <span className="text-emerald-400">true</span>
                    </div>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">// Compiling potential solutions...</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Ready to build
                    </span>
                  </div>
                </div>

                {/* Floating Tech Chips */}
                <div className="p-3 bg-white/[0.02] border-t border-white/5 flex flex-wrap gap-1.5 justify-center">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Java Certified</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20">React Full-Stack</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20">MySQL DB</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">Final Year</div>
            <p className="text-xs text-slate-400 font-mono">B.Tech Computer Science</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">4 Key Projects</div>
            <p className="text-xs text-slate-400 font-mono">AI, Full-Stack &amp; Web Apps</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">CHAKRAVYUH 1.0</div>
            <p className="text-xs text-slate-400 font-mono">Hackathon Participant</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-purple-400">Scaler Topics</div>
            <p className="text-xs text-slate-400 font-mono">Java Fundamentals Certified</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 text-xs font-mono transition-colors group"
          >
            <span>Scroll to discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

