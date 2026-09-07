import React, { useState } from 'react';
import { Calendar, CheckCircle2, Flame, Shield, Trophy, ArrowRight, Zap } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const ThirtyDayPlanSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [selectedWeek, setSelectedWeek] = useState<number>(0);

  const weeks = [
    {
      num: 1,
      name: 'SEMAINE 1',
      title: 'Identifier les blocages',
      subtitle: 'Diagnostic + premiers démarrages en 5 minutes',
      desc: 'Tu cartographies précisément où se situe ta résistance. Tu appliques le protocole des 5 minutes sans obligation de performance.',
      icon: Flame,
      color: 'border-amber-500/50 bg-amber-500/10 text-amber-400',
      activeColor: 'bg-amber-400 text-slate-950',
    },
    {
      num: 2,
      name: 'SEMAINE 2',
      title: 'Réduire la friction',
      subtitle: 'Règle de la tâche unique & préparation amont',
      desc: 'Tu élimines les 3 freins invisibles de ton environnement de travail. Le démarrage devient un automatisme sans lutte intérieure.',
      icon: CheckCircle2,
      color: 'border-sky-500/50 bg-sky-500/10 text-sky-400',
      activeColor: 'bg-sky-400 text-slate-950',
    },
    {
      num: 3,
      name: 'SEMAINE 3',
      title: 'Créer l’élan',
      subtitle: 'Protocole de redémarrage & zéro-jour-blanc',
      desc: 'Tu apprends à neutraliser le découragement si tu sautes une journée. L’inertie est définitivement cassée, le momentum prend le relais.',
      icon: Shield,
      color: 'border-purple-500/50 bg-purple-500/10 text-purple-400',
      activeColor: 'bg-purple-400 text-slate-950',
    },
    {
      num: 4,
      name: 'SEMAINE 4',
      title: 'Stabiliser la régularité',
      subtitle: 'Consolidation & autonomie à long terme',
      desc: 'Tu as installé un moteur d’action qui tourne avec naturel. Tu avances chaque jour sur tes projets capitaux sans t’épuiser.',
      icon: Trophy,
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
      activeColor: 'bg-emerald-400 text-slate-950',
    },
  ];

  return (
    <section
      ref={ref}
      id="thirty-day-plan-section"
      className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#0b0f17] via-[#0e1628] to-[#0b0f17] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 12 — LA FEUILLE DE ROUTE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          LE PLAN DE{' '}
          <AnimatedKeyword variant="amber" as="span">
            30 JOURS
          </AnimatedKeyword>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 text-center max-w-xl mx-auto">
          Une progression guidée pas à pas pour passer de l’inertie chronique à la régularité naturelle.
        </p>

        {/* Section 24 & 25: Visual Timeline with Progress Track */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Connecting Track Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 -z-0">
            <div className="h-full bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400 w-full" />
          </div>

          {/* 4 Weeks Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {weeks.map((week, idx) => {
              const Icon = week.icon;
              const isSelected = selectedWeek === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedWeek(idx)}
                  className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)] scale-[1.02]'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                        {week.name}
                      </span>
                      <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${week.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-black text-white">
                      {week.title}
                    </h3>
                    <p className="text-xs text-amber-300/80 font-semibold mt-1">
                      {week.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {week.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-slate-500 flex items-center gap-1">
                    <span>Jour {idx * 7 + 1} à {idx * 7 + 7}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual 30-Day Dot Matrix of Momentum */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between gap-2 mb-4 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>VISUALISATION DE LA PROGRESSION SUR 30 JOURS</span>
            </div>
            <span className="text-xs font-bold text-emerald-400">100% faisable sans burnout</span>
          </div>

          {/* 30 Day Dots Grid */}
          <div className="grid grid-cols-6 sm:grid-cols-10 gap-2 sm:gap-2.5">
            {Array.from({ length: 30 }).map((_, i) => {
              const dayNum = i + 1;
              const isFirstWeek = dayNum <= 7;
              const isSecondWeek = dayNum > 7 && dayNum <= 14;
              const isThirdWeek = dayNum > 14 && dayNum <= 21;

              let dotColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
              if (isFirstWeek) dotColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
              else if (isSecondWeek) dotColor = 'bg-sky-500/20 text-sky-300 border-sky-500/40';
              else if (isThirdWeek) dotColor = 'bg-purple-500/20 text-purple-300 border-purple-500/40';

              return (
                <div
                  key={i}
                  className={`h-10 sm:h-12 rounded-xl border flex flex-col items-center justify-center text-[10px] sm:text-xs font-black transition-all hover:scale-105 ${dotColor}`}
                >
                  <span className="text-[9px] text-slate-400 font-mono">J{dayNum}</span>
                  <span className="text-white text-[11px] font-bold">✓</span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
            Même si tu as des journées chargées ou imprévues, le système s’adapte pour ne jamais briser ton rythme.
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <CtaButton
            label="DÉMARRER LE PROTOCOLE DE 30 JOURS"
            trackingLocation="thirty_days"
            subtext="Guide numérique immédiat • 17,55 €"
            size="default"
          />
        </div>
      </div>
    </section>
  );
};
