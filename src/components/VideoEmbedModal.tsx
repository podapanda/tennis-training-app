import { useEffect } from 'react'
import type { VideoLink } from '../types/training'
import { getEmbedUrl } from '../utils/videoEmbed'

interface VideoEmbedModalProps {
  video: VideoLink
  onClose: () => void
}

export function VideoEmbedModal({ video, onClose }: VideoEmbedModalProps) {
  const embedUrl = getEmbedUrl(video.url)
  const isInstagram = video.url.includes('instagram.com')

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!embedUrl) return null

  return (
    <div className="video-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="video-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={video.label}
      >
        <header className="video-modal-header">
          <h2>{video.label}</h2>
          <button type="button" className="video-modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>
        <div className={`video-modal-frame ${isInstagram ? 'instagram' : 'youtube'}`}>
          <iframe
            src={embedUrl}
            title={video.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-modal-external">
          Open in {isInstagram ? 'Instagram' : 'YouTube'} →
        </a>
      </div>
    </div>
  )
}
