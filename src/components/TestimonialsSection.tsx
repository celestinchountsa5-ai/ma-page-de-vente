import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-14 sm:py-20 px-4 bg-[#0e1420] border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
            SECTION 10 — RETOURS D’EXPÉRIENCE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white tracking-tight leading-tight">
          ILS ONT APPLIQUÉ LA MÉTHODE ET PARTAGENT LEUR EXPÉRIENCE
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 text-center max-w-lg mx-auto">
          Des retours authentiques de personnes qui ont décidé d’en finir avec le report permanent.
        </p>

        {/* 3 Review Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:border-slate-700 transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-200 font-medium italic leading-relaxed">
                  « {t.quote} »
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${t.avatarBg} text-white font-extrabold text-xs flex items-center justify-center shadow`}>
                  {t.name.slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
