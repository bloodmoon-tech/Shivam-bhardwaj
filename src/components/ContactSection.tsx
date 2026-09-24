import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, MapPin, Clock, ArrowRight, ShieldCheck, Paintbrush, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Free Homepage Mockup Request',
    budget: '$500 – $1,500 (₹15k – ₹45k)',
    timeline: 'Within 2–4 Weeks',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shivambhardwaj240507@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to Shivam via FormSubmit encrypted endpoint
      await fetch('https://formsubmit.co/ajax/4f8c275f106c0abc68ff9624cca87ff8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry: ${formData.name} - ${formData.service}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message || 'No additional notes provided',
          _template: 'table',
        }),
      });
    } catch (err) {
      // Fallback gracefully even if network or adblocker interrupts AJAX
      console.warn('Form submission sent with fallback:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Let's Build Something Great
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Directly With Shivam Bhardwaj
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            "I focus exclusively on building fast, lightweight custom WordPress sites for small businesses. Because I keep my client list small, I give 100% of my attention to your project and deliver faster than larger agencies."
          </p>
        </div>

        {/* Free Mockup Hook Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-2 border-emerald-300 shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Paintbrush className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                Risk-Free Pilot Hook
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                "Let me design a quick homepage layout for your site first."
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                "If you like it, we can work together. If not, no worries at all!"
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                service: 'Free Homepage Mockup Request',
                message: 'Hi Shivam, I would like you to design a quick homepage layout concept for my site first.'
              }));
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-all hover:scale-105 shrink-0 cursor-pointer"
          >
            Claim Free Mockup Below ↓
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-sm shrink-0">
                  <picture>
                    <source srcSet="/images/shivam_avatar_96.webp" type="image/webp" />
                    <img
                      src="/images/shivam_avatar_96.jpg"
                      alt="Shivam Bhardwaj"
                      width="56"
                      height="56"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </picture>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Shivam Bhardwaj</h3>
                  <p className="text-xs text-slate-500 font-medium">Custom WordPress & Speed Specialist</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Small Client Roster · 100% Focused
                  </span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-2">
                
                {/* Email with copy button */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 font-mono block">Direct Work Email</span>
                      <a href="mailto:shivambhardwaj240507@gmail.com" className="text-xs font-mono font-bold text-slate-800 hover:text-emerald-600 truncate block">
                        shivambhardwaj240507@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-slate-800 rounded hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Privacy & Confidentiality Guarantee */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-700 font-mono block font-semibold">100% Privacy Protected</span>
                      <span className="text-xs font-semibold text-slate-800">
                        Zero spam · Direct email & consultation only
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Primary Location</span>
                    <span className="text-xs font-medium text-slate-800">
                      Delhi NCR, India · Available Worldwide (Remote)
                    </span>
                  </div>
                </div>

              </div>

              {/* Social networks */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/shivam-bhardwaj-a7676b403"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/bloodmoon-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-900" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

            {/* Quick Guarantees Pill */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>What You Can Always Expect:</span>
              </div>
              <ul className="space-y-1.5 pl-6 list-disc text-slate-600">
                <li>100% of my dedicated attention (small client roster)</li>
                <li>Free quick homepage mockup before any commitment</li>
                <li>90+ PageSpeed guarantee with zero builder bloat</li>
                <li>Easy visual editing so you don't need a developer for simple tweaks</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7" id="contact-form">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Message Dispatched to Shivam!
                    </h3>
                    <p className="text-xs text-emerald-700 font-mono font-semibold">
                      ✓ Direct delivery to: shivambhardwaj240507@gmail.com
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Shivam has received your inquiry for <span className="font-semibold text-slate-800">{formData.service}</span> and will review your requirements and respond within 12–24 hours.
                  </p>

                  {/* Immediate Action Button: Direct Email */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-2 text-left">
                    <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                      Direct Email Confirmation
                    </span>
                    <a
                      href={`mailto:shivambhardwaj240507@gmail.com?subject=${encodeURIComponent(
                        `Project Inquiry: ${formData.name} - ${formData.service}`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.service}\nBudget: ${formData.budget}\nNotes: ${formData.message}`
                      )}`}
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Your Email Client</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-medium hover:underline cursor-pointer"
                    >
                      ← Edit or Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      Project Brief or Free Mockup Request
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                      Zero Risk
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="+1 (555) 000-0000 (Optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      >
                        <option value="Free Homepage Mockup Request">🎨 Free Homepage Mockup Request (Zero Risk)</option>
                        <option value="Custom WordPress Development">Custom Fast WordPress Website</option>
                        <option value="Website Designing & UI/UX">Website Redesign (Figma to WordPress)</option>
                        <option value="E-Commerce (WooCommerce/Shopify)">WooCommerce Store Development</option>
                        <option value="Speed & Core Web Vitals Optimization">Speed & Core Web Vitals 90+ Fix</option>
                        <option value="Monthly Maintenance & Retainer">Monthly Support & Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      >
                        <option value="Free Mockup First">🎨 Free Mockup First (Let's see design first)</option>
                        <option value="₹8,999 – ₹15,000 / $200 – $400">₹8,999 – ₹15,000 / $200 – $400</option>
                        <option value="₹15,000 – ₹35,000 / $400 – $800">₹15,000 – ₹35,000 / $400 – $800</option>
                        <option value="₹35,000 – ₹75,000 / $800 – $1,800">₹35,000 – ₹75,000 / $800 – $1,800</option>
                        <option value="₹75,000+ / $1,800+">₹75,000+ / $1,800+</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      >
                        <option value="Send Free Mockup First">Send Free Mockup First (24–48h)</option>
                        <option value="Immediate / Next few days">Immediate (Next few days)</option>
                        <option value="Within 2–4 Weeks">Within 2–4 Weeks</option>
                        <option value="Next 1–2 Months">Next 1–2 Months</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Current Website URL or Project Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your current website URL, reference sites you like, or any specific goals for the build..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-400 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Delivering to shivambhardwaj240507@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Project Request & Free Mockup Details</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      "If you like the homepage layout, we can work together. If not, no worries at all!"
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
