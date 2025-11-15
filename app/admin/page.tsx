import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FolderGit2, Wrench, Briefcase, TrendingUp } from 'lucide-react'

import projectsData from '@/data/projects.json'
import skillsData from '@/data/skills.json'
import experienceData from '@/data/experience.json'

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Projects',
      value: projectsData.length,
      description: `${projectsData.filter(p => p.featured).length} featured`,
      icon: FolderGit2,
      color: 'text-blue-500',
    },
    {
      title: 'Skills',
      value: skillsData.length,
      description: `Avg proficiency: ${Math.round(skillsData.reduce((sum, s) => sum + s.proficiency, 0) / skillsData.length)}%`,
      icon: Wrench,
      color: 'text-green-500',
    },
    {
      title: 'Experience',
      value: experienceData.length,
      description: `${experienceData.filter(e => e.current).length} current position`,
      icon: Briefcase,
      color: 'text-purple-500',
    },
    {
      title: 'Total Years',
      value: new Date().getFullYear() - 2017,
      description: 'Years of experience',
      icon: TrendingUp,
      color: 'text-orange-500',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your portfolio admin panel. Manage your projects, skills, and experience.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Your latest portfolio projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectsData.slice(0, 5).map((project) => (
                <div key={project.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{project.title}</p>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'completed'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
            <CardDescription>Your highest proficiency skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillsData
                .sort((a, b) => b.proficiency - a.proficiency)
                .slice(0, 5)
                .map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and management options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="/admin/projects"
              className="p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="font-medium mb-2">Manage Projects</h3>
              <p className="text-sm text-muted-foreground">
                Add, edit, or remove portfolio projects
              </p>
            </a>
            <a
              href="/admin/skills"
              className="p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="font-medium mb-2">Update Skills</h3>
              <p className="text-sm text-muted-foreground">
                Manage your skills and proficiency levels
              </p>
            </a>
            <a
              href="/admin/experience"
              className="p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="font-medium mb-2">Edit Experience</h3>
              <p className="text-sm text-muted-foreground">
                Update your work history and achievements
              </p>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
