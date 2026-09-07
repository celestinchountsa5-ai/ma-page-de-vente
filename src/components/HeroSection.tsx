import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Lock, BookOpen, ChevronDown } from 'lucide-react';
import { CtaButton } from './CtaButton';
import { AnimatedKeyword } from './AnimatedKeyword';
import { CURRENT_PRICE, REFERENCE_PRICE, SAVINGS } from '../constants';
import bookMockupImg from '../assets/images/book_cover_3d_1788796610852.jpg';

interface HeroSectionProps {
  headlineText?: string;
  ctaText: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ ctaText }) => {
  const scrollToMechanism = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('mechanism-section');
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#070a10] via-[#0b0f17] to-[#0d131f]"
    >
      {/* Dynamic kinetic background: subtle convergent energy lines & soft halos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute -top-10 left-10 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />

        {/* Subtle grid with radial mask */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Subtle kinetic converging lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10%"
            y1="0"
            x2="50%"
            y2="50%"
            stroke="url(#energyGrad)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="animate-pulse"
          />
          <line
            x1="90%"
            y1="0"
            x2="50%"
            y2="50%"
            stroke="url(#energyGrad)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Animated Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/35 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>MÉTHODE PRATIQUE ANTI-PROCRASTINATION</span>
          </div>
        </div>

        {/* Headline Staggered Sequence (Sections 07 & 08 & 45) */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-slate-400 mb-1 sm:mb-2">
            LE MOTEUR DE L’ACTION
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white tracking-tight leading-[1.12]">
            <span>ET SI LE </span>
            <AnimatedKeyword variant="warning" as="span">
              VRAI PROBLÈME
            </AnimatedKeyword>
            <br />
            <span className="inline-block mt-1">
              N’ÉTAIT PAS TON{' '}
              <AnimatedKeyword variant="amber" as="span">
                MANQUE DE DISCIPLINE ?
              </AnimatedKeyword>
            </span>
          </h1>
        </div>

        {/* Sub-headline */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed font-normal">
          Tu as une tâche importante. Tu sais ce qu’il faut faire. Mais au moment de commencer, une force invisible te pousse vers ton téléphone.
          <strong className="text-white font-semibold"> Le Moteur de l’Action</strong> remplace l’effort de volonté brutal par un protocole mécanique en{' '}
          <AnimatedKeyword variant="emerald" as="span">
            5 minutes
          </AnimatedKeyword>.
        </p>

        {/* Visual & Product Offer Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center max-w-4xl mx-auto">
          {/* Left / Top: Book Mockup with 3D Depth Float (Section 18) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group max-w-[280px] sm:max-w-[320px] animate-soft-float">
              {/* Product Badge Pill */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-slate-900/95 border border-amber-500/50 text-amber-300 text-xs font-bold py-1 px-3.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>LE GUIDE DU DÉMARRAGE</span>
              </div>

              {/* Book Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.15)] border border-slate-700/60 transition-transform duration-300 group-hover:scale-[1.02]">
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
                <span className="bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800 text-slate-300">30+ pages</span>
                <span className="bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800 text-slate-300">12 protocoles</span>
                <span className="bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800 text-slate-300">Plan 30 jours</span>
              </div>
            </div>
          </div>

          {/* Right: Offer Card */}
          <div className="lg:col-span-7 bg-slate-900/85 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden">
            {/* Top decorative line accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400" />

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
              Le système pratique anti-procrastination conçu pour le <strong className="text-white">démarrage immédiat</strong>, la <strong className="text-white">réduction de la friction</strong> et la <strong className="text-white">régularité sans épuisement</strong>.
            </p>

            {/* Price Box */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                  Investissement unique • Téléchargement immédiat
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
                <span>La méthode des 5 minutes pour casser l’inertie mentale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Le protocole de redémarrage immédiat en cas d’interruption</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>La feuille de route d’installation autonome sur 30 jours</span>
              </li>
            </ul>

            {/* CTA Button with High-Performance Viewport Entrance */}
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
            <span>Lecture immédiate smartphone, tablette & ordi</span>
          </div>
        </div>

        {/* Section 10: Scroll Indicator "DÉCOUVRIR LE SYSTÈME" */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center">
          <a
            href="#mechanism-section"
            onClick={scrollToMechanism}
            className="group inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              DÉCOUVRIR LE SYSTÈME
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-900/90 border border-slate-800 group-hover:border-amber-400/50 flex items-center justify-center transition-all">
              <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
