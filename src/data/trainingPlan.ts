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
  { key: 'thursday', label: 'Thursday', shortLabel: 'Thu', sessionId: 'serve-return' },
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
  { id: 'first-serve-pct', label: 'First-serve percentage', goal: '65–75%', unit: '%', defaultValue: 0 },
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
    id: 'serve-return',
    dayKey: 'thursday',
    title: 'Serve & Return Development',
    subtitle: 'First serve accuracy, reliable second serve, aggressive returns',
    durationMinutes: 90,
    tags: ['Serve', 'Return', 'Singles', 'Doubles'],
    blocks: [
      {
        id: 'warmup-d6',
        name: 'Warm-up',
        durationMinutes: 15,
        drills: [
          {
            id: 'dynamic-warmup-d6',
            name: 'Dynamic warm-up',
            type: 'time',
            durationMinutes: 5,
            instructions: [
              'Shoulder mobility.',
              'Leg swings.',
              'Lunges with rotation.',
              'Band work if available.',
            ],
          },
          {
            id: 'mini-tennis-d6',
            name: 'Mini tennis',
            type: 'time',
            durationMinutes: 5,
            instructions: [
              'Cooperative rallying.',
              'Focus on clean contact.',
            ],
          },
          {
            id: 'return-footwork-warmup',
            name: 'Return footwork',
            type: 'time',
            durationMinutes: 5,
            instructions: [
              'Split-step timing.',
              'First-step reaction.',
              'Shadow returns.',
            ],
            focus: ['Split as the server contacts the ball', 'Quick first move to the ball'],
            videos: [{ label: 'Serve Return Footwork', url: 'https://www.instagram.com/p/DT1mOE-k5PG/' }],
          },
        ],
      },
      {
        id: 'first-serve-accuracy',
        name: 'First Serve Accuracy',
        durationMinutes: 15,
        goal: '65–75% first serves in.',
        drills: [
          {
            id: 'target-serving',
            name: 'Target serving',
            type: 'reps',
            reps: 30,
            target: '30 serves total',
            instructions: [
              'Deuce court: 5 wide, 5 body, 5 T.',
              'Ad court: 5 wide, 5 body, 5 T.',
              'Track first-serve percentage and target percentage.',
            ],
            focus: ['First-serve percentage', 'Target percentage'],
          },
        ],
      },
      {
        id: 'second-serve',
        name: 'Second Serve Reliability',
        durationMinutes: 10,
        drills: [
          {
            id: 'consecutive-second-serves',
            name: '10 consecutive second serves',
            type: 'reps',
            reps: 30,
            target: 'Make 10 in a row',
            instructions: [
              'Serve 20–30 second serves.',
              'Challenge: make 10 consecutive serves.',
            ],
            focus: ['Spin', 'Height', 'Margin'],
          },
        ],
      },
      {
        id: 'return-fundamentals',
        name: 'Return Fundamentals',
        durationMinutes: 20,
        drills: [
          {
            id: 'neutral-returns',
            name: 'Round 1: Neutral returns',
            type: 'reps',
            reps: 40,
            target: '20 FH + 20 BH',
            instructions: [
              'Partner serves from both courts.',
              '20 forehand returns, 20 backhand returns.',
              'Target deep crosscourt.',
            ],
            focus: ['Compact backswing', 'Early preparation', 'Stable head'],
            videos: [{ label: 'Serve Return Footwork', url: 'https://www.instagram.com/p/DT1mOE-k5PG/' }],
          },
          {
            id: 'directional-returns',
            name: 'Round 2: Directional control',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Practice crosscourt returns.',
              'Practice down-the-line returns.',
            ],
            focus: ['Place, don’t crush'],
          },
        ],
      },
      {
        id: 'aggressive-returns',
        name: 'Aggressive Return Training',
        durationMinutes: 15,
        drills: [
          {
            id: 'attack-second-serve',
            name: 'Attack second-serve returns',
            type: 'time',
            durationMinutes: 15,
            instructions: [
              'Partner serves second serve.',
              'Step inside baseline.',
              'Drive return aggressively.',
              'Play point out.',
            ],
            focus: ['Taking time away', 'Hitting through the middle', 'Creating offensive opportunities'],
          },
        ],
      },
      {
        id: 'serve-return-plus-one',
        name: 'Serve + 1 and Return + 1',
        durationMinutes: 20,
        goal: 'Connect practice to actual match patterns.',
        drills: [
          {
            id: 'serve-plus-one',
            name: 'Serve + 1',
            type: 'points',
            reps: 10,
            target: '10 points',
            instructions: [
              'Serve to target.',
              'Recover.',
              'Attack next ball.',
            ],
          },
          {
            id: 'return-plus-one',
            name: 'Return + 1',
            type: 'points',
            reps: 10,
            target: '10 points',
            instructions: [
              'Return deep.',
              'Recover.',
              'Attack first short ball.',
            ],
          },
        ],
      },
      {
        id: 'doubles-return-work',
        name: 'Doubles Return Work',
        durationMinutes: 10,
        drills: [
          {
            id: 'xc-return-drill',
            name: 'Crosscourt return drill',
            type: 'time',
            durationMinutes: 5,
            instructions: [
              'Returner must return crosscourt.',
              'Point starts live.',
            ],
            focus: ['Low net clearance', 'Deep target', 'Avoiding the net player'],
          },
          {
            id: 'lob-return-drill',
            name: 'Lob return drill',
            type: 'time',
            durationMinutes: 5,
            instructions: [
              'Against aggressive poachers, practice topspin or defensive lob returns.',
            ],
            focus: ['Force the net player to hesitate'],
          },
        ],
      },
      {
        id: 'pressure-game',
        name: 'Pressure Game',
        durationMinutes: 10,
        drills: [
          {
            id: 'pressure-service-games',
            name: 'Pressure service games',
            type: 'points',
            durationMinutes: 10,
            instructions: [
              'Play service games starting at 30–40, break point down, deuce, and ad out.',
              'Alternate serving and returning. Keep score.',
            ],
            focus: ['Serving under pressure', 'Returning under pressure', 'Decision-making in important moments'],
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
