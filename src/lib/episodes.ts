import episodesData from '../../data/episodes.json';

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'info'; label: string; text: string }
  | { type: 'verse'; arabic: string; kurdish: string };

export interface Episode {
  id: number;
  slug: string;
  titleKu: string;
  subtitleKu: string;
  surah: string;
  year: string;
  duration: string;
  audioSrc: string;
  coverGradient: string;
  accentColor: string;
  published: boolean;
  content: ContentBlock[];
}

export function getAllEpisodes(): Episode[] {
  return episodesData as Episode[];
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return (episodesData as Episode[]).find((ep) => ep.slug === slug);
}

export function getPublishedEpisodes(): Episode[] {
  return (episodesData as Episode[]).filter((ep) => ep.published);
}
