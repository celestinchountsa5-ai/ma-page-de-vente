import React from 'react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const HeaderBar: React.FC = () => {
  return (
    <div id="top-announcement" className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-xs sm:text-sm font-bold py-2 px-3 tracking-wide">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-6 flex-wrap text-center">
        <span className="inline-flex items-center gap-1.5 uppercase font-extrabold tracking-wider">
          <Sparkles className="w-4 h-4 shrink-0 text-slate-950" />
          OFFRE SPÉCIALE DE LANCEMENT
        </span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="font-semibold">
          Économise <span className="underline decoration-2">32,45 €</span> aujourd’hui
        </span>
        <span className="hidden md:inline opacity-40">•</span>
        <span className="hidden md:inline-flex items-center gap-1 opacity-90 font-medium">
          <Zap className="w-3.5 h-3.5" /> Accès numérique immédiat
        </span>
        <span className="hidden lg:inline-flex items-center gap-1 opacity-90 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> Paiement sécurisé
        </span>
      </div>
    </div>
  );
};
