'use client';

import { skills } from '@/lib/data/portfolio';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Database, GitBranch, Container, Figma, Layers } from 'lucide-react';

const iconMap: Record<string, any> = {
  Code, Code2: Code, Palette, Server, Database, GitBranch, Container, Figma, Layers,
  FileCode: Code, FileCode2: Code, Atom: Code, Triangle: Code, Hexagon: Code, Wind: Palette
};

export function Skills() {
  const categories = {
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    tools: skills.filter(s => s.category === 'tools'),
    design: skills.filter(s => s.category === 'design')
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(categories).map(([category, categorySkills], categoryIndex) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 capitalize gradient-text">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="glass glass-hover rounded-xl p-6 text-center group cursor-pointer"
                    >
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon size={32} className="text-white" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                          className="h-full bg-gradient-premium"
                        />
                      </div>
                      <p className="text-sm text-white/60 mt-2">{skill.proficiency}%</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
