import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';
import { analytics } from '../utils/analytics';

interface CtaButtonProps {
  id?: string;
  label: string;
  trackingLocation: string;
  subtext?: string;
  className?: string;
  size?: 'default' | 'large';
  showTrustIcons?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  id,
  label,
  trackingLocation,
  subtext = 'Accès immédiat • Produit numérique',
  className = '',
  size = 'large',
  showTrustIcons = true,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    analytics.track(`click_cta_${trackingLocation}`, `Clicked CTA: ${label}`);
    analytics.track('checkout_start', `Redirecting to checkout from ${trackingLocation}`);
  };

  const isLarge = size === 'large';

  return (
    <div className={`flex flex-col items-center text-center w-full max-w-xl mx-auto ${className}`}>
      <a
        id={id || `cta-button-${trackingLocation}`}
        href={CHECKOUT_URL}
        onClick={handleClick}
        className={`group w-full relative inline-flex items-center justify-center gap-3 font-extrabold text-slate-950 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 active:scale-[0.98] transition-all duration-150 rounded-xl shadow-[0_10px_30px_-5px_rgba(245,158,11,0.4)] border-2 border-amber-200/60 cursor-pointer ${
          isLarge ? 'py-4 sm:py-5 px-6 sm:px-8 text-lg sm:text-xl md:text-2xl' : 'py-3.5 px-6 text-base sm:text-lg'
        }`}
      >
        <span className="tracking-tight uppercase drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
          {label}
        </span>
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:translate-x-1.5 transition-transform duration-200 text-slate-950" />
      </a>

      {subtext && (
        <p className="mt-2.5 text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
          {subtext}
        </p>
      )}

      {showTrustIcons && (
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-400/90 font-medium">
          <span className="inline-flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Téléchargement direct
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Paiement 100% sécurisé
          </span>
        </div>
      )}
    </div>
  );
};
