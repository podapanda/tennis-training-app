import { useCallback, useEffect, useState } from 'react'
import type { PlanId } from '../types/training'
import { getPlan, getStoredPlanId, setStoredPlanId } from '../data/plans'

export function useTrainingPlan() {
  const [planId, setPlanId] = useState<PlanId>(getStoredPlanId)

  useEffect(() => {
    setStoredPlanId(planId)
  }, [planId])

  const plan = getPlan(planId)

  const switchPlan = useCallback((id: PlanId) => {
    setPlanId(id)
  }, [])

  return {
    planId,
    plan,
    switchPlan,
    weekSchedule: plan.weekSchedule,
  }
}
