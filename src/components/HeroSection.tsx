import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Lock, BookOpen } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { CURRENT_PRICE, REFERENCE_PRICE, SAVINGS } from '../constants';
import bookMockupImg from '../assets/images/book_cover_3d_1788796610852.jpg';

interface HeroSectionProps {
  headlineText: string;
  ctaText: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ headlineText, ctaText }) => {
  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 px-4 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#0b0f17]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Urgent Attention Eyebrow */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>MÉTHODE PRATIQUE ANTI-PROCRASTINATION</span>
          </div>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-center text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          {headlineText}
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed font-normal">
          Tu sais ce que tu dois faire. Tu veux avancer. Mais au moment de commencer, quelque chose bloque.{' '}
          <strong className="text-white font-semibold">Le Moteur de l’Action</strong> t’aide à comprendre ce blocage et à transformer une intention en premier mouvement concret.
        </p>

        {/* Visual & Product Offer Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center max-w-4xl mx-auto">
          {/* Left / Top: Book Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group max-w-[280px] sm:max-w-[320px]">
              {/* Product Badge Pill */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-slate-900/95 border border-amber-500/40 text-amber-400 text-xs font-bold py-1 px-3.5 rounded-full shadow-lg flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>LE GUIDE DU DÉMARRAGE</span>
              </div>

              {/* Book Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-slate-700/60 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={bookMockupImg}
                  alt="Livre Le Moteur de l'Action - Le système pratique pour arrêter de repousser"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  width={320}
                  height={420}
                />
              </div>

              {/* Trust micro tags below cover */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-400 font-medium">
                <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">30+ pages</span>
                <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">12 protocoles</span>
                <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">Plan 30 jours</span>
              </div>
            </div>
          </div>

          {/* Right: Offer Card */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-amber-400 flex items-center gap-1">
                  📘 GUIDE NUMÉRIQUE PRATIQUE
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                  LE MOTEUR DE L’ACTION
                </h2>
              </div>
              <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                Accès immédiat
              </div>
            </div>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Le système pratique anti-procrastination basé sur le <strong className="text-white">démarrage</strong>, la <strong className="text-white">réduction des frictions</strong> et la <strong className="text-white">régularité</strong>.
            </p>

            {/* Price Box */}
            <div className="mt-5 p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs sm:text-sm text-slate-400 line-through font-semibold">
                    {REFERENCE_PRICE}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                    {CURRENT_PRICE}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Investissement unique • Aucun abonnement
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-lg text-center tracking-wide uppercase shadow-sm">
                ÉCONOMISE {SAVINGS}
              </div>
            </div>

            {/* Quick Benefits Checklist */}
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>La méthode des 5 minutes pour casser l’inertie</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Le protocole de redémarrage (quand tu as raté une journée)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>La feuille de route complète sur 30 jours</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <CtaButton
                id="hero-main-cta"
                label={ctaText}
                trackingLocation="hero"
                subtext="Accès immédiat • Produit numérique"
                size="large"
                showTrustIcons={false}
              />
            </div>

            {/* Reassurance text */}
            <p className="mt-3 text-xs sm:text-sm text-center text-amber-300/90 font-medium">
              ⚡ Pas besoin d’attendre d’être motivé pour commencer.
            </p>
          </div>
        </div>

        {/* Micro reassurance badges below hero */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Téléchargement instantané après commande</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Paiement crypté et sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>Lecture sur smartphone, tablette & ordi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
