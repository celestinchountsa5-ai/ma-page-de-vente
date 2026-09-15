import React, { useState, useEffect } from 'react';
import { Video, Star, RefreshCw, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Filter, Users, Award, Play } from 'lucide-react';
import { VideoTestimonial } from '../types';
import { fetchVideoTestimonials, VideoCategoryFilter, VideoSortOption } from '../services/videoTestimonialsService';
import { VideoTestimonialCard } from './VideoTestimonialCard';
import { VideoSnippetModal } from './VideoSnippetModal';
import { AnimatedKeyword } from './AnimatedKeyword';
import { CtaButton } from './CtaButton';
import { useInView } from '../hooks/useInView';
import { analytics } from '../utils/analytics';
import { CURRENT_PRICE } from '../constants';

export const VideoTestimonialsSection: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<VideoCategoryFilter>('all');
  const [sortBy, setSortBy] = useState<VideoSortOption>('recent');
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Initial fetch and on category/sort change
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetchVideoTestimonials(selectedCategory, sortBy, true)
      .then((res) => {
        if (isMounted) {
          setTestimonials(res.testimonials);
          setLastUpdated(res.lastUpdated);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, sortBy]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    analytics.track('refresh_video_testimonials', `Catégorie: ${selectedCategory}`, 'video-testimonials');

    fetchVideoTestimonials(selectedCategory, sortBy, true)
      .then((res) => {
        setTestimonials(res.testimonials);
        setLastUpdated(res.lastUpdated);
        setIsRefreshing(false);
      })
      .catch(() => {
        setIsRefreshing(false);
      });
  };

  const handleCategoryChange = (category: VideoCategoryFilter) => {
    setSelectedCategory(category);
    analytics.track('filter_video_testimonials_category', `Filtre: ${category}`, 'video-testimonials');
  };

  const handleOpenModal = (t: VideoTestimonial) => {
    setSelectedVideo(t);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const categoryCounts = {
    all: 6,
    entrepreneur: 2,
    freelance: 2,
    salarie: 1,
    etudiant: 1,
  };

  return (
    <section
      id="video-testimonials-section"
      ref={ref}
      className={`py-16 sm:py-24 px-4 bg-[#090d15] border-b border-slate-800 relative transition-opacity duration-700 ${
        isInView ? 'opacity-100' : 'opacity-90'
      }`}
    >
      {/* Subtle background ambient illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-80 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header Tag */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-black text-amber-400 uppercase tracking-widest shadow-sm">
            <Video className="w-4 h-4 text-amber-400" />
            <span>PREUVES EN DIRECT • TÉMOIGNAGES VIDÉO</span>
          </div>
        </div>

        {/* Section Title with Animated Keyword */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-center text-white tracking-tight leading-tight max-w-4xl mx-auto">
          ILS ONT ENCLENCHÉ LE MOTEUR :{' '}
          <AnimatedKeyword variant="amber" as="span">
            RETOURS VIDÉO AUTHENTIQUES
          </AnimatedKeyword>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto leading-relaxed">
          Courts extraits vidéo en boucle de personnes qui ont remplacé la paralysie par l'élan mécanique. Cliquez sur un extrait pour écouter leur parcours.
        </p>

        {/* Live Social Proof Stats Banner */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-center">
          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-base sm:text-lg font-black text-white">4.92 / 5</span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium">142+ avis vérifiés</div>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-base sm:text-lg font-black text-emerald-400 mb-1">
              94 %
            </div>
            <div className="text-[11px] text-slate-400 font-medium">Premier bloc sous 48h</div>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-base sm:text-lg font-black text-amber-400 mb-1">
              +1 420
            </div>
            <div className="text-[11px] text-slate-400 font-medium">Lecteurs actifs</div>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-base sm:text-lg font-black text-white">30 Jours</span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium">Garantie remboursement</div>
          </div>
        </div>

        {/* Filter Controls & Live Refresh Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-5">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Tous ({categoryCounts.all})
            </button>

            <button
              onClick={() => handleCategoryChange('entrepreneur')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'entrepreneur'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Entrepreneurs ({categoryCounts.entrepreneur})
            </button>

            <button
              onClick={() => handleCategoryChange('freelance')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'freelance'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Freelances ({categoryCounts.freelance})
            </button>

            <button
              onClick={() => handleCategoryChange('salarie')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'salarie'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Salariés & Cadres ({categoryCounts.salarie})
            </button>

            <button
              onClick={() => handleCategoryChange('etudiant')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'etudiant'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Étudiants ({categoryCounts.etudiant})
            </button>
          </div>

          {/* Right Controls: Sort & Refresh Action */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="hidden sm:inline">Trier par :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as VideoSortOption)}
                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                aria-label="Trier les témoignages vidéo"
              >
                <option value="recent">Plus récents</option>
                <option value="rating">Note maximale (5★)</option>
                <option value="impact">Fort impact</option>
              </select>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing || isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-amber-400 transition-colors disabled:opacity-50"
              title="Rafraîchir les témoignages en direct"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
              <span className="hidden xs:inline">Actualiser</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="mt-8">
          {isLoading ? (
            /* Skeleton Loading State */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-hidden animate-pulse"
                >
                  <div className="w-full aspect-[9/12] bg-slate-800 rounded-xl mb-4" />
                  <div className="h-4 bg-slate-800 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-slate-800 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
              <Video className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-base font-bold text-white">Aucun extrait vidéo dans cette catégorie</p>
              <p className="text-sm text-slate-400 mt-1">
                Sélectionnez « Tous » pour afficher l'ensemble des retours d'expérience.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-4 px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-lg"
              >
                Voir tous les témoignages
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {testimonials.map((testimonial) => (
                <VideoTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Social Proof Trust Callout */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Prêt à écrire votre propre histoire de réussite ?
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                Le Moteur de l’Action ne demande pas une volonté hors-norme. Il installe le mécanisme précis qui fait tomber la friction dès le premier geste.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col items-center gap-2">
            <CtaButton
              text={`COMMENCER MAINTENANT • ${CURRENT_PRICE}`}
              location="video-testimonials"
              className="w-full sm:w-auto"
            />
            <span className="text-[11px] text-slate-400 text-center">
              Téléchargement instantané • Format PDF & Mobile
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Extended Story */}
      <VideoSnippetModal
        testimonial={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
