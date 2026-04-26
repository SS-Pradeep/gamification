'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ArrowLeft, BarChart3, Target, Trophy, Zap, GitBranch, Users } from 'lucide-react'

interface ProjectSidebarProps {
  projectId: string
  projectName: string
}

const navItems = [
  { name: 'Metrics', href: 'metrics', icon: BarChart3 },
  { name: 'Goals', href: 'goals', icon: Target },
  { name: 'Achievements', href: 'achievements', icon: Trophy },
  { name: 'Events', href: 'events', icon: Zap },
  { name: 'Rules', href: 'rules', icon: GitBranch },
]

export function ProjectSidebar({ projectId, projectName }: ProjectSidebarProps) {
  const pathname = usePathname()
  const currentPath = pathname.split('/').pop()

  return (
    <aside className="flex w-[200px] shrink-0 flex-col border-r border-border/50 bg-background">
      <div className="p-4">
        <h2 className="text-base font-medium text-foreground">{projectName}</h2>
        <Link
          href="/"
          className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to projects
        </Link>
      </div>
      <nav className="flex flex-1 flex-col py-2">
        {navItems.map((item) => {
          const isActive = currentPath === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={`/projects/${projectId}/${item.href}`}
              className={cn(
                'relative flex items-center gap-2.5 px-4 py-2 text-sm transition-colors',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {isActive && (
                <span className="absolute right-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-blue-500" />
              )}
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
        <div className="mx-4 my-2 border-t border-border/50" />
        <Link
          href={`/projects/${projectId}/users`}
          className={cn(
            'relative flex items-center gap-2.5 px-4 py-2 text-sm transition-colors',
            currentPath === 'users'
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {currentPath === 'users' && (
            <span className="absolute right-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-blue-500" />
          )}
          <Users className="h-4 w-4" />
          Users
        </Link>
      </nav>
    </aside>
  )
}
