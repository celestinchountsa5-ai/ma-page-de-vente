import React from 'react';
import { HelpCircle, Check, ArrowRight } from 'lucide-react';

export const ObjectionsSection: React.FC = () => {
  const objections = [
    {
      q: '« JE N’AI PAS DE MOTIVATION. »',
      a: 'Justement. Le système ne repose pas uniquement sur la motivation. Il commence par réduire drastiquement la taille du premier mouvement pour contourner la résistance de ton cerveau.',
    },
    {
      q: '« JE SUIS TROP OCCUPÉ. »',
      a: 'Le protocole commence par des actions suffisamment petites (5 à 20 minutes) pour pouvoir être intégrées sans difficulté même dans une journée extrêmement chargée.',
    },
    {
      q: '« J’AI DÉJÀ ESSAYÉ DES MÉTHODES. »',
      a: 'Le but n’est pas de collectionner une nouvelle méthode théorique. Le guide est conçu pour être directement appliqué à travers des exercices concrets et un plan progressif de 30 jours.',
    },
    {
      q: '« ET SI JE RATE UNE JOURNÉE ? »',
      a: 'Tu ne recommences pas à zéro. Le protocole de redémarrage est justement conçu pour neutraliser la culpabilité et reprendre le fil dès le lendemain.',
    },
    {
      q: '« JE PEUX TROUVER DES CONSEILS GRATUITEMENT. »',
      a: 'Oui. L’information brute existe gratuitement et en désordre sur Internet. La valeur ici réside dans la structure, la synthèse éprouvée, les exercices et le système d’application clés en main.',
    },
  ];

  return (
    <section id="objections-section" className="py-14 sm:py-20 px-4 bg-[#0e1420] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 15 — RÉPONSES SANS DÉTOUR
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white tracking-tight leading-tight">
          « MAIS EST-CE QUE ÇA VA VRAIMENT M’AIDER ? »
        </h2>

        {/* Honest response card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              La réponse honnête :
            </span>
            <p className="text-xl sm:text-2xl font-black text-white mt-1">
              Aucun guide ne peut faire le travail à ta place.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Mais il peut te fournir <strong className="text-white">une structure claire</strong>, <strong className="text-white">des outils éprouvés</strong>, <strong className="text-white">des exercices concrets</strong>, <strong className="text-white">un protocole immédiat</strong> et <strong className="text-white">une méthode de redémarrage</strong>.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium">
              Tu n’achètes pas une promesse de transformation magique. Tu achètes un système opérationnel que tu peux appliquer dès aujourd’hui.
            </div>
          </div>
        </div>

        {/* 5 Objections Detailed Grid */}
        <div className="mt-8 space-y-4">
          {objections.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-base sm:text-lg font-black text-amber-400 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{item.q}</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed pl-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
