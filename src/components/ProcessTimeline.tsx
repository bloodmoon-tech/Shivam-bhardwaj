import React from 'react';
import { Video, CheckCircle2, ArrowRight, Clock, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBooking }) => {
  return (
    <section id="process" className="py-24 bg-slate-50 relative border-b border-slate-200 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Client-Friendly Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Predictable, Transparent 5-Step Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Zero surprises or technical jargon. Weekly milestones, private staging previews, up to 5 revision rounds, and a custom video walkthrough so your team can easily edit content.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="space-y-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-emerald-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left col: Step Number & Timeframe */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-extrabold text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {step.timeframe}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono hidden lg:block">
                    Milestone Phase
                  </span>
                </div>

                {/* Center col: Title & Description */}
                <div className="lg:col-span-5 space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="pt-2 text-[11px] text-slate-500 font-medium">
                    <strong className="text-slate-700">Client Commitment:</strong> {step.clientCommitment}
                  </div>
                </div>

                {/* Right col: Deliverables Checklist */}
                <div className="lg:col-span-4 bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Phase Deliverables:
                  </span>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Video Training Feature Highlight Banner */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200 p-7 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                <Video className="w-3.5 h-3.5 text-emerald-600" />
                <span>Every Single Build Includes This Guarantee</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Personalized Loom Video Walkthrough Library
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You will never feel stranded with complicated backend dashboards. Before launch, I record a customized, chaptered Loom video showing your team step-by-step how to change text, swap images, update products, and publish new pages visually without writing a single line of code.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Recorded on your actual live site
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Shareable with current & future team members
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  30 days post-launch support included
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-900">Have a launch deadline?</span>
              <p className="text-xs text-slate-500">I can reserve your development sprint this month.</p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Check Development Availability
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
