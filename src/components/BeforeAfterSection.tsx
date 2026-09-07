import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const beforeList = [
    '« Je commencerai demain. »',
    'Tâches floues et intimidantes',
    'Téléphone toujours à portée de main',
    'Attente passive d’un élan de motivation',
    'Perfectionnisme paralysant',
    'Journées entières perdues sans avancer',
    'Culpabilité chaque soir au coucher',
    'Recommencer constamment à zéro',
  ];

  const afterList = [
    'Première action clairement définie',
    'Démarrage garanti en 5 minutes chrono',
    'Règle de la tâche unique sans dispersion',
    'Distractions et frictions réduites',
    'Minimum acceptable sécurisé chaque jour',
    'Protocole de redémarrage rapide',
    'Régularité construite sans forcer',
    'Progression visible sur 30 jours',
  ];

  return (
    <section id="before-after-section" className="py-14 sm:py-20 px-4 bg-[#0e1420] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 08 — LA TRANSFORMATION
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white tracking-tight leading-tight">
          LE CONTRASTE : SANS LE SYSTÈME VS AVEC LE SYSTÈME
        </h2>

        {/* Ethical disclaimer required by user prompt */}
        <p className="mt-3 text-xs sm:text-sm text-center text-slate-400 max-w-xl mx-auto italic">
          Le système est conçu pour t’aider à opérer cette bascule dans ton quotidien de manière progressive et durable.
        </p>

        {/* High contrast comparison table */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* SANS LE SYSTÈME (AVANT) */}
          <div className="bg-red-950/20 border border-red-900/40 rounded-2xl p-6 sm:p-7 shadow-lg">
            <div className="flex items-center justify-between border-b border-red-900/40 pb-4 mb-5">
              <span className="text-xs font-black uppercase tracking-wider text-red-400">
                SANS LE SYSTÈME
              </span>
              <span className="bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-bold px-3 py-1 rounded-full">
                Le cycle de report
              </span>
            </div>

            <ul className="space-y-3">
              {beforeList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AVEC LE SYSTÈME (APRÈS) */}
          <div className="bg-emerald-950/25 border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
              RÉSULTAT CONCRET
            </div>

            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-5">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                AVEC LE MOTEUR DE L’ACTION
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/40">
                Le passage à l’action
              </span>
            </div>

            <ul className="space-y-3">
              {afterList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
