'use client'

import { use } from 'react'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { goals as goalsData, metrics, projects } from '@/lib/data'
import { Plus, Pencil } from 'lucide-react'

export default function GoalsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)
  const projectGoals = goalsData[id] || []
  const projectMetrics = metrics[id] || []

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'Projects', href: '/' },
          { label: project?.name || 'Project', href: `/projects/${id}/metrics` },
          { label: 'Goals' },
        ]}
      />
      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-xl font-medium text-foreground">Goals</h1>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          New goal
        </Button>
      </div>
      <div className="mt-6 rounded-lg border border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Target</TableHead>
              <TableHead className="text-muted-foreground">Metric</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectGoals.map((goal) => {
              const metric = projectMetrics.find((m) => m.id === goal.metricId)
              return (
                <TableRow key={goal.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{goal.name}</p>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-foreground">
                    {goal.targetValue.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {metric?.name || goal.metricId}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
