'use client'

import { use, useState } from 'react'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { projects } from '@/lib/data'
import type { UserMetric, UserAchievement } from '@/lib/types'
import { Search } from 'lucide-react'

const mockUserMetrics: UserMetric[] = [
  { metricId: 'm1', metricName: 'Workout streak', value: 14, type: 'streak' },
  { metricId: 'm2', metricName: 'Total workouts', value: 87, type: 'counter' },
  { metricId: 'm3', metricName: 'Calories burned', value: 24500, type: 'number' },
]

const mockUserAchievements: UserAchievement[] = [
  { achievementId: 'a1', achievementName: 'First workout', unlockedAt: '2024-01-15' },
  { achievementId: 'a2', achievementName: 'Week warrior', unlockedAt: '2024-01-22' },
]

export default function UsersPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)

  const [userId, setUserId] = useState('')
  const [searchedUser, setSearchedUser] = useState<string | null>(null)
  const [userMetrics, setUserMetrics] = useState<UserMetric[]>([])
  const [userAchievements, setUserAchievements] = useState<UserAchievement[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (userId.trim()) {
      setSearchedUser(userId.trim())
      setUserMetrics(mockUserMetrics)
      setUserAchievements(mockUserAchievements)
    }
  }

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'Projects', href: '/' },
          { label: project?.name || 'Project', href: `/projects/${id}/metrics` },
          { label: 'Users' },
        ]}
      />
      <div className="mt-6">
        <h1 className="text-xl font-medium text-foreground">Users</h1>
      </div>
      <form onSubmit={handleSearch} className="mt-6 flex max-w-md gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by user ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button type="submit">Search</Button>
      </form>

      {searchedUser && (
        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            Results for <span className="font-medium text-foreground">{searchedUser}</span>
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-base font-medium text-foreground">Metrics</h2>
              <div className="mt-3 rounded-lg border border-border/50">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="text-muted-foreground">Metric</TableHead>
                      <TableHead className="text-muted-foreground">Type</TableHead>
                      <TableHead className="text-right text-muted-foreground">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userMetrics.map((metric) => (
                      <TableRow key={metric.metricId}>
                        <TableCell className="font-medium text-foreground">
                          {metric.metricName}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              metric.type === 'streak'
                                ? 'bg-purple-50 text-purple-700'
                                : metric.type === 'counter'
                                ? 'bg-teal-50 text-teal-700'
                                : 'bg-blue-50 text-blue-700'
                            }`}
                          >
                            {metric.type.charAt(0).toUpperCase() + metric.type.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right text-foreground">
                          {metric.value.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div>
              <h2 className="text-base font-medium text-foreground">Achievements</h2>
              <div className="mt-3 rounded-lg border border-border/50">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="text-muted-foreground">Achievement</TableHead>
                      <TableHead className="text-muted-foreground">Unlocked</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userAchievements.map((achievement) => (
                      <TableRow key={achievement.achievementId}>
                        <TableCell className="font-medium text-foreground">
                          {achievement.achievementName}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(achievement.unlockedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      )}

      {!searchedUser && (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <Search className="h-8 w-8 text-muted-foreground/50" />
          <p className="mt-4 text-muted-foreground">Enter a user ID to view their metrics and achievements</p>
        </div>
      )}
    </div>
  )
}
