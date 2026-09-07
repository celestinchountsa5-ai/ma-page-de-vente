import React from 'react';
import { Check, ArrowRight, BookOpen, Brain, Zap, RotateCw } from 'lucide-react';

export const ApplicationMethodSection: React.FC = () => {
  const steps = [
    { label: 'LIRE', icon: BookOpen, desc: 'Une lecture directe, sans remplissage verbeux' },
    { label: 'COMPRENDRE', icon: Brain, desc: 'Identifier clairement ton propre déclencheur d’évitement' },
    { label: 'APPLIQUER', icon: Zap, desc: 'Déclencher la micro-action de 5 minutes chrono' },
    { label: 'RÉPÉTER', icon: RotateCw, desc: 'Créer une dynamique autonome et solide' },
  ];

  const toolsList = [
    'Exercices d’auto-diagnostic précis',
    'Fiches pratiques prêtes à remplir',
    'Questions d’auto-évaluation guidées',
    'Systèmes de suivi de progrès',
    'Protocole de démarrage immédiat',
    'Protocole de redémarrage post-rechute',
    'Défi complet de 30 jours',
  ];

  return (
    <section id="application-section" className="py-14 sm:py-20 px-4 bg-[#0e1420] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 11 — PRATIQUE & EXÉCUTION
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-tight leading-tight">
          TU NE VAS PAS SEULEMENT LE LIRE.
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-center text-amber-400 font-bold max-w-xl mx-auto">
          Le guide a été conçu pour être utilisé sur le terrain, pas stocké dans un dossier d’ordinateur.
        </p>

        {/* The 4-step Loop Graphic: LIRE -> COMPRENDRE -> APPLIQUER -> RÉPÉTER */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center relative shadow-md hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-xs text-slate-400 font-black tracking-widest">ÉTAPE {idx + 1}</span>
                <h3 className="text-base sm:text-lg font-black text-white mt-0.5">{step.label}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-tight">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Checkable tools list */}
        <div className="mt-10 bg-slate-950/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4">
            Ce que tu vas avoir entre les mains :
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {toolsList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
