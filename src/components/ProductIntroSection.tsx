import React from 'react';
import { Layers, FileText, CheckSquare, Target, Calendar, Sparkles } from 'lucide-react';

export const ProductIntroSection: React.FC = () => {
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
    <section id="product-intro-section" className="py-14 sm:py-20 px-4 bg-[#0b0f17] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 06 — LA SOLUTION CONCRÈTE
          </span>
        </div>

        {/* Transition forte */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-tight leading-tight">
          C’EST POUR ÇA QUE J’AI CRÉÉ LE MOTEUR DE L’ACTION.
        </h2>

        {/* Main definition */}
        <div className="mt-6 text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            <strong className="text-white font-bold">Le Moteur de l’Action</strong> est un guide pratique conçu pour t’aider à identifier ce qui bloque ton passage à l’action, réduire la friction et construire une régularité réaliste.
          </p>
        </div>

        {/* What it is NOT vs What it IS */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-700 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-red-400 bg-red-950/40 border border-red-900/50 px-3 py-1 rounded-full mb-3">
            Important
          </div>
          <p className="text-lg sm:text-xl font-bold text-white">
            Ce n’est PAS un discours motivationnel de plus.
          </p>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl mx-auto">
            La motivation s’évapore après 48 heures. Ce dont tu as besoin, c’est d’une structure opérationnelle qui fonctionne même les jours où tu as zéro énergie.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-white">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
