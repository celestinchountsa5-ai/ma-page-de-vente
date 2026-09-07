import React, { useState } from 'react';
import { ArrowDown, Check, Zap, Play, Sparkles } from 'lucide-react';
import { CtaButton } from './CtaButton';

export const FiveMinuteMechanismSection: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<number>(0);

  const interactiveExamples = [
    {
      bigTask: 'Je dois terminer la rédaction de mon projet ou rapport.',
      microAction: 'J’ouvre le fichier Word ou Google Docs et j’écris une seule phrase.',
      category: 'Travail & Bureau',
    },
    {
      bigTask: 'Je dois faire une séance complète de sport d’1 heure.',
      microAction: 'J’enfile simplement mes baskets et ma tenue sans obligation de durée.',
      category: 'Santé & Forme',
    },
    {
      bigTask: 'Je dois trier mes 300 emails et ranger ma boîte de réception.',
      microAction: 'J’ouvre ma boîte et je traite uniquement les 3 premiers messages non lus.',
      category: 'Organisation',
    },
    {
      bigTask: 'Je dois réviser tout un chapitre dense de 50 pages.',
      microAction: 'J’ouvre le classeur à la page 1 et je lis seulement l’introduction.',
      category: 'Études',
    },
  ];

  return (
    <section id="mechanism-section" className="py-14 sm:py-20 px-4 bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#0b0f17] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 07 — LE MÉCANISME UNIQUE
          </span>
        </div>

        {/* Big headlines */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-tight leading-tight">
          TU N’AS PAS BESOIN DE COMMENCER GRAND.
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-amber-400 tracking-tight mt-1">
          TU AS BESOIN DE COMMENCER.
        </p>

        {/* 5 Minutes Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 bg-amber-500 text-slate-950 px-6 py-2 rounded-full font-black text-xl sm:text-2xl tracking-wider shadow-lg">
            <Zap className="w-6 h-6 fill-slate-950" />
            <span>5 MINUTES.</span>
          </div>
        </div>

        <p className="mt-4 text-center text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-medium">
          L’objectif initial n’est <strong>jamais de terminer</strong> la tâche.{' '}
          L’objectif unique est de <strong>franchir la barrière du démarrage</strong>.
        </p>

        {/* Comparison Shift Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Example 1 */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Exemple 1 : Travail & Création
            </div>
            <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40 text-red-300 font-semibold text-sm">
              <span className="text-xs uppercase tracking-wider block font-bold text-red-400 mb-0.5">Ce qui te paralyse :</span>
              « Je dois terminer mon projet entier aujourd’hui. »
            </div>

            <div className="flex justify-center my-3">
              <ArrowDown className="w-5 h-5 text-amber-400 animate-bounce" />
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 font-bold text-base sm:text-lg">
              <span className="text-xs uppercase tracking-wider block font-bold text-emerald-400 mb-0.5">Le premier mouvement :</span>
              « J’ouvre le document. »
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Exemple 2 : Sport & Santé
            </div>
            <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40 text-red-300 font-semibold text-sm">
              <span className="text-xs uppercase tracking-wider block font-bold text-red-400 mb-0.5">Ce qui te paralyse :</span>
              « Je dois faire une séance complète et épuisante. »
            </div>

            <div className="flex justify-center my-3">
              <ArrowDown className="w-5 h-5 text-amber-400 animate-bounce" />
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 font-bold text-base sm:text-lg">
              <span className="text-xs uppercase tracking-wider block font-bold text-emerald-400 mb-0.5">Le premier mouvement :</span>
              « J’enfile ma tenue. »
            </div>
          </div>
        </div>

        {/* Interactive Demonstrator Widget */}
        <div className="mt-8 bg-slate-950/90 border border-amber-500/30 rounded-2xl p-5 sm:p-7">
          <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Démonstrateur en direct : Clique pour voir la bascule</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {interactiveExamples.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedExample(idx)}
                className={`py-2 px-3 rounded-lg text-xs font-bold text-center transition-all ${
                  selectedExample === idx
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full">
              <span className="text-xs text-slate-400 font-medium">Tâche redoutée :</span>
              <p className="text-sm font-semibold text-slate-200 line-through decoration-red-400">
                {interactiveExamples[selectedExample].bigTask}
              </p>
              <div className="mt-2 text-xs text-amber-400 font-semibold uppercase">Micro-démarrage immédiat (5 min) :</div>
              <p className="text-base sm:text-lg font-bold text-emerald-400">
                👉 {interactiveExamples[selectedExample].microAction}
              </p>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-10 text-center">
          <CtaButton
            id="mechanism-cta"
            label="JE VEUX TESTER LE SYSTÈME"
            trackingLocation="middle"
            subtext="Démarre dès aujourd’hui • Accès direct"
            size="large"
          />
        </div>
      </div>
    </section>
  );
};
