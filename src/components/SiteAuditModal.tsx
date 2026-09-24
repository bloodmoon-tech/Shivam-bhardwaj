import React, { useState } from 'react';
import { X, Search, CheckCircle2, ShieldAlert, ArrowRight, Gauge, Clock } from 'lucide-react';

interface SiteAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToForm: (url: string, notes: string) => void;
}

export const SiteAuditModal: React.FC<SiteAuditModalProps> = ({
  isOpen,
  onClose,
  onProceedToForm
}) => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [primaryConcern, setPrimaryConcern] = useState('Slow mobile speed / Core Web Vitals');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/4f8c275f106c0abc68ff9624cca87ff8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Speed Audit Request: ${url}`,
          websiteUrl: url,
          email,
          primaryConcern,
          _template: 'table',
        }),
      });
    } catch (err) {
      console.warn('Audit submission fallback:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Free Audit Scheduled</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              I will personally profile <span className="text-emerald-700 font-mono font-semibold">{url}</span> against Core Web Vitals, identify unnecessary script overhead, and send a short video teardown to <span className="text-slate-900 font-mono font-semibold">{email}</span> within 24 hours.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 inline-block mb-1">
                Zero Obligation Teardown
              </span>
              <h2 id="audit-modal-title" className="text-xl font-bold text-slate-900 tracking-tight">
                Request a Free WordPress Speed & Security Audit
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Get a personalized diagnostic showing render-blocking CSS/JS, slow SQL queries, and exact fixes to reach 90+ on mobile.
              </p>
            </div>

            <div className="space-y-4 pt-1">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">
                  Website URL *
                </label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    placeholder="https://yourcompany.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">
                  Your Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">
                  Primary Performance Headache
                </label>
                <select
                  value={primaryConcern}
                  onChange={(e) => setPrimaryConcern(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white"
                >
                  <option value="Slow mobile speed / Core Web Vitals">Slow mobile speed / Core Web Vitals failing</option>
                  <option value="Too many bloated plugins / Elementor lag">Too many bloated plugins / Page builder lag</option>
                  <option value="Slow WooCommerce cart & checkout">Slow WooCommerce cart & checkout abandonment</option>
                  <option value="High server CPU / Database timeouts">High server CPU / Database 504 timeouts</option>
                  <option value="Full redesign / Migration to clean Gutenberg">Full redesign / Migration to clean Gutenberg</option>
                </select>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Turnaround: Delivered to your inbox within 24 hours. Includes a custom video walkthrough.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Dispatching to shivambhardwaj240507@gmail.com...</span>
                </>
              ) : (
                <>
                  <span>Generate My Free Audit Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
