import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Paintbrush, Clock, Send } from 'lucide-react';

interface FreeMockupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToForm: (websiteUrlOrIdea: string, brandDetails: string) => void;
}

export const FreeMockupModal: React.FC<FreeMockupModalProps> = ({
  isOpen,
  onClose,
  onProceedToForm,
}) => {
  const [websiteOrBrand, setWebsiteOrBrand] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
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
          _subject: `Free Mockup Request: ${websiteOrBrand}`,
          websiteOrBrand,
          email,
          notes: notes || 'No additional notes',
          _template: 'table',
        }),
      });
    } catch (err) {
      console.warn('Mockup submission fallback:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Mockup Request Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              I'm already reviewing your details for <span className="font-semibold text-slate-900">{websiteOrBrand}</span>. I will craft a custom homepage design concept and send it to <span className="font-mono text-emerald-700 font-bold">{email}</span> within 24–48 hours.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto">
              Remember: Zero obligation. If you like it, we can work together. If not, no worries at all!
            </div>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Risk-Free Hook</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Get a Free Custom Homepage Mockup
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                "Let me design a quick homepage layout for your site first. If you like it, we can work together. If not, no worries at all!"
              </p>
            </div>

            {/* Value Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <Paintbrush className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-medium">Bespoke Layout</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-medium">24–48h Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-medium">Zero Obligation</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Current Website URL or Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., mysite.com or Apex Dental Clinic"
                  value={websiteOrBrand}
                  onChange={(e) => setWebsiteOrBrand(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 text-base sm:text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Where should I email the design mockup? *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 text-base sm:text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Any reference websites or key features you want included? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Modern minimalist look, clean pricing section, faster loading than current site..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 text-base sm:text-sm bg-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-400 text-white text-sm font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending to shivambhardwaj240507@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Me My Free Homepage Mockup</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2 font-mono">
                  🔒 No credit card required · No sales calls · 100% free layout concept
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
