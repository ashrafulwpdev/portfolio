'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2 } from 'lucide-react'

import skillsData from '@/data/skills.json'

export default function SkillsPage() {
  const [skills, setSkills] = useState(skillsData)
  const categories = Array.from(new Set(skills.map(s => s.category)))

  const handleDelete = (id: string) => {
    console.log('Delete skill:', id)
    setSkills(skills.filter(s => s.id !== id))
  }

  const handleEdit = (id: string) => {
    console.log('Edit skill:', id)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
          <p className="text-muted-foreground mt-2">
            Manage your skills and proficiency levels
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Skill
        </Button>
      </div>

      <div className="grid gap-6">
        {categories.map((category) => {
          const categorySkills = skills.filter(s => s.category === category)
          return (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
                <CardDescription>
                  {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-medium">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {skill.description}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(skill.id)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(skill.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="font-medium">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2 transition-all"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{skill.yearsOfExperience} years experience</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
