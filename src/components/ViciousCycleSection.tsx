import React, { useState } from 'react';
import { ArrowDown, RefreshCw, Smartphone, AlertTriangle, HelpCircle, Frown } from 'lucide-react';

export const ViciousCycleSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      name: '1. INTENTION',
      quote: '« Je vais m’y mettre. »',
      desc: 'Tu as la bonne volonté et l’envie sincère de faire avancer ta tâche.',
      icon: RefreshCw,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/30',
    },
    {
      name: '2. RÉSISTANCE',
      quote: '« C’est compliqué... »',
      desc: 'Ton cerveau perçoit la tâche comme trop vaste, floue ou intimidante.',
      icon: HelpCircle,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30',
    },
    {
      name: '3. DISTRACTION',
      quote: '« Je regarde juste mon téléphone. »',
      desc: 'Tu cherches un soulagement immédiat face à la tension du début.',
      icon: Smartphone,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30',
    },
    {
      name: '4. REPORT',
      quote: '« Je ferai ça plus tard. »',
      desc: 'Tu repousses à ce soir ou à demain pour faire baisser la pression.',
      icon: AlertTriangle,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10 border-orange-500/30',
    },
    {
      name: '5. CULPABILITÉ',
      quote: '« Encore une fois, je n’ai rien fait... »',
      desc: 'La journée s’achève, le sentiment d’impuissance et de regret s’installe.',
      icon: Frown,
      color: 'text-red-400',
      bg: 'bg-red-500/10 border-red-500/30',
    },
    {
      name: '6. NOUVELLE INTENTION',
      quote: '« Demain, promis, je m’y mets vraiment ! »',
      desc: 'Et le même cycle recommence. Encore. Et encore.',
      icon: RefreshCw,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30',
    },
  ];

  return (
    <section id="vicious-cycle-section" className="py-14 sm:py-20 px-4 bg-[#0e1420] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 05 — MÉCANISME DU BLOCAGE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white tracking-tight leading-tight">
          LE CERCLE DE LA PROCRASTINATION
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 text-center max-w-xl mx-auto">
          Pourquoi les mêmes schémas se répètent jour après jour malgré toute ta bonne volonté.
        </p>

        {/* Visual Cycle Diagram */}
        <div className="mt-8 sm:mt-12 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                    step.bg
                  } ${isSelected ? 'ring-2 ring-amber-400 shadow-md scale-[1.01]' : 'hover:opacity-95'}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-black tracking-wider uppercase ${step.color}`}>
                      {step.name}
                    </span>
                    <Icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <div className="mt-2 text-base font-bold text-white italic">
                    {step.quote}
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    {step.desc}
                  </p>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-3 right-1/2 translate-x-1/2 z-10">
                      {/* connector visual */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Loop Indicator */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <RefreshCw className="w-4 h-4 text-amber-400 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Ce cycle tourne en boucle tant que tu n’attaques pas la bonne étape : <strong>la résistance au démarrage</strong>.</span>
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Le même schéma. Encore et encore.
            </div>
          </div>
        </div>

        {/* Big Key Takeaway */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/15 border border-amber-500/30 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight uppercase">
            LE PROBLÈME N’EST PAS TOUJOURS LE MANQUE DE VOLONTÉ.
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-medium">
            Tu peux être simplement coincé dans un système invisible qui favorise mécaniquement le report.
          </p>
        </div>
      </div>
    </section>
  );
};
