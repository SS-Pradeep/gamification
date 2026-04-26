import type { Project, Metric, Event, Rule, Goal, Achievement } from './types'

export const projects: Project[] = [
  {
    id: '1',
    name: 'Fitness app',
    description: 'Track workouts, streaks, and fitness achievements',
    status: 'active',
    metricsCount: 12,
    achievementsCount: 24,
    eventsCount: 8,
    usersCount: 1453,
  },
  {
    id: '2',
    name: 'Learning platform',
    description: 'Course completion, quiz scores, and learning streaks',
    status: 'active',
    metricsCount: 8,
    achievementsCount: 16,
    eventsCount: 5,
    usersCount: 892,
  },
  {
    id: '3',
    name: 'E-commerce loyalty',
    description: 'Points, tiers, and purchase milestones',
    status: 'inactive',
    metricsCount: 6,
    achievementsCount: 10,
    eventsCount: 4,
    usersCount: 3201,
  },
]

export const metrics: Record<string, Metric[]> = {
  '1': [
    {
      id: 'm1',
      name: 'Workout streak',
      description: 'Consecutive days with at least one workout',
      type: 'streak',
      defaultIncrement: 1,
      streakType: 'daily',
      usersCount: 1243,
    },
    {
      id: 'm2',
      name: 'Total workouts',
      description: 'Cumulative number of completed workouts',
      type: 'counter',
      defaultIncrement: 1,
      usersCount: 1453,
    },
    {
      id: 'm3',
      name: 'Calories burned',
      description: 'Total calories burned across all activities',
      type: 'number',
      defaultIncrement: 0,
      usersCount: 1120,
    },
    {
      id: 'm4',
      name: 'Weekly active days',
      description: 'Number of active days this week',
      type: 'counter',
      defaultIncrement: 1,
      streakType: 'weekly',
      usersCount: 980,
    },
  ],
  '2': [
    {
      id: 'm5',
      name: 'Learning streak',
      description: 'Consecutive days with completed lessons',
      type: 'streak',
      defaultIncrement: 1,
      streakType: 'daily',
      usersCount: 654,
    },
    {
      id: 'm6',
      name: 'Courses completed',
      description: 'Total number of finished courses',
      type: 'counter',
      defaultIncrement: 1,
      usersCount: 421,
    },
  ],
}

export const events: Record<string, Event[]> = {
  '1': [
    { id: 'e1', name: 'workout_completed', description: 'Fired when a workout session ends' },
    { id: 'e2', name: 'goal_reached', description: 'Fired when a fitness goal is achieved' },
    { id: 'e3', name: 'app_opened', description: 'Fired when the app is opened' },
  ],
  '2': [
    { id: 'e4', name: 'lesson_completed', description: 'Fired when a lesson is finished' },
    { id: 'e5', name: 'quiz_passed', description: 'Fired when a quiz is passed' },
  ],
}

export const rules: Record<string, Rule[]> = {
  '1': [
    {
      id: 'r1',
      name: 'Increment workout streak',
      eventId: 'e1',
      metricId: 'm1',
      condition: { type: 'always' },
    },
    {
      id: 'r2',
      name: 'Add workout count',
      eventId: 'e1',
      metricId: 'm2',
      condition: { type: 'always' },
    },
  ],
}

export const goals: Record<string, Goal[]> = {
  '1': [
    { id: 'g1', name: '7-day streak', description: 'Maintain a 7-day workout streak', targetValue: 7, metricId: 'm1' },
    { id: 'g2', name: '100 workouts', description: 'Complete 100 total workouts', targetValue: 100, metricId: 'm2' },
  ],
}

export const achievements: Record<string, Achievement[]> = {
  '1': [
    { id: 'a1', name: 'First workout', description: 'Complete your first workout' },
    { id: 'a2', name: 'Week warrior', description: 'Maintain a 7-day streak' },
    { id: 'a3', name: 'Century club', description: 'Complete 100 workouts' },
  ],
}
