import React from 'react';
import { TrendingUp, Zap, Clock, ShieldCheck, FileCode, UserCheck, CheckCircle2, Paintbrush, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_ME } from '../data/portfolioData';

interface WhyChooseMeProps {
  onOpenBooking: () => void;
  onOpenMockup?: () => void;
}

export const WhyChooseMe: React.FC<WhyChooseMeProps> = ({ onOpenBooking, onOpenMockup }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-indigo-600" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-teal-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="why-choose-me" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            What We Are Best At
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built Exclusively for Small Businesses Seeking Speed & Results
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            "I focus exclusively on building fast, lightweight custom WordPress sites for small businesses. Because I keep my client list small, I give 100% of my attention to your project and deliver faster than larger agencies."
          </p>
        </div>

        {/* Free Mockup Hook Card */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-2 border-emerald-300 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Paintbrush className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold font-mono text-emerald-800 uppercase tracking-wider">
                Risk-Free Pilot Offer
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                "Let me design a quick homepage layout for your site first."
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                If you like it, we can work together. If not, no worries at all! Zero obligation, zero cost to start.
              </p>
            </div>
          </div>
          {onOpenMockup && (
            <button
              onClick={onOpenMockup}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md transition-all hover:scale-105 shrink-0 cursor-pointer"
            >
              <Paintbrush className="w-4 h-4" />
              <span>Request Free Mockup</span>
            </button>
          )}
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ME.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-7 sm:p-8 hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-5 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold">
              Ready to see what a fast, custom WordPress site looks like for your business?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Zero upfront risk. I'll design your homepage layout concept before you commit.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {onOpenMockup && (
              <button
                onClick={onOpenMockup}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all cursor-pointer"
              >
                <Paintbrush className="w-3.5 h-3.5" />
                <span>Claim Free Mockup</span>
              </button>
            )}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <span>Schedule Intro Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
