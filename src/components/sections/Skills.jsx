import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Search,
  BookOpen
} from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools'];

  const categoryIcons = {
    'Programming': <Code2 className="w-4 h-4 text-cyan-400" />,
    'Frontend': <Layout className="w-4 h-4 text-purple-400" />,
    'Backend': <Server className="w-4 h-4 text-sky-400" />,
    'Database': <Database className="w-4 h-4 text-emerald-400" />,
    'Tools': <Wrench className="w-4 h-4 text-amber-400" />,
  };

  const filteredCategories = skillsData.filter((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) return false;
    if (!searchQuery.trim()) return true;

    return (
      cat.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.skills.some(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.notes.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#06090f] bg-dots-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text">Skills Matrix</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Honest, verified technical competencies categorized by engineering disciplines. Clearly distinguishing practical applied knowledge from ongoing learning.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/15">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#0c1322] p-1.5 rounded-2xl border border-white/15">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-cyan/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full bg-[#0c1322] border border-white/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-white/15 p-6 space-y-5 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/10 border border-white/15 group-hover:scale-105 transition-transform">
                    {categoryIcons[group.category] || <Code2 className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.category}
                    </h3>
                    <p className="text-[11px] text-slate-400">{group.description}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-cyan-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {group.skills.length}
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {group.skills.map((skill) => {
                  const isLearning = skill.level === 'Currently Learning';
                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white tracking-wide">
                          {skill.name}
                        </span>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                            isLearning
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/35'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/35'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                        <span>{skill.notes}</span>
                        <span className="text-slate-400 text-[10px]">{skill.type}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend / Status Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#0c1322] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-white font-bold">Applied / Known:</span>
            <span className="text-slate-300">Demonstrated in academic coursework, hackathons, and practical development</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shrink-0" />
            <span className="text-white font-bold">Currently Learning:</span>
            <span className="text-slate-300">Active skill building &amp; conceptual exploration</span>
          </div>
        </div>

      </div>
    </section>
  );
};
