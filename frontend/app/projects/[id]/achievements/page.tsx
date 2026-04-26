'use client'

import { use } from 'react'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { achievements as achievementsData, projects } from '@/lib/data'
import { Plus, Pencil, Trophy } from 'lucide-react'

export default function AchievementsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)
  const projectAchievements = achievementsData[id] || []

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'Projects', href: '/' },
          { label: project?.name || 'Project', href: `/projects/${id}/metrics` },
          { label: 'Achievements' },
        ]}
      />
      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-xl font-medium text-foreground">Achievements</h1>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          New achievement
        </Button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
              <Trophy className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground">{achievement.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground line-clamp-2">
                {achievement.description}
              </p>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 shrink-0 p-0">
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
