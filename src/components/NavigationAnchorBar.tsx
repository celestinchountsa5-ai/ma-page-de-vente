import React, { useState, useEffect } from 'react';
import { Sparkles, Activity, BookOpen, Tag, HelpCircle, ArrowRight, Zap } from 'lucide-react';
import { CURRENT_PRICE } from '../constants';

interface NavigationAnchorBarProps {
  onOpenDashboard: () => void;
  ctaClickCount?: number;
}

export const NavigationAnchorBar: React.FC<NavigationAnchorBarProps> = ({
  onOpenDashboard,
  ctaClickCount = 0,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Calculate scroll progress percentage (0 - 100)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      const sections = ['hero', 'mechanism-section', 'content-modules-section', 'video-testimonials-section', 'pricing-section', 'faq-section'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAnchor = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navigation-bar"
      aria-label="Navigation des sections clés"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-2 sm:py-2.5'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/80 py-3'
      }`}
    >
      {/* Ultra-thin Scroll Progress Bar (01 & 11) */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-slate-900/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-emerald-400 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(245,158,11,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand title / Home anchor */}
        <a
          href="#hero"
          onClick={(e) => scrollToAnchor('hero', e)}
          className="flex items-center gap-2 group shrink-0 cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xs sm:text-sm tracking-tight text-white group-hover:text-amber-300 transition-colors uppercase leading-none">
              LE MOTEUR DE L’ACTION
            </span>
            <span className="text-[10px] text-amber-400 font-semibold hidden sm:inline leading-none mt-0.5">
              17,55 € • Accès immédiat
            </span>
          </div>
        </a>

        {/* Anchor Links with smooth scroll */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-semibold">
          <a
            href="#mechanism-section"
            onClick={(e) => scrollToAnchor('mechanism-section', e)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeSection === 'mechanism-section'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            Le Système
          </a>

          <a
            href="#content-modules-section"
            onClick={(e) => scrollToAnchor('content-modules-section', e)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeSection === 'content-modules-section'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            Contenu
          </a>

          <a
            href="#video-testimonials-section"
            onClick={(e) => scrollToAnchor('video-testimonials-section', e)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeSection === 'video-testimonials-section'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            Témoignages Vidéo
          </a>

          <a
            href="#pricing-section"
            onClick={(e) => scrollToAnchor('pricing-section', e)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeSection === 'pricing-section'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            Prix
          </a>

          <a
            href="#faq-section"
            onClick={(e) => scrollToAnchor('faq-section', e)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeSection === 'faq-section'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            FAQ
          </a>
        </div>

        {/* Right action group: Local Monitoring Dashboard Trigger + Quick CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Dedicated Dashboard Button */}
          <button
            type="button"
            onClick={onOpenDashboard}
            title="Ouvrir le tableau de bord de monitoring CRO local"
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/90 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer hover:border-amber-400/50"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="hidden md:inline">Dashboard Monitoring</span>
            <span className="md:hidden">Stats</span>
            {ctaClickCount > 0 && (
              <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-black px-1.5 py-0.2 rounded-full">
                {ctaClickCount}
              </span>
            )}
          </button>

          {/* Quick Price Anchor CTA */}
          <a
            href="#pricing-section"
            onClick={(e) => scrollToAnchor('pricing-section', e)}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs py-1.5 px-3 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Obtenir (17,55 €)</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </nav>
  );
};
