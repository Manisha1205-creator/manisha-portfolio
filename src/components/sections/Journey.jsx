import React from 'react';
import { 
  GraduationCap, 
  ShieldAlert, 
  Award, 
  Code, 
  Terminal, 
  Sparkles, 
  Calendar,
  Milestone
} from 'lucide-react';
import { journeyTimeline } from '../../data/portfolioData';

export const Journey = () => {
  const iconComponents = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-purple-400" />,
    Award: <Award className="w-5 h-5 text-emerald-400" />,
    Code: <Code className="w-5 h-5 text-sky-400" />,
    Terminal: <Terminal className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#06090f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Milestone className="w-3.5 h-3.5" />
            <span>Development Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Academic &amp; <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The technical milestones, coursework, hackathon explorations, and practical endeavors that shape my foundation as an aspiring software engineer.
          </p>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-12">
          {journeyTimeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#080c14] border-2 border-cyan-400/80 flex items-center justify-center shadow-glow-cyan/50 group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              </div>

              {/* Left-Side Date for larger screens */}
              <div className="hidden sm:block absolute -left-36 top-2 w-28 text-right">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {item.year}
                </span>
                <span className="block text-[10px] font-mono text-slate-500">
                  {item.period}
                </span>
              </div>

              {/* Main Timeline Card */}
              <div className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10 p-6 space-y-3 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/5">
                {/* Mobile Date Header */}
                <div className="sm:hidden flex items-center justify-between text-xs font-mono pb-2 border-b border-white/10">
                  <span className="font-bold text-cyan-400">{item.year}</span>
                  <span className="text-slate-400">{item.period}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-300">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {iconComponents[item.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* Skill / Milestone Tags */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Learning Footnote */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono text-slate-400">
            &bull; Focused entirely on undergraduate engineering rigor, practical coding, and genuine competition experiences.
          </p>
        </div>

      </div>
    </section>
  );
};

