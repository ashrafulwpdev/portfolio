'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Briefcase } from 'lucide-react'

import experienceData from '@/data/experience.json'

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState(experienceData)

  const handleDelete = (id: string) => {
    console.log('Delete experience:', id)
    setExperiences(experiences.filter(e => e.id !== id))
  }

  const handleEdit = (id: string) => {
    console.log('Edit experience:', id)
  }

  const formatDate = (date: string | null) => {
    if (!date) return 'Present'
    const d = new Date(date)
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
          <p className="text-muted-foreground mt-2">
            Manage your work history and achievements
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Experience
        </Button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={exp.id} className="relative">
            {index < experiences.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-px bg-border hidden md:block" />
            )}

            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company} • {exp.location}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(exp.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(exp.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pl-20">
              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="space-y-2 mb-4">
                <h4 className="font-medium text-sm">Key Achievements:</h4>
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
