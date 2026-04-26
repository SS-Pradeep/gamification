import { Navbar } from "@/components/navbar";
import { ProjectCard, NewProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-foreground">Projects</h1>
          <Button asChild size="sm">
            <Link href="/projects/new">
              <Plus className="h-4 w-4" />
              New project
            </Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <NewProjectCard />
        </div>
      </main>
    </div>
  );
}
