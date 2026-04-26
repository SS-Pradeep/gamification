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
import { events as eventsData, projects } from '@/lib/data'
import { Plus, Pencil } from 'lucide-react'

export default function EventsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)
  const projectEvents = eventsData[id] || []

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'Projects', href: '/' },
          { label: project?.name || 'Project', href: `/projects/${id}/metrics` },
          { label: 'Events' },
        ]}
      />
      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-xl font-medium text-foreground">Events</h1>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          New event
        </Button>
      </div>
      <div className="mt-6 rounded-lg border border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Description</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                    {event.name}
                  </code>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {event.description}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
