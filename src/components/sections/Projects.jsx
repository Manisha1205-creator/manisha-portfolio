import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Shield, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Info, 
  CheckCircle2, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI & Cybersecurity', value: 'ai-cybersecurity' },
    { label: 'Full-Stack Web', value: 'full-stack' },
    { label: 'Web Applications', value: 'web-apps' },
    { label: 'Civic Tech Concept', value: 'civic-tech' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.filterCategory === activeFilter;
  });

  const getStatusBadge = (statusType, text) => {
    switch (statusType) {
      case 'prototype':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
            <Shield className="w-3 h-3 text-cyan-400" />
            <span>{text}</span>
          </span>
        );
      case 'active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/25">
            <Clock className="w-3 h-3 text-purple-400" />
            <span>{text}</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>{text}</span>
          </span>
        );
      case 'concept':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/25">
            <Info className="w-3 h-3 text-amber-400" />
            <span>{text}</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070b13]">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical solutions engineered to address genuine challenges in cybersecurity, education, fleet monitoring, and digital public access.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-cyan/20 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
            >
              {/* Card Header & Status Banner */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    {project.category}
                  </span>
                  {getStatusBadge(project.statusType, project.status)}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-1 rounded-lg text-slate-400 hover:text-cyan-400 opacity-80 group-hover:opacity-100 transition-all"
                    aria-label={`View details of ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Hackathon Badge if applicable */}
                {project.hackathonNote && (
                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Presented at <strong>CHAKRAVYUH 1.0 Hackathon</strong></span>
                  </div>
                )}

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-6 bg-white/[0.02] border-t border-white/5 space-y-4">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <span>&rarr;</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/20 transition-all hover:scale-105"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on transparency */}
        <div className="mt-12 text-center text-xs font-mono text-slate-400 max-w-xl mx-auto">
          &bull; All projects accurately reflect active student development status, prototypes, and proposed architectural frameworks without overstated claims.
        </div>

      </div>
    </section>
  );
};

