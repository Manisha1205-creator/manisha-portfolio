import React, { useState } from 'react';
import { 
  GraduationCap, 
  Lightbulb, 
  Target, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Code2, 
  Layers, 
  Cpu, 
  Zap, 
  TrendingUp,
  Users
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const iconMap = {
    Cpu: <Cpu className="w-4 h-4 text-cyan-400" />,
    Zap: <Zap className="w-4 h-4 text-purple-400" />,
    Code2: <Code2 className="w-4 h-4 text-emerald-400" />,
    Layers: <Layers className="w-4 h-4 text-sky-400" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-amber-400" />,
    Users: <Users className="w-4 h-4 text-pink-400" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b13]">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Manisha Pandey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging computer science fundamentals with hands-on application development.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Identity & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Profile Card */}
            <div className="relative rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Rounded Portrait Layout with subtle cyan-purple border */}
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-500 via-purple-600 to-sky-400 shadow-glow-dual overflow-hidden group">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[14px] overflow-hidden bg-[#080c14]">
                  <img
                    src="/assets/profile.png"
                    alt="Manisha Pandey - Computer Science Engineering Student"
                    className="w-full h-full object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-transparent pointer-events-none" />
                  
                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                        Manisha Pandey
                      </h3>
                      <p className="text-xs font-mono text-cyan-300">
                        Computer Science &amp; Engineering
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Class of 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Education Block */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    Education Overview
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">
                    {personalInfo.education.major} &bull; {personalInfo.education.year}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {personalInfo.education.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">Key Studied Disciplines:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.education.keyCoursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-cyan-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact Line */}
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between border-t border-white/10 pt-4">
                <span>Location: India</span>
                <span className="text-emerald-400 font-semibold">&bull; Open to Relocation / Remote</span>
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="p-5 rounded-2xl glass-panel bg-purple-950/20 border border-purple-500/20 space-y-2">
              <div className="flex items-center gap-2 text-purple-400">
                <Target className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Career Objective
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalInfo.careerObjective}
              </p>
            </div>
          </div>

          {/* Right Column: In-Depth Narrative & Core Qualities */}
          <div className="lg:col-span-7 space-y-8">
            {/* Primary Bio Quote */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel-elevated bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                Professional Introduction
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                "{personalInfo.aboutText}"
              </p>
            </div>

            {/* Approach & Philosophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Problem Solving Approach */}
              <div className="p-5 rounded-xl glass-panel border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Lightbulb className="w-4 h-4" />
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Problem-Solving Approach
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Decomposing technical challenges into modular, verifiable units. Emphasizing clean structure, edge-case consideration, and systematic debugging over guesswork.
                </p>
              </div>

              {/* Learning Philosophy */}
              <div className="p-5 rounded-xl glass-panel border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-purple-400">
                  <BookOpen className="w-4 h-4" />
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Learning Philosophy
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {personalInfo.learningPhilosophy}
                </p>
              </div>
            </div>

            {/* Core Qualities Showcase */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Core Engineering Attributes</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.coreQualities.map((quality, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/[0.04] group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                        {iconMap[quality.icon] || <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {quality.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                          {quality.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

