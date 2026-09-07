import React from 'react';
import { X, Check, Compass } from 'lucide-react';
import breakthroughImg from '../assets/images/doorway_breakthrough_1788796629250.jpg';

export const TurningPointSection: React.FC = () => {
  return (
    <section id="turning-point-section" className="py-14 sm:py-20 px-4 bg-gradient-to-b from-[#0b0f17] via-[#0d1527] to-[#0b0f17] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 04 — LE MOMENT DE BASCULE
          </span>
        </div>

        {/* Big visual header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          ET SI TU N’ÉTAIS PAS LE PROBLÈME ?
        </h2>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-300 text-center font-medium max-w-2xl mx-auto">
          Et si le problème venait plutôt de la manière dont tu essaies de commencer ?
        </p>

        {/* Visual photo banner with breakthrough light */}
        <div className="mt-8 sm:mt-10 rounded-2xl overflow-hidden border border-slate-700/80 relative shadow-2xl group max-h-[360px]">
          <img
            src={breakthroughImg}
            alt="Passage à l'action et bascule vers la clarté"
            className="w-full h-full object-cover object-center max-h-[360px]"
            referrerPolicy="no-referrer"
            loading="lazy"
            width={800}
            height={360}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/40 to-transparent flex items-end p-6 sm:p-8">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white/95 max-w-xl drop-shadow">
              Ce n’est pas ton intelligence ni ta volonté qui font défaut. C’est la friction gigantesque placée entre toi et ton premier geste.
            </p>
          </div>
        </div>

        {/* Comparison of approaches */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Old way */}
          <div className="bg-red-950/20 border border-red-900/40 rounded-2xl p-6">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <X className="w-4 h-4" /> La méthode traditionnelle (qui échoue)
            </span>
            <p className="text-sm text-slate-300 mt-2">La plupart des conseils te répètent :</p>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-200">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                « Sois plus discipliné ! »
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                « Trouve ta motivation intérieure ! »
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                « Travaille plus dur sans faiblir ! »
              </li>
            </ul>
            <p className="mt-3 text-xs text-red-300/80 italic">
              Résultat : Tu te forces 2 jours, puis tu abandonnes en culpabilisant.
            </p>
          </div>

          {/* New way */}
          <div className="bg-amber-500/10 border border-amber-500/40 rounded-2xl p-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> L’approche du Moteur de l’Action
            </span>
            <p className="text-sm text-slate-300 mt-2">Une stratégie basée sur les sciences cognitives :</p>
            <div className="mt-3 py-3 px-4 rounded-xl bg-slate-900/90 border border-amber-400/40 text-center">
              <span className="text-base sm:text-lg font-black text-amber-300 tracking-wide uppercase">
                RENDRE LE PREMIER MOUVEMENT PLUS FACILE.
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Moins de friction au départ = action immédiate sans effort colossal.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
