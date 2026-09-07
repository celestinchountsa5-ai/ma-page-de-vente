import React from 'react';
import { ShieldCheck, Zap, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { CURRENT_PRICE, REFERENCE_PRICE, SAVINGS, CHECKOUT_URL } from '../constants';
import { analytics } from '../utils/analytics';

interface PriceSectionProps {
  priceDisplayVariant?: 'standard' | 'crossed';
}

export const PriceSection: React.FC<PriceSectionProps> = ({ priceDisplayVariant = 'crossed' }) => {
  const handleCtaClick = () => {
    analytics.track('click_cta_price', 'Clicked primary pricing section CTA');
    analytics.track('checkout_start', 'Navigating to checkout from Price section');
  };

  return (
    <section id="pricing-section" className="py-14 sm:py-24 px-4 bg-gradient-to-b from-[#0b0f17] via-[#111827] to-[#0b0f17] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 13 & 14 — OFFRE DE LANCEMENT
          </span>
        </div>

        {/* Section 13 Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-tight leading-tight">
          COMBIEN TE COÛTE LE FAIT DE CONTINUER À REPORTER ?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto leading-relaxed">
          Pense aux semaines entières perdues dans le brouillard mental, aux projets retardés d’un an, et au stress répété chaque soir. Reporter a un coût immense.
        </p>

        {/* Big Offer Box */}
        <div className="mt-10 sm:mt-12 bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.25)] relative overflow-hidden">
          {/* Top banner pill */}
          <div className="flex justify-center -mt-6 sm:-mt-10 mb-6">
            <span className="bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest py-1.5 px-6 rounded-full shadow-md">
              OFFRE DE LANCEMENT EXCLUSIVE
            </span>
          </div>

          <div className="text-center">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              VALEUR DU SYSTÈME COMPLET
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              LE MOTEUR DE L’ACTION
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
              Le système pratique anti-procrastination + les 12 modules d’action + le plan 30 jours
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="my-8 py-6 px-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center max-w-lg mx-auto">
            {priceDisplayVariant === 'crossed' ? (
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base text-slate-400 line-through font-semibold">
                  Valeur de référence : {REFERENCE_PRICE}
                </span>
                <div className="mt-1 flex items-baseline justify-center gap-2">
                  <span className="text-xs sm:text-sm uppercase font-bold text-slate-300">Aujourd’hui :</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-amber-400 tracking-tight">
                    {CURRENT_PRICE}
                  </span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full">
                  <span>Tu économises {SAVINGS}</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-sm uppercase font-bold text-slate-400">Tarif unique :</span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-amber-400 tracking-tight mt-1">
                  {CURRENT_PRICE}
                </span>
              </div>
            )}

            <div className="mt-4 text-xs text-slate-400 font-medium">
              Paiement en une seule fois • Aucun abonnement caché • Accès illimité
            </div>
          </div>

          {/* What's included checklist */}
          <div className="max-w-md mx-auto mb-8 space-y-2.5 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Guide complet de plus de 30 pages augmentées</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>12 outils et protocoles concrets prêts à l’emploi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>La méthode de démarrage en 5 minutes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Le protocole de redémarrage après un jour raté</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Le plan et calendrier d’action sur 30 jours</span>
            </div>
          </div>

          {/* Section 14 CTA Majeur */}
          <div className="text-center max-w-xl mx-auto">
            <div className="mb-4">
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight uppercase">
                ARRÊTE DE NÉGOCIER AVEC « DEMAIN ».
              </h4>
              <p className="text-sm sm:text-base text-amber-300 font-medium mt-1">
                Commence avec une première action.
              </p>
            </div>

            <a
              id="cta-major-price"
              href={CHECKOUT_URL}
              onClick={handleCtaClick}
              className="group w-full relative inline-flex items-center justify-center gap-3 font-black text-slate-950 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 active:scale-[0.98] transition-all duration-150 py-4 sm:py-5 px-6 sm:px-8 text-lg sm:text-xl md:text-2xl rounded-2xl shadow-[0_12px_35px_-5px_rgba(245,158,11,0.5)] border-2 border-amber-200/80 cursor-pointer"
            >
              <span>🚀 JE VEUX LE MOTEUR DE L’ACTION</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <div className="mt-3 text-xs sm:text-sm text-slate-300 font-medium">
              Accéder au guide maintenant
            </div>

            <div className="mt-2 text-xs text-slate-400 font-normal">
              Produit numérique • Accès immédiat
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Paiement 100% sécurisé
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Téléchargement direct
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
