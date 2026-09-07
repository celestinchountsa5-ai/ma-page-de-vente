import { AnalyticsEvent, AnalyticsStats } from '../types';

const STORAGE_KEY = 'cro_analytics_events_v1';

class AnalyticsTracker {
  private events: AnalyticsEvent[] = [];
  private trackedScrolls = new Set<number>();
  private listeners: ((event: AnalyticsEvent) => void)[] = [];

  constructor() {
    this.loadFromStorage();

    if (typeof window !== 'undefined') {
      // Seed initial baseline if empty
      if (this.events.length === 0) {
        this.seedInitialBaseline();
      }

      // Record current page visit
      this.track('page_view', 'Landing page session view', 'page');
      this.initScrollListener();
    }
  }

  private loadFromStorage() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.events = JSON.parse(stored);
        }
      }
    } catch {
      // fallback in memory
      this.events = [];
    }
  }

  private saveToStorage() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        // keep last 500 events to manage storage cleanly
        const trimmed = this.events.slice(-500);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
      }
    } catch {
      // ignore storage errors
    }
  }

  private seedInitialBaseline() {
    const now = Date.now();
    const mockBaseline: AnalyticsEvent[] = [
      { eventName: 'page_view', timestamp: now - 180000, details: 'Session organique initiale', location: 'page' },
      { eventName: 'scroll_25', timestamp: now - 160000, details: 'Lecture Découverte (25%)', location: 'scroll' },
      { eventName: 'scroll_50', timestamp: now - 130000, details: 'Lecture Problème & Mécanisme (50%)', location: 'scroll' },
      { eventName: 'click_cta_hero', timestamp: now - 120000, details: 'Clic Hero Immédiat', location: 'hero' },
      { eventName: 'scroll_75', timestamp: now - 90000, details: 'Lecture Modules & Plan (75%)', location: 'scroll' },
      { eventName: 'click_cta_price', timestamp: now - 60000, details: 'Clic Grille de Prix', location: 'price' },
      { eventName: 'checkout_start', timestamp: now - 55000, details: 'Arrivée sur la page de paiement sécurisée', location: 'checkout' },
    ];
    this.events = mockBaseline;
    this.saveToStorage();
  }

  private initScrollListener() {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollHeight > 0) {
            const currentScroll = window.scrollY;
            const percent = Math.round((currentScroll / scrollHeight) * 100);

            [25, 50, 75, 90].forEach((threshold) => {
              if (percent >= threshold && !this.trackedScrolls.has(threshold)) {
                this.trackedScrolls.add(threshold);
                this.track(`scroll_${threshold}`, `Utilisateur a scrollé ${threshold}% de la page`, 'scroll');
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  public track(eventName: string, details?: string, location?: string) {
    const event: AnalyticsEvent = {
      eventName,
      timestamp: Date.now(),
      details,
      location,
    };

    this.events.push(event);
    this.saveToStorage();

    // Dev log
    try {
      // eslint-disable-next-line no-console
      console.log(`[CRO Analytics] ${eventName} (${location || 'global'}):`, details || '');
    } catch {
      // silent
    }

    this.listeners.forEach((listener) => {
      try {
        listener(event);
      } catch (err) {
        // ignore listener errors
      }
    });
  }

  public trackCtaClick(location: 'hero' | 'middle' | 'price' | 'final' | 'floating', details?: string) {
    const eventName = `click_cta_${location}`;
    this.track(eventName, details || `Clic CTA depuis la section ${location}`, location);
    this.track('checkout_start', `Redirection vers checkout depuis ${location}`, 'checkout');
  }

  public subscribe(listener: (event: AnalyticsEvent) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public clearEvents() {
    this.events = [];
    this.trackedScrolls.clear();
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // silent
    }
    this.track('page_view', 'Nouvelle session après réinitialisation', 'page');
  }

  public getStats(): AnalyticsStats {
    let pageViews = 0;
    let hero = 0;
    let middle = 0;
    let price = 0;
    let final = 0;
    let floating = 0;
    let checkoutStarts = 0;
    let scroll25 = 0;
    let scroll50 = 0;
    let scroll75 = 0;
    let scroll90 = 0;

    for (const e of this.events) {
      if (e.eventName === 'page_view') pageViews++;
      else if (e.eventName === 'click_cta_hero') hero++;
      else if (e.eventName === 'click_cta_middle') middle++;
      else if (e.eventName === 'click_cta_price') price++;
      else if (e.eventName === 'click_cta_final') final++;
      else if (e.eventName === 'click_cta_floating') floating++;
      else if (e.eventName === 'checkout_start') checkoutStarts++;
      else if (e.eventName === 'scroll_25') scroll25++;
      else if (e.eventName === 'scroll_50') scroll50++;
      else if (e.eventName === 'scroll_75') scroll75++;
      else if (e.eventName === 'scroll_90') scroll90++;
    }

    const totalCtaClicks = hero + middle + price + final + floating;
    const denominator = pageViews > 0 ? pageViews : 1;
    const conversionRate = Math.round((totalCtaClicks / denominator) * 1000) / 10;

    return {
      pageViews: Math.max(pageViews, 1),
      totalCtaClicks,
      conversionRate,
      checkoutStarts,
      ctaBreakdown: {
        hero,
        middle,
        price,
        final,
        floating,
      },
      scrollDepth: {
        scroll25,
        scroll50,
        scroll75,
        scroll90,
      },
    };
  }
}

export const analytics = new AnalyticsTracker();
