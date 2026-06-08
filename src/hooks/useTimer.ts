import { useCallback, useEffect, useRef, useState } from 'react'

export function useTimer(initialSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    setSecondsLeft(initialSeconds)
    setIsRunning(false)
  }, [initialSeconds])

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setIsRunning(false)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback(() => {
    setIsRunning(false)
    setSecondsLeft(initialSeconds)
  }, [initialSeconds])

  const formatTime = (total: number) => {
    const m = Math.floor(total / 60)
    const s = total % 60
    return `${m}:${String(s).padStart(2, '0')}`
  }

  return {
    secondsLeft,
    isRunning,
    isComplete: secondsLeft === 0,
    start,
    pause,
    reset,
    display: formatTime(secondsLeft),
    progress: initialSeconds > 0 ? 1 - secondsLeft / initialSeconds : 0,
  }
}
