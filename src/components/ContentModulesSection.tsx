import React, { useState } from 'react';
import {
  Search,
  Zap,
  Clock,
  Target,
  ShieldAlert,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Calendar,
  Compass,
  CheckCircle,
  Briefcase,
  GraduationCap,
  FileCheck,
  Heart,
  ChevronDown,
} from 'lucide-react';
import { CONTENT_MODULES } from '../constants';
import { CtaButton } from './CtaButton';

export const ContentModulesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Diagnostic', 'Action', 'Focus', 'Résilience', 'Régularité'];

  const filteredModules = activeCategory === 'Tous'
    ? CONTENT_MODULES
    : CONTENT_MODULES.filter((m) => m.category === activeCategory);

  const applications = [
    { title: 'Tes projets personnels', icon: Sparkles, desc: 'Lancer ton site, écrire, créer ton offre sans repousser au week-end prochain.' },
    { title: 'Ton travail & business', icon: Briefcase, desc: 'T’attaquer enfin aux tâches à fort impact plutôt que de t’épuiser sur du micro-boulot.' },
    { title: 'Tes études & révisions', icon: GraduationCap, desc: 'En finir avec les nuits blanches de panique la veille des rendus et partiels.' },
    { title: 'Tes tâches administratives', icon: FileCheck, desc: 'Impôts, factures, formulaires : expédiés en 20 minutes chrono.' },
    { title: 'Tes habitudes & santé', icon: Heart, desc: 'Reprendre une routine sportive et un rythme de vie sain sans culpabilité.' },
  ];

  return (
    <section id="content-modules-section" className="py-14 sm:py-20 px-4 bg-[#0b0f17] border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 09 & 10 — LE CONTENU DU GUIDE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-tight leading-tight">
          CONCRÈTEMENT, QU’EST-CE QUE TU VAS RECEVOIR ?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto font-normal">
          Ce n’est pas un simple recueil de théories. C’est une boîte à outils opérationnelle de 12 modules complémentaires.
        </p>

        {/* Category Pills Filter */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Content Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-amber-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    MODULE {item.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-400/90 mt-1">
                  {item.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Prêt à l’emploi dès aujourd’hui</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 10: FAIRE COMPRENDRE LA VALEUR RÉELLE */}
        <div className="mt-14 p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              UN INVESTISSEMENT RENTABILISÉ À L’INFINI
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-1.5">
              Tu ne reçois pas seulement de l’information.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Tu obtiens un système universel que tu peux réutiliser encore et encore chaque fois qu’un projet te semble intimidant :
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{app.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick CTA inside value section */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <CtaButton
              id="modules-cta"
              label="OBTENIR LE GUIDE COMPLET (17,55 €)"
              trackingLocation="middle"
              subtext="Accès immédiat à l’ensemble des 12 modules"
              size="default"
              showTrustIcons={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
