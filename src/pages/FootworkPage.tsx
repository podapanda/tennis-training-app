import { useState } from 'react'
import type { VideoLink } from '../types/training'
import { footworkPatternCategories } from '../data/footworkPatterns'
import { VideoEmbedModal } from '../components/VideoEmbedModal'
import { VideoPreviewCard } from '../components/VideoPreviewCard'
import { isEmbeddable } from '../utils/videoEmbed'

export function FootworkPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(footworkPatternCategories[0].id)
  const [activeVideo, setActiveVideo] = useState<VideoLink | null>(null)

  const activeCategory = footworkPatternCategories.find((c) => c.id === activeCategoryId)
    ?? footworkPatternCategories[0]

  const openVideo = (video: VideoLink) => {
    if (isEmbeddable(video.url)) {
      setActiveVideo(video)
    } else {
      window.open(video.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Reference library</p>
        <h1>Footwork and Positioning Patterns</h1>
        <p className="subtitle">Video tutorials on common footwork patterns and positioning</p>
      </header>

      <div className="block-tabs scroll-x">
        {footworkPatternCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`block-tab ${category.id === activeCategoryId ? 'active' : ''}`}
            onClick={() => setActiveCategoryId(category.id)}
          >
            {category.shortTitle}
          </button>
        ))}
      </div>

      <section className="card pattern-category">
        <h2>{activeCategory.title}</h2>
        <p className="muted">{activeCategory.videos.length} clip{activeCategory.videos.length !== 1 ? 's' : ''}</p>
        <div className="video-preview-grid">
          {activeCategory.videos.map((video) => (
            <VideoPreviewCard
              key={video.url}
              video={video}
              onClick={() => openVideo(video)}
            />
          ))}
        </div>
      </section>

      {activeVideo && (
        <VideoEmbedModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  )
}
