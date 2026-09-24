import React, { useState, useEffect } from 'react';
import { Sparkles, X, Paintbrush } from 'lucide-react';

interface FloatingCTAProps {
  onContactClick: () => void;
  onOpenMockup?: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onContactClick, onOpenMockup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ease-out flex flex-col items-end gap-2.5 ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {/* Floating CTA Container */}
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md p-1.5 pl-3 rounded-full border border-slate-200 shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all">
        
        {/* Availability pulse dot & Free Mockup hook text */}
        <button
          onClick={onOpenMockup || onContactClick}
          className="flex items-center gap-2.5 py-1 px-1.5 text-left cursor-pointer group"
          title="Claim Free Homepage Mockup"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <div className="hidden sm:flex flex-col">
            <span className="text-[11px] font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors">
              Get a Free Homepage Mockup
            </span>
            <span className="text-[10px] font-mono text-emerald-700 font-semibold leading-tight">
              Zero Risk · Review Design First
            </span>
          </div>
        </button>

        {/* Primary Free Mockup CTA Button */}
        <button
          onClick={onOpenMockup || onContactClick}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-all hover:scale-105 cursor-pointer"
        >
          <Paintbrush className="w-3.5 h-3.5 text-white" />
          <span>Claim Free Mockup</span>
        </button>

        {/* Dismiss small close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer mr-0.5"
          title="Dismiss floating bar"
          aria-label="Dismiss floating action button"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
