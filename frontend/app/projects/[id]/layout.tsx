import { Navbar } from '@/components/navbar'
import { ProjectSidebar } from '@/components/project-sidebar'
import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <ProjectSidebar projectId={id} projectName={project.name} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
