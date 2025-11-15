import Link from 'next/link'
import { ArrowRight, Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'

import projectsData from '@/data/projects.json'
import skillsData from '@/data/skills.json'
import experienceData from '@/data/experience.json'

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3)
  const topSkills = skillsData.sort((a, b) => b.proficiency - a.proficiency).slice(0, 6)
  const currentExperience = experienceData.find(e => e.current)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container-custom flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Ashraful
          </Link>

          <div className="flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Admin
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-custom relative z-10 text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium mb-4">
            👋 Welcome to my portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="gradient-text">Ashraful</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Link href="#contact">
              <Button size="lg" className="gap-2">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a href="https://github.com/ashrafulwpdev" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>🎯 Clean Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable code following best practices and modern standards
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>🎨 Modern Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating beautiful user interfaces with attention to detail and UX principles
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>⚡ Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, efficiency, and exceptional user experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-spacing">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topSkills.map((skill) => (
              <Card key={skill.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <CardDescription>{skill.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/admin/skills">
              <Button variant="outline">View All Skills</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-t-lg" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary/10 border border-primary/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/admin/projects">
              <Button>View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-spacing">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          {currentExperience && (
            <Card className="max-w-3xl mx-auto mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{currentExperience.position}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {currentExperience.company} • {currentExperience.location}
                    </CardDescription>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{currentExperience.description}</p>
                <div className="space-y-2">
                  {currentExperience.achievements.slice(0, 3).map((achievement, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <Link href="/admin/experience">
              <Button variant="outline">View Full Experience</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Let&apos;s work together</CardTitle>
              <CardDescription>
                Have a project in mind? Feel free to reach out!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@ashraful.dev">
                  <Button className="gap-2 w-full sm:w-auto">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </a>
                <a href="https://github.com/ashrafulwpdev" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container-custom">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ashraful. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
