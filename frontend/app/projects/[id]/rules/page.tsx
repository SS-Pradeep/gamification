'use client'

import { use, useState } from 'react'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { rules as rulesData, events, metrics, projects } from '@/lib/data'
import type { Rule } from '@/lib/types'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RulesPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)
  const projectRules = rulesData[id] || []
  const projectEvents = events[id] || []
  const projectMetrics = metrics[id] || []

  const [selectedRule, setSelectedRule] = useState<Rule | null>(projectRules[0] || null)
  const [editedRule, setEditedRule] = useState<Partial<Rule>>(selectedRule || {})

  const handleSelectRule = (rule: Rule) => {
    setSelectedRule(rule)
    setEditedRule(rule)
  }

  const handleNewRule = () => {
    const newRule: Partial<Rule> = {
      id: `r${Date.now()}`,
      name: 'New rule',
      eventId: projectEvents[0]?.id || '',
      metricId: projectMetrics[0]?.id || '',
      condition: { type: 'always' },
    }
    setSelectedRule(null)
    setEditedRule(newRule)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border/50 p-6">
        <Breadcrumb
          items={[
            { label: 'Projects', href: '/' },
            { label: project?.name || 'Project', href: `/projects/${id}/metrics` },
            { label: 'Rules' },
          ]}
        />
        <div className="mt-6 flex items-center justify-between">
          <h1 className="text-xl font-medium text-foreground">Rules</h1>
          <Button size="sm" onClick={handleNewRule}>
            <Plus className="h-4 w-4" />
            New rule
          </Button>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[280px] shrink-0 border-r border-border/50 overflow-auto">
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              {projectRules.length} {projectRules.length === 1 ? 'rule' : 'rules'}
            </p>
          </div>
          <div className="flex flex-col">
            {projectRules.map((rule) => (
              <button
                key={rule.id}
                onClick={() => handleSelectRule(rule)}
                className={cn(
                  'flex flex-col items-start border-b border-border/50 px-4 py-3 text-left transition-colors hover:bg-muted/50',
                  selectedRule?.id === rule.id && 'bg-muted/50'
                )}
              >
                <span className="text-sm font-medium text-foreground">{rule.name}</span>
                <span className="mt-0.5 text-xs text-muted-foreground">
                  {projectEvents.find((e) => e.id === rule.eventId)?.name || rule.eventId}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6">
          {editedRule.id ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label className="text-sm text-muted-foreground">Event</Label>
                <Select
                  value={editedRule.eventId}
                  onValueChange={(v) => setEditedRule({ ...editedRule, eventId: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select event" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectEvents.map((event) => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm text-muted-foreground">Metric</Label>
                <Select
                  value={editedRule.metricId}
                  onValueChange={(v) => setEditedRule({ ...editedRule, metricId: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select metric" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectMetrics.map((metric) => (
                      <SelectItem key={metric.id} value={metric.id}>
                        {metric.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm text-muted-foreground">Condition</Label>
                <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                  <pre className="text-sm text-foreground font-mono">
                    {JSON.stringify(editedRule.condition || {}, null, 2)}
                  </pre>
                </div>
              </div>
              <div className="mt-4">
                <Button onClick={() => console.log('Saving rule:', editedRule)}>
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Select a rule or create a new one
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
