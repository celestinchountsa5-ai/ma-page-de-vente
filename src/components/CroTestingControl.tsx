import React, { useState, useEffect } from 'react';
import { Sliders, Activity, ChevronUp, ChevronDown, Check } from 'lucide-react';
import { HeadlineVariant, CtaVariant, PriceDisplayVariant, AnalyticsEvent } from '../types';
import { HEADLINE_VARIANTS, CTA_VARIANTS } from '../constants';
import { analytics } from '../utils/analytics';

interface CroTestingControlProps {
  headlineVariant: HeadlineVariant;
  setHeadlineVariant: (v: HeadlineVariant) => void;
  ctaVariant: CtaVariant;
  setCtaVariant: (v: CtaVariant) => void;
  priceVariant: PriceDisplayVariant;
  setPriceVariant: (v: PriceDisplayVariant) => void;
  onOpenDashboard?: () => void;
}

export const CroTestingControl: React.FC<CroTestingControlProps> = ({
  headlineVariant,
  setHeadlineVariant,
  ctaVariant,
  setCtaVariant,
  priceVariant,
  setPriceVariant,
  onOpenDashboard,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    setEvents(analytics.getEvents());
    const unsubscribe = analytics.subscribe((newEvent) => {
      setEvents((prev) => [...prev, newEvent]);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="fixed bottom-16 sm:bottom-4 right-3 z-40">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md transition-all cursor-pointer"
        >
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span>Contrôle CRO & Tests A/B</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      ) : (
        <div className="bg-slate-950/95 border border-amber-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-lg w-[320px] max-w-[90vw] text-xs text-slate-200 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Simulateur A/B & CRO</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Headline Variant */}
          <div className="mb-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Headline test :
            </label>
            <div className="grid grid-cols-3 gap-1">
              {(['A', 'B', 'C'] as HeadlineVariant[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setHeadlineVariant(v);
                    analytics.track('ab_test_switch', `Headline set to variant ${v}`);
                  }}
                  className={`py-1 rounded font-bold transition-all ${
                    headlineVariant === v
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Var {v}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Variant */}
          <div className="mb-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              CTA Bouton test :
            </label>
            <div className="grid grid-cols-3 gap-1">
              {(['A', 'B', 'C'] as CtaVariant[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setCtaVariant(v);
                    analytics.track('ab_test_switch', `CTA set to variant ${v}`);
                  }}
                  className={`py-1 rounded font-bold transition-all ${
                    ctaVariant === v
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  CTA {v}
                </button>
              ))}
            </div>
          </div>

          {/* Price display variant */}
          <div className="mb-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Format de prix :
            </label>
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setPriceVariant('crossed')}
                className={`py-1 px-2 rounded font-bold text-[11px] truncate ${
                  priceVariant === 'crossed'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                17,55 € (barré)
              </button>
              <button
                type="button"
                onClick={() => setPriceVariant('standard')}
                className={`py-1 px-2 rounded font-bold text-[11px] truncate ${
                  priceVariant === 'standard'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                17,55 € direct
              </button>
            </div>
          </div>

          {/* Live events monitor */}
          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1.5">
              <span className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-emerald-400" /> Flux d’événements en direct ({events.length})
              </span>
            </div>
            <div className="max-h-24 overflow-y-auto space-y-1 pr-1 font-mono text-[10px] text-slate-400">
              {events.slice(-5).reverse().map((e, idx) => (
                <div key={idx} className="truncate bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 flex items-center justify-between">
                  <span className="text-amber-300">{e.eventName}</span>
                  <span className="text-[9px] text-slate-300">
                    {new Date(e.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Open full monitoring modal button */}
          {onOpenDashboard && (
            <div className="mt-3 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenDashboard();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold border border-emerald-500/40 transition-colors text-[11px] cursor-pointer"
              >
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ouvrir Dashboard Complet</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
