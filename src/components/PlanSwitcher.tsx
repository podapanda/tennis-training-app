import type { PlanId } from '../types/training'

interface PlanSwitcherProps {
  planId: PlanId
  onChange: (planId: PlanId) => void
}

export function PlanSwitcher({ planId, onChange }: PlanSwitcherProps) {
  return (
    <div className="plan-switcher">
      <button
        type="button"
        className={`plan-tab ${planId === 'primary' ? 'active' : ''}`}
        onClick={() => onChange('primary')}
      >
        Plan A
      </button>
      <button
        type="button"
        className={`plan-tab ${planId === 'alternate' ? 'active' : ''}`}
        onClick={() => onChange('alternate')}
      >
        Plan B
      </button>
    </div>
  )
}
