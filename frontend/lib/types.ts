export interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'inactive'
  metricsCount: number
  achievementsCount: number
  eventsCount: number
  usersCount: number
}

export interface Metric {
  id: string
  name: string
  description: string
  type: 'streak' | 'counter' | 'number'
  defaultIncrement: number
  streakType?: 'daily' | 'weekly' | 'monthly'
  usersCount: number
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon?: string
  unlockedAt?: string
}

export interface Rule {
  id: string
  name: string
  eventId: string
  metricId: string
  condition: object
}

export interface Event {
  id: string
  name: string
  description: string
}

export interface Goal {
  id: string
  name: string
  description: string
  targetValue: number
  metricId: string
}

export interface UserMetric {
  metricId: string
  metricName: string
  value: number
  type: 'streak' | 'counter' | 'number'
}

export interface UserAchievement {
  achievementId: string
  achievementName: string
  unlockedAt: string
}
