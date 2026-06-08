import { Link } from 'react-router-dom'
import { footworkRoutine, getSessionById, getTodaySchedule } from '../data/trainingPlan'
import { useProgress } from '../hooks/useProgress'
import { ProgressRing } from '../components/ProgressRing'

function countDrills(sessionId: string): number {
  const session = getSessionById(sessionId)
  if (!session) return 0
  return session.blocks.reduce((sum, b) => sum + b.drills.length, 0)
}

export function TodayPage() {
  const today = getTodaySchedule()
  const { getSessionCompletion } = useProgress()

  if (today.footworkOnly) {
    return (
      <div className="page">
        <header className="page-header">
          <p className="eyebrow">{today.label}</p>
          <h1>Rest & Footwork</h1>
          <p className="subtitle">10-minute daily routine to stay sharp</p>
        </header>

        <section className="card card-highlight">
          <h2>Today&apos;s focus</h2>
          <p>No on-court session scheduled. Complete the footwork routine to keep your movement patterns sharp.</p>
          <Link to="/footwork" className="btn btn-primary btn-block">
            Start footwork routine
          </Link>
        </section>

        <section className="card">
          <h3>Quick preview</h3>
          <ul className="mini-list">
            {footworkRoutine.map((step) => (
              <li key={step.name}>
                <span>{step.name}</span>
                <span className="muted">{step.durationMinutes} min</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }

  const session = today.sessionId ? getSessionById(today.sessionId) : null
  if (!session) return null

  const totalDrills = countDrills(session.id)
  const completion = getSessionCompletion(session.id, totalDrills)

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">{today.label}</p>
        <h1>{session.title}</h1>
        <p className="subtitle">{session.subtitle}</p>
        <div className="session-meta">
          <span>{session.durationMinutes} min</span>
          <span>·</span>
          <span>{session.blocks.length} blocks</span>
        </div>
      </header>

      <section className="card card-highlight today-card">
        <div className="today-progress">
          <ProgressRing value={completion} size={72} stroke={5} />
          <div>
            <p className="progress-label">{completion}% complete</p>
            <p className="muted">{totalDrills} drills total</p>
          </div>
        </div>
        <Link to={`/session/${session.id}`} className="btn btn-primary btn-block">
          {completion > 0 ? 'Continue session' : 'Start session'}
        </Link>
      </section>

      <section className="tag-row">
        {session.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </section>

      <section className="block-preview-list">
        <h2>Session outline</h2>
        {session.blocks.map((block, i) => (
          <div key={block.id} className="block-preview">
            <span className="block-num">{i + 1}</span>
            <div>
              <h3>{block.name}</h3>
              <p className="muted">{block.durationMinutes} min · {block.drills.length} drill{block.drills.length !== 1 ? 's' : ''}</p>
              {block.goal && <p className="block-goal">{block.goal}</p>}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
