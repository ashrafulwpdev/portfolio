'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, ExternalLink, Github, Edit, Trash2 } from 'lucide-react'

import projectsData from '@/data/projects.json'

export default function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData)
  const [view, setView] = useState<'grid' | 'table'>('grid')

  const handleDelete = (id: string) => {
    console.log('Delete project:', id)
    setProjects(projects.filter(p => p.id !== id))
  }

  const handleEdit = (id: string) => {
    console.log('Edit project:', id)
    // In a real app, this would open a modal or navigate to an edit page
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-2">
            Manage your portfolio projects
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={view === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setView('grid')}
          >
            Grid
          </Button>
          <Button
            variant={view === 'table' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setView('table')}
          >
            Table
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Project
          </Button>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-t-lg" />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="mt-1">{project.year}</CardDescription>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2"
                    onClick={() => handleEdit(project.id)}
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Title</th>
                    <th className="text-left py-3 px-4 font-medium">Year</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Featured</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{project.title}</td>
                      <td className="py-3 px-4 text-muted-foreground">{project.year}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'completed'
                              ? 'bg-green-500/10 text-green-500'
                              : 'bg-yellow-500/10 text-yellow-500'
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {project.featured ? '⭐ Yes' : 'No'}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2 justify-end">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(project.id)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(project.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
