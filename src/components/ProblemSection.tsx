import React from 'react';
import { Clock, ArrowDown, Sparkles, XCircle, Brain, Target, Compass, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const ProblemSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const costDimensions = [
    { title: 'Temps.', desc: 'Des heures précieuses volatilisées dans le vide passif.', icon: Clock, color: 'text-amber-400' },
    { title: 'Opportunités.', desc: 'D’autres prennent les devants pendant que tu hésites encore.', icon: Compass, color: 'text-sky-400' },
    { title: 'Projets.', desc: 'Des idées et ambitions majeures qui restent au point mort.', icon: Target, color: 'text-purple-400' },
    { title: 'Énergie mentale.', desc: 'Ce bruit de fond toxique de la tâche inachevée.', icon: Brain, color: 'text-red-400' },
  ];

  return (
    <section
      ref={ref}
      id="problem-section"
      className="py-14 sm:py-24 px-4 bg-[#0b0f17] border-b border-slate-800/90 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-red-400 uppercase">
            SECTION 03 — LE COÛT INVISIBLE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          LE{' '}
          <AnimatedKeyword variant="warning" as="span">
            COÛT SILENCIEUX
          </AnimatedKeyword>{' '}
          DU{' '}
          <AnimatedKeyword variant="amber" as="span">
            REPORT
          </AnimatedKeyword>.
        </h2>
        <p className="mt-2 text-center text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Ce ne sont pas seulement quelques minutes perdues. C’est l’érosion lente de ta confiance.
        </p>

        {/* Section 14: Formula Animation Card */}
        <div className="mt-10 sm:mt-14 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
            {/* 20 MINUTES */}
            <div
              className={`p-5 rounded-2xl bg-slate-950/80 border border-slate-800 transition-all duration-500 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Chaque jour
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-1">
                20 MINUTES
              </div>
              <p className="text-xs text-slate-400 mt-1">repoussées sans y penser</p>
            </div>

            {/* × 30 jours ↓ */}
            <div className="flex flex-col items-center justify-center py-2">
              <span className="text-lg sm:text-xl font-black text-amber-400 tracking-wider">
                × 30 JOURS
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 my-2">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
              <span className="text-xs text-slate-500 uppercase font-semibold">Accumulation mensuelle</span>
            </div>

            {/* 10 HEURES */}
            <div
              className={`p-5 rounded-2xl bg-gradient-to-b from-red-950/40 via-slate-950 to-slate-950 border-2 border-red-500/40 shadow-xl transition-all duration-700 delay-200 ${
                isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Total disparu
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black mt-1">
                <AnimatedKeyword variant="warning" as="span">
                  10 HEURES
                </AnimatedKeyword>
              </div>
              <p className="text-xs text-red-200/90 mt-1 font-medium">de vie & d’avancement par mois</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Sur une année, c’est plus de <strong className="text-white">120 heures</strong>. L’équivalent de 3 semaines de travail à plein temps absorbées par l’inertie du démarrage.
            </p>
          </div>
        </div>

        {/* Section 14: Progressive Reveal of what is really lost */}
        <div className="mt-10 sm:mt-12">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
              Ce que tu perds réellement chaque fois que tu repousses :
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {costDimensions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:-translate-y-1 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 300}ms` }}
                >
                  <div className={`w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center mb-3 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
