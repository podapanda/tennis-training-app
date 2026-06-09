import { useEffect, useState } from 'react'

const thumbnailCache = new Map<string, string>()

async function fetchThumbnail(url: string): Promise<string | null> {
  if (thumbnailCache.has(url)) return thumbnailCache.get(url)!

  try {
    const response = await fetch(
      `https://noembed.com/embed?format=json&url=${encodeURIComponent(url)}`,
    )
    if (!response.ok) return null
    const data = (await response.json()) as { thumbnail_url?: string }
    if (data.thumbnail_url) {
      thumbnailCache.set(url, data.thumbnail_url)
      return data.thumbnail_url
    }
  } catch {
    return null
  }

  return null
}

export function useVideoThumbnail(url: string) {
  const [thumbnail, setThumbnail] = useState<string | null>(() => thumbnailCache.get(url) ?? null)
  const [loading, setLoading] = useState(!thumbnailCache.has(url))

  useEffect(() => {
    if (thumbnailCache.has(url)) {
      setThumbnail(thumbnailCache.get(url)!)
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)

    fetchThumbnail(url).then((thumb) => {
      if (cancelled) return
      setThumbnail(thumb)
      setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [url])

  return { thumbnail, loading }
}
