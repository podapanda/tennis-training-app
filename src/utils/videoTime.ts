export function toVideoSeconds(minutes: number, seconds: number): number {
  return minutes * 60 + seconds
}

export function youtubeVideo(url: string, label: string, startSeconds: number) {
  return { label, url, startSeconds }
}
