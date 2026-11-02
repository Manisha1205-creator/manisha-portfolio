import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandMenu } from './components/layout/CommandMenu';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { Achievements } from './components/sections/Achievements';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';
import { ProjectModal } from './components/ui/ProjectModal';
import { CertificateModal } from './components/ui/CertificateModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { BackToTop } from './components/ui/BackToTop';
import { Toast } from './components/ui/Toast';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#06090f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenCommand={() => setIsCommandMenuOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Journey />
          <Achievements onOpenCertificate={(cert) => setSelectedCertificate(cert)} />
          <Resume onOpenResumeModal={() => setIsResumeOpen(true)} />
          <Contact onShowToast={showToast} />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Modals */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}

        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        )}

        {isCommandMenuOpen && (
          <CommandMenu
            isOpen={isCommandMenuOpen}
            onClose={() => setIsCommandMenuOpen(false)}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {/* Floating Utilities */}
        <BackToTop />

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

