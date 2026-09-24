import React from 'react';
import { Gauge, Feather, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { GUARANTEES } from '../data/portfolioData';

interface TrustBarProps {
  onLearnMore?: () => void;
}

export const TrustBar: React.FC<TrustBarProps> = () => {
  const highlights = [
    {
      icon: Gauge,
      metric: '90+',
      label: 'Google PageSpeed Guaranteed',
      description: 'Tested on slow mobile throttling. Zero layout shift, optimized fonts, and sub-second LCP.'
    },
    {
      icon: Feather,
      metric: '100%',
      label: 'Custom & Lightweight Themes',
      description: 'Zero commercial theme bloatware or 40+ plugins. Hand-crafted native blocks and modular code.'
    },
    {
      icon: ShoppingBag,
      metric: 'Woo',
      label: 'WooCommerce / E-Commerce Ready',
      description: 'Engineered for high-conversion checkouts, frictionless AJAX carts, and enterprise scalability.'
    },
    {
      icon: ShieldCheck,
      metric: 'A+',
      label: 'SEO & Security Hardened',
      description: 'Strict Content Security Policies, 2FA, sanitized inputs, and schema markup built into every template.'
    }
  ];

  return (
    <section id="guarantees" className="py-12 border-y border-white/10 bg-[#0B0F19]/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section kicker */}
        <div className="text-center mb-8">
          <p className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-medium">
            Core Engineering Standards & Guarantees
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Built for speed, stability, and zero maintenance friction.
          </h2>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-5 rounded-lg border border-white/5 bg-[#0D121F] hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-lg font-bold text-white tabular-nums">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white tracking-tight">
                  {item.label}
                </h3>
                
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Guaranteed on all custom builds</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
