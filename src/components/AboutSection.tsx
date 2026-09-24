import React from 'react';
import { CheckCircle2, Award, Zap, Users, Sparkles, ArrowRight, ShieldCheck, Paintbrush, Clock, Flame } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenMockup?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking, onOpenMockup }) => {
  const coreStrengths = [
    {
      title: 'Small Client Roster, 100% Dedicated Attention',
      desc: 'I deliberately cap active client slots so your project is never sidelined or passed down to junior trainees. You get my complete, undivided attention.'
    },
    {
      title: 'Built Exclusively for Small Businesses',
      desc: 'No generic, bloated agency solutions. Every feature is tailored specifically to increase inquiries, bookings, and sales for growing small businesses.'
    },
    {
      title: 'Faster Delivery Than Agencies',
      desc: 'Without agency overhead, endless account manager meetings, or bureaucracy, your website launches in days rather than months.'
    },
    {
      title: 'Zero Bloat & Gutenberg Simplicity',
      desc: 'No sluggish Elementor traps or 40+ plugin disasters. Pure custom blocks that load under 1 second and allow you to edit everything visually.'
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>What Sets Us Apart</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Small Businesses Choose My Direct, High-Focus Approach
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              "I focus exclusively on building fast, lightweight custom WordPress sites for small businesses. Because I keep my client list small, I give 100% of my attention to your project and deliver faster than larger agencies."
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              When you hire a big agency, you pay for fancy offices, account directors, and layers of management—while your actual site is outsourced to junior interns. With me, you collaborate directly with the senior developer building your site.
            </p>

            {/* Direct Founder Signature Card */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/40 shrink-0 shadow-xs">
                <picture>
                  <source srcSet="/images/shivam_avatar_96.webp" type="image/webp" />
                  <img
                    src="/images/shivam_realistic_portrait_1790262778042.webp"
                    alt="Shivam Bhardwaj"
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 text-sm block">Shivam Bhardwaj</span>
                <span className="text-slate-500 text-[11px] font-medium">Independent WordPress Engineer & Founder</span>
              </div>
            </div>

            {/* Free Mockup Hook Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-slate-900">
              <div className="flex items-start gap-3">
                <Paintbrush className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Try Before You Commit
                  </h4>
                  <p className="text-xs text-slate-700 mt-0.5 leading-relaxed font-medium">
                    "Let me design a quick homepage layout for your site first. If you like it, we can work together. If not, no worries at all!"
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Small, Focused Client Roster</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sub-Second Fast Loading Speed</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Effortless Visual Client Editing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Custom Homepage Mockup</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {onOpenMockup && (
                <button
                  onClick={onOpenMockup}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <Paintbrush className="w-4 h-4" />
                  <span>Request Free Homepage Mockup</span>
                </button>
              )}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
              >
                <span>Book a 15-Minute Intro Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: What We Are Best At Pillars */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-bold text-slate-900">What We Are Best At</h3>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Core Specialization
                </span>
              </div>

              <div className="space-y-4">
                {coreStrengths.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 pl-8 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-4">
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900">No Risk Guarantee:</span> See the custom layout concept first. If you don't love it, you walk away with zero charge.
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 shrink-0">
                  100% Risk-Free
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
