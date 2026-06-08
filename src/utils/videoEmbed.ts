export function getEmbedUrl(url: string, startSeconds?: number): string | null {
  try {
    const parsed = new URL(url)
    let embedUrl: string | null = null

    if (parsed.hostname.includes('instagram.com')) {
      const match = parsed.pathname.match(/\/(p|reel)\/([^/]+)/)
      if (match) embedUrl = `https://www.instagram.com/${match[1]}/${match[2]}/embed`
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
