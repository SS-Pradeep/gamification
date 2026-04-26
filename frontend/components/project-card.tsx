import Link from 'next/link'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}/metrics`}
      className="flex flex-col rounded-lg border border-border/50 bg-card p-5 transition-colors hover:border-border"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium text-foreground">{project.name}</h3>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
            project.status === 'active'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
        {project.description}
      </p>
      <div className="mt-auto pt-5">
        <div className="flex items-center gap-4 border-t border-border/50 pt-4 text-xs text-muted-foreground">
          <span>{project.metricsCount} metrics</span>
          <span>{project.achievementsCount} achievements</span>
          <span>{project.eventsCount} events</span>
          <span>{project.usersCount} users</span>
        </div>
      </div>
    </Link>
  )
}

export function NewProjectCard() {
  return (
    <Link
      href="/projects/new"
      className="flex min-h-[160px] flex-col items-center justify-center rounded-lg border border-dashed border-border/80 bg-card p-5 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span className="mt-2 text-sm">New project</span>
    </Link>
  )
}
