import type { PlanId, TrainingPlan, TrainingSession, WeekDay } from '../types/training'
import { alternatePlan } from './alternateTrainingPlan'
import {
  performanceTargets,
  trainingSessions,
  weekSchedule,
} from './trainingPlan'

export const primaryPlan: TrainingPlan = {
  id: 'primary',
  name: 'Training Plan A',
  description: 'Structured weekly plan for consistency, offense, and doubles',
  weekSchedule,
  sessions: trainingSessions,
}

export const trainingPlans: Record<PlanId, TrainingPlan> = {
  primary: primaryPlan,
  alternate: alternatePlan,
}

export const planList: TrainingPlan[] = [primaryPlan, alternatePlan]

const PLAN_STORAGE_KEY = 'tennis-active-plan'

export function getStoredPlanId(): PlanId {
  const stored = localStorage.getItem(PLAN_STORAGE_KEY)
  return stored === 'alternate' ? 'alternate' : 'primary'
}

export function setStoredPlanId(planId: PlanId) {
  localStorage.setItem(PLAN_STORAGE_KEY, planId)
}

export function getPlan(planId: PlanId = getStoredPlanId()): TrainingPlan {
  return trainingPlans[planId]
}

export function getSessionById(id: string, planId?: PlanId): TrainingSession | undefined {
  const plan = getPlan(planId)
  return plan.sessions.find((s) => s.id === id)
    ?? planList.flatMap((p) => p.sessions).find((s) => s.id === id)
}

export function getTodaySchedule(planId?: PlanId): WeekDay {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const todayKey = days[new Date().getDay()]
  const schedule = getPlan(planId).weekSchedule
  return schedule.find((d) => d.key === todayKey) ?? schedule[0]
}

export { performanceTargets }
