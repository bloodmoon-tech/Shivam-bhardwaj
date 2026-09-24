export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  image: string;
  beforeLoadTime: string;
  afterLoadTime: string;
  pageSpeedScoreBefore: number;
  pageSpeedScoreAfter: number;
  conversionLift: string;
  tools: string[];
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
  liveUrl: string;
  clientQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  deliverables: string[];
  turnaroundTime: string;
  bestFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  timeframe: string;
  description: string;
  deliverables: string[];
  clientCommitment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  project: string;
  content: string;
  avatar?: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}
