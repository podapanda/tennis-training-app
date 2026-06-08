import { useState } from 'react'
import { footworkRoutine } from '../data/trainingPlan'
import { TimerPanel } from '../components/TimerPanel'

export function FootworkPage() {
  const [activeStep, setActiveStep] = useState(0)
  const step = footworkRoutine[activeStep]
  const totalMinutes = footworkRoutine.reduce((s, f) => s + f.durationMinutes, 0)

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Daily routine</p>
        <h1>10-Minute Footwork</h1>
        <p className="subtitle">Do this on rest days or before any session</p>
      </header>

      <section className="card card-highlight">
        <p className="progress-label">{activeStep + 1} of {footworkRoutine.length}</p>
        <h2>{step.name}</h2>
        <TimerPanel
          key={step.name}
          durationMinutes={step.durationMinutes}
          onComplete={() => {
            if (activeStep < footworkRoutine.length - 1) {
              setActiveStep((s) => s + 1)
            }
          }}
        />
      </section>

      <section className="card">
        <h3>Full routine ({totalMinutes} min)</h3>
        <ul className="mini-list">
          {footworkRoutine.map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                className={`step-btn ${i === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <span>{i + 1}. {s.name}</span>
                <span className="muted">{s.durationMinutes} min</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="card tip-card">
        <h3>Why it matters</h3>
        <p>
          This routine builds the movement patterns behind consistency, approach shots,
          court coverage, and aggressive doubles positioning — all at once.
        </p>
      </section>
    </div>
  )
}
