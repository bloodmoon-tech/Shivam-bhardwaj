import React from 'react';
import { Star, CheckCircle2, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Client Feedback & Trust
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            5.0★ Rated by Founders & Marketing Leaders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read what startup executives, e-commerce founders, and agency partners say about working directly with Shivam Bhardwaj.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="pt-2 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">5.0 / 5.0 Average</span>
            <span className="text-slate-400 text-xs">·</span>
            <span className="text-xs font-medium text-slate-500">Over 150+ Verified Client Engagements</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Stars and project tag */}
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {review.project}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {review.role}, {review.company}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
