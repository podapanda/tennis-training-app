export type DrillType = 'time' | 'rounds' | 'reps' | 'sets' | 'points' | 'info'

export interface VideoLink {
  label: string
  url: string
  startSeconds?: number
}

export interface Drill {
  id: string
  name: string
  type: DrillType
  durationMinutes?: number
  reps?: number
  sets?: number
  repsPerSet?: number
  target?: string
  instructions: string[]
  focus?: string[]
  videos?: VideoLink[]
}

export interface SessionBlock {
  id: string
  name: string
  durationMinutes: number
  goal?: string
  drills: Drill[]
}

export interface TrainingSession {
  id: string
  dayKey: string
  title: string
  subtitle: string
  durationMinutes: number
  blocks: SessionBlock[]
  tags: string[]
}

export interface FootworkStep {
  name: string
  durationMinutes: number
}

export interface PerformanceTarget {
  id: string
  label: string
  goal: string
  unit: string
  defaultValue?: number
}

export interface WeekDay {
  key: string
  label: string
  shortLabel: string
  sessionId: string | null
  isRestDay?: boolean
  footworkOnly?: boolean
}

export interface DrillProgress {
  completed: boolean
  repsDone?: number
  setsDone?: number
  notes?: string
}

export interface SessionProgress {
  startedAt?: string
  completedAt?: string
  blocks: Record<string, Record<string, DrillProgress>>
}

export interface WeeklyProgress {
  weekKey: string
  sessions: Record<string, SessionProgress>
  targets: Record<string, number>
}
