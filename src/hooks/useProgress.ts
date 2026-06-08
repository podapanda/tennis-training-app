import { useCallback, useEffect, useState } from 'react'
import type { DrillProgress, WeeklyProgress } from '../types/training'
import { getWeekKey, performanceTargets } from '../data/trainingPlan'

const STORAGE_KEY = 'tennis-training-progress'

function createEmptyWeek(weekKey: string): WeeklyProgress {
  return {
    weekKey,
    sessions: {},
    targets: Object.fromEntries(performanceTargets.map((t) => [t.id, t.defaultValue ?? 0])),
  }
}

function loadProgress(): WeeklyProgress {
  const weekKey = getWeekKey()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createEmptyWeek(weekKey)
    const stored = JSON.parse(raw) as WeeklyProgress
    if (stored.weekKey !== weekKey) return createEmptyWeek(weekKey)
    return {
      ...createEmptyWeek(weekKey),
      ...stored,
      targets: { ...createEmptyWeek(weekKey).targets, ...stored.targets },
    }
  } catch {
    return createEmptyWeek(weekKey)
  }
}

function saveProgress(progress: WeeklyProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function useProgress() {
  const [progress, setProgress] = useState<WeeklyProgress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const ensureSession = useCallback((sessionId: string) => {
    setProgress((prev) => {
      if (prev.sessions[sessionId]) return prev
      return {
        ...prev,
        sessions: {
          ...prev.sessions,
          [sessionId]: { blocks: {}, startedAt: new Date().toISOString() },
        },
      }
    })
  }, [])

  const getDrillProgress = useCallback(
    (sessionId: string, blockId: string, drillId: string): DrillProgress => {
      return progress.sessions[sessionId]?.blocks[blockId]?.[drillId] ?? { completed: false }
    },
    [progress],
  )

  const updateDrillProgress = useCallback(
    (sessionId: string, blockId: string, drillId: string, update: Partial<DrillProgress>) => {
      setProgress((prev) => {
        const session = prev.sessions[sessionId] ?? { blocks: {}, startedAt: new Date().toISOString() }
        const block = session.blocks[blockId] ?? {}
        const drill = block[drillId] ?? { completed: false }
        return {
          ...prev,
          sessions: {
            ...prev.sessions,
            [sessionId]: {
              ...session,
              blocks: {
                ...session.blocks,
                [blockId]: {
                  ...block,
                  [drillId]: { ...drill, ...update },
                },
              },
            },
          },
        }
      })
    },
    [],
  )

  const toggleDrillComplete = useCallback(
    (sessionId: string, blockId: string, drillId: string) => {
      const current = getDrillProgress(sessionId, blockId, drillId)
      updateDrillProgress(sessionId, blockId, drillId, { completed: !current.completed })
    },
    [getDrillProgress, updateDrillProgress],
  )

  const updateTarget = useCallback((targetId: string, value: number) => {
    setProgress((prev) => ({
      ...prev,
      targets: { ...prev.targets, [targetId]: value },
    }))
  }, [])

  const getSessionCompletion = useCallback(
    (sessionId: string, totalDrills: number): number => {
      const session = progress.sessions[sessionId]
      if (!session || totalDrills === 0) return 0
      let done = 0
      for (const block of Object.values(session.blocks)) {
        for (const drill of Object.values(block)) {
          if (drill.completed) done++
        }
      }
      return Math.round((done / totalDrills) * 100)
    },
    [progress],
  )

  return {
    progress,
    ensureSession,
    getDrillProgress,
    updateDrillProgress,
    toggleDrillComplete,
    updateTarget,
    getSessionCompletion,
    weekKey: progress.weekKey,
  }
}
