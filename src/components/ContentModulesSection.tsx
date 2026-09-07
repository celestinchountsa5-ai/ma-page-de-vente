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
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { CONTENT_MODULES } from '../constants';
import { CtaButton } from './CtaButton';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const ContentModulesSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Diagnostic', 'Action', 'Focus', 'Résilience', 'Régularité'];

  const filteredModules =
    activeCategory === 'Tous'
      ? CONTENT_MODULES
      : CONTENT_MODULES.filter((m) => m.category === activeCategory);

  return (
    <section
      ref={ref}
      id="content-modules-section"
      className="py-16 sm:py-24 px-4 bg-[#080c14] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 09 & 10 — L’ARCHITECTURE DU SYSTÈME
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          LES{' '}
          <AnimatedKeyword variant="amber" as="span">
            12 OUTILS
          </AnimatedKeyword>{' '}
          DU SYSTÈME
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto font-normal">
          Ce ne sont pas des conseils épars glanés sur les réseaux. C’est un maillage cohérent où chaque outil s'imbrique dans le précédent.
        </p>

        {/* Category Pills Filter */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md scale-105'
                  : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section 21: 12 Cards Grid with Staggered Cascading Reveal & Glowing Borders */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredModules.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 rounded-3xl bg-slate-900/85 border border-slate-800/90 hover:border-amber-400/70 hover:shadow-[0_10px_30px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${(idx % 6) * 70}ms` }}
            >
              {/* Subtle top indicator beam */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/25">
                    OUTIL {item.number}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  ✓ Fiche opérationnelle
                </span>
                <span className="text-slate-500">Prêt à l’emploi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 22 & 23: EFFET « SYSTÈME » - Bottom Central Anchor */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden text-center max-w-3xl mx-auto">
          {/* Subtle kinetic circuit connector */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARCHITECTURE INTERCONNECTÉE</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            TON MOTEUR D’ACTION PERSONNEL
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Ces 12 outils ne travaillent pas en solo. Quand un doute survient, l’outil de diagnostic oriente directement vers le protocole de 5 minutes approprié, créant une chaîne ininterrompue d'exécution.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800">Diagnostic</span>
            <ArrowRight className="w-3 h-3 text-amber-400" />
            <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800">Neutralisation Friction</span>
            <ArrowRight className="w-3 h-3 text-amber-400" />
            <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800">Lancement 5 Min</span>
            <ArrowRight className="w-3 h-3 text-amber-400" />
            <span className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 font-bold">Régularité Ancrée</span>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <CtaButton
            label="TÉLÉCHARGER LES 12 OUTILS MAINTENANT"
            trackingLocation="modules"
            subtext="Accès immédiat au pack complet • 17,55 €"
            size="default"
          />
        </div>
      </div>
    </section>
  );
};
