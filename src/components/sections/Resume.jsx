import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Printer, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Award, 
  Sparkles,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, skillsData, projectsData } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const Resume = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('summary');

  const handleQuickDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}

    // Open print preview or trigger PDF download
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#06090f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive, verified summary of my academic background, technical competencies, and project portfolio.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Manisha_Pandey_Resume.pdf</h4>
              <p className="text-xs text-slate-400 font-mono">Official Portfolio Resume &bull; Updated 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 glass-panel hover:bg-white/10 border border-white/15 transition-all hover:scale-105"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Full Screen Preview</span>
            </button>

            <button
              type="button"
              onClick={handleQuickDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/25 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* In-Page Interactive Resume Sheet */}
        <div className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10 p-6 sm:p-10 space-y-8 shadow-2xl">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                {personalInfo.role}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Bachelor of Technology in Computer Science &bull; Final Year Undergrad
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1">
              <div>Email: <span className="text-slate-200">{personalInfo.email}</span></div>
              <div>GitHub: <span className="text-cyan-400">github.com/manishapandey</span></div>
              <div>LinkedIn: <span className="text-purple-400">linkedin.com/in/manishapandey</span></div>
            </div>
          </div>

          {/* Quick Tabs to inspect resume sections */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {[
              { id: 'summary', label: 'Summary', icon: Sparkles },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'skills', label: 'Skills', icon: Code2 },
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'certifications', label: 'Certifications', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[220px]">
            {activeSection === 'summary' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Professional Statement
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {personalInfo.shortBio}
                </p>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Core Strengths &amp; Aptitudes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div>&bull; Algorithmic problem-solving in Java and C++</div>
                    <div>&bull; Modern responsive frontend engineering in React.js</div>
                    <div>&bull; Relational database architecture with MySQL</div>
                    <div>&bull; Hackathon collaboration and rapid iterative prototyping</div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {personalInfo.education.degree} in {personalInfo.education.major}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Focus: Computer Science Engineering &amp; Software Design
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-semibold">
                    {personalInfo.education.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {personalInfo.education.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    Key Coursework Completed:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.education.keyCoursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Technical Stack Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {skillsData.map((cat) => (
                    <div key={cat.category} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-bold text-white block">{cat.category}:</span>
                      <p className="text-slate-300 font-mono">
                        {cat.skills.map((s) => s.name).join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Practical Project Portfolio
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectsData.map((p) => (
                    <div key={p.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{p.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {p.shortDescription}
                      </p>
                      <div className="text-[11px] font-mono text-purple-300">
                        {p.technologies.slice(0, 3).join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'certifications' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Verified Learning &amp; Competitions
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-4">
                    <div>
                      <h5 className="text-sm font-bold text-white">CHAKRAVYUH 1.0 Hackathon Participation</h5>
                      <p className="text-xs text-cyan-400 font-mono">AI &amp; Cybersecurity Track &bull; Scam Sathi Prototype</p>
                      <p className="text-xs text-slate-300 mt-1">
                        Pitched an AI-oriented anti-scam awareness tool addressing online fraud signals.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 shrink-0">Confirmed</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-4">
                    <div>
                      <h5 className="text-sm font-bold text-white">Java Fundamentals Certification</h5>
                      <p className="text-xs text-cyan-400 font-mono">Scaler Topics &bull; Core Syntax &amp; OOP Mastery</p>
                      <p className="text-xs text-slate-300 mt-1">
                        Credential ID: SCALER-JAVA-FUNDAMENTALS (Verified Coursework Completion).
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 shrink-0">Verified</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

