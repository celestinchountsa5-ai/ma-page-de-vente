import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { CHECKOUT_URL, CURRENT_PRICE } from '../constants';
import { analytics } from '../utils/analytics';

export const FloatingMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after user has scrolled down 350px (past hero initial view)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    analytics.track('click_cta_floating', 'Clicked mobile floating sticky CTA');
    analytics.track('checkout_start', 'Navigating to checkout from mobile floating bar');
  };

  return (
    <aside aria-label="Achat rapide mobile" className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-slate-950/95 border-t border-amber-500/40 backdrop-blur-md shadow-[0_-10px_25px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-black tracking-tight text-white truncate">
            LE MOTEUR DE L’ACTION
          </span>
          <div className="flex items-center gap-1.5 text-xs font-black text-amber-400">
            <span>{CURRENT_PRICE}</span>
            <span className="text-[10px] text-slate-400 line-through">50 €</span>
          </div>
        </div>

        <a
          id="mobile-floating-cta"
          href={CHECKOUT_URL}
          onClick={handleClick}
          className="flex-1 max-w-[200px] inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase py-2.5 px-3.5 rounded-xl shadow active:scale-95 transition-transform"
        >
          <span>COMMENCER</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
