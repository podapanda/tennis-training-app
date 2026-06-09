import type { VideoLink } from '../types/training'
import { useVideoThumbnail } from '../hooks/useVideoThumbnail'

interface VideoPreviewCardProps {
  video: VideoLink
  onClick: () => void
}

export function VideoPreviewCard({ video, onClick }: VideoPreviewCardProps) {
  const { thumbnail, loading } = useVideoThumbnail(video.url)

  return (
    <button type="button" className="video-preview-card" onClick={onClick}>
      {thumbnail ? (
        <img src={thumbnail} alt="" loading="lazy" className="video-preview-image" />
      ) : (
        <div className="video-preview-placeholder" aria-hidden>
          {loading ? '…' : '▶'}
        </div>
      )}
      <span className="video-preview-play" aria-hidden>▶</span>
      <span className="video-preview-label">{video.label}</span>
    </button>
  )
}
