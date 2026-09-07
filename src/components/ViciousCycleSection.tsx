import React, { useState, useEffect } from 'react';
import {
  RefreshCw,
  HelpCircle,
  Smartphone,
  AlertTriangle,
  Frown,
  Zap,
  Power,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const ViciousCycleSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [isBroken, setIsBroken] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { name: 'INTENTION', quote: '« Je vais m’y mettre. »', color: 'text-sky-400', bg: 'border-sky-400/40 bg-sky-950/40' },
    { name: 'RÉSISTANCE', quote: '« C’est trop lourd... »', color: 'text-amber-400', bg: 'border-amber-400/40 bg-amber-950/40' },
    { name: 'DISTRACTION', quote: '« Je regarde mon écran. »', color: 'text-purple-400', bg: 'border-purple-400/40 bg-purple-950/40' },
    { name: 'REPORT', quote: '« Je ferai ça ce soir. »', color: 'text-orange-400', bg: 'border-orange-400/40 bg-orange-950/40' },
    { name: 'CULPABILITÉ', quote: '« Encore rien fait... »', color: 'text-red-400', bg: 'border-red-400/40 bg-red-950/40' },
    { name: 'NOUVELLE INTENTION', quote: '« Demain, promis ! »', color: 'text-emerald-400', bg: 'border-emerald-400/40 bg-emerald-950/40' },
  ];

  // Auto-advance the active step in a loop when cycle is unbroken
  useEffect(() => {
    if (isBroken) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isBroken, steps.length]);

  return (
    <section
      ref={ref}
      id="vicious-cycle-section"
      className="py-16 sm:py-24 px-4 bg-[#090d16] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 05 — MÉCANISME DU BLOCAGE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          LE CERCLE DE LA{' '}
          <AnimatedKeyword variant="warning" as="span">
            PROCRASTINATION
          </AnimatedKeyword>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 text-center max-w-xl mx-auto">
          Ce n’est pas un problème de volonté. C’est une boucle neuro-comportementale fermée.
        </p>

        {/* Section 17: Interactive Circular Motion & Interrupteur */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-10 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl relative">
          <div className="flex flex-col items-center justify-center relative">
            {/* SVG Circular Track */}
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              <svg
                className={`absolute inset-0 w-full h-full transition-all duration-700 ${
                  isBroken ? 'opacity-25 scale-95 stroke-slate-800' : 'animate-spin-slow'
                }`}
                viewBox="0 0 100 100"
              >
                {/* Outer guide track */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={isBroken ? '#334155' : 'rgba(245, 158, 11, 0.2)'}
                  strokeWidth="1.5"
                  strokeDasharray={isBroken ? '3 3' : '4 4'}
                />
                {!isBroken && (
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#cycleGrad)"
                    strokeWidth="2.5"
                    strokeDasharray="15 65"
                    className="animate-pulse"
                  />
                )}
                <defs>
                  <linearGradient id="cycleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 6 Circular Step Nodes */}
              {steps.map((step, idx) => {
                const angle = (idx * 60 - 90) * (Math.PI / 180);
                const radius = 135; // responsive relative px
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = activeStep === idx && !isBroken;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border text-[11px] sm:text-xs font-black tracking-wider transition-all duration-300 cursor-pointer shadow-lg ${
                      step.bg
                    } ${
                      isActive
                        ? 'ring-2 ring-amber-400 scale-110 shadow-amber-500/20'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <span className={step.color}>{step.name}</span>
                  </div>
                );
              })}

              {/* Central Switch / Interrupteur */}
              <div className="z-30 flex flex-col items-center justify-center text-center p-4">
                <button
                  type="button"
                  onClick={() => setIsBroken(!isBroken)}
                  className={`group relative p-4 sm:p-5 rounded-3xl border-2 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-2xl ${
                    isBroken
                      ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-105'
                      : 'bg-slate-900 border-amber-400/60 text-amber-400 hover:scale-105 hover:border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.25)]'
                  }`}
                >
                  <Power className={`w-7 h-7 sm:w-8 sm:h-8 mb-1 transition-transform group-hover:scale-110 ${isBroken ? 'text-emerald-400' : 'text-amber-400'}`} />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    {isBroken ? 'CYCLE BRISÉ' : 'INTERRUPTEUR'}
                  </span>
                  <span className="text-[9px] text-slate-400 font-semibold mt-0.5">
                    {isBroken ? 'Cliquer pour réactiver' : 'Cliquer pour couper'}
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Breakthrough Banner */}
            <div className="mt-8 text-center max-w-xl mx-auto">
              {isBroken ? (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-emerald-950/50 border-2 border-emerald-400/60 shadow-xl animate-in zoom-in-95 duration-300">
                  <div className="inline-flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-widest mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>CYCLE DÉFINITIVEMENT INTERROMPU</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    UN CYCLE PEUT ÊTRE INTERROMPU.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Le Moteur de l’Action insère un protocole mécanique entre l’Intention et la Résistance. Tu n’as plus le temps de fuir vers ton téléphone.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-400">
                  <p className="font-semibold text-slate-300">
                    Actuellement : <span className="text-amber-400 font-bold">{steps[activeStep].name}</span> — {steps[activeStep].quote}
                  </p>
                  <p className="mt-1 text-slate-500">
                    Clique sur l’interrupteur central pour briser la boucle.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
