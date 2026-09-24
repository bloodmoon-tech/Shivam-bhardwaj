import { CaseStudy, ServiceItem, ProcessStep, FaqItem, TestimonialItem, WhyChooseItem } from '../types';

export interface DeveloperStat {
  value: string;
  label: string;
  sublabel: string;
}

export const STATS: DeveloperStat[] = [
  {
    value: '100%',
    label: 'Dedicated Focus',
    sublabel: 'Small client roster for total undivided attention'
  },
  {
    value: '90+',
    label: 'PageSpeed Guarantee',
    sublabel: 'Sub-second mobile loading & Core Web Vitals pass'
  },
  {
    value: '0%',
    label: 'Page Builder Bloat',
    sublabel: 'Handcrafted clean code & effortless Gutenberg editing'
  },
  {
    value: 'FREE',
    label: 'Homepage Mockup',
    sublabel: 'Zero risk: review the design before deciding to work together'
  }
];

export const TECH_STACK = [
  { name: 'WordPress', category: 'CMS & FSE', badge: 'Core' },
  { name: 'WooCommerce', category: 'E-Commerce', badge: 'Expert' },
  { name: 'Shopify', category: 'Storefront', badge: 'E-Comm' },
  { name: 'PHP / Laravel', category: 'Backend', badge: 'Senior' },
  { name: 'React & Next.js', category: 'Frontend', badge: 'Modern' },
  { name: 'Tailwind CSS', category: 'Styling', badge: 'Clean' },
  { name: 'Figma to Code', category: 'UI/UX', badge: 'Pixel-Perfect' },
  { name: 'Core Web Vitals', category: 'Speed', badge: '90+ Guarantee' },
  { name: 'Stripe & Razorpay', category: 'Payments', badge: 'Integration' },
  { name: 'AI & Automation', category: 'Integrations', badge: 'Smart' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kinetix-saas',
    title: 'Kinetix Enterprise Cloud Infrastructure',
    client: 'Kinetix Systems Inc.',
    category: 'B2B Enterprise SaaS Redesign',
    summary: 'A bespoke block theme migration replacing a 48-plugin bloated Divi installation with custom Gutenberg blocks, delivering sub-second load times and a 42% lift in free-trial demo requests.',
    image: '/images/case_study_saas_kinetix_1790258876658.webp',
    beforeLoadTime: '5.2s',
    afterLoadTime: '1.1s',
    pageSpeedScoreBefore: 34,
    pageSpeedScoreAfter: 99,
    conversionLift: '+42% Demo Bookings',
    tools: ['Custom Gutenberg FSE', 'ACF Pro v6.3', 'Vanilla TypeScript', 'Tailwind CSS', 'Redis Caching'],
    challenge: 'Kinetix relied on an outdated multi-purpose theme with 48 active plugins, resulting in 5.2s TTFB, failing Core Web Vitals on mobile, and marketing team paralysis whenever they attempted to publish new landing pages.',
    solution: 'Re-engineered from the ground up using custom native WordPress Gutenberg blocks with clean ACF Pro field architectures. Stripped all 3rd-party builder overhead, created a reusable modular block system, and deployed server-side edge caching.',
    results: [
      'Load time slashed from 5.2s down to 1.1s worldwide',
      'Mobile Google PageSpeed score jumped from 34/100 to 99/100',
      'Inbound demo bookings increased by 42% in the first 90 days',
      'Zero builder lock-in: Content editors publish new pages in under 15 minutes'
    ],
    deliverables: [
      'Custom WordPress Theme with 24 bespoke Gutenberg blocks',
      'Interactive pricing calculator with enterprise lead routing',
      'Automated HubSpot CRM webhook synchronization',
      'Loom video training library for marketing staff'
    ],
    liveUrl: 'https://kinetix-preview.bhardwajwp.dev',
    clientQuote: {
      quote: "Shivam transformed our web presence. Our previous WordPress site was a sluggish house of cards. The new custom Gutenberg theme is lightning-fast, and our sales team saw an immediate surge in qualified demo requests.",
      author: 'Marcus Lindholm',
      role: 'VP of Product Marketing',
      company: 'Kinetix Systems (San Francisco)'
    }
  },
  {
    id: 'aethel-horology',
    title: 'Aethel & Co. Artisan Horology',
    client: 'Aethel Luxury Timepieces',
    category: 'High-Conversion WooCommerce',
    summary: 'A high-end horology atelier store engineered for speed, frictionless one-step checkout, and seamless inventory management across Geneva and New York boutiques.',
    image: '/images/case_study_luxury_ecommerce_1790258898495.webp',
    beforeLoadTime: '4.8s',
    afterLoadTime: '0.9s',
    pageSpeedScoreBefore: 41,
    pageSpeedScoreAfter: 98,
    conversionLift: '+68% Checkout Completion',
    tools: ['WooCommerce Engine', 'Custom Storefront Theme', 'Stripe Elements', 'AVIF Image Pipeline', 'Cloudflare Workers'],
    challenge: 'High customer drop-off during the checkout funnel due to heavyweight WooCommerce extensions, sluggish variable product pages, and cart loading times exceeding 4.8 seconds.',
    solution: 'Engineered a streamlined, lightweight WooCommerce theme with custom AJAX cart drawer, native Stripe payment sheet integration, and a lossless AVIF image delivery pipeline preserving macro-photography detail.',
    results: [
      'Average load time reduced from 4.8s to 0.9s globally',
      'Checkout abandonment dropped by 31%, yielding +68% completed orders',
      'Database queries per catalog view reduced from 142 to 18 queries',
      'Mobile revenue surpassed desktop for the first time in brand history'
    ],
    deliverables: [
      'High-performance bespoke WooCommerce theme',
      'Instant AJAX slide-out cart & single-page checkout flow',
      'Multi-currency automated geo-switching (USD, EUR, CHF, GBP)',
      'Custom inventory sync hook with Geneva workshop ERP'
    ],
    liveUrl: 'https://aethel-watches.bhardwajwp.dev',
    clientQuote: {
      quote: "Shivam's performance-first approach to WooCommerce doubled our mobile sales. The buying experience feels as premium and refined as our physical timepieces.",
      author: 'Elena Rossi',
      role: 'Co-Founder & Creative Director',
      company: 'Aethel & Co. (Geneva & NYC)'
    }
  },
  {
    id: 'veloce-capital',
    title: 'Veloce Capital & Advisory',
    client: 'Veloce Capital Partners',
    category: 'Private Equity & M&A Portal',
    summary: 'A pristine, high-security WordPress portal for a transatlantic private equity fund, combining clean Elementor Pro architecture with zero bloat and enterprise-grade hardening.',
    image: '/images/case_study_fintech_veloce_1790258911546.webp',
    beforeLoadTime: '6.1s',
    afterLoadTime: '1.2s',
    pageSpeedScoreBefore: 28,
    pageSpeedScoreAfter: 99,
    conversionLift: '+120% Qualified Leads',
    tools: ['Sanitized Elementor Pro', 'Asset CleanUp Pro', 'Strict CSP Headers', 'MariaDB Query Indexing', 'Kinsta Edge Caching'],
    challenge: 'A bloated corporate site built by a legacy agency that was flagged for multiple security vulnerabilities, slow mobile performance in London/Frankfurt, and inability for executive assistants to safely make partner updates.',
    solution: 'Audited and sanitized the entire Elementor Pro footprint, unloaded unused CSS/JS widgets on an exact per-page basis, enforced strict CSP security headers, and structured role-based access for non-technical partners.',
    results: [
      'Load time compressed from 6.1s to 1.2s on transatlantic connections',
      'Lighthouse mobile performance achieved a verified 99/100',
      'Cumulative Layout Shift (CLS) reduced to absolute zero (0.00)',
      'Qualified LP and investor inquiries rose by 120% within 6 months'
    ],
    deliverables: [
      'Enterprise WordPress configuration with strict RBAC controls',
      'Sanitized Elementor Pro stack with zero render-blocking bloat',
      'Automated monthly security vulnerability & uptime monitoring',
      'Executive handover deck and video training guide'
    ],
    liveUrl: 'https://veloce-capital.bhardwajwp.dev',
    clientQuote: {
      quote: "In institutional finance, speed and security reflect your credibility. Shivam gave us an institutional-grade platform that loads instantly for our partners across London, Zurich, and New York.",
      author: 'David Sterling',
      role: 'Managing Partner',
      company: 'Veloce Capital Partners (London)'
    }
  }
];

