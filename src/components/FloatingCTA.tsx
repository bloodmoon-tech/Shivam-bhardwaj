import React, { useState, useEffect } from 'react';
import { Paintbrush, X } from 'lucide-react';

interface FloatingCTAProps {
  onContactClick: () => void;
  onOpenMockup?: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onContactClick, onOpenMockup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 280px
      if (window.scrollY > 280) {
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
    <aside
      aria-label="Free homepage mockup quick claim"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Shifted from bottom to right-side edge: never obscures bottom inputs, footer, or mobile actions */}
      <div className="flex items-stretch bg-white/95 backdrop-blur-md rounded-l-2xl border-y border-l border-emerald-500/30 shadow-2xl shadow-emerald-950/15 overflow-hidden group hover:border-emerald-500 transition-all">
        
        {/* Main Action Button */}
        <button
          onClick={onOpenMockup || onContactClick}
          className="flex items-center gap-2.5 px-3 py-2.5 sm:px-3.5 sm:py-3 text-left cursor-pointer transition-colors hover:bg-emerald-50/70"
          title="Claim Free Homepage Mockup (Zero Risk)"
          aria-label="Claim Free Homepage Mockup (Zero Risk)"
        >
          {/* Icon Badge with Pulse Indicator */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-600 text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
            <Paintbrush className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 ring-1 ring-white" />
            </span>
          </div>

          {/* Copy */}
          <div className="flex flex-col pr-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                Claim Free Mockup
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded font-mono">
                Free
              </span>
            </div>
            <span className="hidden sm:block text-[10px] font-mono text-slate-500 leading-tight mt-0.5 whitespace-nowrap">
              Review design first →
            </span>
          </div>
        </button>

        {/* Dismiss Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="px-2 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer border-l border-slate-100"
          title="Dismiss"
          aria-label="Dismiss free mockup tab"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
