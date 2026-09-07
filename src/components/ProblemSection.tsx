import React from 'react';
import { Clock, TrendingUp, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const costs = [
    { title: 'Projets retardés', desc: 'Ce livre, ce diplôme ou ce business qui reste à l’état d’ébauche.' },
    { title: 'Opportunités manquées', desc: 'D’autres prennent l’initiative pendant que tu hésites encore.' },
    { title: 'Travail accumulé', desc: 'Une pile de dossiers qui s’alourdit chaque soir.' },
    { title: 'Charge mentale', desc: 'Ce bourdonnement continu : « je devrais être en train de bosser ».' },
    { title: 'Frustration permanente', desc: 'Le décalage insupportable entre ton potentiel et tes actes.' },
    { title: 'Confiance en soi fragilisée', desc: 'Cette petite voix qui te fait douter de ta propre parole.' },
  ];

  return (
    <section id="problem-section" className="py-14 sm:py-20 px-4 bg-[#0b0f17] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-red-400 uppercase">
            SECTION 03 — LE COÛT SILENCIEUX
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white tracking-tight leading-tight">
          LE DANGER N’EST PAS DE REPORTER UNE FOIS.
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-amber-400 mt-2">
          C’EST DE TRANSFORMER LE REPORT EN HABITUDE.
        </p>

        {/* Accumulation Math Card */}
        <div className="mt-8 sm:mt-12 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-semibold">Lundi</span>
              <div className="text-xl sm:text-2xl font-black text-slate-200 mt-1">20 minutes</div>
              <span className="text-xs text-slate-400">reportées sur le téléphone</span>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-semibold">Mardi</span>
              <div className="text-xl sm:text-2xl font-black text-slate-200 mt-1">30 minutes</div>
              <span className="text-xs text-slate-400">« je ferai ça après manger »</span>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-semibold">Mercredi</span>
              <div className="text-xl sm:text-2xl font-black text-slate-200 mt-1">1 heure</div>
              <span className="text-xs text-slate-400">« de toute façon c’est trop tard »</span>
            </div>
          </div>

          {/* Formula calculation */}
          <div className="mt-6 p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xl sm:text-2xl">
              <Clock className="w-6 h-6" />
              <span>20 minutes × 30 jours = 10 heures</span>
            </div>
            <span className="text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-700">
              Illustration arithmétique du temps reporté
            </span>
          </div>
          <p className="text-center text-xs sm:text-sm text-slate-400 mt-3">
            10 heures de vie, de concentration et de progrès envolées chaque mois sans que tu ne t’en rendes compte.
          </p>
        </div>

        {/* Real Concrete Costs Grid */}
        <div className="mt-10">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-400" />
            <span>Ce que ce décalage te coûte réellement au quotidien :</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {costs.map((cost, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex items-start gap-3 hover:border-red-900/40 transition-colors"
              >
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">{cost.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">{cost.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