export const SERVICES: (ServiceItem & { startingPrice: string })[] = [
  {
    id: 'custom-wordpress',
    number: '01',
    title: 'Custom WordPress Development',
    subtitle: 'From scratch without bloated page builders or heavy plugins',
    description: 'Bespoke WordPress theme engineering built specifically for your brand. Every block, layout, and custom post type is hand-crafted with semantic code, guaranteeing lightning-fast performance, rock-solid security, and effortless visual client editing.',
    keyFeatures: [
      '100% custom block theme for WordPress Full Site Editing (FSE)',
      'Clean Advanced Custom Fields (ACF Pro) tailored to your team',
      'Semantic, accessible HTML5 with zero messy page builder markup',
      'Sub-second load times and green Core Web Vitals guaranteed'
    ],
    deliverables: [
      'Production-ready custom WordPress theme package',
      'Modular Gutenberg block library matching brand styles',
      'Custom post types, taxonomies, and relational fields',
      'Personalized Loom video walkthrough for your content staff'
    ],
    turnaroundTime: '2–4 weeks',
    startingPrice: '₹14,999 / $450',
    bestFor: 'Growing businesses, B2B SaaS, and founders needing high performance and easy editing.'
  },
  {
    id: 'figma-to-web',
    number: '02',
    title: 'Website Designing & UI/UX (Figma to Code)',
    subtitle: 'Pixel-perfect, mobile-first conversion optimized for leads',
    description: 'Transform your high-fidelity Figma, Adobe XD, or Sketch designs into clean, responsive, accessible web code. Or have me design a bespoke, high-converting layout from scratch designed with clear business and conversion goals in mind.',
    keyFeatures: [
      'Pixel-perfect translation of typography, spacing tokens, and color palettes',
      'Fluid mobile responsiveness from 320px screens up to 4K displays',
      'Smooth micro-interactions and animations that do not lag',
      'Conversion-focused visual hierarchy designed to turn visitors into buyers'
    ],
    deliverables: [
      'Figma design system components or clean code conversion',
      'Modular components and responsive cross-browser templates',
      'Full source file delivery with unlimited commercial rights',
      'Up to 5 revision rounds for total design satisfaction'
    ],
    turnaroundTime: '3–7 days',
    startingPrice: '₹8,999 / $299',
    bestFor: 'Startups, creative agencies, and marketing leaders with design files ready for code.'
  },
  {
    id: 'ecommerce-solutions',
    number: '03',
    title: 'E-Commerce Development (WooCommerce & Shopify)',
    subtitle: 'High-converting online stores with frictionless checkout',
    description: 'Engineering full-featured e-commerce stores designed for conversion. Instant slide-out carts, one-step checkout funnels, automated inventory management, and multi-currency payment gateway integrations (Stripe, Razorpay, PayPal, Apple Pay).',
    keyFeatures: [
      'Custom WooCommerce storefront or Shopify 2.0 liquid architecture',
      'Instant AJAX slide-out cart & single-page checkout flow',
      'Seamless payment gateway integration (Razorpay, Stripe, PayPal, UPI)',
      'Automated inventory, shipping tier rules, and invoice generation'
    ],
    deliverables: [
      'High-performance custom store theme with product filtering',
      'Abandoned cart recovery flow & customer account portal',
      'Speed-optimized catalog views with WebP image pipeline',
      'Complete store management handover video'
    ],
    turnaroundTime: '2–3 weeks',
    startingPrice: '₹18,999 / $550',
    bestFor: 'D2C brands, luxury retail, and merchants aiming to maximize mobile checkout conversions.'
  },
  {
    id: 'speed-optimization',
    number: '04',
    title: 'Speed & Core Web Vitals Optimization',
    subtitle: 'Guaranteed 90+ Google PageSpeed score and sub-1s load times',
    description: 'Eliminate bounce rates caused by slow loading. I diagnose bottleneck plugins, strip render-blocking CSS/JS, optimize database queries, implement modern caching layers, and guarantee a 90+ mobile Lighthouse score.',
    keyFeatures: [
      'Deep performance audit isolating slow queries and bloated scripts',
      'Critical CSS generation and complete script deferral / lazy loading',
      'Lossless next-gen image compression (automated WebP/AVIF pipeline)',
      'Server-level Redis caching, Cloudflare CDN setup, and TTFB reduction'
    ],
    deliverables: [
      'Verified before & after Google PageSpeed and GTmetrix reports',
      'Unused script removal and database query optimization',
      'Complete edge caching and CDN configuration',
      '30-day post-optimization speed guarantee'
    ],
    turnaroundTime: '2–4 days',
    startingPrice: '₹5,999 / $199',
    bestFor: 'Websites failing Core Web Vitals, experiencing slow mobile speed, or losing Google rankings.'
  },
  {
    id: 'webapp-development',
    number: '05',
    title: 'Web App & Frontend Development',
    subtitle: 'Modern React, Next.js, and custom PHP/Laravel web applications',
    description: 'Building interactive web applications, client portals, custom dashboards, and dynamic search directories. Powered by modern frontend tech (React, Next.js, Tailwind CSS) or robust backend APIs with pristine database schemas.',
    keyFeatures: [
      'Modern Single Page Applications (SPA) and server-rendered Next.js apps',
      'Secure authentication, role-based access control, and user profiles',
      'REST & GraphQL API integrations with third-party SaaS tools',
      'Clean, maintainable, modular codebase with TypeScript type safety'
    ],
    deliverables: [
      'Full web application deployment with CI/CD pipeline',
      'Interactive responsive dashboard and administration portal',
      'API documentation and integration test coverage',
      'Complete Git repository handover with clean documentation'
    ],
    turnaroundTime: '3–6 weeks',
    startingPrice: '₹24,999 / $750',
    bestFor: 'Founders building MVPs, custom SaaS portals, and businesses needing bespoke software.'
  },
  {
    id: 'maintenance-security',
    number: '06',
    title: 'Website Maintenance, Security & AI Automation',
    subtitle: 'Zero downtime, proactive malware defense, and smart AI integrations',
    description: 'Keep your website secure, fast, and constantly up-to-date. Includes daily offsite backups, 24/7 uptime monitoring, vulnerability patching, malware disinfection, and modern AI automation (smart chatbots, workflow sync, automated lead routing).',
    keyFeatures: [
      'Proactive security hardening: firewall, 2FA, brute-force defense, SSL',
      'Daily automated cloud backups with 1-click restore capability',
      'Core, theme, and plugin updates tested on staging before live push',
      'AI chatbot integration and automated CRM webhook connections'
    ],
    deliverables: [
      'Monthly performance, traffic, and security audit report',
      'Priority emergency support with under 2-hour response time',
      'Continuous uptime and broken-link monitoring',
      'Dedicated monthly hours for design and content updates'
    ],
    turnaroundTime: 'Ongoing retainer',
    startingPrice: '₹3,999/mo / $99/mo',
    bestFor: 'Busy business owners who want hands-off peace of mind and bulletproof security.'
  }
];

