import { Link } from 'react-router-dom'
import { getSessionById } from '../data/plans'
import { useProgress } from '../hooks/useProgress'
import { useTrainingPlan } from '../hooks/useTrainingPlan'
import { PlanSwitcher } from '../components/PlanSwitcher'
import { ProgressRing } from '../components/ProgressRing'

function countDrills(sessionId: string, planId: ReturnType<typeof useTrainingPlan>['planId']) {
  const session = getSessionById(sessionId, planId)
  if (!session) return 0
  return session.blocks.reduce((sum, b) => sum + b.drills.length, 0)
}

export function WeekPage() {
  const { planId, plan, weekSchedule, switchPlan } = useTrainingPlan()
  const { getSessionCompletion } = useProgress(planId)
  const todayKey = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date().getDay()]

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Weekly plan</p>
        <h1>{plan.name}</h1>
        <p className="subtitle">{plan.description}</p>
      </header>

      <PlanSwitcher planId={planId} onChange={switchPlan} />

      <div className="week-list">
        {weekSchedule.map((day) => {
          const isToday = day.key === todayKey
          const session = day.sessionId ? getSessionById(day.sessionId, planId) : null
          const completion = session ? getSessionCompletion(session.id, countDrills(session.id, planId)) : 0

          return (
            <div key={day.key} className={`week-card ${isToday ? 'today' : ''}`}>
              <div className="week-card-top">
                <div>
                  <span className="day-label">{day.label}</span>
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
                    {session.tags.map((t) => (
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
