import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, Download, Printer, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Gentle confetti burst to celebrate verified achievement
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#a855f7', '#38bdf8']
      });
    } catch (e) {
      // Ignore if canvas-confetti is not loaded
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl glass-panel-elevated bg-[#0a0f1d] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-20"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Display Card */}
        <div className="relative border-2 border-cyan-500/40 rounded-xl p-6 sm:p-10 bg-gradient-to-b from-white/[0.04] to-transparent text-center space-y-6">
          {/* Decorative Corner Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

          {/* Issuer Logo / Seal */}
          <div className="flex justify-center">
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shadow-glow-dual">
              <div className="w-full h-full bg-[#080c14] rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              Verified Learning Certificate
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              Certificate of Completion
            </h3>
            <p className="text-xs text-slate-400 font-mono">Issued by {certificate.issuer}</p>
          </div>

          <div className="space-y-2 py-2">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">This certifies that</p>
            <h4 className="text-2xl sm:text-3xl font-display font-extrabold gradient-text tracking-tight">
              Manisha Pandey
            </h4>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed pt-1">
              has successfully completed comprehensive coursework in{' '}
              <span className="font-semibold text-white">{certificate.title}</span>, demonstrating proficiency in core programming fundamentals, Object-Oriented principles, and technical problem-solving.
            </p>
          </div>

          {/* Skills Covered */}
          <div className="pt-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Verified Curriculum Competencies
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {certificate.skillsLearned.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Status: Authenticated Credential</span>
            </div>
            <div className="text-[11px]">
              Credential ID: <span className="text-slate-200">{certificate.credentialId}</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400 font-mono">
            &bull; Confirmed completed course through Scaler Topics.
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Credential</span>
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-glow-cyan/25 transition-all"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

