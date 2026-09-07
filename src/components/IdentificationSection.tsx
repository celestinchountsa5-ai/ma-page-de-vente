import React, { useState } from 'react';
import {
  Smartphone,
  Clock,
  Bell,
  Mail,
  Film,
  MessageCircle,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Zap,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { AnimatedKeyword } from './AnimatedKeyword';

export const IdentificationSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [chaosMode, setChaosMode] = useState<boolean>(true);

  return (
    <section
      ref={sectionRef}
      id="identification-section"
      className="relative py-14 sm:py-24 px-4 bg-[#0a0e17] border-b border-slate-800/90 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Step indicator */}
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 02 — IDENTIFICATION
          </span>
        </div>

        {/* Primary Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          TU CONNAIS PROBABLEMENT CE{' '}
          <AnimatedKeyword variant="amber" as="span">
            SCÉNARIO
          </AnimatedKeyword>.
        </h2>
        <p className="mt-2 text-center text-sm sm:text-base text-slate-400">
          La mécanique invisible du report quotidien.
        </p>

        {/* Section 12: Progressive Storyline Sequence */}
        <div className="mt-10 sm:mt-14 space-y-3 sm:space-y-4 max-w-2xl mx-auto">
          {/* Step 1 */}
          <div
            className={`p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4 transition-all duration-500 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 font-black text-xs flex items-center justify-center shrink-0">
              01
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-100 uppercase tracking-wide">
              TU AS UNE TÂCHE IMPORTANTE.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className={`p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4 transition-all duration-500 delay-100 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 font-black text-xs flex items-center justify-center shrink-0">
              02
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-200 uppercase tracking-wide">
              TU SAIS QUE TU DOIS LA FAIRE.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className={`p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-4 transition-all duration-500 delay-200 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
              03
            </div>
            <p className="text-base sm:text-lg font-black text-amber-300 italic">
              « JE VAIS COMMENCER DANS{' '}
              <AnimatedKeyword variant="amber" as="span">
                5 MINUTES
              </AnimatedKeyword>. »
            </p>
          </div>

          {/* Step 4 */}
          <div
            className={`p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4 transition-all duration-500 delay-300 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 font-black text-xs flex items-center justify-center shrink-0">
              04
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-300 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-slate-400" />
              <span>TU PRENDS TON TÉLÉPHONE.</span>
            </p>
          </div>

          {/* Step 5 */}
          <div
            className={`p-3.5 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs text-slate-400 transition-all duration-500 delay-400 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="flex items-center gap-2">
              <Film className="w-4 h-4 text-purple-400" /> Une vidéo rapide...
            </span>
            <span className="text-slate-500 font-mono">puis une autre</span>
          </div>

          {/* Step 6 - Climax: 45 MINUTES DISPARAISSENT */}
          <div
            className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-red-950/50 via-slate-900 to-slate-950 border-2 border-red-500/40 text-center shadow-[0_15px_40px_rgba(239,68,68,0.15)] transition-all duration-700 delay-500 ${
              isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center justify-center gap-1.5 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-400" /> RÉSULTAT INVISIBLE
            </span>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              <AnimatedKeyword variant="warning" as="span">
                45 MINUTES DISPARAISSENT.
              </AnimatedKeyword>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
              La tâche est toujours là. Mais le sentiment de culpabilité et d’inertie vient de doubler.
            </p>
          </div>
        </div>

        {/* Section 13: EFFET « CHAOS » (Dispersion vs Action) */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> EFFET VISUEL — DISPERSION VS ACTION
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                Pourquoi ton cerveau décroche au démarrage
              </h3>
            </div>

            {/* Interactive switch button */}
            <button
              type="button"
              onClick={() => setChaosMode(!chaosMode)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                chaosMode
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {chaosMode ? (
                <>
                  <Zap className="w-3.5 h-3.5" />
                  <span>Désactiver le chaos → Voir l’action</span>
                </>
              ) : (
                <>
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réafficher la dispersion</span>
                </>
              )}
            </button>
          </div>

          {/* Visual Container */}
          <div className="relative min-h-[220px] sm:min-h-[260px] rounded-2xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-center p-4 overflow-hidden">
            {chaosMode ? (
              /* State A: DISPERSION (Multiple floating distraction elements) */
              <div className="w-full max-w-lg mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 animate-in fade-in duration-300">
                <div className="p-3 rounded-xl bg-slate-800/90 border border-red-500/30 text-xs font-bold text-red-300 flex items-center gap-2 shadow-sm animate-pulse">
                  <Bell className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Notification (3)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold text-slate-300 flex items-center gap-2 shadow-sm">
                  <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Téléphone</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold text-slate-300 flex items-center gap-2 shadow-sm">
                  <Film className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Vidéo courte</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold text-slate-300 flex items-center gap-2 shadow-sm">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Nouveau message</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold text-slate-300 flex items-center gap-2 shadow-sm">
                  <Share2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Réseau social</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold text-slate-300 flex items-center gap-2 shadow-sm">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Email en attente</span>
                </div>
                <div className="col-span-2 sm:col-span-3 text-center mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  ⚠️ DISPERSION COGNITIVE CONSTANTE
                </div>
              </div>
            ) : (
              /* State B: ACTION (Everything collapsed into one single clear task) */
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-amber-500/15 to-emerald-500/10 border-2 border-emerald-500/50 shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-1">
                  FOCUS ABSOLU
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white">
                  LA TÂCHE.
                </h4>
                <p className="text-sm font-semibold text-amber-300 mt-2">
                  « Une seule chose à faire dans les 5 prochaines minutes. »
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                  Le système neutralise la friction pour rendre le premier pas évident.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
