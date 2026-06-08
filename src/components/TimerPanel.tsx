import { useEffect, useRef } from 'react'
import { useTimer } from '../hooks/useTimer'

interface TimerPanelProps {
  durationMinutes: number
  onComplete?: () => void
}

export function TimerPanel({ durationMinutes, onComplete }: TimerPanelProps) {
  const totalSeconds = durationMinutes * 60
  const timer = useTimer(totalSeconds)
  const firedRef = useRef(false)

  useEffect(() => {
    firedRef.current = false
  }, [durationMinutes])

  useEffect(() => {
    if (timer.isComplete && onComplete && !firedRef.current) {
      firedRef.current = true
      onComplete()
    }
  }, [timer.isComplete, onComplete])

  return (
    <div className="timer-panel">
      <div className="timer-display" aria-live="polite">
        {timer.display}
      </div>
      <div className="timer-bar">
        <div className="timer-bar-fill" style={{ width: `${timer.progress * 100}%` }} />
      </div>
      <div className="timer-actions">
        {!timer.isRunning && !timer.isComplete && (
          <button type="button" className="btn btn-primary" onClick={timer.start}>
            Start
          </button>
        )}
        {timer.isRunning && (
          <button type="button" className="btn btn-secondary" onClick={timer.pause}>
            Pause
          </button>
        )}
        <button type="button" className="btn btn-ghost" onClick={timer.reset}>
          Reset
        </button>
      </div>
    </div>
  )
}
