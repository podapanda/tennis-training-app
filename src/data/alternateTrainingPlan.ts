import type { TrainingPlan, TrainingSession, WeekDay } from '../types/training'
import { toVideoSeconds, youtubeVideo } from '../utils/videoTime'

const HOUR_SINGLES = 'https://www.youtube.com/watch?v=98Jl_RzEelk'
const SIMPLE_SINGLES = 'https://www.youtube.com/watch?v=n-yJ_FhW8os'
const MATCH_DRILLS = 'https://www.youtube.com/watch?v=hXxVoH04Xlw'
const DOUBLES_DRILLS = 'https://www.youtube.com/watch?v=LWf1Aw96ky4'

export const alternateSessions: TrainingSession[] = [
  {
    id: 'alt-hour-singles',
    dayKey: 'monday',
    title: 'Perfect 1-Hour Singles Practice',
    subtitle: 'Structured 60-minute session from 3 top coaches',
    durationMinutes: 60,
    tags: ['Singles', 'Efficiency', 'Tactics'],
    blocks: [
      {
        id: 'alt-warmup',
        name: 'Warm-up',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-box-warmup',
            name: 'Service box warm-up',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Start in the service boxes — not the baseline.',
              'Hit 30 controlled volleys alternating forehand and backhand.',
              'Play a half-court game to improve hand-eye coordination, footwork, and consistency.',
            ],
            videos: [youtubeVideo(HOUR_SINGLES, '1-Hour Singles — Warm-up', toVideoSeconds(0, 33))],
          },
        ],
      },
      {
        id: 'alt-groundstrokes',
        name: 'Groundstrokes',
        durationMinutes: 12,
        drills: [
          {
            id: 'alt-baseline-groundstrokes',
            name: 'Crosscourt depth rally',
            type: 'time',
            durationMinutes: 12,
            instructions: [
              'Move to the baseline — focus on footwork and consistent contact points.',
              'Hit crosscourt with depth past the service line.',
              'Competitive scoring: first to seven.',
            ],
            videos: [youtubeVideo(HOUR_SINGLES, '1-Hour Singles — Groundstrokes', toVideoSeconds(1, 49))],
          },
        ],
      },
      {
        id: 'alt-tactical',
        name: 'Tactical Drills',
        durationMinutes: 8,
        drills: [
          {
            id: 'alt-change-direction',
            name: 'Earn the down-the-line',
            type: 'time',
            durationMinutes: 8,
            instructions: [
              'Rally crosscourt only.',
              'Break the sideline twice during the rally to earn the right to change direction down the line.',
            ],
            videos: [youtubeVideo(HOUR_SINGLES, '1-Hour Singles — Tactical', toVideoSeconds(3, 6))],
          },
        ],
      },
      {
        id: 'alt-approach-net',
        name: 'Approaching the Net',
        durationMinutes: 12,
        drills: [
          {
            id: 'alt-approach-points',
            name: 'Approach shots + play out',
            type: 'time',
            durationMinutes: 12,
            instructions: [
              'Work approach shots alternating forehand, backhand, and slice approaches.',
              'Play out each point to improve court positioning and net control.',
            ],
            videos: [youtubeVideo(HOUR_SINGLES, '1-Hour Singles — Approaching Net', toVideoSeconds(3, 33))],
          },
        ],
      },
      {
        id: 'alt-serve-return-hour',
        name: 'Serve & Return',
        durationMinutes: 8,
        drills: [
          {
            id: 'alt-second-serve-return',
            name: 'Second-serve return tie-break',
            type: 'points',
            durationMinutes: 8,
            instructions: [
              'Practice second-serve returns.',
              'Play a tie-break where the server only gets one serve attempt.',
            ],
            videos: [youtubeVideo(HOUR_SINGLES, '1-Hour Singles — Serve & Return', toVideoSeconds(4, 25))],
          },
        ],
      },
      {
        id: 'alt-cooldown',
        name: 'Cool Down / Finisher',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-tiebreak-finisher',
            name: '10-point tie-break finisher',
            type: 'points',
            durationMinutes: 10,
            instructions: [
              'Finish with a full 10-point tie-break.',
              'Emphasize competitive match pressure to end practice.',
            ],
            videos: [youtubeVideo(HOUR_SINGLES, '1-Hour Singles — Finisher', toVideoSeconds(4, 50))],
          },
        ],
      },
    ],
  },
  {
    id: 'alt-simple-singles',
    dayKey: 'tuesday',
    title: 'Simple Singles Drills',
    subtitle: 'Five effective drills from former WTA pro Meike Babel',
    durationMinutes: 50,
    tags: ['Singles', 'Consistency', 'Tactics'],
    blocks: [
      {
        id: 'alt-figure-eight',
        name: 'Figure Eight / Butterfly',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-butterfly',
            name: 'Crosscourt vs down-the-line',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'One player hits crosscourt, the other hits down the line.',
              'Learn that crosscourt shots are safer, higher-percentage, and require less recovery.',
            ],
            videos: [youtubeVideo(SIMPLE_SINGLES, 'Simple Singles — Figure Eight', toVideoSeconds(0, 36))],
          },
        ],
      },
      {
        id: 'alt-changer',
        name: 'Changer of Direction',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-direction-change',
            name: 'Inside-the-court down the line',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Identify the right moment to go down the line to pressure your opponent.',
              'Force a short ball from an inside-the-court position — not from behind the baseline.',
            ],
            videos: [youtubeVideo(SIMPLE_SINGLES, 'Simple Singles — Changer of Direction', toVideoSeconds(3, 22))],
          },
        ],
      },
      {
        id: 'alt-on-ropes',
        name: 'On the Ropes',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-defensive-ropes',
            name: 'Defensive hash mark recovery',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Feed from the sideline and move quickly to the hash mark.',
              'Defend against an aggressive crosscourt ball.',
              'Work on transitioning from defense back to offense.',
            ],
            videos: [youtubeVideo(SIMPLE_SINGLES, 'Simple Singles — On the Ropes', toVideoSeconds(5, 22))],
          },
        ],
      },
      {
        id: 'alt-entrance-ball',
        name: 'Entrance Ball Drill',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-approach-volley',
            name: 'Short ball → approach → volley',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Feed a short ball to the middle.',
              'Receiver hits an approach shot (usually to the backhand) to set up a volley.',
            ],
            videos: [youtubeVideo(SIMPLE_SINGLES, 'Simple Singles — Entrance Ball', toVideoSeconds(6, 40))],
          },
        ],
      },
      {
        id: 'alt-serve-plus-one-simple',
        name: 'Serve + 1',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-ready-plus-one',
            name: 'Stay ready for the plus-one ball',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Server and returner both stay ready for the "plus one" ball after the serve or return.',
              'Do not relax after the first shot.',
            ],
            videos: [youtubeVideo(SIMPLE_SINGLES, 'Simple Singles — Serve + 1', toVideoSeconds(8, 9))],
          },
        ],
      },
    ],
  },
  {
    id: 'alt-match-drills-a',
    dayKey: 'wednesday',
    title: 'Match Player Drills I',
    subtitle: 'Precision and handling difficult balls — Ema Burgic',
    durationMinutes: 50,
    tags: ['Singles', 'Match play', 'Consistency'],
    blocks: [
      {
        id: 'alt-doubles-alley',
        name: 'Doubles Alley Drill',
        durationMinutes: 12,
        drills: [
          {
            id: 'alt-alley-precision',
            name: 'Down-the-line alley targets',
            type: 'time',
            durationMinutes: 12,
            instructions: ['Hit consistently into the doubles alley to improve down-the-line accuracy.'],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Doubles Alley', 0)],
          },
        ],
      },
      {
        id: 'alt-junk-ball',
        name: 'Junk Ball Drill',
        durationMinutes: 12,
        drills: [
          {
            id: 'alt-junk-intensity',
            name: 'Low-pace and unpredictable balls',
            type: 'time',
            durationMinutes: 12,
            instructions: [
              'Maintain intensity against low-pace, slicing, or unpredictable balls.',
              'Stay low and bend your knees.',
            ],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Junk Ball', toVideoSeconds(1, 30))],
          },
        ],
      },
      {
        id: 'alt-moonball',
        name: 'Moonball Drill',
        durationMinutes: 12,
        drills: [
          {
            id: 'alt-attack-moonball',
            name: 'Aggressive positioning on high balls',
            type: 'time',
            durationMinutes: 12,
            instructions: [
              'Stay aggressive on high, floating, or topspin-heavy balls.',
              'Position properly to attack rather than retreat.',
            ],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Moonball', toVideoSeconds(3, 42))],
          },
        ],
      },
      {
        id: 'alt-corner-volley',
        name: 'Corner Volley to Center',
        durationMinutes: 14,
        drills: [
          {
            id: 'alt-volley-center',
            name: 'Volley to center baseline returns',
            type: 'time',
            durationMinutes: 14,
            instructions: [
              'Volleyer aims for the center while the baseline player returns.',
              'Build stamina and control against varying difficulty.',
            ],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Corner Volley', toVideoSeconds(5, 15))],
          },
        ],
      },
    ],
  },
  {
    id: 'alt-match-drills-b',
    dayKey: 'thursday',
    title: 'Match Player Drills II',
    subtitle: 'Angles, rhythm changes, and match scenarios',
    durationMinutes: 50,
    tags: ['Singles', 'Match play', 'Pressure'],
    blocks: [
      {
        id: 'alt-low-high',
        name: 'Low & High Drill',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-rhythm-disrupt',
            name: 'Alternate hard/low and heavy/high',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Alternate between hitting hard, low balls and heavy, high balls.',
              'Disrupt your opponent\'s rhythm.',
            ],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Low & High', toVideoSeconds(6, 45))],
          },
        ],
      },
      {
        id: 'alt-angles',
        name: 'Forehand & Backhand Angles',
        durationMinutes: 10,
        drills: [
          {
            id: 'alt-cone-angles',
            name: 'Crosscourt angle targets',
            type: 'time',
            durationMinutes: 10,
            instructions: [
              'Use cones as targets for effective crosscourt angles.',
              'Maintain shot speed while hitting sharp angles.',
            ],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Angles', toVideoSeconds(7, 55))],
          },
        ],
      },
      {
        id: 'alt-match-scenarios',
        name: 'Match Scenarios',
        durationMinutes: 30,
        drills: [
          {
            id: 'alt-xc-points',
            name: 'Crosscourt points',
            type: 'points',
            durationMinutes: 10,
            instructions: ['Play crosscourt-only points to build patience and shape.'],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Crosscourt Points', toVideoSeconds(8, 46))],
          },
          {
            id: 'alt-bh-baseline',
            name: 'Backhand baseline drill',
            type: 'time',
            durationMinutes: 10,
            instructions: ['Backhand-focused baseline patterns under match intensity.'],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Backhand Baseline', toVideoSeconds(9, 30))],
          },
          {
            id: 'alt-serve-return-11',
            name: 'Serve & return to 11',
            type: 'points',
            durationMinutes: 10,
            instructions: [
              'Serve-and-return points played to 11.',
              'Simulate high-pressure match conditions.',
            ],
            videos: [youtubeVideo(MATCH_DRILLS, 'Match Drills — Serve & Return', toVideoSeconds(10, 30))],
          },
        ],
      },
    ],
  },
  {
    id: 'alt-doubles-drills',
    dayKey: 'friday',
    title: 'Essential Doubles Drills',
    subtitle: 'Three no-coach-needed drills from Meike Babel',
    durationMinutes: 45,
    tags: ['Doubles', 'Net play', 'Volleys'],
    blocks: [
      {
        id: 'alt-dbl-approach-volley',
        name: 'Approach Shot & First Volley',
        durationMinutes: 15,
        drills: [
          {
            id: 'alt-dbl-approach',
            name: 'Short ball → first volley',
            type: 'time',
            durationMinutes: 15,
            instructions: [
              'Feed a short ball to invite your partner to approach the net.',
              'Work the transition from baseline to an effective first volley inside the service box.',
              'Works with 2 or 3 players — rotate or have a third shadow at net.',
            ],
            videos: [youtubeVideo(DOUBLES_DRILLS, 'Doubles — Approach & First Volley', toVideoSeconds(0, 30))],
          },
        ],
      },
      {
        id: 'alt-quick-hand',
        name: 'Quick Hand Volleys',
        durationMinutes: 15,
        drills: [
          {
            id: 'alt-read-cues',
            name: 'Attack or defend at the net',
            type: 'time',
            durationMinutes: 15,
            instructions: [
              'Read cues: if the opponent\'s racket is below the net line, they must lift — close in and attack.',
              'Split-step, stay low, and decide before contact.',
            ],
            videos: [youtubeVideo(DOUBLES_DRILLS, 'Doubles — Quick Hand Volleys', toVideoSeconds(3, 42))],
          },
        ],
      },
      {
        id: 'alt-clobber',
        name: 'Clobber Them',
        durationMinutes: 15,
        drills: [
          {
            id: 'alt-reflex-net',
            name: 'Reflex volley on aggressive pass',
            type: 'time',
            durationMinutes: 15,
            instructions: [
              'Net player feeds a sitter; baseliner strikes aggressively.',
              'Stay stable, racket ready (slightly favoring backhand), and do not back up.',
            ],
            focus: [
              'Split-step and low center of gravity',
              'Move forward to intercept — don\'t retreat',
              'Read opponent body language and racket cues',
            ],
            videos: [youtubeVideo(DOUBLES_DRILLS, 'Doubles — Clobber Them', toVideoSeconds(6, 7))],
          },
        ],
      },
    ],
  },
  {
    id: 'alt-competitive',
    dayKey: 'saturday',
    title: 'Competitive Singles',
    subtitle: 'Apply the week\'s drills under match pressure',
    durationMinutes: 60,
    tags: ['Singles', 'Match play', 'Pressure'],
    blocks: [
      {
        id: 'alt-pressure-sets',
        name: 'Pressure Sets',
        durationMinutes: 60,
        drills: [
          {
            id: 'alt-match-application',
            name: 'Singles match play',
            type: 'time',
            durationMinutes: 60,
            instructions: [
              'Play singles sets applying this week\'s themes: efficient warm-up patterns, direction changes, defensive recovery, and plus-one readiness.',
              'Start one set with a 10-point tie-break to simulate pressure.',
              'Note which drills translated best to match play.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'alt-match-play',
    dayKey: 'sunday',
    title: 'Match Play',
    subtitle: 'Singles or doubles — test the alternate week',
    durationMinutes: 90,
    tags: ['Match play'],
    blocks: [
      {
        id: 'alt-match-session',
        name: 'Match Session',
        durationMinutes: 90,
        drills: [
          {
            id: 'alt-open-match',
            name: 'Singles or doubles match play',
            type: 'time',
            durationMinutes: 90,
            instructions: [
              'Play singles or doubles matches.',
              'Apply the hour-long structure, simple singles drills, match-player patterns, and doubles net skills from this week.',
            ],
          },
        ],
      },
    ],
  },
]

export const alternateWeekSchedule: WeekDay[] = [
  { key: 'monday', label: 'Monday', shortLabel: 'Mon', sessionId: 'alt-hour-singles' },
  { key: 'tuesday', label: 'Tuesday', shortLabel: 'Tue', sessionId: 'alt-simple-singles' },
  { key: 'wednesday', label: 'Wednesday', shortLabel: 'Wed', sessionId: 'alt-match-drills-a' },
  { key: 'thursday', label: 'Thursday', shortLabel: 'Thu', sessionId: 'alt-match-drills-b' },
  { key: 'friday', label: 'Friday', shortLabel: 'Fri', sessionId: 'alt-doubles-drills' },
  { key: 'saturday', label: 'Saturday', shortLabel: 'Sat', sessionId: 'alt-competitive' },
  { key: 'sunday', label: 'Sunday', shortLabel: 'Sun', sessionId: 'alt-match-play' },
]

export const alternatePlan: TrainingPlan = {
  id: 'alternate',
  name: 'Coach Drills Week',
  description: 'Video-guided singles and doubles drills from top coaches',
  weekSchedule: [...alternateWeekSchedule],
  sessions: alternateSessions,
}
