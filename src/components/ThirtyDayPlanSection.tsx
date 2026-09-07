import React from 'react';
import { Calendar, CheckCircle, Flame, Shield, Trophy } from 'lucide-react';
import { CtaButton } from './CtaButton';

export const ThirtyDayPlanSection: React.FC = () => {
  const weeks = [
    {
      week: 'SEMAINE 1',
      title: 'Diagnostic + premiers démarrages',
      desc: 'Tu identifies tes déclencheurs d’évitement et tu expérimentes le démarrage de 5 minutes sans forcer.',
      icon: Flame,
      color: 'border-amber-500/50 bg-amber-500/10 text-amber-400',
    },
    {
      week: 'SEMAINE 2',
      title: 'Structure + régularité',
      desc: 'Tu installes le bloc d’action de 20 minutes et la règle de la tâche unique pour ancrer un rythme net.',
      icon: CheckCircle,
      color: 'border-sky-500/50 bg-sky-500/10 text-sky-400',
    },
    {
      week: 'SEMAINE 3',
      title: 'Résilience face aux journées difficiles',
      desc: 'Tu apprends à appliquer le protocole de redémarrage et le système zéro-jour-blanc pour ne jamais rechuter.',
      icon: Shield,
      color: 'border-purple-500/50 bg-purple-500/10 text-purple-400',
    },
    {
      week: 'SEMAINE 4',
      title: 'Consolidation + suite autonome',
      desc: 'Tu stabilises tes nouveaux réflexes et tu poses les bases d’une exécution fluide et durable dans le temps.',
      icon: Trophy,
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
    },
  ];

  return (
    <section id="thirty-day-plan-section" className="py-14 sm:py-20 px-4 bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#0b0f17] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 12 — LA FEUILLE DE ROUTE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-tight leading-tight">
          LE PLAN DE 30 JOURS
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 text-center max-w-xl mx-auto">
          Un pas chaque jour. Une immense différence au bout du mois.
        </p>

        {/* 4 Weeks Timeline Grid */}
        <div className="mt-10 sm:mt-12 space-y-4">
          {weeks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-sm hover:border-slate-700 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black tracking-widest uppercase text-amber-400">
                      {item.week}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual 30-day Calendar Grid representation */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-slate-950/90 border border-amber-500/20 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>DÉFI D’ACTION : 30 JOURS</span>
            </div>
            <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
              30 jours pour installer le déclic
            </span>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-10 gap-1.5 sm:gap-2 text-center text-xs font-bold">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`py-2 rounded-lg border transition-all ${
                  day <= 14
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                J{day}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>Démarrage en douceur</span>
            <span>Régularité acquise</span>
            <span>Autonomie totale</span>
          </div>
        </div>

        {/* Powerful Philosophical Conclusion */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-700 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            L’OBJECTIF N’EST PAS D’ÊTRE PRODUCTIF 24H/24.
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 mt-2 uppercase tracking-tight">
            L’OBJECTIF EST D’ARRÊTER DE REVENIR CONSTAMMENT À ZÉRO.
          </p>
        </div>

        <div className="mt-8 text-center">
          <CtaButton
            id="plan-cta"
            label="COMMENCER LE PLAN 30 JOURS MAINTENANT"
            trackingLocation="middle"
            subtext="Investissement de 17,55 € seulement"
            size="large"
          />
        </div>
      </div>
    </section>
  );
};
