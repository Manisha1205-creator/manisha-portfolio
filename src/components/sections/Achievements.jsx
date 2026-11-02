import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Eye, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  FileCheck,
  Trophy
} from 'lucide-react';
import { certificationsData, achievementsData } from '../../data/portfolioData';

export const Achievements = ({ onOpenCertificate }) => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#070b13]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Achievements &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified academic milestones, competitive hackathon involvement, and certified technical coursework.
          </p>
        </div>

        {/* 1. Achievements Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <Trophy className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-300 font-bold">
              Key Achievements &amp; Hackathon Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10 p-6 space-y-4 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-cyan-400 font-medium">
                    {item.highlight}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-1 text-xs">
                  <span className="text-slate-400 font-mono text-[11px] block">Impact &amp; Takeaway:</span>
                  <p className="text-slate-300 italic">"{item.impact}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Certifications Gallery */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <Award className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-bold">
              Verified Technical Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border-2 border-cyan-500/30 p-6 sm:p-8 space-y-6 hover:border-cyan-400 transition-all duration-300 relative group overflow-hidden shadow-glow-cyan/10"
              >
                {/* Glow highlight */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Learning Credential</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    ID: {cert.credentialId}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-cyan-400">
                    Issued by: <strong className="text-white">{cert.issuer}</strong> &bull; {cert.category}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                {/* Covered Skills */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Core Competencies Validated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive View Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenCertificate(cert)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/20 transition-all hover:scale-105"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Official Certificate</span>
                  </button>

                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Authenticated</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Transparency Note */}
        <div className="p-4 rounded-xl glass-panel border border-white/10 text-center text-xs font-mono text-slate-400">
          &bull; Commitment to Authenticity: All achievements and certifications listed represent genuine, completed coursework and confirmed hackathon participations.
        </div>

      </div>
    </section>
  );
};

