import React, { useState } from 'react';
import { Sparkles, Check, X, ArrowDown, ArrowUp, Zap, Compass } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';
import breakthroughImg from '../assets/images/doorway_breakthrough_1788796629250.jpg';

export const TurningPointSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [frictionLevel, setFrictionLevel] = useState<'high' | 'reduced'>('reduced');

  return (
    <section
      ref={ref}
      id="turning-point-section"
      className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#070b12] via-[#0e1628] to-[#090d16] border-b border-slate-800 relative overflow-hidden"
    >
      {/* Subtle deep blue rupture glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-400 uppercase">
            SECTION 04 — LA RUPTURE VISUELLE
          </span>
        </div>

        {/* Section 15: "ET SI TU N'ÉTAIS PAS PARESSEUX ?" where PAS PARESSEUX dominates */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium tracking-tight">
            Et si la vérité était tout autre ?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight mt-2 leading-[1.1]">
            ET SI TU N’ÉTAIS{' '}
            <AnimatedKeyword variant="amber" as="span" className="underline decoration-amber-400/40 decoration-wavy underline-offset-8">
              PAS PARESSEUX ?
            </AnimatedKeyword>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tu as de l’ambition, des idées et de l’énergie. Ce qui te bloque n’est pas un défaut de caractère, c’est le mur d’inertie dressé avant le tout premier geste.
          </p>
        </div>

        {/* Section 16: ANIMATION MÉTAPHORIQUE FRICTION VS ACTION */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> MÉTAPHORE VISUELLE DE CONVERSION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                RÉDUIRE LA{' '}
                <AnimatedKeyword variant="warning" as="span">
                  FRICTION
                </AnimatedKeyword>{' '}
                AVANT DE CHERCHER PLUS DE{' '}
                <AnimatedKeyword variant="emerald" as="span">
                  MOTIVATION
                </AnimatedKeyword>.
              </h3>
            </div>

            {/* Interactive Toggle Button */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
              <button
                type="button"
                onClick={() => setFrictionLevel('high')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  frictionLevel === 'high' ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                Méthode Volonté
              </button>
              <button
                type="button"
                onClick={() => setFrictionLevel('reduced')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  frictionLevel === 'reduced' ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                Le Moteur de l’Action
              </button>
            </div>
          </div>

          {/* Interactive Bars Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Dynamic bars */}
            <div className="space-y-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              {/* Friction Bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    FRICTION AU DÉMARRAGE
                  </span>
                  <span className={frictionLevel === 'high' ? 'text-red-400 font-extrabold' : 'text-slate-400'}>
                    {frictionLevel === 'high' ? 'ÉLEVÉE (90%)' : 'RÉDUITE (15%)'}
                  </span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full transition-all duration-700 ease-out rounded-full ${
                      frictionLevel === 'high' ? 'w-[90%] bg-red-500' : 'w-[15%] bg-slate-600'
                    }`}
                  />
                </div>
              </div>

              {/* Action Bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    PASSAGE À L'ACTION
                  </span>
                  <span className={frictionLevel === 'reduced' ? 'text-emerald-400 font-extrabold' : 'text-slate-400'}>
                    {frictionLevel === 'reduced' ? 'IMMÉDIAT (95%)' : 'BLOQUÉ (10%)'}
                  </span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full transition-all duration-700 ease-out rounded-full ${
                      frictionLevel === 'reduced' ? 'w-[95%] bg-gradient-to-r from-amber-400 to-emerald-400' : 'w-[10%] bg-red-800'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Right: Explanatory Context */}
            <div className="space-y-3">
              {frictionLevel === 'reduced' ? (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm leading-relaxed animate-in fade-in duration-300">
                  <strong className="text-amber-300 block font-black mb-1">
                    ✓ FRICTION ↓ = ACTION ↑
                  </strong>
                  Quand le premier pas ne demande que 5 minutes et un geste infime, le cerveau n’a aucune raison de déclencher l’alarme du report. Tu commences sans lutter.
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 text-red-200 text-sm leading-relaxed animate-in fade-in duration-300">
                  <strong className="text-red-300 block font-black mb-1">
                    ✗ L’illusion de la volonté pure
                  </strong>
                  Attendre d’être « inspiré » ou vouloir abattre 4 heures d’affilée crée une résistance colossale. Ton cerveau choisit la fuite instantanée.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Breakthrough photo banner */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-800 relative shadow-2xl group max-h-[300px]">
          <img
            src={breakthroughImg}
            alt="Passage à l'action et bascule vers la clarté"
            className="w-full h-full object-cover object-center max-h-[300px]"
            referrerPolicy="no-referrer"
            loading="lazy"
            width={800}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/50 to-transparent flex items-end p-5 sm:p-6">
            <p className="text-xs sm:text-sm md:text-base font-semibold text-white/90 max-w-xl drop-shadow">
              Ce n’est pas ton intelligence ni ta valeur qui font défaut. C’est la friction gigantesque placée entre toi et ton premier geste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
