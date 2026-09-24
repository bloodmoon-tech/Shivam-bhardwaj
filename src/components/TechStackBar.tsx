import React from 'react';
import { TECH_STACK } from '../data/portfolioData';

export const TechStackBar: React.FC = () => {
  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold shrink-0">
            Core Technologies & Frameworks:
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
              >
                <span>{tech.name}</span>
                <span className="text-[10px] font-mono text-slate-400 font-normal">
                  ({tech.category})
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
