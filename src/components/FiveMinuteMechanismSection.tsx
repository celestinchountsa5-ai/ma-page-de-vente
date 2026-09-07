import React, { useState } from 'react';
import { ArrowDown, Check, Zap, Play, Sparkles, Clock, Target, Compass, PlayCircle } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const FiveMinuteMechanismSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [timerText, setTimerText] = useState<'05:00' | '04:59'>('05:00');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [selectedExample, setSelectedExample] = useState<number>(0);

  const runTimerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setTimerText('05:00');
    setTimeout(() => {
      setTimerText('04:59');
      setTimeout(() => {
        setIsSimulating(false);
      }, 1200);
    }, 450);
  };

  const steps = [
    { num: '01', title: 'CHOISIR UNE TÂCHE', desc: 'Une seule cible claire, sans chercher à tout régler.' },
    { num: '02', title: 'IDENTIFIER LE PREMIER GESTE', desc: 'L’action physique infime qui ne prend que 10 secondes.' },
    { num: '03', title: 'LANCER 5 MINUTES', desc: 'L’engagement mental minimal sans obligation de continuer.' },
    { num: '04', title: 'COMMENCER', desc: 'L’inertie se brise, le cerveau bascule en mode momentum.' },
  ];

  const interactiveExamples = [
    {
      bigTask: 'Je dois terminer la rédaction de mon projet ou rapport complet.',
      microAction: 'J’ouvre le document Word et j’écris une seule phrase.',
      category: 'Travail & Bureau',
    },
    {
      bigTask: 'Je dois faire une séance complète de sport d’1 heure.',
      microAction: 'J’enfile simplement mes baskets sans obligation de durée.',
      category: 'Santé & Forme',
    },
    {
      bigTask: 'Je dois trier mes 300 emails et ranger ma boîte de réception.',
      microAction: 'J’ouvre ma boîte et je traite uniquement les 3 premiers messages.',
      category: 'Organisation',
    },
    {
      bigTask: 'Je dois réviser tout un chapitre dense de 50 pages.',
      microAction: 'J’ouvre le classeur à la page 1 et je lis seulement l’introduction.',
      category: 'Études',
    },
  ];

  return (
    <section
      ref={ref}
      id="mechanism-section"
      className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#0b0f17] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 07 — LE MÉCANISME UNIQUE
          </span>
        </div>

        {/* Big headlines */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          TU N’AS PAS BESOIN DE COMMENCER GRAND.
        </h2>
        <p className="text-2xl sm:text-3xl md:text-5xl font-black text-center tracking-tight mt-1">
          TU AS BESOIN DE{' '}
          <AnimatedKeyword variant="emerald" as="span">
            COMMENCER
          </AnimatedKeyword>.
        </p>

        {/* Section 20: Digital Stopwatch 05:00 -> 04:59 Interactive Trigger */}
        <div className="mt-10 sm:mt-14 max-w-xl mx-auto bg-slate-950/90 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative">
          <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            LE DÉCLENCHEUR TEMPOREL
          </div>

          {/* Digital Timer Display */}
          <div className="font-mono text-5xl sm:text-7xl font-black text-amber-400 tracking-tight flex items-center justify-center gap-3 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
            <Clock className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400 animate-pulse" />
            <span>{timerText}</span>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={runTimerSimulation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 shadow-lg cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Simuler le premier geste (5:00 → 04:59)</span>
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Dès que le compteur passe à 04:59, la résistance psychologique s'effondre : tu es déjà en mouvement.
          </p>
        </div>

        {/* Section 20: 4-Step Action Sequence (CHOISIR UNE TÂCHE -> PREMIER GESTE -> 5 MIN -> COMMENCER) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/85 border border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-black text-xs flex items-center justify-center mb-3">
                  {step.num}
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-400/80 font-bold uppercase">
                Étape validée
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Selector */}
        <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                APPLICATION CONCRÈTE
              </span>
              <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                Vois comment transformer tes propres tâches bloquantes :
              </h3>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {interactiveExamples.map((ex, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedExample(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedExample === idx
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {ex.category}
              </button>
            ))}
          </div>

          {/* Selected Example Detail Card */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-red-950/25 border border-red-900/40">
              <span className="text-[11px] font-black uppercase text-red-400 tracking-wider block mb-1">
                La tâche perçue (paralysante) :
              </span>
              <p className="text-sm font-semibold text-slate-200">
                « {interactiveExamples[selectedExample].bigTask} »
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/40">
              <span className="text-[11px] font-black uppercase text-emerald-400 tracking-wider block mb-1">
                Le premier geste (5 minutes) :
              </span>
              <p className="text-sm font-bold text-emerald-300">
                « {interactiveExamples[selectedExample].microAction} »
              </p>
            </div>
          </div>
        </div>

        {/* In-Between High Performance CTA */}
        <div className="mt-12 text-center">
          <CtaButton
            label="DÉCOUVRIR LE SYSTÈME EN 5 MINUTES"
            trackingLocation="middle"
            subtext="Guide numérique immédiat • 17,55 €"
            size="default"
          />
        </div>
      </div>
    </section>
  );
};
