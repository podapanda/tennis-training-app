import type {
  FootworkStep,
  PerformanceTarget,
  TrainingSession,
  WeekDay,
} from '../types/training'

export const weekSchedule: WeekDay[] = [
  { key: 'monday', label: 'Monday', shortLabel: 'Mon', sessionId: 'consistency' },
  { key: 'tuesday', label: 'Tuesday', shortLabel: 'Tue', sessionId: 'approach' },
  { key: 'wednesday', label: 'Wednesday', shortLabel: 'Wed', sessionId: 'offensive' },
  { key: 'thursday', label: 'Thursday', shortLabel: 'Thu', sessionId: null, isRestDay: true, footworkOnly: true },
  { key: 'friday', label: 'Friday', shortLabel: 'Fri', sessionId: 'doubles' },
  { key: 'saturday', label: 'Saturday', shortLabel: 'Sat', sessionId: 'footwork-match' },
  { key: 'sunday', label: 'Sunday', shortLabel: 'Sun', sessionId: 'match-play' },
]

export const footworkRoutine: FootworkStep[] = [
  { name: 'Split-step practice', durationMinutes: 1 },
  { name: 'Side shuffles', durationMinutes: 2 },
  { name: 'Crossover runs', durationMinutes: 2 },
  { name: 'Forward / backward movement', durationMinutes: 2 },
  { name: 'Shadow swings with recovery steps', durationMinutes: 3 },
]

export const performanceTargets: PerformanceTarget[] = [
  { id: 'rally-consistency', label: 'Rally consistency', goal: '20+', unit: 'balls', defaultValue: 0 },
  { id: 'fh-approach', label: 'Forehand approach success', goal: '70%+', unit: '%', defaultValue: 0 },
  { id: 'first-volley', label: 'First volley success', goal: '80%+', unit: '%', defaultValue: 0 },
  { id: 'return-pct', label: 'Return percentage', goal: '75%+', unit: '%', defaultValue: 0 },
  { id: 'poaches', label: 'Successful poaches', goal: '3–5', unit: 'per set', defaultValue: 0 },
  { id: 'unforced-errors', label: 'Unforced errors', goal: 'Reduce weekly', unit: 'count', defaultValue: 0 },
]

