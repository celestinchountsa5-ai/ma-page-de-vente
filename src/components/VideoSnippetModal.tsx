import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, Star, Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { VideoTestimonial } from '../types';
import { CHECKOUT_URL, CURRENT_PRICE } from '../constants';
import { analytics } from '../utils/analytics';

interface VideoSnippetModalProps {
  testimonial: VideoTestimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoSnippetModal: React.FC<VideoSnippetModalProps> = ({
  testimonial,
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(testimonial?.durationSeconds || 15);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  // Sync state when modal opens or testimonial changes
  useEffect(() => {
    if (isOpen && testimonial) {
      setIsPlaying(true);
      setCurrentTime(0);
      analytics.track('view_video_testimonial_modal', testimonial.headline, 'video-modal');

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, testimonial, onClose]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  if (!isOpen || !testimonial) return null;

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCtaClick = () => {
    analytics.track('click_cta_video_modal', `Achat déclenché via ${testimonial.name}`, 'video-modal');
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div
      id="video-snippet-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="video-snippet-modal-container"
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="video-modal-close-button"
          onClick={onClose}
          aria-label="Fermer le témoignage vidéo"
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Column */}
        <div className="md:w-1/2 relative bg-slate-950 flex flex-col justify-between overflow-hidden">
          {/* Looping HTML5 Video */}
          <div className="relative w-full h-64 md:h-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src={testimonial.videoUrl}
              poster={testimonial.thumbnailUrl}
              playsInline
              loop
              autoPlay
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
              className="w-full h-full object-cover"
            />

            {/* Visual Overlays & Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40 pointer-events-none" />

            {/* Center Play/Pause button on click */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none"
              aria-label={isPlaying ? 'Mettre en pause' : 'Lire la vidéo'}
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-slate-950 ml-1" />
                </div>
              )}
            </button>

            {/* Top Bar inside Video */}
            <div className="absolute top-3 left-3 right-12 flex items-center justify-between text-xs text-white drop-shadow">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 font-medium">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Extrait en boucle • {testimonial.durationFormatted}
              </span>
            </div>

            {/* Bottom Scrubber & Controls inside Video */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
              {/* Progress Slider */}
              <input
                type="range"
                min={0}
                max={duration || 1}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 mb-2"
                aria-label="Progression de la vidéo"
              />

              <div className="flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1 hover:text-amber-400 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Lecture'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1 hover:text-amber-400 transition-colors"
                    aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                  <span className="font-mono text-[11px] text-slate-400">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <button
                  onClick={cycleSpeed}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-amber-300 transition-colors"
                  title="Vitesse de lecture"
                >
                  {playbackSpeed}x
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content & Story Details Column */}
        <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
          <div>
            {/* Header info */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={testimonial.thumbnailUrl}
                alt={testimonial.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/80 shadow"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-bold text-white">{testimonial.name}</h3>
                  {testimonial.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                      <CheckCircle className="w-3 h-3" /> Achat vérifié
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  {testimonial.role} • {testimonial.city} ({testimonial.age} ans)
                </p>
              </div>
            </div>

            {/* Rating & Timeframe */}
            <div className="flex items-center justify-between py-2 border-y border-slate-800 mb-4 text-xs">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-slate-300 font-bold ml-1">5.0</span>
              </div>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {testimonial.timeframe}
              </span>
            </div>

            {/* Headline */}
            <h4 className="text-base sm:text-lg font-bold text-amber-300 leading-snug mb-3">
              « {testimonial.headline} »
            </h4>

            {/* Key result badge */}
            <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl mb-4 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">
                {testimonial.metrics.label} :
              </span>
              <span className="text-xs sm:text-sm font-black text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                {testimonial.metrics.value}
              </span>
            </div>

            {/* Complete Story / Transcript */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Transcription intégrale du témoignage :
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                « {testimonial.transcript} »
              </p>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <button
              onClick={handleCtaClick}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Appliquer la même méthode pour {CURRENT_PRICE}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Accès numérique immédiat • Garantie 30 jours satisfait ou remboursé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
