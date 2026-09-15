import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, CheckCircle, Star, Maximize2, Sparkles, Clock, Zap } from 'lucide-react';
import { VideoTestimonial } from '../types';
import { analytics } from '../utils/analytics';

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
  onOpenModal: (testimonial: VideoTestimonial) => void;
}

export const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  testimonial,
  onOpenModal,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && !isNaN(video.duration)) {
        const pct = (video.currentTime / video.duration) * 100;
        setProgress(pct);
      }
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
      // Auto-play when ready
      video.play().catch(() => {
        setIsPlaying(false);
      });
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    analytics.track(
      nextMuted ? 'mute_video_testimonial' : 'unmute_video_testimonial',
      `Son ${nextMuted ? 'coupé' : 'activé'} sur ${testimonial.name}`,
      'video-card'
    );
  };

  const handleCardClick = () => {
    onOpenModal(testimonial);
  };

  return (
    <div
      id={`video-card-${testimonial.id}`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-slate-900 border border-slate-800 hover:border-amber-400/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Top Video Stage (9:14 Aspect Ratio Reel style) */}
      <div className="relative w-full aspect-[9/12] sm:aspect-[9/13] bg-slate-950 overflow-hidden">
        {/* Looping HTML5 Video Snippet */}
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          poster={testimonial.thumbnailUrl}
          playsInline
          loop
          autoPlay
          muted={isMuted}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark subtle gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/50 pointer-events-none" />

        {/* Looping Story-style Progress Bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/80 z-20">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-100 ease-linear shadow-[0_0_6px_rgba(251,191,36,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Top Header inside Video: Badge & Duration */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-700/60 text-[11px] font-bold text-amber-300 shadow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{testimonial.categoryLabel}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-slate-800">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{testimonial.durationFormatted}</span>
          </div>
        </div>

        {/* Floating Quick Audio & Play Controls */}
        <div className="absolute top-12 right-3 flex flex-col gap-2 z-20">
          {/* Mute / Unmute Button with animated wave indicator */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
              isMuted
                ? 'bg-slate-950/70 text-slate-300 border-slate-700/60 hover:bg-slate-800'
                : 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-400/30 scale-105'
            }`}
            title={isMuted ? 'Cliquer pour activer le son' : 'Son activé'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <div className="flex items-center gap-0.5">
                <Volume2 className="w-4 h-4" />
                <span className="flex gap-0.5 h-2.5 items-end ml-0.5">
                  <span className="w-0.5 h-1.5 bg-slate-950 animate-pulse" />
                  <span className="w-0.5 h-2.5 bg-slate-950 animate-pulse delay-75" />
                  <span className="w-0.5 h-1 bg-slate-950 animate-pulse delay-150" />
                </span>
              </div>
            )}
          </button>

          {/* Pause / Play Quick Toggle */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Mettre en pause' : 'Lire'}
            className="p-2 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md border border-slate-700/60 transition-all opacity-0 group-hover:opacity-100"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
        </div>

        {/* Center Play Overlay if paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-2xl">
              <Play className="w-6 h-6 fill-slate-950 ml-1" />
            </div>
          </div>
        )}

        {/* Bottom Overlay inside Video: Author & Result preview */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 pointer-events-none">
          {/* Key Metric Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-emerald-700/60 text-emerald-300 font-bold text-xs shadow-md mb-2.5">
            <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>{testimonial.metrics.value}</span>
          </div>

          {/* Subtitle / Quote Snippet */}
          <p className="text-xs sm:text-sm text-white font-semibold line-clamp-2 leading-snug drop-shadow-md italic">
            « {testimonial.quote} »
          </p>

          {/* Author info pill */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <img
                src={testimonial.thumbnailUrl}
                alt={testimonial.name}
                className="w-8 h-8 rounded-full object-cover border border-amber-400 shadow shrink-0"
              />
              <div className="leading-tight">
                <div className="font-bold text-white flex items-center gap-1">
                  <span>{testimonial.name}</span>
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-[11px] text-slate-300 font-normal">
                  {testimonial.role.split('&')[0].trim()}
                </div>
              </div>
            </div>

            {/* Expand Hint */}
            <div className="p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-sm text-slate-300 border border-slate-700/60 group-hover:text-amber-400 group-hover:border-amber-400/50 transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Short Breakdown & Action Button */}
      <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex flex-col justify-between flex-grow">
        <div className="mb-3">
          {/* Stars */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              {testimonial.city} • {testimonial.age} ans
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-slate-200 line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
            {testimonial.headline}
          </h4>
        </div>

        {/* Listen Button */}
        <button
          onClick={handleCardClick}
          className="w-full py-2 px-3 rounded-lg bg-slate-800/90 hover:bg-amber-400 hover:text-slate-950 text-slate-300 font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-700/60 group-hover:border-amber-400/40"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Voir l'extrait complet ({testimonial.durationFormatted})</span>
        </button>
      </div>
    </div>
  );
};
