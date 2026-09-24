import React from 'react';
import { Check, ArrowRight, Zap, Globe, ShoppingBag, Gauge, Layers, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'custom-wordpress':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'figma-to-web':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'ecommerce-solutions':
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'speed-optimization':
        return <Gauge className="w-5 h-5 text-amber-600" />;
      case 'webapp-development':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'maintenance-security':
        return <ShieldCheck className="w-5 h-5 text-purple-600" />;
      default:
        return <Globe className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Professional Web Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Website Designing & Development Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From bespoke WordPress block themes and Figma conversions to high-converting Shopify stores and speed optimization. Tailored solutions for startups and growing enterprises.
          </p>
        </div>

        {/* 6 Services Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:border-emerald-300 transition-all duration-200 group"
            >
              <div>
                {/* Header row: Number, icon, starting price */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(service.id)}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {service.number}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {service.startingPrice}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-slate-900 mt-5 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-600 mt-1">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Key Features:
                  </span>
                  {service.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer: Turnaround & CTA */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Turnaround Time:</span>
                  <span className="font-semibold text-slate-800">{service.turnaroundTime}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer group-hover:bg-slate-900 group-hover:text-white"
                >
                  <span>Hire Me for This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Callout */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need a custom quote or non-standard web app requirement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              I provide transparent fixed-price quotes and milestones with zero hidden agency costs.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Bespoke Project')}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            Get a Fixed-Price Quote
          </button>
        </div>

      </div>
    </section>
  );
};
