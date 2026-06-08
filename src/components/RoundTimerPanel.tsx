import { useCallback, useEffect, useRef, useState } from 'react'
import { useTimer } from '../hooks/useTimer'

interface RoundTimerPanelProps {
  rounds: number
  durationMinutes: number
}

export function RoundTimerPanel({ rounds, durationMinutes }: RoundTimerPanelProps) {
  const [currentRound, setCurrentRound] = useState(1)
  const totalSeconds = durationMinutes * 60
  const timer = useTimer(totalSeconds)
  const advancedRef = useRef(false)

  useEffect(() => {
    advancedRef.current = false
  }, [currentRound])

  useEffect(() => {
    if (!timer.isComplete || advancedRef.current) return
    advancedRef.current = true

    if (currentRound < rounds) {
      setCurrentRound((r) => r + 1)
      timer.reset()
    }
  }, [timer.isComplete, currentRound, rounds, timer])

  const handleReset = useCallback(() => {
    setCurrentRound(1)
    advancedRef.current = false
    timer.reset()
  }, [timer])

  const allComplete = timer.isComplete && currentRound === rounds
  const atRoundStart = timer.secondsLeft === totalSeconds && !timer.isRunning

  return (
    <div className="timer-panel round-timer-panel">
      <p className="round-label">
        Round {currentRound} / {rounds}
      </p>
      <div className="timer-display" aria-live="polite">
        {allComplete ? 'Done' : timer.display}
      </div>
      <div className="timer-bar">
        <div className="timer-bar-fill" style={{ width: `${allComplete ? 100 : timer.progress * 100}%` }} />
      </div>
      <div className="timer-actions">
        {!timer.isRunning && !allComplete && (
          <button type="button" className="btn btn-primary" onClick={timer.start}>
            {currentRound === 1 && atRoundStart ? 'Start' : 'Start round'}
          </button>
        )}
        {timer.isRunning && (
          <button type="button" className="btn btn-secondary" onClick={timer.pause}>
            Pause
          </button>
        )}
        <button type="button" className="btn btn-ghost" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}
