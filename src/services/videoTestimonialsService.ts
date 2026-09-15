import { VideoTestimonial } from '../types';
import { VIDEO_TESTIMONIALS_DATA } from '../data/videoTestimonialsData';

export type VideoCategoryFilter = 'all' | 'entrepreneur' | 'freelance' | 'salarie' | 'etudiant';
export type VideoSortOption = 'recent' | 'rating' | 'impact';

export interface FetchTestimonialsResponse {
  testimonials: VideoTestimonial[];
  totalCount: number;
  filteredCount: number;
  lastUpdated: string;
  source: 'live-feed' | 'cached';
}

/**
 * Service to fetch short video testimonials of success stories.
 * Provides simulated network latency, category filtering, sorting, and manual refresh.
 */
export async function fetchVideoTestimonials(
  category: VideoCategoryFilter = 'all',
  sortBy: VideoSortOption = 'recent',
  simulateDelay: boolean = true
): Promise<FetchTestimonialsResponse> {
  if (simulateDelay) {
    // Realistic micro-network latency (300ms - 600ms)
    const delay = 350 + Math.random() * 250;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  let items = [...VIDEO_TESTIMONIALS_DATA];

  if (category !== 'all') {
    items = items.filter((item) => item.category === category);
  }

  // Sorting
  if (sortBy === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'impact') {
    items.sort((a, b) => b.durationSeconds - a.durationSeconds);
  }

  return {
    testimonials: items,
    totalCount: VIDEO_TESTIMONIALS_DATA.length,
    filteredCount: items.length,
    lastUpdated: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    source: 'live-feed',
  };
}
