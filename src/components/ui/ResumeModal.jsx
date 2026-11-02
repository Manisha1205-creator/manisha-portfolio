import React, { useState, useEffect } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Code2, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo, skillsData, projectsData, journeyTimeline } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('full');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    // Trigger Print/Save dialog which allows saving as pristine PDF
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/20 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 no-print">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white">Curriculum Vitae</h2>
              <p className="text-xs text-slate-400 font-mono">Manisha Pandey &bull; Official Profile Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/25 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="my-6 p-6 sm:p-10 rounded-xl bg-[#0d1424] border border-white/10 space-y-8 text-slate-200 text-sm leading-relaxed">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
            <div>
              <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                {personalInfo.role}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Computer Science &amp; Engineering | B.Tech Final Year
              </p>
            </div>

            <div className="mt-4 sm:mt-0 text-xs font-mono text-slate-400 space-y-1 sm:text-right">
              <p>Email: <span className="text-slate-200">{personalInfo.email}</span></p>
              <p>GitHub: <span className="text-cyan-400">{personalInfo.github}</span></p>
              <p>LinkedIn: <span className="text-purple-400">{personalInfo.linkedin}</span></p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Summary</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h3>
            <div className="pt-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {personalInfo.education.degree} in {personalInfo.education.major}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Academic Focus: Core Software Engineering &amp; Computer Science Foundations
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-300 shrink-0">
                {personalInfo.education.year}
              </span>
            </div>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Key Academic Modules:</span>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.education.keyCoursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div>
                <span className="font-semibold text-white">Programming: </span>
                <span className="text-slate-300">Java, Python, C, C++</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frontend: </span>
                <span className="text-slate-300">HTML, CSS, JavaScript, React.js</span>
              </div>
              <div>
                <span className="font-semibold text-white">Backend: </span>
                <span className="text-slate-300">Node.js, Express.js</span>
              </div>
              <div>
                <span className="font-semibold text-white">Database: </span>
                <span className="text-slate-300">MySQL, SQL</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-white">Tools: </span>
                <span className="text-slate-300">Git, GitHub, VS Code</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Key Practical Projects</span>
            </h3>

            <div className="space-y-4 pt-1">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      {project.title}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                        {project.status}
                      </span>
                    </h4>
                    <span className="text-xs font-mono text-purple-300">
                      {project.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5 pl-1">
                    {project.highlights.slice(0, 3).map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Hackathons */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications &amp; Hackathon Participation</span>
            </h3>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">CHAKRAVYUH 1.0 Hackathon: </span>
                  <span className="text-slate-300">
                    Confirmed Participant (AI &amp; Cybersecurity track, presenting Scam Sathi project).
                  </span>
                </div>
                <span className="font-mono text-cyan-300 shrink-0 ml-2">Participated</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">Java Fundamentals Certification: </span>
                  <span className="text-slate-300">
                    Scaler Topics (Mastery of Core Java syntax, Object-Oriented Programming, and algorithmic logic).
                  </span>
                </div>
                <span className="font-mono text-cyan-300 shrink-0 ml-2">Verified</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">Data Analytics Training: </span>
                  <span className="text-slate-300">
                    be10x (6 Months Professional Training Program).
                  </span>
                </div>
                <span className="font-mono text-amber-300 shrink-0 ml-2">In Progress</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono no-print">
          <span>&bull; Verified authentic portfolio profile for Manisha Pandey.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

