import React from 'react';
import { Layers, FileText, CheckSquare, Target, Calendar, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const ProductIntroSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Layers,
      title: 'Un système complet',
      desc: 'Pas d’astuces isolées trouvées au hasard sur le web, mais une architecture méthodique pour débloquer ton élan.',
    },
    {
      icon: FileText,
      title: 'Des fiches & protocoles',
      desc: 'Des fiches prêtes à l’emploi à garder sous la main dès qu’un sentiment d’évitement survient.',
    },
    {
      icon: CheckSquare,
      title: 'Des exercices pratiques',
      desc: 'Des questions ciblées et des tests rapides pour diagnostiquer tes propres angles morts en 3 minutes.',
    },
    {
      icon: Target,
      title: 'Un protocole de redémarrage',
      desc: 'Pour en finir avec le syndrome du « tout ou rien » quand tu rates un jour dans ta semaine.',
    },
    {
      icon: Calendar,
      title: 'Un plan d’action de 30 jours',
      desc: 'Une progression graduelle conçue pour ancrer la régularité sans épuisement ni culpabilité.',
    },
  ];

  return (
    <section
      ref={ref}
      id="product-intro-section"
      className="py-16 sm:py-24 px-4 bg-[#0b0f17] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 06 — LA SOLUTION CONCRÈTE
          </span>
        </div>

        {/* Section 19: Activated Title Effect with Light Beam */}
        <div className="text-center relative py-4">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              <span className="text-slate-300">LE </span>
              <AnimatedKeyword variant="amber" as="span">
                MOTEUR DE L’ACTION
              </AnimatedKeyword>
            </h2>

            {/* Glowing animated line crossing the title */}
            <div className="w-full h-1 bg-slate-800 mt-3 relative overflow-hidden rounded-full">
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-energy-beam" />
            </div>
          </div>

          <p className="mt-4 text-base sm:text-xl text-amber-300/90 font-bold max-w-2xl mx-auto">
            Un système pratique pour transformer l’intention en mouvement.
          </p>
        </div>

        {/* Core definition */}
        <div className="mt-6 text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            <strong className="text-white font-bold">Le Moteur de l’Action</strong> est un guide numérique pragmatique conçu pour t’aider à désamorcer ce qui bloque ton passage à l’action, éliminer la friction mentale et installer une régularité durable.
          </p>
        </div>

        {/* What it is NOT vs What it IS */}
        <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-700/80 text-center shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-red-400 bg-red-950/40 border border-red-900/50 px-3 py-1 rounded-full mb-3">
            Important
          </div>
          <p className="text-lg sm:text-xl font-bold text-white">
            Ce n’est PAS un discours motivationnel de plus.
          </p>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Ce n’est pas un énième livre théorique de 300 pages qui te répète d’avoir plus de volonté. C’est une boîte à outils immédiatement applicable dès ta prochaine session de travail.
          </p>
        </div>

        {/* Features list */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-5 flex items-start gap-4 hover:border-amber-400/40 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
