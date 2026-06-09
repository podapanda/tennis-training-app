import type { VideoLink } from '../types/training'

export interface FootworkPatternCategory {
  id: string
  title: string
  shortTitle: string
  videos: VideoLink[]
}

function clips(urls: string[], prefix: string): VideoLink[] {
  return urls.map((url, index) => ({
    label: `${prefix} ${index + 1}`,
    url,
  }))
}

export const footworkPatternCategories: FootworkPatternCategory[] = [
  {
    id: 'serve-return',
    title: 'Serve Return Footwork',
    shortTitle: 'Serve Return',
    videos: clips([
      'https://www.instagram.com/p/DVo_aGpEkMH/',
      'https://www.instagram.com/p/DT1mOE-k5PG/',
      'https://www.instagram.com/p/DQ2EH3dCjQF/',
      'https://www.instagram.com/p/DI12f5aTWL3/',
      'https://www.instagram.com/brian.dabul/reel/DZSi4NPS_iO/',
      'https://www.instagram.com/p/DZLT722scAh/',
    ], 'Clip'),
  },
  {
    id: 'groundstroke',
    title: 'Groundstroke Footwork',
    shortTitle: 'Groundstroke',
    videos: clips([
      'https://www.instagram.com/p/DY2jZe5Mh4x/',
      'https://www.instagram.com/p/DQjy3IKie6D/',
      'https://www.instagram.com/p/DQmM1szjTWJ/',
      'https://www.instagram.com/p/DJHI1JjRATC/',
    ], 'Clip'),
  },
  {
    id: 'approach-shot',
    title: 'Approach Shot Footwork',
    shortTitle: 'Approach',
    videos: clips([
      'https://www.instagram.com/p/DT4gRDxiLqp/',
      'https://www.instagram.com/p/DUxuUIEFBLB/',
    ], 'Clip'),
  },
  {
    id: 'high-ball',
    title: 'High Ball Footwork',
    shortTitle: 'High Ball',
    videos: clips([
      'https://www.instagram.com/p/DHEX-gHpHBG/',
    ], 'Clip'),
  },
  {
    id: 'doubles-poach',
    title: 'Doubles Poach Footwork',
    shortTitle: 'Poach',
    videos: clips([
      'https://www.instagram.com/p/DW6RBU4h5Vf/',
      'https://www.instagram.com/p/DUYMMqtDMqw/',
    ], 'Clip'),
  },
  {
    id: 'volley',
    title: 'Volley Footwork',
    shortTitle: 'Volley',
    videos: clips([
      'https://www.instagram.com/p/DKej-NZo-bh/',
      'https://www.instagram.com/p/DRWj7_uj9jq/',
      'https://www.instagram.com/p/DUqACN2DPop/',
      'https://www.instagram.com/p/DVxIO6zDtWD/',
    ], 'Clip'),
  },
  {
    id: 'doubles-formations',
    title: 'Doubles Formations',
    shortTitle: 'Formations',
    videos: [
      { label: 'Australian', url: 'https://www.instagram.com/p/DPR6IJgD3Ug/' },
      { label: 'I Formation', url: 'https://www.instagram.com/p/DYqFodqvPmy/' },
      { label: 'Standard', url: 'https://www.instagram.com/p/DMUBreOggfq/' },
    ],
  },
  {
    id: 'doubles-movement',
    title: 'Doubles Movement',
    shortTitle: 'Movement',
    videos: clips([
      'https://www.instagram.com/p/DQug2WngqBm/',
    ], 'Clip'),
  },
]

export const footworkPatternCount = footworkPatternCategories.reduce(
  (sum, category) => sum + category.videos.length,
  0,
)
