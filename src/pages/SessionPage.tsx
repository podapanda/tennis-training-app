import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSessionById } from '../data/trainingPlan'
import { useProgress } from '../hooks/useProgress'
import { DrillDetail } from '../components/DrillDetail'

export function SessionPage() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const session = sessionId ? getSessionById(sessionId) : undefined
  const { ensureSession, getDrillProgress, toggleDrillComplete, updateDrillProgress } = useProgress()
  const [activeBlockIdx, setActiveBlockIdx] = useState(0)
  const [activeDrillIdx, setActiveDrillIdx] = useState(0)

  useEffect(() => {
    if (sessionId) ensureSession(sessionId)
  }, [sessionId, ensureSession])

  if (!session) {
    return (
      <div className="page">
        <p>Session not found.</p>
        <Link to="/week">Back to week</Link>
      </div>
    )
  }

  const block = session.blocks[activeBlockIdx]
  const drill = block?.drills[activeDrillIdx]
  const drillProgress = drill
    ? getDrillProgress(session.id, block.id, drill.id)
    : { completed: false }

  const allDrills = session.blocks.flatMap((b) => b.drills.map((d) => ({ block: b, drill: d })))
  const currentFlatIdx = session.blocks
    .slice(0, activeBlockIdx)
    .reduce((s, b) => s + b.drills.length, 0) + activeDrillIdx

  const goNext = () => {
    if (currentFlatIdx < allDrills.length - 1) {
      let idx = currentFlatIdx + 1
      for (let bi = 0; bi < session.blocks.length; bi++) {
        for (let di = 0; di < session.blocks[bi].drills.length; di++) {
          if (idx === 0) {
            setActiveBlockIdx(bi)
            setActiveDrillIdx(di)
            return
          }
          idx--
        }
      }
    }
  }

  const goPrev = () => {
    if (currentFlatIdx > 0) {
      let idx = currentFlatIdx - 1
      for (let bi = 0; bi < session.blocks.length; bi++) {
        for (let di = 0; di < session.blocks[bi].drills.length; di++) {
          if (idx === 0) {
            setActiveBlockIdx(bi)
            setActiveDrillIdx(di)
            return
          }
          idx--
        }
      }
    }
  }

  return (
    <div className="page session-page">
      <header className="page-header compact">
        <Link to="/week" className="back-link">← Week</Link>
        <h1>{session.title}</h1>
        <p className="subtitle">{block.name} · {block.durationMinutes} min</p>
      </header>

      <div className="block-tabs scroll-x">
        {session.blocks.map((b, i) => (
          <button
            key={b.id}
            type="button"
            className={`block-tab ${i === activeBlockIdx ? 'active' : ''}`}
            onClick={() => { setActiveBlockIdx(i); setActiveDrillIdx(0) }}
          >
            {b.name}
          </button>
        ))}
      </div>

      {block.drills.length > 1 && (
        <div className="drill-tabs scroll-x">
          {block.drills.map((d, i) => {
            const dp = getDrillProgress(session.id, block.id, d.id)
            return (
              <button
                key={d.id}
                type="button"
                className={`drill-tab ${i === activeDrillIdx ? 'active' : ''} ${dp.completed ? 'done' : ''}`}
                onClick={() => setActiveDrillIdx(i)}
              >
                {d.name}
              </button>
            )
          })}
        </div>
      )}

      {drill && (
        <DrillDetail
          drill={drill}
          completed={drillProgress.completed}
          repsDone={drillProgress.repsDone}
          setsDone={drillProgress.setsDone}
          onToggleComplete={() => toggleDrillComplete(session.id, block.id, drill.id)}
          onRepsChange={(reps) => updateDrillProgress(session.id, block.id, drill.id, { repsDone: reps })}
          onSetsChange={(sets) => updateDrillProgress(session.id, block.id, drill.id, { setsDone: sets })}
        />
      )}

      <div className="session-nav">
        <button type="button" className="btn btn-secondary" onClick={goPrev} disabled={currentFlatIdx === 0}>
          Previous
        </button>
        <span className="session-counter">{currentFlatIdx + 1} / {allDrills.length}</span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={goNext}
          disabled={currentFlatIdx >= allDrills.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}
