import React, { useState } from 'react';
import { X, ExternalLink, Gauge, ArrowRight, CheckCircle2, Monitor, Tablet, Smartphone, Sparkles, Shield, Cpu } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy;
  onClose: () => void;
  onRequestAudit: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onRequestAudit,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'architecture'>('overview');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold">
              {caseStudy.category}
            </span>
            <h2 id="modal-case-study-title" className="text-lg font-bold text-slate-900 tracking-tight">
              {caseStudy.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-md hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close case study dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-slate-200 bg-white flex items-center gap-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Project Overview & Results
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'metrics'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Speed & Lighthouse Diagnostics
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Technical Stack & Deliverables
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-600 text-sm">
          
          {/* Main Visual Preview with Device Controls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">Live Staging Preview Frame</span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md border border-slate-200">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded transition-colors ${
                    deviceView === 'desktop' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded transition-colors ${
                    deviceView === 'tablet' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded transition-colors ${
                    deviceView === 'mobile' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Framed Mockup with simulated browser chrome */}
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 flex justify-center">
              <div
                className={`transition-all duration-300 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm ${
                  deviceView === 'desktop'
                    ? 'max-w-full'
                    : deviceView === 'tablet'
                    ? 'max-w-md'
                    : 'max-w-xs'
                }`}
              >
                {/* Browser bar */}
                <div className="px-3 py-2 bg-slate-900 border-b border-white/10 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 px-2 py-0.5 bg-slate-800 rounded text-[11px] font-mono text-slate-300 truncate text-center">
                    https://{caseStudy.id}.preview.bhardwajwp.dev
                  </div>
                </div>

                {/* Screenshot viewport */}
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width="600"
                    height="375"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold block">
                    The Architectural Challenge
                  </span>
                  <p className="text-xs leading-relaxed text-slate-700">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                    The Custom Solution
                  </span>
                  <p className="text-xs leading-relaxed text-slate-700">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Client Quote Card */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <blockquote className="text-xs sm:text-sm italic text-slate-800 leading-relaxed">
                  "{caseStudy.clientQuote.quote}"
                </blockquote>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 block">{caseStudy.clientQuote.author}</span>
                    <span className="text-slate-500 text-[11px]">{caseStudy.clientQuote.role}, {caseStudy.clientQuote.company}</span>
                  </div>
                  <span className="text-emerald-700 font-mono text-xs font-bold">Verified Result & Impact</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: METRICS */}
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-mono block">Mobile PageSpeed</span>
                  <span className="text-3xl font-bold font-mono text-emerald-600 block mt-1">
                    {caseStudy.pageSpeedScoreAfter}/100
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Before: {caseStudy.pageSpeedScoreBefore}/100
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-mono block">Average TTFB / Load</span>
                  <span className="text-3xl font-bold font-mono text-slate-900 block mt-1">
                    {caseStudy.afterLoadTime}
                  </span>
                  <span className="text-[11px] text-emerald-600 mt-1 block font-medium">
                    Slashed from {caseStudy.beforeLoadTime}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-mono block">Business Lift</span>
                  <span className="text-2xl font-bold font-mono text-emerald-700 block mt-1">
                    {caseStudy.conversionLift}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Direct conversion ROI
                  </span>
                </div>
              </div>

              {/* Key Results list */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  Measured Performance Outcomes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-3">
                  Delivered Assets & Architecture:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.deliverables.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start gap-2">
                      <Cpu className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  Technical Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-slate-200 text-xs font-mono rounded-lg text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky CTA */}
        <div className="p-4 px-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Want similar <strong className="text-slate-900">90+ PageSpeed benchmarks</strong> for your website?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestAudit();
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <span>Request Free Site Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
