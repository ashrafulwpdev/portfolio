'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { skills } from '@/lib/data/portfolio';
import { Plus, Edit, Trash2, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SkillsPage() {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'frontend', 'backend', 'tools', 'design'];
  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(s => s.category === filter);

  return (
    <div className="space-y-8 pt-16 lg:pt-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Skills</h1>
          <p className="text-white/60">Manage your technical skills and proficiency levels</p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus size={20} className="mr-2" />
          Add Skill
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
              filter === category
                ? 'bg-gradient-premium text-white shadow-lg'
                : 'glass text-white/70 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03 }}
          >
            <Card className="group">
              <div className="space-y-4">
                {/* Skill Icon & Name */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                      <Code size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">{skill.name}</h3>
                      <p className="text-xs text-white/60 capitalize">{skill.category}</p>
                    </div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Proficiency</span>
                    <span className="text-sm font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.03 + 0.2 }}
                      className="h-full bg-gradient-premium"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
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

      {/* Stats Summary */}
      <div className="grid md:grid-cols-4 gap-6">
        {categories.slice(1).map((category) => {
          const count = skills.filter(s => s.category === category).length;
          const avgProficiency = Math.round(
            skills
              .filter(s => s.category === category)
              .reduce((acc, s) => acc + s.proficiency, 0) / count
          );

          return (
            <Card key={category} className="text-center">
              <div className="text-2xl font-bold mb-1">{count}</div>
              <div className="text-white/60 text-sm capitalize mb-2">{category} Skills</div>
              <div className="text-xs text-white/40">Avg: {avgProficiency}%</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
