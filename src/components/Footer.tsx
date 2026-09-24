import React from 'react';
import { ArrowUp, Heart, Mail, Linkedin, Github, Globe, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Shivam Bhardwaj
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                100% ATTENTION
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              "I focus exclusively on building fast, lightweight custom WordPress sites for small businesses. Because I keep my client list small, I give 100% of my attention to your project and deliver faster than larger agencies."
            </p>

            <div className="space-y-1 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Delhi NCR, India · Available Globally</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:shivambhardwaj240507@gmail.com" className="text-slate-800 hover:text-emerald-600 font-mono">
                  shivambhardwaj240507@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/in/shivam-bhardwaj-a7676b403"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/bloodmoon-tech"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-900 hover:border-slate-400 transition-colors shadow-xs"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">
                  Custom WordPress Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">
                  Website Designing & UI/UX
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">
                  WooCommerce & Shopify Stores
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">
                  Speed & Core Web Vitals Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">
                  Web App & React Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">
                  Website Maintenance & Retainers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-emerald-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-600 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-600 transition-colors">
                  Projects & Case Studies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Guarantees & Pricing */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Guarantees
            </h4>
            <div className="space-y-2 text-xs text-slate-500">
              <p>✓ 90+ Mobile Google PageSpeed</p>
              <p>✓ Zero bloated builders or junk plugins</p>
              <p>✓ Up to 5 free revision rounds</p>
              <p>✓ 100% source file handover</p>
              <p>✓ Custom Loom video training</p>
              <div className="pt-2">
                <span className="text-[11px] font-mono text-emerald-700 font-bold block">
                  Fixed quotes from ₹8,999 / $299
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shivam Bhardwaj. All rights reserved. Handcrafted with semantic code & zero bloat.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
