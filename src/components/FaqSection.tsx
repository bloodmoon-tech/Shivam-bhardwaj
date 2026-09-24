import React, { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-b border-slate-200 content-auto">
      {/* Anchor alias for backwards compatibility */}
      <div id="faqs" className="absolute -top-20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Common questions about my custom WordPress builds, pricing, timelines, and post-launch support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-lg bg-white border border-slate-200 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Question Direct Email Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-600">Send an inquiry directly. 100% private with a guaranteed reply within 12–24 hours.</p>
          </div>
          <a
            href="mailto:shivambhardwaj240507@gmail.com?subject=Question%20about%20Web%20Development%20Services"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Direct Email</span>
          </a>
        </div>

      </div>
    </section>
  );
};
