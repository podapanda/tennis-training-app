import { useState } from 'react'
import type { Drill, VideoLink } from '../types/training'
import { RepCounter } from './RepCounter'
import { TimerPanel } from './TimerPanel'
import { VideoEmbedModal } from './VideoEmbedModal'
import { isEmbeddable } from '../utils/videoEmbed'

interface DrillDetailProps {
  drill: Drill
  completed: boolean
  repsDone?: number
  setsDone?: number
  onToggleComplete: () => void
  onRepsChange: (reps: number) => void
  onSetsChange: (sets: number) => void
}

export function DrillDetail({
  drill,
  completed,
  repsDone = 0,
  setsDone = 0,
  onToggleComplete,
  onRepsChange,
  onSetsChange,
}: DrillDetailProps) {
  const [activeVideo, setActiveVideo] = useState<VideoLink | null>(null)
  const showTimer = drill.type === 'time' || drill.type === 'points'
  const showReps = drill.type === 'reps' || drill.type === 'sets'

  const openVideo = (video: VideoLink) => {
    if (isEmbeddable(video.url)) {
      setActiveVideo(video)
    } else {
      window.open(video.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <article className={`drill-detail ${completed ? 'completed' : ''}`}>
      <header className="drill-header">
        <div>
          <h2>{drill.name}</h2>
          {drill.target && <p className="drill-target">{drill.target}</p>}
        </div>
        <button
          type="button"
          className={`check-btn ${completed ? 'checked' : ''}`}
          onClick={onToggleComplete}
          aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {completed ? '✓' : ''}
        </button>
      </header>

      <ul className="instruction-list">
        {drill.instructions.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {drill.focus && drill.focus.length > 0 && (
        <div className="focus-box">
          <h3>Focus</h3>
          <ul>
            {drill.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {drill.videos && drill.videos.length > 0 && (
        <div className="video-links">
          <h3>Video tip</h3>
          {drill.videos.map((v) => (
            <button key={v.url} type="button" className="video-link" onClick={() => openVideo(v)}>
              ▶ {v.label}
            </button>
          ))}
        </div>
      )}

      {activeVideo && (
        <VideoEmbedModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      {showTimer && drill.durationMinutes && (
        <TimerPanel durationMinutes={drill.durationMinutes} />
      )}

      {showReps && (
        <RepCounter
          target={drill.reps}
          sets={drill.sets}
          repsPerSet={drill.repsPerSet}
          value={repsDone}
          setsDone={setsDone}
          onChange={onRepsChange}
          onSetsChange={onSetsChange}
        />
      )}
    </article>
  )
}