export const trainingSessions: TrainingSession[] = [
  {
    id: 'consistency',
    dayKey: 'monday',
    title: 'Consistency & Movement',
    subtitle: 'Build rally tolerance and court coverage',
    durationMinutes: 90,
    tags: ['Consistency', 'Footwork', 'Singles'],
    blocks: [
      {
        id: 'warmup-d1',
        name: 'Warm-up',
        durationMinutes: 15,
        drills: [
          {
            id: 'dynamic-stretch',
            name: 'Dynamic stretching',
            type: 'time',
            durationMinutes: 5,
            instructions: ['Full-body dynamic stretches before hitting.'],
          },
          {
            id: 'mini-tennis-d1',
            name: 'Mini tennis from service line',
            type: 'time',
            durationMinutes: 5,
            instructions: ['Rally from the service line with control and rhythm.'],
          },
          {
            id: 'movement-warmup',
            name: 'Side shuffles, carioca, split-step',
            type: 'time',
            durationMinutes: 5,
            instructions: [
              'Side shuffles across the court.',
              'Carioca footwork pattern.',
              'Split-step before every imaginary contact.',
            ],
          },
        ],
      },
      {
        id: 'crosscourt',
        name: 'Crosscourt Consistency',
        durationMinutes: 30,
        goal: 'Build rally tolerance.',
        drills: [
          {
            id: 'fh-crosscourt',
            name: 'Forehand crosscourt rallies',
            type: 'sets',
            sets: 3,
            repsPerSet: 25,
            instructions: ['3 sets of 25-ball rallies crosscourt.'],
            focus: ['Height over the net', 'Deep targets', 'Recover to ready position after every shot'],
            videos: [{ label: 'Stokke consistency drills', url: 'https://youtu.be/-WJ5UrKXyHE' }],
          },
          {
            id: 'bh-crosscourt',
            name: 'Backhand crosscourt rallies',
            type: 'sets',
            sets: 3,
            repsPerSet: 20,
            instructions: ['3 sets of 20-ball rallies crosscourt.'],
            focus: ['Height over the net', 'Deep targets', 'Recover to ready position after every shot'],
          },
          {
            id: 'alt-patterns',
            name: 'Alternate forehand / backhand patterns',
            type: 'time',
            durationMinutes: 10,
            instructions: ['Alternate FH and BH crosscourt in continuous rally patterns.'],
          },
        ],
      },
      {
        id: 'movement-drill',
        name: 'Movement Drill',
        durationMinutes: 20,
        drills: [
          {
            id: 'xc-dtl-pattern',
            name: 'Crosscourt → down-the-line pattern',
            type: 'reps',
            reps: 15,
            instructions: [
              'Coach/partner feeds randomly.',
              'Hit 1 ball crosscourt, recover.',
              'Hit next ball down the line, recover.',
              'Continue for 10–15 balls.',
            ],
            focus: ['Split-step before opponent contact', 'Small adjustment steps', 'Balanced hitting stance'],
          },
        ],
      },
      {
        id: 'consistency-challenge',
        name: 'Consistency Challenge',
        durationMinutes: 15,
        drills: [
          {
            id: 'six-shot-rule',
            name: 'Six-shot before attack',
            type: 'points',
            durationMinutes: 15,
            instructions: [
              'Play points where you must make 6 shots before trying to attack.',
              'Keep score only on unforced errors.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'approach',
    dayKey: 'tuesday',
    title: 'Approach Shots & Net Play',
    subtitle: 'Transition to the net with confidence',
    durationMinutes: 90,
    tags: ['Approach', 'Volleys', 'Singles'],
    blocks: [
      {
        id: 'warmup-d2',
        name: 'Warm-up',
        durationMinutes: 15,
        drills: [
          {
            id: 'mini-volley-warmup',
            name: 'Mini tennis and volleys',
            type: 'time',
            durationMinutes: 15,
            instructions: ['Mini tennis rally, then light volley exchanges at the net.'],
          },
        ],
      },
      {
        id: 'approach-patterns',
        name: 'Approach Shot Patterns',
        durationMinutes: 30,
        drills: [
          {
            id: 'approach-drill-1',
            name: 'Deep approach crosscourt + volley',
            type: 'reps',
            reps: 20,
            target: '10 reps each side',
            instructions: [
              'Feed short ball.',
              'Hit deep approach crosscourt.',
              'Move to net.',
              'Finish with volley.',
            ],
            focus: ['Hitting approach while moving forward', 'Staying low through contact', 'First volley positioning'],
            videos: [
              { label: 'Approach footwork', url: 'https://youtu.be/eI9QOO2BXsg' },
              { label: 'Approach patterns', url: 'https://youtu.be/eMq0oS36lf8' },
            ],
          },
          {
            id: 'approach-drill-2',
            name: 'Down-the-line approach + cover',
            type: 'reps',
            reps: 20,
            target: '10 reps each side',
            instructions: [
              'Short ball to middle.',
              'Approach down the line.',
              'Cover the appropriate side of the net.',
              'Finish point.',
            ],
            focus: ['Hitting approach while moving forward', 'Staying low through contact', 'First volley positioning'],
          },
        ],
      },
      {
        id: 'transition-game',
        name: 'Transition Game',
        durationMinutes: 20,
        drills: [
          {
            id: 'baseline-to-net',
            name: 'Baseline rally → approach point',
            type: 'time',
            durationMinutes: 20,
            instructions: [
              'Start each point with a baseline rally.',
              'First short ball must be approached.',
              'Point continues live.',
            ],
          },
        ],
      },
      {
        id: 'volley-series',
        name: 'Volley Series',
        durationMinutes: 15,
        drills: [
          { id: 'fh-volleys', name: 'Forehand volleys', type: 'time', durationMinutes: 4, instructions: ['Focus on compact unit turn and firm contact.'] },
          { id: 'bh-volleys', name: 'Backhand volleys', type: 'time', durationMinutes: 4, instructions: ['Stay square and punch through the ball.'] },
          { id: 'reflex-volleys', name: 'Reflex volleys', type: 'time', durationMinutes: 4, instructions: ['Quick reactions at close range.'] },
          { id: 'overheads', name: 'Overheads', type: 'time', durationMinutes: 3, instructions: ['Turn sideways, track the lob, finish with authority.'] },
        ],
      },
    ],
  },
  {
    id: 'doubles',
    dayKey: 'friday',
    title: 'Doubles Skills',
    subtitle: 'Serve patterns, poaching, and team movement',
    durationMinutes: 90,
    tags: ['Doubles', 'Poaching', 'Serve'],
    blocks: [
      {
        id: 'poaching-drill',
        name: 'Poaching Drill',
        durationMinutes: 20,
        drills: [
          {
            id: 'signal-poach',
            name: 'Coach-signal poach intercept',
            type: 'time',
            durationMinutes: 20,
            instructions: [
              'Net player starts at normal position.',
              'Crosses on coach signal.',
              'Intercepts return.',
            ],
            focus: ['Timing', 'Explosive first step', 'Volley placement'],
            videos: [{ label: 'Poaching footwork', url: 'https://youtu.be/MW7x_704Vr8' }],
          },
        ],
      },
      {
        id: 'doubles-patterns',
        name: 'Doubles Patterns',
        durationMinutes: 25,
        drills: [
          {
            id: 'xc-rally-only',
            name: 'Crosscourt rally only',
            type: 'time',
            durationMinutes: 8,
            instructions: ['Keep the ball crosscourt — build patience and shape.'],
          },
          {
            id: 'return-vs-net',
            name: 'Returner vs net player pressure',
            type: 'time',
            durationMinutes: 8,
            instructions: ['Returner tries to beat the net player; net player holds ground.'],
          },
          {
            id: 'formation-drill',
            name: 'Two-up vs one-up-one-back',
            type: 'time',
            durationMinutes: 9,
            instructions: ['Practice both formations and transitions.'],
            focus: ['Keep returns low', 'Attack middle', 'Move as a team'],
          },
        ],
      },
      {
        id: 'serve-first-ball',
        name: 'Serve + First Ball',
        durationMinutes: 20,
        drills: [
          {
            id: 'wide-serve-poach',
            name: 'Wide serve + poach',
            type: 'reps',
            reps: 10,
            instructions: ['Wide serve, net player poaches on return.'],
          },
          {
            id: 'body-serve-poach',
            name: 'Body serve + poach',
            type: 'reps',
            reps: 10,
            instructions: ['Body serve, net player poaches on return.'],
          },
          {
            id: 'serve-and-stay',
            name: 'Serve and stay',
            type: 'reps',
            reps: 10,
            instructions: ['Serve and hold net position without poaching.'],
          },
        ],
      },
      {
        id: 'comp-doubles',
        name: 'Competitive Doubles Points',
        durationMinutes: 20,
        drills: [
          {
            id: 'no-ad-11',
            name: 'No-ad to 11 points',
            type: 'points',
            durationMinutes: 20,
            instructions: [
              'Play no-ad scoring, first to 11 points.',
              'Track: successful poaches, first-volley %, return %.',
            ],
            videos: [{ label: 'Serve return footwork', url: 'https://youtu.be/kw_4S5C57zE' }],
          },
        ],
      },
    ],
  },
  {
    id: 'footwork-match',
    dayKey: 'saturday',
    title: 'Footwork & Match Simulation',
    subtitle: 'Agility circuits and goal-based match play',
    durationMinutes: 75,
    tags: ['Footwork', 'Match play'],
    blocks: [
      {
        id: 'footwork-circuit',
        name: 'Footwork Circuit',
        durationMinutes: 20,
        drills: [
          {
            id: 'circuit-rounds',
            name: '3-round agility circuit',
            type: 'sets',
            sets: 3,
            durationMinutes: 20,
            instructions: [
              'Each round: ladder drill (30 sec), split-step sprint (30 sec), cone shuffle (30 sec), recovery crossover (30 sec).',
              'Rest 1 minute between rounds.',
            ],
          },
        ],
      },
      {
        id: 'live-ball-movement',
        name: 'Live Ball Movement Drill',
        durationMinutes: 20,
        drills: [
          {
            id: 'deep-short-alternate',
            name: 'Deep crosscourt / short angle alternation',
            type: 'time',
            durationMinutes: 20,
            instructions: [
              'Partner alternates: deep crosscourt, short angle, deep crosscourt, short angle.',
              'Focus on efficient recovery.',
            ],
          },
        ],
      },
      {
        id: 'practice-sets',
        name: 'Practice Sets',
        durationMinutes: 30,
        drills: [
          {
            id: 'singles-approach-goal',
            name: 'Singles: approach every short ball',
            type: 'time',
            durationMinutes: 15,
            instructions: ['Play singles sets. Approach on every short ball.'],
          },
          {
            id: 'doubles-poach-goal',
            name: 'Doubles: poach every service game',
            type: 'time',
            durationMinutes: 15,
            instructions: ['Play doubles sets. Poach at least once per service game.'],
          },
        ],
      },
    ],
  },
  {
    id: 'offensive',
    dayKey: 'wednesday',
    title: 'Offensive Tennis & Finishing',
    subtitle: 'Turn neutral balls into winners',
    durationMinutes: 90,
    tags: ['Offense', 'Finishing', 'Singles'],
    blocks: [
      {
        id: 'warmup-d5',
        name: 'Warm-up',
        durationMinutes: 15,
        drills: [
          {
            id: 'mini-tennis-intent',
            name: 'Mini tennis with intent',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Look for shorter balls.',
              'Step inside the court.',
              'Move forward after contact.',
            ],
          },
          {
            id: 'footwork-activation',
            name: 'Footwork activation',
            type: 'time',
            durationMinutes: 5,
            instructions: ['Split-step, crossover recovery, sprint to service line, backpedal recovery.'],
          },
        ],
      },
      {
        id: 'short-ball',
        name: 'Short Ball Recognition',
        durationMinutes: 20,
        drills: [
          {
            id: 'neutral-vs-short',
            name: 'Neutral deep → short attack pattern',
            type: 'reps',
            reps: 40,
            target: '20 successful attacks each side',
            instructions: [
              'Partner feeds alternating deep neutral and short attackable balls.',
              'Rally deep on neutral; move inside and drive aggressively on short ball.',
            ],
            focus: ['Recognize short ball early', 'Move through the shot', 'Finish balanced'],
          },
        ],
      },
      {
        id: 'flattening',
        name: 'Flattening Groundstrokes',
        durationMinutes: 20,
        drills: [
          {
            id: 'fh-flatten',
            name: 'Forehand: topspin → flat drive',
            type: 'sets',
            sets: 5,
            repsPerSet: 20,
            instructions: [
              '10 heavy topspin forehands, then 10 flatter attacking forehands per round.',
              'Repeat 5 rounds.',
            ],
            focus: ['Contact slightly farther in front', 'Less windshield-wiper finish', 'Drive from legs upward'],
          },
          {
            id: 'bh-flatten',
            name: 'Backhand: crosscourt depth + DTL drive',
            type: 'time',
            durationMinutes: 10,
            instructions: ['Deep crosscourt, then flat drive down the line.'],
            focus: ['Stay through the ball longer', 'Keep head still', 'Extend through contact'],
          },
        ],
      },
      {
        id: 'attack-finish',
        name: 'Attack + Finish',
        durationMinutes: 20,
        drills: [
          {
            id: 'short-approach-volley',
            name: 'Short ball → approach → first volley',
            type: 'reps',
            reps: 20,
            target: '70–80% successful finishes',
            instructions: [
              'Receive short ball, flatten approach, move forward, finish with first volley.',
              'Play out the point if volley comes back.',
            ],
            focus: ['Do not admire your shot', 'Immediate transition forward'],
          },
        ],
      },
      {
        id: 'inside-out',
        name: 'Inside-Out Forehand Patterns',
        durationMinutes: 10,
        drills: [
          {
            id: 'io-ii-pattern',
            name: 'Inside-out → inside-in forehand',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Backhand corner feed → run around → inside-out forehand → recover.',
              'Next ball: inside-in forehand.',
            ],
            focus: ['Quick feet', 'Explosive first step', 'Recovery after attack'],
          },
        ],
      },
      {
        id: 'first-strike',
        name: 'First Strike Tennis',
        durationMinutes: 15,
        drills: [
          {
            id: 'first-strike-game',
            name: 'Attack scoring game',
            type: 'points',
            durationMinutes: 15,
            instructions: [
              'Option A: every point starts with a short feed.',
              'Option B: first short ball must be attacked.',
              'Winner after attacking shot = 2 points; regular point = 1 point.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'match-play',
    dayKey: 'sunday',
    title: 'Match Play',
    subtitle: 'Singles or doubles — apply the week\'s work',
    durationMinutes: 90,
    tags: ['Match play'],
    blocks: [
      {
        id: 'match-session',
        name: 'Match Session',
        durationMinutes: 90,
        drills: [
          {
            id: 'match-play-open',
            name: 'Singles or doubles match play',
            type: 'time',
            durationMinutes: 90,
            instructions: [
              'Play singles or doubles matches.',
              'Apply consistency, approach shots, offensive patterns, and doubles skills from the week.',
              'Note what worked and what to focus on next week.',
            ],
          },
        ],
      },
    ],
  },
]

export function getSessionById(id: string): TrainingSession | undefined {
  return trainingSessions.find((s) => s.id === id)
}

export function getTodaySchedule(): WeekDay {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const todayKey = days[new Date().getDay()]
  return weekSchedule.find((d) => d.key === todayKey) ?? weekSchedule[0]
}

export function getWeekKey(date = new Date()): string {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 4 - (d.getDay() || 7))
  const yearStart = new Date(d.getFullYear(), 0, 1)
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
  return `${d.getFullYear()}-W${String(week).padStart(2, '0')}`
}
