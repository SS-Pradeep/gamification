'use client'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { Metric } from '@/lib/types'
import { Pencil } from 'lucide-react'

interface MetricsTableProps {
  metrics: Metric[]
  onEdit: (metric: Metric) => void
}

function TypeBadge({ type }: { type: Metric['type'] }) {
  const styles = {
    streak: 'bg-purple-50 text-purple-700',
    counter: 'bg-teal-50 text-teal-700',
    number: 'bg-blue-50 text-blue-700',
  }

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles[type]}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  )
}

export function MetricsTable({ metrics, onEdit }: MetricsTableProps) {
  return (
    <div className="rounded-lg border border-border/50">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-muted-foreground">Name</TableHead>
            <TableHead className="text-muted-foreground">Type</TableHead>
            <TableHead className="text-muted-foreground">Default increment</TableHead>
            <TableHead className="text-muted-foreground">Streak type</TableHead>
            <TableHead className="text-muted-foreground">Users</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metric) => (
            <TableRow key={metric.id}>
              <TableCell>
                <div>
                  <p className="font-medium text-foreground">{metric.name}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </TableCell>
              <TableCell>
                <TypeBadge type={metric.type} />
              </TableCell>
              <TableCell className="text-muted-foreground">
                {metric.defaultIncrement}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {metric.streakType || '—'}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {metric.usersCount.toLocaleString()}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(metric)}
                  className="h-8 w-8 p-0"
                >
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
