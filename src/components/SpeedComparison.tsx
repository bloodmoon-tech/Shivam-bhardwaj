import React, { useState } from 'react';
import { Gauge, Check, X, AlertTriangle, Zap, ArrowRight } from 'lucide-react';

interface SpeedComparisonProps {
  onRequestAudit: () => void;
}

export const SpeedComparison: React.FC<SpeedComparisonProps> = ({ onRequestAudit }) => {
  const [selectedPreset, setSelectedPreset] = useState<'saas' | 'ecommerce' | 'agency'>('saas');

  const presets = {
    saas: {
      label: 'B2B SaaS / Product Site',
      bloated: {
        theme: 'Avada / Divi with 42 Plugins',
        ttfb: '1,420 ms',
        lcp: '4.8s',
        score: '32/100',
        weight: '4.9 MB',
        requests: '96 requests',
        cls: '0.24 (Jumpy)',
        editing: 'Confusing backend with 100+ global toggles',
        security: 'High risk (28 third-party plugin attack vectors)'
      },
      custom: {
        theme: 'Custom Block Theme (Shivam Bhardwaj)',
        ttfb: '160 ms',
        lcp: '0.8s',
        score: '99/100',
        weight: '380 KB',
        requests: '14 requests',
        cls: '0.00 (Rock solid)',
        editing: 'Native visual Gutenberg blocks matching exact brand styles',
        security: 'Zero plugin vulnerabilities, CSP hardened, edge cached'
      }
    },
    ecommerce: {
      label: 'WooCommerce Store',
      bloated: {
        theme: 'Commercial Marketplace Theme + 55 Addons',
        ttfb: '2,100 ms',
        lcp: '5.9s',
        score: '24/100',
        weight: '7.2 MB',
        requests: '142 requests',
        cls: '0.38 (Severe shifts)',
        editing: 'Heavy customizer with frequent save crashes',
        security: 'Repeated checkout script conflicts & database locking'
      },
      custom: {
        theme: 'High-Performance Custom WooCommerce Storefront',
        ttfb: '210 ms',
        lcp: '0.9s',
        score: '98/100',
        weight: '520 KB',
        requests: '18 requests',
        cls: '0.00 (Zero shifts)',
        editing: 'Streamlined product manager + 1-click checkout flow',
        security: 'Stripe Elements native API + automated inventory queue'
      }
    },
    agency: {
      label: 'Corporate / Consulting Portal',
      bloated: {
        theme: 'Multi-purpose Envato Template',
        ttfb: '1,280 ms',
        lcp: '4.2s',
        score: '41/100',
        weight: '5.4 MB',
        requests: '88 requests',
        cls: '0.19 (Unstable)',
        editing: 'Broken shortcodes when editing text on mobile',
        security: 'Slow database queries causing intermittent 504 gateway timeouts'
      },
      custom: {
        theme: 'Sanitized Enterprise Gutenberg / Elementor Architecture',
        ttfb: '145 ms',
        lcp: '0.7s',
        score: '99/100',
        weight: '290 KB',
        requests: '11 requests',
        cls: '0.00 (Rock solid)',
        editing: 'Granular role permissions with Loom video training included',
        security: 'Strict HSTS/CSP headers with Redis memory caching'
      }
    }
  };

  const current = presets[selectedPreset];

  return (
    <section className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Architectural Benchmark
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Custom WordPress Beats Off-The-Shelf Builders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Most agencies install bloated templates loaded with 40+ plugins. Here is the verified difference in page weight, server latency, and client maintainability.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-xs">
            {(Object.keys(presets) as Array<keyof typeof presets>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedPreset(key)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedPreset === key
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {presets[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Head-to-Head Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column A: Typical Bloated Theme */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-rose-200">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">The "Standard Agency" WordPress</h3>
                  <span className="text-xs text-rose-600 font-medium">Bloated Page Builders & 40+ Plugins</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 font-mono block">Mobile Score</span>
                <span className="text-xl font-bold font-mono text-rose-600">{current.bloated.score}</span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-rose-100">
                <span className="text-slate-500">Theme & Builder Stack</span>
                <span className="text-slate-800 text-right truncate max-w-[200px] font-semibold">{current.bloated.theme}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-rose-100">
                <span className="text-slate-500">Server TTFB (Latency)</span>
                <span className="text-rose-600 font-bold">{current.bloated.ttfb}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-rose-100">
                <span className="text-slate-500">Largest Contentful Paint</span>
                <span className="text-rose-600 font-bold">{current.bloated.lcp}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-rose-100">
                <span className="text-slate-500">Page Payload</span>
                <span className="text-rose-600">{current.bloated.weight}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-rose-100">
                <span className="text-slate-500">HTTP Requests</span>
                <span className="text-rose-600">{current.bloated.requests}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-rose-100">
                <span className="text-slate-500">Layout Shift (CLS)</span>
                <span className="text-rose-600">{current.bloated.cls}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{current.bloated.editing}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{current.bloated.security}</span>
              </div>
            </div>
          </div>

          {/* Column B: Custom Clean WordPress */}
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/40 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-white font-mono text-[11px] font-bold rounded-bl-xl shadow-xs">
              RECOMMENDED STANDARD
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-emerald-200">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Shivam Bhardwaj Custom WordPress</h3>
                  <span className="text-xs text-emerald-700 font-medium">Bespoke Gutenberg FSE & Clean Code</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 font-mono block">Mobile Score</span>
                <span className="text-xl font-bold font-mono text-emerald-600">{current.custom.score}</span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-emerald-100">
                <span className="text-slate-500">Theme & Builder Stack</span>
                <span className="text-slate-900 text-right truncate max-w-[200px] font-bold">{current.custom.theme}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-emerald-100">
                <span className="text-slate-500">Server TTFB (Latency)</span>
                <span className="text-emerald-700 font-bold">{current.custom.ttfb}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-emerald-100">
                <span className="text-slate-500">Largest Contentful Paint</span>
                <span className="text-emerald-700 font-bold">{current.custom.lcp}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-emerald-100">
                <span className="text-slate-500">Page Payload</span>
                <span className="text-emerald-700 font-semibold">{current.custom.weight}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-emerald-100">
                <span className="text-slate-500">HTTP Requests</span>
                <span className="text-emerald-700 font-semibold">{current.custom.requests}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-emerald-100">
                <span className="text-slate-500">Layout Shift (CLS)</span>
                <span className="text-emerald-700 font-semibold">{current.custom.cls}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{current.custom.editing}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{current.custom.security}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700 text-center sm:text-left">
            <span className="font-bold text-slate-900">Wondering how your current website scores?</span> I will run a manual performance and plugin bloat breakdown for free.
          </div>
          <button
            onClick={onRequestAudit}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            <span>Run Free Site Speed Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
