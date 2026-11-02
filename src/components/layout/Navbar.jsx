import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search, Sparkles, ArrowRight, Download, Terminal } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ onOpenCommand, onOpenResume }) => {
  const { theme, isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'achievements', 'resume', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-lg shadow-black/10 py-3 border-b border-white/10 dark:border-white/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Manisha Pandey Portfolio Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-cyan/50">
                <div className="w-full h-full bg-[#080c14] dark:bg-[#080c14] light:bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-sm tracking-tighter gradient-text">MP</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  Manisha Pandey
                </span>
                <span className="text-[11px] font-mono text-cyan-400/90 tracking-wide hidden sm:block">
                  CSE &bull; Aspiring Software Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 light:bg-slate-100/80">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white dark:text-white light:text-white bg-gradient-to-r from-cyan-500/90 to-purple-600/90 shadow-sm'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Command Palette Trigger */}
              <button
                type="button"
                onClick={onOpenCommand}
                aria-label="Open command palette"
                className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono bg-dark-900/80 dark:bg-dark-900/80 light:bg-slate-200/80 text-slate-400 hover:text-cyan-400 border border-white/10 light:border-slate-300 transition-colors"
                title="Search portfolio (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden xl:inline">Quick Jump</span>
                <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-white/10 dark:bg-white/10 light:bg-white border border-white/10 text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Ctrl K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                className="p-2 rounded-xl text-slate-300 hover:text-cyan-400 bg-white/5 hover:bg-white/10 border border-white/10 light:border-slate-200 light:bg-slate-100 light:text-slate-700 transition-all duration-200"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-purple-600 transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* Resume Quick Action */}
              <button
                type="button"
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 light:border-slate-300 light:text-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </button>

              {/* Contact Direct Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/20 transition-all duration-200 hover:shadow-glow-cyan/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 light:text-slate-700 light:border-slate-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 mt-3 glass-panel-elevated border-b border-white/10 light:bg-white light:border-slate-200 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 light:text-slate-700 light:hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10 light:border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommand();
                  }}
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Portfolio</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume Preview</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

