'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'

export default function NewProjectPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Creating project:', { name, description })
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Projects', href: '/' },
            { label: 'New project' },
          ]}
        />
        <div className="mt-6 max-w-lg">
          <h1 className="text-xl font-medium text-foreground">New project</h1>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm text-muted-foreground">
                Project name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My gamification project"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="text-sm text-muted-foreground">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of your project"
                rows={3}
              />
            </div>
            <div className="mt-4 flex gap-3">
              <Button type="submit">Create project</Button>
              <Button type="button" variant="outline" onClick={() => router.push('/')}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
