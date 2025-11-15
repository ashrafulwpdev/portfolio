'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/data/portfolio';
import { Plus, Edit, Trash2, ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-8 pt-16 lg:pt-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-white/60">Manage your portfolio projects</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus size={20} className="mr-2" />
          Add Project
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === category
                ? 'bg-gradient-premium text-white shadow-lg'
                : 'glass text-white/70 hover:text-white'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="group">
              {/* Project Image */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-premium text-white text-xs font-semibold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-primary-400 font-semibold mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-white/70 line-clamp-2 mt-1">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                  {project.liveUrl && (
                    <button className="flex-1 px-3 py-2 rounded-lg glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm">
                      <ExternalLink size={16} />
                      View
                    </button>
                  )}
                  <button className="flex-1 px-3 py-2 rounded-lg glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm">
                    <Edit size={16} />
                    Edit
                  </button>
                  <button className="px-3 py-2 rounded-lg glass hover:bg-red-500/20 hover:text-red-400 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
            <Plus size={32} className="text-white/40" />
          </div>
          <h3 className="text-xl font-bold mb-2">No projects found</h3>
          <p className="text-white/60 mb-6">Get started by creating your first project</p>
          <Button>
            <Plus size={20} className="mr-2" />
            Add Project
          </Button>
        </Card>
      )}
    </div>
  );
}
