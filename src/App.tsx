/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackBar } from './components/TechStackBar';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { WhyChooseMe } from './components/WhyChooseMe';
import { CaseStudies } from './components/CaseStudies';
import { SpeedComparison } from './components/SpeedComparison';
import { ProcessTimeline } from './components/ProcessTimeline';
import { SiteAuditCalculator } from './components/SiteAuditCalculator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { CustomCursor } from './components/CustomCursor';

// Code-split modals so they don't block critical page load
const DiscoveryCallModal = React.lazy(() => import('./components/DiscoveryCallModal').then(m => ({ default: m.DiscoveryCallModal })));
const SiteAuditModal = React.lazy(() => import('./components/SiteAuditModal').then(m => ({ default: m.SiteAuditModal })));
const FreeMockupModal = React.lazy(() => import('./components/FreeMockupModal').then(m => ({ default: m.FreeMockupModal })));

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMockupModalOpen, setIsMockupModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState('Free Homepage Mockup Request');
  const [inquiryUrl, setInquiryUrl] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    handleScrollToSection('contact');
  };

  const handleDirectAuditInquiry = (url: string, notes: string) => {
    setInquiryUrl(url);
    setInquiryNotes(notes);
    setInquiryService('Speed & Core Web Vitals Optimization');
    handleScrollToSection('contact');
  };

  const handleDirectMockupProceed = (urlOrIdea: string, brandDetails: string) => {
    setInquiryUrl(urlOrIdea);
    setInquiryNotes(brandDetails);
    setInquiryService('Free Homepage Mockup Request');
    setIsMockupModalOpen(false);
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-900">
      
      {/* Interactive Cursor Hover Motion Follower */}
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Navbar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenMockup={() => setIsMockupModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onViewCaseStudies={() => handleScrollToSection('portfolio')}
          onRequestAudit={() => setIsAuditModalOpen(true)}
          onOpenMockup={() => setIsMockupModalOpen(true)}
        />

        {/* Tech Stack Marquee & Skills Bar */}
        <TechStackBar />

        {/* About Section: Focus Exclusively on Small Businesses & Dedicated Attention */}
        <AboutSection
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onOpenMockup={() => setIsMockupModalOpen(true)}
        />

        {/* Services & Solutions (6 Offerings with starting prices) */}
        <Services onSelectService={handleSelectService} />

        {/* What We Are Best At: 6 Core Pillars & Free Mockup Hook */}
        <WhyChooseMe
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onOpenMockup={() => setIsMockupModalOpen(true)}
        />

        {/* Selected Work & Live Interactive Demos */}
        <CaseStudies onRequestAudit={() => setIsAuditModalOpen(true)} />

        {/* Speed & Architecture Benchmark Simulator */}
        <SpeedComparison onRequestAudit={() => setIsAuditModalOpen(true)} />

        {/* 5-Step Process Timeline with Loom Video Handover */}
        <ProcessTimeline onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* Interactive Speed & Revenue ROI Calculator */}
        <SiteAuditCalculator onRequestAudit={() => setIsAuditModalOpen(true)} />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Contact & Confidential Lead Capture Form */}
        <ContactSection initialService={inquiryService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs (Lazy loaded on demand) */}
      <React.Suspense fallback={null}>
        {isMockupModalOpen && (
          <FreeMockupModal
            isOpen={isMockupModalOpen}
            onClose={() => setIsMockupModalOpen(false)}
            onProceedToForm={handleDirectMockupProceed}
          />
        )}

        {isAuditModalOpen && (
          <SiteAuditModal
            isOpen={isAuditModalOpen}
            onClose={() => setIsAuditModalOpen(false)}
            onProceedToForm={handleDirectAuditInquiry}
          />
        )}

        {isBookingModalOpen && (
          <DiscoveryCallModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
          />
        )}
      </React.Suspense>

      {/* Floating Sticky Call-to-Action for Lead Capture */}
      <FloatingCTA
        onContactClick={() => handleScrollToSection('contact')}
        onOpenMockup={() => setIsMockupModalOpen(true)}
      />

    </div>
  );
}
