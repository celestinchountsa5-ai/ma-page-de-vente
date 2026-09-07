import React from 'react';
import { Clock, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { CtaButton } from './CtaButton';

export const ScenarioComparisonSection: React.FC = () => {
  return (
    <section id="scenario-section" className="py-14 sm:py-24 px-4 bg-[#0e1420] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Section 17: URGENCE ÉTHIQUE */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 17 & 18 — LE TEMPS QUI PASSE
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-2">
            LE TEMPS, LUI, CONTINUERA D’AVANCER.
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2 text-amber-400 font-bold text-lg sm:text-xl">
            <Clock className="w-5 h-5" />
            <span>Dans 30 jours, tu seras quelque part.</span>
          </div>

          <p className="mt-3 text-base sm:text-lg text-slate-300 font-medium">
            Pourquoi ne pas commencer à construire ce changement aujourd’hui ?
          </p>
        </div>

        {/* Section 18: Les deux scénarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SCÉNARIO A */}
          <div className="bg-slate-900/80 border border-red-900/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-red-400 mb-1">
                DANS 30 JOURS
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                SCÉNARIO A : STATU QUO
              </h3>

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Tu continues à repousser tes priorités</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Les mêmes projets restent en suspens</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Le même « demain je m’y mets » se répète</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>La même culpabilité chaque soir au coucher</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Toujours ce sentiment d’éternel recommencement</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-red-300/80 italic text-center">
              Le résultat garanti de ne rien changer aujourd’hui.
            </div>
          </div>

          {/* SCÉNARIO B */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#0d1d16] border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 text-xs font-black uppercase px-3 py-0.5 rounded-full shadow">
              LA BASCULE
            </div>

            <div>
              <div className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-1">
                DANS 30 JOURS
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                SCÉNARIO B : L’ACTION
              </h3>

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-100 font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tu as commencé concrètement sans attendre d’être prêt</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tu as parfois raté une journée, mais sans culpabiliser</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tu as appliqué le protocole de redémarrage immédiat</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tu as appris à réduire la friction au démarrage</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tu as créé une chaîne d’actions visible et motivante</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tu comprends enfin précisément tes propres blocages</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-900/50 text-xs text-emerald-300 font-semibold text-center">
              Le résultat d’un système adapté à la réalité.
            </div>
          </div>
        </div>

        {/* Decision prompt */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            QUEL SCÉNARIO VEUX-TU CONSTRUIRE ?
          </h3>

          <div className="mt-6">
            <CtaButton
              id="scenario-cta"
              label="JE COMMENCE MAINTENANT"
              trackingLocation="middle"
              subtext="Tarif de 17,55 € • Accès immédiat"
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
