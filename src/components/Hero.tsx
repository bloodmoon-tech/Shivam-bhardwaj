import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Gauge, Zap, Star, ShieldCheck, Sparkles, Award, Gift, Paintbrush, Flame, ExternalLink } from 'lucide-react';
import { STATS } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onViewCaseStudies: () => void;
  onRequestAudit: () => void;
  onOpenMockup?: () => void;
}

const VALUE_PROPOSITIONS = [
  'High-Performance WordPress',
  'Custom Business Sites',
  'Lightweight SEO Architecture'
];

export const Hero: React.FC<HeroProps> = ({ onViewCaseStudies, onRequestAudit, onOpenMockup }) => {
  const [propIndex, setPropIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = VALUE_PROPOSITIONS[propIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentPhrase.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentPhrase(fullText.slice(0, currentPhrase.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentPhrase.length > 0) {
        timeout = setTimeout(() => {
          setCurrentPhrase(fullText.slice(0, currentPhrase.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setPropIndex((prev) => (prev + 1) % VALUE_PROPOSITIONS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentPhrase, isDeleting, propIndex]);
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-200">
      
      {/* Subtle light mesh background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-teal-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning Copy & Free Mockup Hook */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for 1-2 Selective Small Business Projects</span>
            </div>

            {/* Main Headline with Typewriter Animation */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] min-h-[110px] sm:min-h-[130px]">
              <span className="block text-slate-900">Engineering</span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 min-h-[1.2em]">
                {currentPhrase}
                <span className="inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-emerald-600 ml-1.5 align-baseline animate-pulse" aria-hidden="true" />
              </span>
              <span className="sr-only">High-Performance WordPress, Custom Business Sites, and Lightweight SEO Architecture</span>
              <span className="block text-slate-900 text-2xl sm:text-4xl lg:text-4xl font-bold mt-1">
                for Small Businesses
              </span>
            </h1>

            {/* Sub-headline: The user's exact positioning statement */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              I focus exclusively on building fast, lightweight custom WordPress sites for small businesses. Because I keep my client list small, I give <strong className="text-slate-900 font-semibold">100% of my attention</strong> to your project and deliver faster than larger agencies.
            </p>

            {/* Free Mockup Hook Callout Card */}
            <div
              data-cursor-text="Free Mockup"
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-teal-50/70 border-2 border-emerald-300 shadow-sm max-w-2xl relative overflow-hidden group hover:border-emerald-400 transition-all"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-200/40 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <Gift className="w-4 h-4 text-emerald-600 animate-bounce" />
                    <span>Zero-Risk Pilot: Free Custom Homepage Mockup</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 italic">
                    "Let me design a quick homepage layout for your site first. If you like it, we can work together. If not, no worries at all!"
                  </p>
                </div>
                {onOpenMockup && (
                  <button
                    onClick={onOpenMockup}
                    data-cursor-text="Claim Free"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-all hover:scale-105 shrink-0 cursor-pointer"
                  >
                    <Paintbrush className="w-3.5 h-3.5" />
                    <span>Claim Free Mockup</span>
                  </button>
                )}
              </div>
            </div>

            {/* Action Buttons with cursor hover animations */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {onOpenMockup ? (
                <button
                  onClick={onOpenMockup}
                  data-cursor-text="Free Mockup"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Paintbrush className="w-4 h-4" />
                  <span>Get Free Homepage Mockup</span>
                </button>
              ) : (
                <a
                  href="#contact"
                  data-cursor-text="Start Project"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={onViewCaseStudies}
                data-cursor-text="View Demos"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all hover:scale-[1.01] cursor-pointer hover:border-emerald-300"
              >
                <span>Explore Live Demos</span>
              </button>

              <button
                onClick={onRequestAudit}
                data-cursor-text="Free Audit"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 rounded-xl transition-all hover:scale-[1.01] cursor-pointer"
              >
                <Gauge className="w-4 h-4 text-emerald-600" />
                <span>Free Speed Audit</span>
              </button>
            </div>

            {/* Quick Trust Checks */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Dedicated Attention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>90+ PageSpeed Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Builder Bloat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Easy Visual Editing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Photo Showcase with 3D Cursor Hover Motion */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard
              maxTilt={10}
              scale={1.02}
              className="w-full max-w-md"
            >
              <div
                data-cursor-text="Shivam"
                className="relative bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-500/20 p-6 sm:p-7 shadow-2xl shadow-slate-300/50 group"
              >
                {/* Glowing decorative backdrop ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-600/20 rounded-3xl blur-xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-500" />

                {/* Floating Badge 1: PageSpeed Score (Top Right) */}
                <div className="absolute -top-3 -right-3 sm:-right-4 bg-white px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-md flex items-center gap-2 z-20 transition-transform group-hover:-translate-y-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold font-mono">
                    99
                  </div>
                  <div className="text-[11px] font-bold text-slate-800">
                    PageSpeed Guaranteed
                  </div>
                </div>

                {/* Developer Photo Hero Frame */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 shadow-inner bg-slate-900 aspect-square max-h-[340px] w-full">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/shivam_portrait_400w.webp 400w, /images/shivam_portrait_700w.webp 700w, /images/shivam_realistic_portrait_1790262778042.webp 1200w"
                      sizes="(max-width: 640px) 340px, 380px"
                    />
                    <source
                      type="image/jpeg"
                      srcSet="/images/shivam_portrait_400w.jpg 400w, /images/shivam_realistic_portrait_1790262778042.jpg 1200w"
                      sizes="(max-width: 640px) 340px, 380px"
                    />
                    <img
                      src="/images/shivam_realistic_portrait_1790262778042.webp"
                      alt="Shivam Bhardwaj - Fast Custom WordPress Specialist"
                      width="340"
                      height="340"
                      fetchPriority="high"
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </picture>

                  {/* Gradient overlay at bottom for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-white font-bold text-base tracking-tight">
                            Shivam Bhardwaj
                          </span>
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-bold" title="Verified WordPress Specialist">
                            ✓
                          </span>
                        </div>
                        <p className="text-emerald-300 text-xs font-medium">
                          Custom WordPress & Speed Specialist
                        </p>
                      </div>

                      <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Direct Dev</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Value Highlights Grid underneath Photo */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="grid grid-cols-3 gap-2 text-center pb-3">
                    <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 group-hover:border-emerald-200 transition-colors">
                      <span className="text-[10px] text-slate-500 block font-mono">Client List</span>
                      <span className="text-sm font-bold text-emerald-700 font-mono">Small & Focused</span>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 group-hover:border-emerald-200 transition-colors">
                      <span className="text-[10px] text-slate-500 block font-mono">Attention</span>
                      <span className="text-sm font-bold text-emerald-700 font-mono">100% Direct</span>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 group-hover:border-emerald-200 transition-colors">
                      <span className="text-[10px] text-slate-500 block font-mono">Speed</span>
                      <span className="text-sm font-bold text-emerald-700 font-mono">&lt; 1.0s Load</span>
                    </div>
                  </div>

                  {/* Free Mockup Offer Trigger */}
                  <div className="space-y-2 pt-1">
                    {onOpenMockup && (
                      <button
                        onClick={onOpenMockup}
                        data-cursor-text="Design First"
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-emerald-600/20"
                      >
                        <Paintbrush className="w-3.5 h-3.5" />
                        <span>"Let Me Design a Quick Homepage Mockup First"</span>
                      </button>
                    )}
                    <button
                      onClick={onRequestAudit}
                      data-cursor-text="Check Speed"
                      className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Request Free Site Speed & Bloat Audit</span>
                    </button>
                  </div>
                </div>

                {/* Floating Badge 2: Risk-free pilot (Bottom Left) */}
                <div className="absolute -bottom-3 -left-2 sm:-left-3 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-md flex items-center gap-1.5 z-20 text-[11px] font-semibold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero-Risk Pilot · Pay Only If Satisfied</span>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

        {/* Counter Stats Bar: What We Are Best At & Guarantees */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="space-y-1 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-default"
                data-cursor-text="Guarantee"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 hidden sm:block">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
