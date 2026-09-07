import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const ObjectionsSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const objections = [
    {
      q: 'Est-ce encore un livre théorique ?',
      a: 'Absolument pas. Tu n’as pas besoin d’un cours de 300 pages. « Le Moteur de l’Action » est un guide d’action synthétique de 30+ pages avec des fiches pratiques, des déclencheurs de 5 minutes et des protocoles opérationnels immédiatement transposables sur ta tâche du jour.',
    },
    {
      q: 'Que faire si je n’ai vraiment pas le temps ?',
      a: 'C’est exactement la raison d’être de ce guide. Si tu as 5 minutes, tu as le temps d’appliquer le premier geste. La méthode est calibrée pour s’insérer dans les journées les plus denses sans alourdir ton agenda.',
    },
    {
      q: 'Est-ce adapté à ma situation personnelle (travail, études, projets) ?',
      a: 'Oui. Le protocole s’attaque au mécanisme universel de la friction mentale. Que tu sois entrepreneur, cadre, étudiant, créateur ou parent débordé, la résistance au démarrage obéit aux mêmes lois cognitives, et le moteur s’applique de façon identique.',
    },
    {
      q: 'Que faire si j’abandonne rapidement après 3 ou 4 jours ?',
      a: 'C’est précisément prévu. Le « Protocole de Redémarrage » et la « Règle Zéro-Jour-Blanc » sont spécifiquement conçus pour casser le syndrome du tout-ou-rien. Si tu rates un créneau, tu as un protocole d’urgence en 3 étapes pour reprendre immédiatement sans culpabilité.',
    },
    {
      q: 'Et si je n’ai aucune motivation quand je me réveille ?',
      a: 'Le secret du Moteur de l’Action est qu’il ne demande JAMAIS d’attendre la motivation. La motivation ne précède pas l’action, elle en découle. En démarrant par une micro-action de 5 minutes, la motivation apparaît une fois que tu es en mouvement.',
    },
  ];

  return (
    <section
      ref={ref}
      id="objections-section"
      className="py-16 sm:py-24 px-4 bg-[#0a0e17] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 15 — RÉPONSES SANS DÉTOUR
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center text-white tracking-tight leading-tight">
          « MAIS EST-CE QUE ÇA VA VRAIMENT M’AIDER ? »
        </h2>

        {/* Honest response card */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              La réponse honnête :
            </span>
            <p className="text-xl sm:text-2xl font-black text-white mt-1">
              Aucun guide ne peut appuyer sur les touches à ta place.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mais il peut t’offrir <strong className="text-white">la méthode la plus rapide</strong> pour briser la résistance, <strong className="text-white">les 12 protocoles clés en main</strong> pour ne plus jamais bloquer, et <strong className="text-white">le plan de route</strong> pour stabiliser tes progrès sur la durée.
            </p>
          </div>
        </div>

        {/* Section 29: Animated Accordions with Rotating Chevrons */}
        <div className="mt-8 sm:mt-10 space-y-3.5">
          {objections.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-all duration-200 hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-400 text-slate-950 font-black' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/70 bg-slate-950/40 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
