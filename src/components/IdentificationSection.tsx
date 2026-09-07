import React from 'react';
import { Smartphone, Clock, Calendar, MessageSquare, AlertCircle } from 'lucide-react';

export const IdentificationSection: React.FC = () => {
  const scenarios = [
    { text: '« Je vais commencer dans 5 minutes. »', icon: Clock },
    { text: '« Je regarde juste mon téléphone. »', icon: Smartphone },
    { text: '« Je ferai ça ce soir. »', icon: Clock },
    { text: '« Demain, je serai vraiment sérieux. »', icon: Calendar },
    { text: '« Lundi, je m’y mets. »', icon: MessageSquare },
  ];

  return (
    <section id="identification-section" className="py-14 sm:py-20 px-4 bg-[#0e1420] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 02 — IDENTIFICATION
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white tracking-tight leading-tight">
          TU CONNAIS PROBABLEMENT DÉJÀ CE SCÉNARIO.
        </h2>

        {/* Visual Quotes Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {scenarios.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-sm hover:border-slate-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-base sm:text-lg font-bold text-slate-200 italic">
                  {item.text}
                </span>
              </div>
            );
          })}

          {/* Climax card */}
          <div className="sm:col-span-2 lg:col-span-1 bg-gradient-to-r from-red-950/40 to-slate-900 border border-red-900/40 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 text-red-400" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-red-200">
              Chaque report semble anodin sur le moment.
            </span>
          </div>
        </div>

        {/* Big punchline */}
        <div className="mt-10 p-6 sm:p-8 bg-slate-950/70 border border-slate-800 rounded-2xl text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Et soudain, la journée est terminée.
          </p>

          <div className="w-16 h-1 bg-amber-500 mx-auto my-5 rounded-full" />

          {/* Emotional transition */}
          <div className="max-w-2xl mx-auto space-y-2 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>Tu n’as pas forcément arrêté de vouloir avancer.</p>
            <p className="text-amber-300 font-semibold">
              Tu as simplement appris à reporter le premier mouvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
