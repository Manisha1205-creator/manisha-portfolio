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
            ? 'bg-[#070b13]/95 dark:bg-[#070b13]/95 light:bg-white/95 backdrop-blur-xl shadow-xl shadow-black/25 py-3 border-b border-white/15 dark:border-white/15 light:border-slate-300'
            : 'bg-transparent py-4 sm:py-5'
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
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-cyan/50 shrink-0">
                <div className="w-full h-full bg-[#080c14] dark:bg-[#080c14] light:bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-sm tracking-tighter gradient-text">MP</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  Manisha Pandey
                </span>
                <span className="text-[11px] font-mono text-cyan-300 dark:text-cyan-300 light:text-purple-700 tracking-wide font-medium hidden sm:block">
                  CSE &bull; Aspiring Software Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation - High-Contrast Pill Container */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-[#0c1322] dark:bg-[#0c1322] light:bg-slate-100 px-3 py-1.5 rounded-full border border-white/20 dark:border-white/20 light:border-slate-300 shadow-md">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-[13px] font-semibold tracking-wide rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-sm shadow-cyan-500/20'
                        : 'text-slate-100 dark:text-slate-100 light:text-slate-800 hover:text-white dark:hover:text-white light:hover:text-purple-700 hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-slate-200/80'
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
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0c1322] dark:bg-[#0c1322] light:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-700 hover:text-cyan-300 border border-white/15 dark:border-white/15 light:border-slate-300 transition-colors"
                title="Search portfolio (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-semibold hidden xl:inline">Search</span>
                <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-white/10 dark:bg-white/10 light:bg-white border border-white/15 font-mono text-slate-200 dark:text-slate-200 light:text-slate-700">
                  Ctrl K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                className="p-2 rounded-xl text-slate-200 hover:text-cyan-300 bg-white/10 hover:bg-white/15 border border-white/15 dark:border-white/15 light:border-slate-300 light:bg-slate-100 light:text-slate-700 transition-all duration-200"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-purple-600 transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* Resume Quick Action */}
              <a
                href="/assets/Manisha_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg text-white bg-white/10 hover:bg-white/20 border border-white/20 light:border-slate-300 light:text-slate-800 transition-colors"
                aria-label="View Resume PDF in new tab"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </a>

              {/* Contact Direct Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-xl text-slate-100 hover:text-white bg-white/10 border border-white/15 light:text-slate-800 light:border-slate-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - High Contrast & Clearly Spaced */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 mt-3 bg-[#090e1a]/98 dark:bg-[#090e1a]/98 light:bg-white backdrop-blur-xl border-b border-white/15 dark:border-white/15 light:border-slate-300 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/25 to-purple-500/25 text-cyan-300 border-l-4 border-cyan-400'
                        : 'text-slate-100 dark:text-slate-100 light:text-slate-800 hover:text-white hover:bg-white/10 light:hover:text-slate-900 light:hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/15 dark:border-white/15 light:border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommand();
                  }}
                  className="flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300"
                >
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>Search (Ctrl+K)</span>
                </button>

                <a
                  href="/assets/Manisha_Pandey_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 text-xs text-cyan-400 font-bold hover:text-cyan-300"
                >
                  <Download className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
