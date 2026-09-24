import React, { useState } from 'react';
import { ArrowUpRight, Gauge, Zap, ExternalLink, Filter } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface CaseStudiesProps {
  onRequestAudit: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onRequestAudit }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'wordpress' | 'ecommerce' | 'speed'>('all');

  const filteredStudies = CASE_STUDIES.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'wordpress') return item.tools.some((t) => t.includes('WordPress') || t.includes('Gutenberg'));
    if (activeFilter === 'ecommerce') return item.tools.some((t) => t.includes('WooCommerce'));
    if (activeFilter === 'speed') return item.pageSpeedScoreAfter >= 98;
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 relative border-b border-slate-200">
      {/* Anchor alias for backwards compatibility */}
      <div id="portfolio" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Selected Works & Case Studies
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Websites. Verified 90+ PageSpeed Scores.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every custom build is measured on real mobile devices under real network throttling. Explore verified before-and-after Core Web Vitals reductions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('wordpress')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'wordpress'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Custom WordPress
            </button>
            <button
              onClick={() => setActiveFilter('ecommerce')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'ecommerce'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              WooCommerce Stores
            </button>
            <button
              onClick={() => setActiveFilter('speed')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'speed'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              98+ PageSpeed
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
            >
              {/* Site Mockup & Browser Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
                
                {/* Browser top pill */}
                <div className="absolute top-0 left-0 right-0 z-20 px-3 py-2 bg-slate-900/90 backdrop-blur-sm border-b border-white/10 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                    https://{study.id}.preview.bhardwajwp.dev
                  </span>
                  <div className="w-3" />
                </div>

                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      study.id.includes('fintech')
                        ? '/images/case_study_fintech_veloce_500w.webp 500w, /images/case_study_fintech_veloce_1790258911546.webp 1200w'
                        : study.id.includes('ecommerce')
                        ? '/images/case_study_luxury_ecommerce_500w.webp 500w, /images/case_study_luxury_ecommerce_1790258898495.webp 1200w'
                        : '/images/case_study_saas_kinetix_500w.webp 500w, /images/case_study_saas_kinetix_1790258876658.webp 1200w'
                    }
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                  <img
                    src={study.image}
                    alt={study.title}
                    width="600"
                    height="375"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover pt-7 group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>

                {/* Score floating badge */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-xs font-mono font-bold text-emerald-700">
                  <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{study.pageSpeedScoreAfter}/100 Score</span>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
                      {study.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {study.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {study.summary}
                  </p>

                  {/* Performance gain pill */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">Load Time Gain</span>
                      <span className="font-mono font-bold text-slate-800">
                        {study.beforeLoadTime} <span className="text-emerald-600">→ {study.afterLoadTime}</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-mono block">Business Impact</span>
                      <span className="font-mono font-bold text-emerald-700">
                        {study.conversionLift}
                      </span>
                    </div>
                  </div>

                  {/* Tool chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {study.tools.slice(0, 4).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Demo & Specs Trigger */}
                <button
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>View Case Study & Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Specs */}
        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            onRequestAudit={onRequestAudit}
          />
        )}

      </div>
    </section>
  );
};
