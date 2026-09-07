import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';
import { analytics } from '../utils/analytics';
import { useInView } from '../hooks/useInView';

interface CtaButtonProps {
  id?: string;
  label: string;
  trackingLocation: string;
  subtext?: string;
  className?: string;
  size?: 'default' | 'large';
  showTrustIcons?: boolean;
  priorityBadge?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  id,
  label,
  trackingLocation,
  subtext = 'Accès immédiat • Produit numérique • Téléchargement instantané',
  className = '',
  size = 'large',
  showTrustIcons = true,
  priorityBadge,
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  });

  const handleClick = () => {
    analytics.track(`click_cta_${trackingLocation}`, `Clicked CTA: ${label}`);
    analytics.track('checkout_start', `Redirecting to checkout from ${trackingLocation}`);
  };

  const isLarge = size === 'large';

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center w-full max-w-xl mx-auto transition-opacity duration-300 ${
        isInView ? 'animate-cta-entrance' : 'opacity-0'
      } ${className}`}
    >
      {priorityBadge && (
        <div className="mb-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-400/15 text-amber-300 border border-amber-400/30">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>{priorityBadge}</span>
        </div>
      )}

      <a
        id={id || `cta-button-${trackingLocation}`}
        href={CHECKOUT_URL}
        onClick={handleClick}
        className={`group relative w-full overflow-hidden inline-flex items-center justify-center gap-3 font-extrabold text-slate-950 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 hover:shadow-[0_12px_35px_rgba(245,158,11,0.5)] active:scale-[0.98] transition-all duration-200 rounded-2xl border-2 border-amber-200/80 cursor-pointer shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] ${
          isLarge ? 'py-4 sm:py-5 px-6 sm:px-9 text-lg sm:text-xl md:text-2xl' : 'py-3.5 px-6 text-base sm:text-lg'
        }`}
      >
        {/* Subtle sliding light energy reflection */}
        <span
          aria-hidden="true"
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-energy-beam"
        />

        <span className="relative z-10 tracking-tight uppercase drop-shadow-[0_1px_0_rgba(255,255,255,0.7)] flex items-center gap-2">
          {label}
        </span>
        <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:translate-x-1.5 transition-transform duration-200 text-slate-950" />
      </a>

      {subtext && (
        <p className="mt-2.5 text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
          {subtext}
        </p>
      )}

      {showTrustIcons && (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-400/90 font-medium">
          <span className="inline-flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Téléchargement direct
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Paiement 100% sécurisé (17,55 €)
          </span>
        </div>
      )}
    </div>
  );
};
