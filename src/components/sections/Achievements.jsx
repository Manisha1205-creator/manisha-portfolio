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
  Trophy,
  Clock,
  BookOpen
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>Honors &amp; Professional Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Achievements &amp; <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified academic milestones, competitive hackathon involvement, and ongoing professional courses.
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
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold">
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

        {/* 2. Courses & Professional Learning Gallery */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-bold">
              Courses &amp; Professional Learning
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationsData.map((course) => {
              const isInProgress = course.statusType === 'in_progress';

              return (
                <div
                  key={course.id}
                  className={`rounded-2xl glass-panel-elevated bg-[#0a0f1d] p-6 sm:p-8 space-y-6 transition-all duration-300 relative group overflow-hidden ${
                    isInProgress
                      ? 'border-2 border-amber-500/35 hover:border-amber-400/70 shadow-lg shadow-amber-500/5'
                      : 'border-2 border-cyan-500/30 hover:border-cyan-400 shadow-glow-cyan/10'
                  }`}
                >
                  {/* Glow highlight */}
                  <div
                    className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl pointer-events-none ${
                      isInProgress ? 'bg-amber-500/10' : 'bg-cyan-500/10'
                    }`}
                  />

                  {/* Top Bar Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {isInProgress ? (
                      <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-bold">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                        </span>
                        <span>Currently Pursuing</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verified Learning Credential</span>
                      </div>
                    )}

                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded border font-semibold ${
                        isInProgress
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-white/5 text-slate-300 border-white/10'
                      }`}
                    >
                      {isInProgress ? `${course.duration} Duration` : `ID: ${course.credentialId}`}
                    </span>
                  </div>

                  {/* Course Title & Details */}
                  <div className="space-y-2">
                    <h4
                      className={`text-2xl font-display font-bold text-white transition-colors ${
                        isInProgress ? 'group-hover:text-amber-300' : 'group-hover:text-cyan-300'
                      }`}
                    >
                      {course.title}
                    </h4>

                    <p className="text-xs font-mono text-slate-300">
                      Training Provider:{' '}
                      <strong className={`font-bold ${isInProgress ? 'text-amber-300' : 'text-white'}`}>
                        {course.issuer}
                      </strong>{' '}
                      &bull; {course.category}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {course.description}
                    </p>
                  </div>

                  {/* Program Metadata / Skills Block */}
                  {isInProgress ? (
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Training Track:</span>
                        <span className="text-white font-semibold">{course.title}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Program Duration:</span>
                        <span className="text-amber-300 font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Current Status:</span>
                        <span className="text-amber-300 font-semibold">{course.status}</span>
                      </div>
                    </div>
                  ) : (
                    course.skillsLearned && (
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                          Core Competencies Validated:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.skillsLearned.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-cyan-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    {isInProgress ? (
                      <>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 font-semibold">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>Active Training &bull; In Progress</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 italic">
                          Certificate upon completion
                        </span>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => onOpenCertificate(course)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/20 transition-all hover:scale-105"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Official Certificate</span>
                        </button>

                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Authenticated</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ethical Transparency Note */}
        <div className="p-4 rounded-xl bg-[#0c1322] border border-white/15 text-center text-xs font-mono text-slate-300">
          &bull; Commitment to Authenticity: All achievements and coursework accurately reflect verified credentials or active in-progress training without overstated claims.
        </div>

      </div>
    </section>
  );
};
