export type HeadlineVariant = 'A' | 'B' | 'C';
export type CtaVariant = 'A' | 'B' | 'C';
export type PriceDisplayVariant = 'standard' | 'crossed';

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating: number;
  avatarBg: string;
}

export interface ContentModule {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Diagnostic' | 'Action' | 'Focus' | 'Résilience' | 'Régularité';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AnalyticsEvent {
  eventName: string;
  timestamp: number;
  details?: string;
  location?: string;
}

export interface AnalyticsStats {
  pageViews: number;
  totalCtaClicks: number;
  conversionRate: number;
  checkoutStarts: number;
  ctaBreakdown: {
    hero: number;
    middle: number;
    price: number;
    final: number;
    floating: number;
  };
  scrollDepth: {
    scroll25: number;
    scroll50: number;
    scroll75: number;
    scroll90: number;
  };
}
