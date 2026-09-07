/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeadlineVariant, CtaVariant, PriceDisplayVariant } from './types';
import { HEADLINE_VARIANTS, CTA_VARIANTS } from './constants';
import { HeaderBar } from './components/HeaderBar';
import { NavigationAnchorBar } from './components/NavigationAnchorBar';
import { AnalyticsMonitoringDashboard } from './components/AnalyticsMonitoringDashboard';
import { HeroSection } from './components/HeroSection';
import { IdentificationSection } from './components/IdentificationSection';
import { ProblemSection } from './components/ProblemSection';
import { TurningPointSection } from './components/TurningPointSection';
import { ViciousCycleSection } from './components/ViciousCycleSection';
import { ProductIntroSection } from './components/ProductIntroSection';
import { FiveMinuteMechanismSection } from './components/FiveMinuteMechanismSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ContentModulesSection } from './components/ContentModulesSection';
import { ApplicationMethodSection } from './components/ApplicationMethodSection';
import { ThirtyDayPlanSection } from './components/ThirtyDayPlanSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PriceSection } from './components/PriceSection';
import { ObjectionsSection } from './components/ObjectionsSection';
import { FaqSection } from './components/FaqSection';
import { ScenarioComparisonSection } from './components/ScenarioComparisonSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { CroTestingControl } from './components/CroTestingControl';
import { analytics } from './utils/analytics';

export default function App() {
  const [headlineVariant, setHeadlineVariant] = useState<HeadlineVariant>('A');
  const [ctaVariant, setCtaVariant] = useState<CtaVariant>('A');
  const [priceVariant, setPriceVariant] = useState<PriceDisplayVariant>('crossed');
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);
  const [ctaClickCount, setCtaClickCount] = useState<number>(() => analytics.getStats().totalCtaClicks);

  useEffect(() => {
    const unsubscribe = analytics.subscribe((e) => {
      if (e.eventName.startsWith('click_cta_')) {
        setCtaClickCount(analytics.getStats().totalCtaClicks);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Top Announcement Bar */}
      <HeaderBar />

      {/* Smooth Scroll Navigation Bar with Anchor Links */}
      <NavigationAnchorBar
        onOpenDashboard={() => setIsDashboardOpen(true)}
        ctaClickCount={ctaClickCount}
      />

      <main className="w-full">
        {/* Section 1: Hero */}
        <HeroSection
          headlineText={HEADLINE_VARIANTS[headlineVariant]}
          ctaText={CTA_VARIANTS[ctaVariant]}
        />

        {/* Section 2: Identification */}
        <IdentificationSection />

        {/* Section 3: Le Problème & Coût de l'accumulation */}
        <ProblemSection />

        {/* Section 4: Le Moment de Bascule */}
        <TurningPointSection />

        {/* Section 5: Le Cercle de la Procrastination */}
        <ViciousCycleSection />

        {/* Section 6: Introduction du Produit */}
        <ProductIntroSection />

        {/* Section 7: Le Mécanisme Unique (La règle des 5 minutes + Démo interactive) */}
        <FiveMinuteMechanismSection />

        {/* Section 8: Avant / Après */}
        <BeforeAfterSection />

        {/* Section 9 & 10: Contenu du guide (12 Modules) & Valeur Universelle */}
        <ContentModulesSection />

        {/* Section 11: Exercices et Application (Lire -> Comprendre -> Appliquer -> Répéter) */}
        <ApplicationMethodSection />

        {/* Section 12: Le Plan de 30 Jours */}
        <ThirtyDayPlanSection />

        {/* Retours d'expérience authentiques */}
        <TestimonialsSection />

        {/* Section 13 & 14: Prix, Ancrage et CTA Majeur */}
        <PriceSection priceDisplayVariant={priceVariant} />

        {/* Section 15: Traiter les Objections */}
        <ObjectionsSection />

        {/* Section 16: FAQ Accordéons */}
        <FaqSection />

        {/* Section 17 & 18: Urgence Éthique & Comparaison des deux scénarios dans 30 jours */}
        <ScenarioComparisonSection />

        {/* Section 19: CTA Final & Décision */}
        <FinalCtaSection />
      </main>

      {/* Floating CTA for Mobile Users */}
      <FloatingMobileBar />

      {/* A/B Testing and CRO Event Monitor Toolbar */}
      <CroTestingControl
        headlineVariant={headlineVariant}
        setHeadlineVariant={setHeadlineVariant}
        ctaVariant={ctaVariant}
        setCtaVariant={setCtaVariant}
        priceVariant={priceVariant}
        setPriceVariant={setPriceVariant}
        onOpenDashboard={() => setIsDashboardOpen(true)}
      />

      {/* Local Monitoring Dashboard Modal */}
      <AnalyticsMonitoringDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />
    </div>
  );
}

