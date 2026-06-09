export function getEmbedUrl(url: string, startSeconds?: number): string | null {
  try {
    const parsed = new URL(url)
    let embedUrl: string | null = null

    if (parsed.hostname.includes('instagram.com')) {
      const reelMatch = parsed.pathname.match(/\/reel\/([^/]+)/)
      const postMatch = parsed.pathname.match(/\/p\/([^/]+)/)
      if (reelMatch) embedUrl = `https://www.instagram.com/reel/${reelMatch[1]}/embed`
      else if (postMatch) embedUrl = `https://www.instagram.com/p/${postMatch[1]}/embed`
    }

    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.slice(1)
      if (id) embedUrl = `https://www.youtube.com/embed/${id}`
    }

    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v')
      if (id) embedUrl = `https://www.youtube.com/embed/${id}`
    }

    if (!embedUrl) return null

    if (startSeconds != null && embedUrl.includes('youtube.com/embed')) {
      embedUrl += `?start=${startSeconds}`
    }

    return embedUrl
  } catch {
    return null
  }
}

export function isEmbeddable(url: string): boolean {
  return getEmbedUrl(url) !== null
}
