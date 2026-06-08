export function getEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes('instagram.com')) {
      const match = parsed.pathname.match(/\/(p|reel)\/([^/]+)/)
      if (match) return `https://www.instagram.com/${match[1]}/${match[2]}/embed`
    }

    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.slice(1)
      if (id) return `https://www.youtube.com/embed/${id}`
    }

    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}`
    }
  } catch {
    return null
  }

  return null
}

export function isEmbeddable(url: string): boolean {
  return getEmbedUrl(url) !== null
}
