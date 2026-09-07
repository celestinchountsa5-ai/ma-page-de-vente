import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';
import { CURRENT_PRICE, REFERENCE_PRICE, SAVINGS, CHECKOUT_URL } from '../constants';
import { analytics } from '../utils/analytics';

export const FinalCtaSection: React.FC = () => {
  const handleClick = () => {
    analytics.track('click_cta_final', 'Clicked Final Screen CTA');
    analytics.track('checkout_start', 'Navigating to checkout from Final CTA Section');
  };

  return (
    <section id="final-cta-section" className="py-16 sm:py-28 px-4 bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-black border-b border-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TA DÉCISION AUJOURD’HUI</span>
        </div>

        {/* Section 19 Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          TU N’AS PAS BESOIN D’ATTENDRE D’ÊTRE PRÊT.
        </h2>

        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400">
          Tu as besoin d’un premier geste.
        </p>

        {/* Product and Price card */}
        <div className="mt-10 p-6 sm:p-8 bg-slate-900/90 border border-slate-700/90 rounded-3xl shadow-2xl max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-black text-slate-400">
            LE SYSTÈME COMPLET
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
            LE MOTEUR DE L’ACTION
          </h3>

          <div className="mt-4 flex items-baseline justify-center gap-3">
            <span className="text-base sm:text-lg text-slate-400 line-through font-semibold">
              {REFERENCE_PRICE}
            </span>
            <span className="text-4xl sm:text-5xl font-black text-amber-400">
              {CURRENT_PRICE}
            </span>
          </div>

          <div className="mt-2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
            Économie immédiate de {SAVINGS}
          </div>

          {/* Ultimate CTA Button */}
          <div className="mt-8">
            <a
              id="cta-ultimate-button"
              href={CHECKOUT_URL}
              onClick={handleClick}
              className="group w-full relative inline-flex items-center justify-center gap-3 font-black text-slate-950 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 active:scale-[0.98] transition-all duration-150 py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg md:text-xl rounded-2xl shadow-[0_15px_40px_-5px_rgba(245,158,11,0.5)] border-2 border-amber-200/80 cursor-pointer"
            >
              <span>🚀 JE VEUX ARRÊTER DE PROCRASTINER ET COMMENCER MAINTENANT</span>
              <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Accès immédiat
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Paiement 100% sécurisé
            </span>
          </div>
        </div>

        {/* Phrase finale obligatoire */}
        <p className="mt-10 text-base sm:text-lg text-slate-200 font-semibold italic">
          Choisis une action. Commence dans les cinq prochaines minutes.
        </p>

        {/* Discreet footer */}
        <div className="mt-14 pt-8 border-t border-slate-900 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Le Moteur de l’Action. Tous droits réservés.</span>
          <span>Produit numérique pédagogique & pratique anti-procrastination.</span>
        </div>
      </div>
    </section>
  );
};
