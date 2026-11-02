import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-500/30 bg-emerald-950/40 text-emerald-200',
    error: 'border-red-500/30 bg-red-950/40 text-red-200',
    info: 'border-cyan-500/30 bg-cyan-950/40 text-cyan-200',
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm animate-in slide-in-from-bottom-5 duration-300">
      <div className={`p-4 rounded-xl border backdrop-blur-xl shadow-2xl flex items-start gap-3 ${borders[type] || borders.info}`}>
        {icons[type]}
        <div className="flex-1 text-xs font-medium leading-relaxed">
          {message}
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

