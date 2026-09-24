import React, { useState } from 'react';
import { Calculator, Gauge, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SiteAuditCalculatorProps {
  onRequestAudit: () => void;
}

export const SiteAuditCalculator: React.FC<SiteAuditCalculatorProps> = ({ onRequestAudit }) => {
  const [currentSpeed, setCurrentSpeed] = useState<number>(4.8);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(25000);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(75);

  // Industry benchmark: Each 1s reduction in load time lifts conversion by ~7% (Akamai / Google study)
  const speedReduction = Math.max(0, currentSpeed - 0.8);
  const conversionLiftPercent = Math.min(65, Math.round(speedReduction * 7.5));
  const currentConversions = Math.round(monthlyVisitors * 0.02);
  const newConversions = Math.round(monthlyVisitors * (0.02 * (1 + conversionLiftPercent / 100)));
  const monthlyRevenueGain = Math.round((newConversions - currentConversions) * avgOrderValue);

  return (
    <section id="audit-tool" className="py-24 bg-white relative border-b border-slate-200 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Interactive Speed ROI Estimator
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate How Much Revenue A Slow Website Is Costing You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Google research proves that 53% of mobile users abandon pages taking longer than 3 seconds. Adjust your traffic metrics below to calculate the impact of cutting load time down to 0.8s.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Current Load Time */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-800">Your Current Site Load Time (Seconds)</span>
                  <span className="font-mono font-bold text-rose-600">{currentSpeed.toFixed(1)}s</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="8.0"
                  step="0.1"
                  value={currentSpeed}
                  onChange={(e) => setCurrentSpeed(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                  aria-label="Current load time in seconds"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>1.0s (Fast)</span>
                  <span>4.0s (Average bloat)</span>
                  <span>8.0s (Severe dropoff)</span>
                </div>
              </div>

              {/* Slider 2: Monthly Visitors */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-800">Monthly Website Visitors</span>
                  <span className="font-mono font-bold text-slate-900">
                    {monthlyVisitors.toLocaleString()} sessions
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="150000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                  aria-label="Monthly website visitors"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>2K</span>
                  <span>50K</span>
                  <span>150K+</span>
                </div>
              </div>

              {/* Slider 3: Average Order / Lead Value */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-800">Average Order or Lead Value ($ / ₹)</span>
                  <span className="font-mono font-bold text-slate-900">${avgOrderValue}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                  aria-label="Average order or lead value"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>$20</span>
                  <span>$250</span>
                  <span>$500</span>
                </div>
              </div>

            </div>

            {/* Results Output Card */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 space-y-5 text-center shadow-sm">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Projected Conversion Lift
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-600 tracking-tight">
                  +{conversionLiftPercent}%
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  By cutting speed to 0.8s with clean code
                </span>
              </div>

              <div className="py-3 border-y border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Additional Monthly Inquiries:</span>
                  <span className="font-mono font-bold text-slate-800">
                    +{newConversions - currentConversions} deals
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Est. Monthly Revenue Gain:</span>
                  <span className="font-mono font-bold text-emerald-700">
                    +${monthlyRevenueGain.toLocaleString()} / mo
                  </span>
                </div>
              </div>

              <button
                onClick={onRequestAudit}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Request Custom Performance Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <p className="text-[11px] text-slate-400">
                100% Free manual audit. I review your plugins, TTFB, and database queries.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
