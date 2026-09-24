import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Paintbrush, Home, User, Briefcase, HelpCircle, Mail, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenBooking: () => void;
  onOpenMockup?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit, onOpenBooking, onOpenMockup }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'projects', 'services', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Projects', href: '#projects', id: 'projects', icon: Briefcase },
    { label: 'Services', href: '#services', id: 'services', icon: Layers },
    { label: 'FAQ', href: '#faq', id: 'faq', icon: HelpCircle },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    if (href === '#home' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Wordmark with Real Photo Avatar */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home', 'home')}
              className="group flex items-center gap-2.5 transition-colors"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-emerald-500/40 shadow-xs shrink-0 ring-1 ring-emerald-500/20">
                <picture>
                  <source srcSet="/images/shivam_avatar_96.webp" type="image/webp" />
                  <img
                    src="/images/shivam_realistic_portrait_1790262778042.webp"
                    alt="Shivam Bhardwaj"
                    width="36"
                    height="36"
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Shivam Bhardwaj
                  </span>
                  <span className="hidden xl:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </span>
                </div>
                <span className="hidden sm:block text-[11px] text-slate-500 font-medium">
                  Custom Web Solutions for Small Businesses
                </span>
              </div>
            </a>
          </div>

          {/* Prominent Navigation Links (Home, About, Projects, Services, FAQ, Contact) */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 shadow-inner"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-emerald-700 shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            {onOpenMockup && (
              <button
                onClick={onOpenMockup}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors cursor-pointer"
              >
                <Paintbrush className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free Mockup</span>
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle (44x44 minimum touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Horizontal Quick Navigation Bar (always visible on phones/small screens right below the brand row) */}
        <div className="md:hidden pt-2.5 pb-1.5 border-t border-slate-100 mt-2 flex items-center justify-between overflow-x-auto no-scrollbar gap-1.5 text-xs font-bold text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`px-3 py-1.5 rounded-lg shrink-0 transition-colors min-h-[36px] flex items-center justify-center ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 active:bg-slate-300'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

      </div>

      {/* Mobile Drawer Dropdown for extra links and actions */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className="text-xs font-semibold text-slate-700 hover:text-emerald-600 py-2 px-2.5 rounded-md hover:bg-slate-50 flex items-center gap-2"
              >
                <link.icon className="w-3.5 h-3.5 text-slate-400" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {onOpenMockup && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMockup();
                }}
                className="w-full py-2.5 px-3 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Paintbrush className="w-3.5 h-3.5 text-emerald-700" />
                <span>Get Free Homepage Mockup First</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg text-center"
            >
              Request Free Speed Audit
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg text-center"
            >
              Hire Me / Book Discovery Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
