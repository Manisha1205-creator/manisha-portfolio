import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Sparkles, Terminal, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData, skillsData, personalInfo } from '../../data/portfolioData';

export const CommandMenu = ({ isOpen, onClose, onSelectProject, onOpenResume }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled outside or via prop
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { label: 'About Manisha', href: '#about', icon: 'User' },
    { label: 'Technical Skills Matrix', href: '#skills', icon: 'Code' },
    { label: 'Featured Projects Showcase', href: '#projects', icon: 'Folder' },
    { label: 'Learning & Academic Journey', href: '#journey', icon: 'Milestone' },
    { label: 'Achievements & Certifications', href: '#achievements', icon: 'Award' },
    { label: 'Resume & Credentials', href: '#resume', icon: 'FileText' },
    { label: 'Contact & Collaboration', href: '#contact', icon: 'Send' },
  ];

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const allSkills = skillsData.flatMap((c) => c.skills);
  const filteredSkills = allSkills.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.notes.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, technology, or section..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Close command palette"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs">
          {/* Quick Actions */}
          <div>
            <div className="px-2 py-1 font-mono uppercase tracking-wider text-[10px] text-cyan-400/80">
              Quick Navigation
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1">
              {quickNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors group"
                >
                  <span className="font-medium">{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-500/20 transition-colors group text-left"
              >
                <span className="font-medium">Open Interactive Resume Modal</span>
                <FileText className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Projects Match */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 py-1 font-mono uppercase tracking-wider text-[10px] text-purple-400/80">
                Projects ({filteredProjects.length})
              </div>
              <div className="space-y-1 mt-1">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(project);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-slate-200 hover:bg-white/10 transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-cyan-300 flex items-center gap-2">
                        {project.title}
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {project.shortDescription}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      View details &rarr;
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Skills Match */}
          {filteredSkills.length > 0 && query.trim() !== '' && (
            <div>
              <div className="px-2 py-1 font-mono uppercase tracking-wider text-[10px] text-emerald-400/80">
                Skills Matched ({filteredSkills.length})
              </div>
              <div className="flex flex-wrap gap-1.5 p-2">
                {filteredSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 text-[11px]"
                  >
                    <span className="font-medium text-cyan-300">{s.name}</span>
                    <span className="text-slate-400">&bull; {s.notes}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Tip: Press ESC to exit</span>
          <span>Manisha Pandey &bull; Portfolio Navigator</span>
        </div>
      </div>
    </div>
  );
};

