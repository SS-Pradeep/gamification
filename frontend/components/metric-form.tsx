'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import type { Metric } from '@/lib/types'
import { useState, useEffect } from 'react'

interface MetricFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  metric?: Metric | null
  onSave: (metric: Partial<Metric>) => void
}

export function MetricForm({ open, onOpenChange, metric, onSave }: MetricFormProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'streak' | 'counter' | 'number'>('counter')
  const [defaultIncrement, setDefaultIncrement] = useState('1')
  const [streakType, setStreakType] = useState<'daily' | 'weekly' | 'monthly'>('daily')

  useEffect(() => {
    if (metric) {
      setName(metric.name)
      setDescription(metric.description)
      setType(metric.type)
      setDefaultIncrement(String(metric.defaultIncrement))
      setStreakType(metric.streakType || 'daily')
    } else {
      setName('')
      setDescription('')
      setType('counter')
      setDefaultIncrement('1')
      setStreakType('daily')
    }
  }, [metric, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: metric?.id,
      name,
      description,
      type,
      defaultIncrement: Number(defaultIncrement),
      streakType: type === 'streak' ? streakType : undefined,
    })
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="text-base font-medium">
            {metric ? 'Edit metric' : 'Create metric'}
          </SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm text-muted-foreground">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Metric name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-sm text-muted-foreground">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type" className="text-sm text-muted-foreground">
              Type
            </Label>
            <Select value={type} onValueChange={(v) => setType(v as typeof type)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="counter">Counter</SelectItem>
                <SelectItem value="streak">Streak</SelectItem>
                <SelectItem value="number">Number</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="defaultIncrement" className="text-sm text-muted-foreground">
              Default increment
            </Label>
            <Input
              id="defaultIncrement"
              type="number"
              value={defaultIncrement}
              onChange={(e) => setDefaultIncrement(e.target.value)}
            />
          </div>
          {type === 'streak' && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="streakType" className="text-sm text-muted-foreground">
                Streak type
              </Label>
              <Select value={streakType} onValueChange={(v) => setStreakType(v as typeof streakType)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="mt-4 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {metric ? 'Save changes' : 'Create metric'}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
