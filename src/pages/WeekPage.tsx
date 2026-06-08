import { Link } from 'react-router-dom'
import { getSessionById, weekSchedule } from '../data/trainingPlan'
import { useProgress } from '../hooks/useProgress'
import { ProgressRing } from '../components/ProgressRing'

function countDrills(sessionId: string): number {
  const session = getSessionById(sessionId)
  if (!session) return 0
  return session.blocks.reduce((sum, b) => sum + b.drills.length, 0)
}

export function WeekPage() {
  const { getSessionCompletion } = useProgress()
  const todayKey = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date().getDay()]

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Weekly plan</p>
        <h1>Your training week</h1>
        <p className="subtitle">3–4 on-court sessions plus daily footwork</p>
      </header>

      <div className="week-list">
        {weekSchedule.map((day) => {
          const isToday = day.key === todayKey
          const session = day.sessionId ? getSessionById(day.sessionId) : null
          const completion = session ? getSessionCompletion(session.id, countDrills(session.id)) : 0

          return (
            <div key={day.key} className={`week-card ${isToday ? 'today' : ''}`}>
              <div className="week-card-top">
                <div>
                  <span className="day-label">{day.shortLabel}</span>
                  {isToday && <span className="today-badge">Today</span>}
                </div>
                {session && <ProgressRing value={completion} size={40} stroke={3} />}
              </div>

              {day.footworkOnly ? (
                <>
                  <h3>Rest & footwork</h3>
                  <p className="muted">10-min routine</p>
                  <Link to="/footwork" className="week-link">Open routine →</Link>
                </>
              ) : session ? (
                <>
                  <h3>{session.title}</h3>
                  <p className="muted">{session.durationMinutes} min</p>
                  <div className="tag-row compact">
                    {session.tags.slice(0, 2).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <Link to={`/session/${session.id}`} className="week-link">
                    {completion > 0 ? `Continue (${completion}%)` : 'View session'} →
                  </Link>
                </>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
