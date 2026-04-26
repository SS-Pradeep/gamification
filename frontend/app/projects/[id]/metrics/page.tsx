'use client'

import { use, useState } from 'react'
import { Breadcrumb } from '@/components/breadcrumb'
import { MetricsTable } from '@/components/metrics-table'
import { MetricForm } from '@/components/metric-form'
import { Button } from '@/components/ui/button'
import { metrics as metricsData, projects } from '@/lib/data'
import type { Metric } from '@/lib/types'
import { Plus } from 'lucide-react'

export default function MetricsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)
  const projectMetrics = metricsData[id] || []

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingMetric, setEditingMetric] = useState<Metric | null>(null)

  const handleEdit = (metric: Metric) => {
    setEditingMetric(metric)
    setIsFormOpen(true)
  }

  const handleCreate = () => {
    setEditingMetric(null)
    setIsFormOpen(true)
  }

  const handleSave = (metric: Partial<Metric>) => {
    console.log('Saving metric:', metric)
    setIsFormOpen(false)
  }

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'Projects', href: '/' },
          { label: project?.name || 'Project', href: `/projects/${id}/metrics` },
          { label: 'Metrics' },
        ]}
      />
      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-xl font-medium text-foreground">Metrics</h1>
        <Button size="sm" onClick={handleCreate}>
          <Plus className="h-4 w-4" />
          New metric
        </Button>
      </div>
      <div className="mt-6">
        <MetricsTable metrics={projectMetrics} onEdit={handleEdit} />
      </div>
      <MetricForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        metric={editingMetric}
        onSave={handleSave}
      />
    </div>
  )
}
