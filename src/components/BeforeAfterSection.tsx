import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight, Zap, RefreshCw, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const BeforeAfterSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [interactiveMode, setInteractiveMode] = useState<'both' | 'before' | 'after'>('both');

  const beforeList = [
    'Dispersion mentale et scrolling réflexe',
    'Report perpétuel (« je commencerai ce soir »)',
    'Culpabilité lourde en fin de journée',
    'Énergie gaspillée à lutter contre soi-même',
    'Tâches floues perçues comme des montagnes',
    'Recommencer continuellement à zéro',
  ];

  const afterList = [
    'Premier geste immédiat sans effort de volonté',
    'Résistance neutralisée en moins de 5 minutes',
    'Régularité sereine et progression mesurable',
    'Clarté mentale et fin du stress permanent',
    'Tâche découpée en micro-actions évidentes',
    'Protocole de redémarrage autonome acquis pour toujours',
  ];

  return (
    <section
      ref={ref}
      id="before-after-section"
      className="py-16 sm:py-24 px-4 bg-[#0a0f1a] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 08 — LA TRANSFORMATION
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          LE CONTRASTE VISUEL :{' '}
          <AnimatedKeyword variant="warning" as="span">
            SANS
          </AnimatedKeyword>{' '}
          VS{' '}
          <AnimatedKeyword variant="emerald" as="span">
            AVEC LE MOTEUR
          </AnimatedKeyword>
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-center text-slate-400 max-w-xl mx-auto italic">
          Le système est conçu pour t’aider à opérer cette bascule dans ton quotidien de manière progressive et durable.
        </p>

        {/* Interactive Mode Filter Selector */}
        <div className="mt-8 flex justify-center">
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex items-center gap-1 text-xs font-bold">
            <button
              type="button"
              onClick={() => setInteractiveMode('both')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                interactiveMode === 'both' ? 'bg-amber-400 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Comparaison complète
            </button>
            <button
              type="button"
              onClick={() => setInteractiveMode('before')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                interactiveMode === 'before' ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sans le système
            </button>
            <button
              type="button"
              onClick={() => setInteractiveMode('after')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                interactiveMode === 'after' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Avec le Moteur
            </button>
          </div>
        </div>

        {/* High contrast comparison cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* SANS LE SYSTÈME (AVANT) */}
          {(interactiveMode === 'both' || interactiveMode === 'before') && (
            <div
              className={`bg-red-950/20 border border-red-900/40 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 ${
                interactiveMode === 'before' ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-center justify-between border-b border-red-900/40 pb-4 mb-5">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-red-400">
                    SANS LE SYSTÈME
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">Le cycle de l’inertie</h3>
                </div>
                <span className="bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-bold px-3 py-1 rounded-full">
                  Friction permanente
                </span>
              </div>

              <ul className="space-y-3.5">
                {beforeList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* AVEC LE SYSTÈME (APRÈS) */}
          {(interactiveMode === 'both' || interactiveMode === 'after') && (
            <div
              className={`bg-gradient-to-b from-emerald-950/30 via-slate-900 to-slate-950 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative transition-all duration-300 ${
                interactiveMode === 'after' ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''
              }`}
            >
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                TRANSFORMATION CONCRÈTE
              </div>

              <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-5">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                    AVEC LE MOTEUR DE L’ACTION
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">L’exécution fluide</h3>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/40">
                  Momentum immédiat
                </span>
              </div>

              <ul className="space-y-3.5">
                {afterList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
