interface RepCounterProps {
  target?: number
  sets?: number
  repsPerSet?: number
  value: number
  setsDone?: number
  onChange: (value: number) => void
  onSetsChange?: (sets: number) => void
}

export function RepCounter({
  target,
  sets,
  repsPerSet,
  value,
  setsDone = 0,
  onChange,
  onSetsChange,
}: RepCounterProps) {
  const max = target ?? repsPerSet ?? 999

  return (
    <div className="rep-counter">
      {sets && repsPerSet ? (
        <>
          <div className="rep-display">
            <span className="rep-current">{setsDone}</span>
            <span className="rep-sep">/</span>
            <span className="rep-target">{sets}</span>
            <span className="rep-label">sets</span>
          </div>
          <p className="rep-sub">{value} / {repsPerSet} reps this set</p>
          <div className="rep-actions">
            <button type="button" className="btn btn-round" onClick={() => onChange(Math.max(0, value - 1))}>−</button>
            <button type="button" className="btn btn-round btn-primary" onClick={() => {
              if (value + 1 >= repsPerSet && onSetsChange) {
                onChange(0)
                onSetsChange(setsDone + 1)
              } else {
                onChange(value + 1)
              }
            }}>+</button>
          </div>
        </>
      ) : (
        <>
          <div className="rep-display">
            <span className="rep-current">{value}</span>
            {target && (
              <>
                <span className="rep-sep">/</span>
                <span className="rep-target">{target}</span>
              </>
            )}
            <span className="rep-label">reps</span>
          </div>
          <div className="rep-actions">
            <button type="button" className="btn btn-round" onClick={() => onChange(Math.max(0, value - 1))}>−</button>
            <button type="button" className="btn btn-round btn-primary" onClick={() => onChange(Math.min(max, value + 1))}>+</button>
          </div>
        </>
      )}
    </div>
  )
}
