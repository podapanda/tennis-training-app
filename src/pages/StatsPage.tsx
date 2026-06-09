import { performanceTargets } from '../data/plans'
import { useProgress } from '../hooks/useProgress'
import { useTrainingPlan } from '../hooks/useTrainingPlan'

export function StatsPage() {
  const { planId } = useTrainingPlan()
  const { progress, updateTarget, weekKey } = useProgress(planId)

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">{weekKey}</p>
        <h1>Performance targets</h1>
        <p className="subtitle">Track weekly goals and measure improvement</p>
      </header>

      <div className="stats-list">
        {performanceTargets.map((target) => (
          <div key={target.id} className="stat-card">
            <div className="stat-info">
              <h3>{target.label}</h3>
              <p className="stat-goal">Goal: {target.goal}</p>
            </div>
            <div className="stat-input-group">
              <button
                type="button"
                className="btn btn-round"
                onClick={() => updateTarget(target.id, Math.max(0, (progress.targets[target.id] ?? 0) - 1))}
              >
                −
              </button>
              <span className="stat-value">
                {progress.targets[target.id] ?? 0}
                <span className="stat-unit">{target.unit}</span>
              </span>
              <button
                type="button"
                className="btn btn-round btn-primary"
                onClick={() => updateTarget(target.id, (progress.targets[target.id] ?? 0) + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="card tip-card">
        <h3>Weekly focus</h3>
        <ul className="instruction-list">
          <li>Rally consistency: 20+ balls comfortably</li>
          <li>Forehand approach success: 70%+</li>
          <li>First volley success: 80%+</li>
          <li>Return percentage: 75%+</li>
          <li>Successful poaches: 3–5 per doubles set</li>
          <li>Unforced errors: reduce each week</li>
        </ul>
      </section>
    </div>
  )
}