export const WHY_CHOOSE_ME: WhyChooseItem[] = [
  {
    icon: 'TrendingUp',
    title: 'Designed for Business Growth & Conversion',
    description: 'Every layout is designed with your commercial goals in mind—optimizing calls-to-action, user journeys, and trust signals to turn passive visitors into paying clients.',
    highlight: 'Conversion-First Design'
  },
  {
    icon: 'Zap',
    title: 'Mobile-First & 90+ Google PageSpeed Guarantee',
    description: 'Over 65% of your traffic comes from smartphones. I build with mobile responsiveness as the primary foundation and guarantee a 90+ Google Lighthouse performance score.',
    highlight: '90+ Mobile Score'
  },
  {
    icon: 'Clock',
    title: 'Fast Turnaround: 3 to 7 Days for Rapid Builds',
    description: 'No endless agency delays or bureaucratic roadblocks. Quick turnarounds without sacrificing code quality, ensuring your campaign or business launches right on schedule.',
    highlight: 'Rapid Milestones'
  },
  {
    icon: 'ShieldCheck',
    title: 'Up to 5 Free Revision Rounds & Complete Satisfaction',
    description: 'I work with you iteratively until you are 100% satisfied with the outcome. Includes up to 5 comprehensive revision rounds before any production sign-off.',
    highlight: '5 Revision Rounds'
  },
  {
    icon: 'FileCode',
    title: '100% Source Code & Asset Handover',
    description: 'You own everything. Complete transfer of WordPress themes, database backups, Figma files, and Git repositories with zero proprietary lock-in or licensing fees.',
    highlight: '100% Client Ownership'
  },
  {
    icon: 'UserCheck',
    title: 'Direct Developer Access (No Agency Middlemen)',
    description: 'You speak directly with me—the engineer designing and writing your code. Zero miscommunication, no junior sub-contractors, and instantaneous answers to questions.',
    highlight: 'Direct Collaboration'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery, Strategy & Tech Planning',
    timeframe: 'Days 1–2',
    description: 'We discuss your project goals, target audience, brand identity, and technical requirements. We map site architecture, custom post types, and conversion funnels before writing code.',
    deliverables: [
      'Technical architecture document & project roadmap',
      'URL migration matrix preserving 100% of existing SEO equity',
      'Fixed-price milestone agreement with clear deliverables'
    ],
    clientCommitment: '30-minute kick-off call & sharing design assets / inspiration'
  },
  {
    number: '02',
    title: 'Wireframing & UI/UX Design (Figma)',
    timeframe: 'Days 3–6',
    description: 'Designing intuitive, high-converting desktop and mobile prototypes in Figma. We refine typography, color tokens, and layout hierarchy together with your feedback.',
    deliverables: [
      'Interactive Figma prototypes for desktop and mobile',
      'Design styleguide with typography and color system',
      'Up to 5 revision rounds for design perfection'
    ],
    clientCommitment: 'Review Figma preview links and provide design feedback'
  },
  {
    number: '03',
    title: 'Clean Coding & Custom Theme Build',
    timeframe: 'Weeks 2–3',
    description: 'Translating designs into clean, modular, accessible code. Built as a bespoke WordPress block theme (or clean React/Next.js frontend) on a private live staging server.',
    deliverables: [
      'Live staging URL with weekly milestone progress',
      'Modular Gutenberg blocks with native visual preview',
      'Mobile-first responsive optimization across all devices'
    ],
    clientCommitment: 'Testing staging links on your phone and desktop'
  },
  {
    number: '04',
    title: 'Speed, SEO & Security Hardening',
    timeframe: 'Day 20–24',
    description: 'Before public launch, we run rigorous performance, security, and SEO audits. Asset minification, critical CSS extraction, database query indexing, and SSL/security headers.',
    deliverables: [
      'Verified 90+ Google PageSpeed report on mobile',
      'Zero broken links, 404s, or schema markup warnings',
      'Hardened server security headers (CSP, HSTS, X-Frame)'
    ],
    clientCommitment: 'Final review on staging before DNS pointing'
  },
  {
    number: '05',
    title: 'Training, Video Walkthrough & Launch',
    timeframe: 'Launch Day & Beyond',
    description: 'Zero-downtime DNS launch. Every build includes a personalized high-definition Loom video walkthrough showing your team exactly how to update text, photos, and products with ease.',
    deliverables: [
      'Zero-downtime production deployment',
      'Custom Loom video walkthrough library tailored to your staff',
      'Complete source file, theme, and database backup handover',
      '30 days of complimentary post-launch support & bug fixing'
    ],
    clientCommitment: 'Ready to receive customer leads and celebrate launch!'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-1',
    name: 'Marcus Lindholm',
    role: 'VP of Product Marketing',
    company: 'Kinetix Systems',
    location: 'San Francisco, CA',
    rating: 5,
    project: 'Enterprise WordPress Redesign',
    content: 'Shivam completely transformed our web presence. Our previous WordPress site was a sluggish house of cards with 48 plugins. The new custom Gutenberg theme is lightning-fast, and our sales team saw an immediate 42% surge in qualified demo requests in 90 days.'
  },
  {
    id: 'review-2',
    name: 'Elena Rossi',
    role: 'Co-Founder & Creative Director',
    company: 'Aethel Luxury Horology',
    location: 'Geneva & New York',
    rating: 5,
    project: 'High-Performance WooCommerce Store',
    content: 'Working with Shivam was an absolute pleasure. His performance-first approach to WooCommerce doubled our mobile checkout completion. The buying experience feels as premium and refined as our physical timepieces. Highly recommended!'
  },
  {
    id: 'review-3',
    name: 'David Sterling',
    role: 'Managing Partner',
    company: 'Veloce Capital Partners',
    location: 'London, UK',
    rating: 5,
    project: 'Private Equity Corporate Portal',
    content: 'In institutional finance, speed and security reflect your credibility. Shivam delivered an institutional-grade platform that loads in 1.1s for our partners across London, Zurich, and New York. Exceptional communication and technical rigor.'
  },
  {
    id: 'review-4',
    name: 'Rajesh Malhotra',
    role: 'Founder & CEO',
    company: 'Malhotra Logistics & Supply',
    location: 'Delhi NCR, India',
    rating: 5,
    project: 'Corporate Website & Lead Portal',
    content: 'Shivam is undoubtedly one of the best freelance web developers in Delhi NCR. Completed our corporate website redesign in just 6 days with 98 PageSpeed score. Clean code, professional behavior, and always prompt with clear communication.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How does the "Free Homepage Mockup" offer work?',
    answer: 'It is 100% risk-free. Share your current website link or business concept, and I will design a bespoke homepage layout for your site first. If you like what you see and want to build the full website, we can work together. If not, no worries at all—you owe nothing and keep the ideas with zero obligation!'
  },
  {
    question: 'Why do you work with only a small client list?',
    answer: 'Larger agencies take on 30–50 clients at once and pass projects down to junior hires or offshore interns. Because I keep my active client list very small, I give 100% of my personal attention to your project, communicate directly with you, and deliver faster without agency delays.'
  },
  {
    question: 'How much do you charge for a custom website?',
    answer: 'Projects typically start at ₹8,999 / $299 for rapid landing pages and UI/UX design, ₹14,999 / $450 for full custom WordPress theme development, and ₹18,999 / $550 for high-performance WooCommerce stores. Every quote is 100% fixed-price with zero surprise fees or hidden costs.'
  },
  {
    question: 'How long does it take to design and develop a website?',
    answer: 'Turnaround time depends on the scope. A focused business website or Figma conversion typically takes 3 to 7 business days. Full custom WordPress builds and WooCommerce stores take 2 to 4 weeks. I pride myself on on-time delivery with weekly progress milestones.'
  },
  {
    question: 'Can I edit text, images, and products myself easily?',
    answer: 'Yes, 100%! I build with clean WordPress native Gutenberg blocks or intuitive custom fields (ACF Pro). You can visually edit text, swap banners, and publish new case studies or products without touching code. Every build also includes a custom Loom video tutorial recorded specifically for your team.'
  },
  {
    question: 'Do you guarantee a 90+ Google PageSpeed score?',
    answer: 'Yes! Core Web Vitals and speed are my primary specialties. I guarantee that your new custom build will achieve a 90+ score on Google Lighthouse mobile and desktop tests with sub-second loading speeds. If it does not, I optimize it for free until it passes.'
  },
  {
    question: 'Do you work with international clients outside India?',
    answer: 'Yes! Over 60% of my clients are based in the United States, United Kingdom, Europe, Canada, and Australia. I operate across flexible timezones (overlapping with US EST/PST and European CET hours) and communicate seamlessly via Google Meet, Slack, and email.'
  },
  {
    question: 'What is your payment structure?',
    answer: 'I work on milestone-based payments: typically 40% upfront deposit to begin research and wireframing, 40% upon staging build completion and client review, and the final 20% upon live launch and code handover. Secure payments accepted via Wire, Stripe, Razorpay, or PayPal.'
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Every project comes with 30 days of complimentary post-launch support and bug fixes. For ongoing peace of mind, I offer monthly maintenance retainers covering security updates, daily cloud backups, uptime monitoring, and content updates.'
  }
];

export const GUARANTEES = [
  {
    title: '90+ Google PageSpeed',
    metric: '90+',
    subtitle: 'Mobile & Desktop Guaranteed',
    description: 'Every custom build is audited against Google Core Web Vitals. If your new build does not score 90+ on mobile PageSpeed, we optimize it until it does—guaranteed.'
  },
  {
    title: 'Zero Bloatware',
    metric: '0',
    subtitle: 'Heavy Builders or Junk Plugins',
    description: 'No bloated 50MB multi-purpose themes. No 40-plugin dependencies. Only clean, hand-crafted code, native Gutenberg blocks, and necessary production-grade tools.'
  },
  {
    title: 'Client-Friendly Editing',
    metric: '100%',
    subtitle: 'Visual Control With Zero Code',
    description: 'Your marketing team will never need to touch PHP or CSS. We provide a custom visual editing experience and a dedicated video walkthrough tailored to your staff.'
  },
  {
    title: 'Enterprise Security',
    metric: 'A+',
    subtitle: 'Hardened HTTP Headers & 2FA',
    description: 'Hardened against brute-force attacks, XML-RPC exploits, and injection threats. Complete with SSL, automated backups, and proactive monitoring.'
  }
];
