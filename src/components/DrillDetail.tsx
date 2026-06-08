import type { Drill } from '../types/training'
import { RepCounter } from './RepCounter'
import { TimerPanel } from './TimerPanel'

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
  const showTimer = drill.type === 'time' || drill.type === 'points'
  const showReps = drill.type === 'reps' || drill.type === 'sets'

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
          {drill.videos.map((v) => (
            <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer" className="video-link">
              ▶ {v.label}
            </a>
          ))}
        </div>
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
