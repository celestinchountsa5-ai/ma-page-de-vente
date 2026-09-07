import React, { useState, useEffect } from 'react';
import {
  X,
  Activity,
  MousePointerClick,
  Eye,
  ShoppingCart,
  TrendingUp,
  Download,
  RotateCcw,
  CheckCircle2,
  Sliders,
  Sparkles,
  Zap,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { AnalyticsEvent, AnalyticsStats } from '../types';
import { analytics } from '../utils/analytics';

interface AnalyticsMonitoringDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsMonitoringDashboard: React.FC<AnalyticsMonitoringDashboardProps> = ({
  isOpen,
  onClose,
}) => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [stats, setStats] = useState<AnalyticsStats>(analytics.getStats());
  const [filterType, setFilterType] = useState<'all' | 'cta' | 'scroll' | 'checkout'>('all');

  useEffect(() => {
    setEvents(analytics.getEvents());
    setStats(analytics.getStats());

    const unsubscribe = analytics.subscribe(() => {
      setEvents(analytics.getEvents());
      setStats(analytics.getStats());
    });

    return unsubscribe;
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSimulateHeroClick = () => {
    analytics.trackCtaClick('hero', 'Clic simulé depuis le monitoring');
  };

  const handleSimulateFinalClick = () => {
    analytics.trackCtaClick('final', 'Clic simulé depuis le monitoring');
  };

  const handleClear = () => {
    if (window.confirm('Voulez-vous vraiment réinitialiser toutes les données de tracking local ?')) {
      analytics.clearEvents();
      setEvents(analytics.getEvents());
      setStats(analytics.getStats());
    }
  };

  const handleExport = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(events, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `cro-moteur-action-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredEvents = events.filter((e) => {
    if (filterType === 'cta') return e.eventName.startsWith('click_cta_');
    if (filterType === 'scroll') return e.eventName.startsWith('scroll_');
    if (filterType === 'checkout') return e.eventName === 'checkout_start';
    return true;
  });

  const ctaTotal = stats.totalCtaClicks > 0 ? stats.totalCtaClicks : 1;
  const heroPct = Math.round((stats.ctaBreakdown.hero / ctaTotal) * 100);
  const pricePct = Math.round((stats.ctaBreakdown.price / ctaTotal) * 100);
  const finalPct = Math.round((stats.ctaBreakdown.final / ctaTotal) * 100);
  const middlePct = Math.round((stats.ctaBreakdown.middle / ctaTotal) * 100);
  const floatingPct = Math.round((stats.ctaBreakdown.floating / ctaTotal) * 100);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tableau de bord de monitoring CRO local"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="bg-[#0e1420] border border-amber-500/40 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Dashboard de Monitoring CRO Local
                </h2>
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> En direct
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Suivi télémétrique des clics CTA, taux de conversion et profondeur de lecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExport}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              title="Exporter au format JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exporter JSON</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Top 4 Key Performance Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* KPI 1: Taux de conversion CTA */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider">Taux de Clics (CTR)</span>
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                {stats.conversionRate}%
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Ratio total clics / sessions
              </div>
            </div>

            {/* KPI 2: Total Clics CTA */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider">Clics CTA Totaux</span>
                <MousePointerClick className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {stats.totalCtaClicks}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Toutes sections confondues
              </div>
            </div>

            {/* KPI 3: Vues de Page */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider">Sessions Visiteurs</span>
                <Eye className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {stats.pageViews}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Pages consultées enregistrées
              </div>
            </div>

            {/* KPI 4: Initiations de Commande */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider">Départs Checkout</span>
                <ShoppingCart className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-purple-400">
                {stats.checkoutStarts}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Événements `checkout_start`
              </div>
            </div>
          </div>

          {/* Detailed CTA Breakdown by Location */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Répartition des Clics par Emplacement CTA
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Capture ciblée des événements demandés : click_cta_hero, click_cta_final, click_cta_price, etc.
                </p>
              </div>
              <div className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                {stats.totalCtaClicks} clics capturés
              </div>
            </div>

            <div className="space-y-3.5">
              {/* Hero CTA */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <strong>Hero principal</strong> (click_cta_hero)
                  </span>
                  <span className="text-amber-400 font-bold">
                    {stats.ctaBreakdown.hero} clics ({heroPct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-amber-400 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${heroPct}%` }}
                  />
                </div>
              </div>

              {/* Final CTA */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <strong>Écran de décision finale</strong> (click_cta_final)
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {stats.ctaBreakdown.final} clics ({finalPct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-emerald-400 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${finalPct}%` }}
                  />
                </div>
              </div>

              {/* Price CTA */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <strong>Grille tarifaire & Offre</strong> (click_cta_price)
                  </span>
                  <span className="text-sky-400 font-bold">
                    {stats.ctaBreakdown.price} clics ({pricePct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-sky-400 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${pricePct}%` }}
                  />
                </div>
              </div>

              {/* Middle CTAs */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <strong>Milieu de page</strong> (click_cta_middle)
                  </span>
                  <span className="text-purple-400 font-bold">
                    {stats.ctaBreakdown.middle} clics ({middlePct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-purple-400 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${middlePct}%` }}
                  />
                </div>
              </div>

              {/* Mobile Floating CTA */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <strong>Barre flottante mobile</strong> (click_cta_floating)
                  </span>
                  <span className="text-rose-400 font-bold">
                    {stats.ctaBreakdown.floating} clics ({floatingPct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-rose-400 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${floatingPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Conversion Funnel & Scroll Depth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Conversion Funnel */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Entonnoir de Conversion
              </h3>
              <p className="text-xs text-slate-400 mb-4">Progression à travers les étapes clés de persuasion</p>

              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">1. Arrivée sur la page</span>
                  <span className="font-bold text-white">{stats.pageViews} (100%)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">2. Lecture approfondie (50%+)</span>
                  <span className="font-bold text-amber-400">
                    {stats.scrollDepth.scroll50} ({Math.min(100, Math.round((stats.scrollDepth.scroll50 / stats.pageViews) * 100))}%)
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">3. Clic d’intention (CTA)</span>
                  <span className="font-bold text-emerald-400">
                    {stats.totalCtaClicks} ({Math.round((stats.totalCtaClicks / stats.pageViews) * 100)}%)
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <span className="text-emerald-300 font-bold">4. Redirection vers Checkout</span>
                  <span className="font-black text-emerald-400">
                    {stats.checkoutStarts}
                  </span>
                </div>
              </div>
            </div>

            {/* Scroll Milestones */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Profondeur de Lecture (Scroll)
              </h3>
              <p className="text-xs text-slate-400 mb-4">Jalons d’engagement enregistrés automatiquement</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">25% — Découverte</span>
                  <div className="text-xl font-black text-white mt-1">{stats.scrollDepth.scroll25}</div>
                  <span className="text-[10px] text-slate-400">Hero & Diagnostic</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">50% — Mécanisme</span>
                  <div className="text-xl font-black text-amber-400 mt-1">{stats.scrollDepth.scroll50}</div>
                  <span className="text-[10px] text-slate-400">Méthode 5 minutes</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">75% — Modules</span>
                  <div className="text-xl font-black text-white mt-1">{stats.scrollDepth.scroll75}</div>
                  <span className="text-[10px] text-slate-400">Contenu & 30 jours</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">90% — Décision</span>
                  <div className="text-xl font-black text-emerald-400 mt-1">{stats.scrollDepth.scroll90}</div>
                  <span className="text-[10px] text-slate-400">FAQ & CTA Final</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Simulation & Live Test Panel */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Bac à sable de simulation d’événements
              </span>
              <p className="text-xs text-slate-300 mt-0.5">
                Déclenche instantanément des clics de test pour vérifier la réactivité du monitoring en direct.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleSimulateHeroClick}
                className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors cursor-pointer"
              >
                + Simuler Clic Hero
              </button>
              <button
                type="button"
                onClick={handleSimulateFinalClick}
                className="px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs transition-colors cursor-pointer"
              >
                + Simuler Clic Final
              </button>
            </div>
          </div>

          {/* Live Stream Event Log with Filters */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Journal d’Événements Télémétriques ({filteredEvents.length})
                </h3>
                <p className="text-xs text-slate-400">Flux d’audit horodaté en temps réel</p>
              </div>

              {/* Filter tabs */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  className={`px-2 py-1 rounded transition-colors ${
                    filterType === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tous
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('cta')}
                  className={`px-2 py-1 rounded transition-colors ${
                    filterType === 'cta' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Clics CTA
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('scroll')}
                  className={`px-2 py-1 rounded transition-colors ${
                    filterType === 'scroll' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Scrolls
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('checkout')}
                  className={`px-2 py-1 rounded transition-colors ${
                    filterType === 'checkout' ? 'bg-purple-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Checkout
                </button>
              </div>
            </div>

            {/* Event List */}
            <div className="max-h-64 overflow-y-auto space-y-2 pr-1 font-mono text-xs">
              {filteredEvents.slice().reverse().map((e, idx) => {
                const isCta = e.eventName.startsWith('click_cta_');
                const isCheckout = e.eventName === 'checkout_start';
                const isScroll = e.eventName.startsWith('scroll_');

                let badgeColor = 'bg-slate-800 text-slate-300 border-slate-700';
                if (isCta) badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
                if (isCheckout) badgeColor = 'bg-purple-500/20 text-purple-300 border-purple-500/40';
                if (isScroll) badgeColor = 'bg-sky-500/20 text-sky-300 border-sky-500/40';

                return (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${badgeColor}`}>
                        {e.eventName}
                      </span>
                      <span className="text-slate-300 font-sans text-xs">
                        {e.details || 'Événement enregistré'}
                      </span>
                    </div>

                    <div className="text-[10px] text-slate-400 shrink-0">
                      {new Date(e.timestamp).toLocaleTimeString()} ({Math.max(0, Math.round((Date.now() - e.timestamp) / 1000))}s ago)
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-medium px-2 py-1 rounded transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser les données locales</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors cursor-pointer"
          >
            Fermer le dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
