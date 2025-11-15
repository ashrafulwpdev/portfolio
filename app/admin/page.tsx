'use client';

import { Card } from '@/components/ui/Card';
import { projects, skills, messages } from '@/lib/data/portfolio';
import { FolderKanban, Sparkles, Mail, TrendingUp, Eye, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const stats = [
    {
      name: 'Total Projects',
      value: projects.length,
      icon: FolderKanban,
      trend: '+12%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Skills',
      value: skills.length,
      icon: Sparkles,
      trend: '+8%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Messages',
      value: messages.length,
      icon: Mail,
      trend: '+23%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Unread Messages',
      value: messages.filter(m => !m.read).length,
      icon: Mail,
      trend: 'New',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const recentProjects = projects.slice(0, 3);
  const recentMessages = messages.slice(0, 3);

  return (
    <div className="space-y-8 pt-16 lg:pt-0">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-white/60">Welcome back! Here's what's happening with your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold">
                      {stat.trend}
                    </span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.name}</div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Projects</h2>
            <a href="/admin/projects" className="text-sm text-primary-400 hover:text-primary-300">
              View All
            </a>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-gradient-premium flex items-center justify-center flex-shrink-0">
                  <FolderKanban size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{project.title}</h3>
                  <p className="text-sm text-white/60 truncate">{project.category}</p>
                </div>
                <div className="flex items-center gap-1 text-white/60">
                  <Eye size={16} />
                  <span className="text-sm">{Math.floor(Math.random() * 1000)}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Messages */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Messages</h2>
            <a href="/admin/messages" className="text-sm text-primary-400 hover:text-primary-300">
              View All
            </a>
          </div>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{message.name}</h3>
                  {!message.read && (
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                  )}
                </div>
                <p className="text-sm text-white/60 mb-2 line-clamp-1">{message.subject}</p>
                <p className="text-xs text-white/40">
                  {new Date(message.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
            <TrendingUp size={32} />
          </div>
          <div className="text-2xl font-bold mb-1">+45%</div>
          <div className="text-white/60">Portfolio Views</div>
        </Card>

        <Card className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
            <Users size={32} />
          </div>
          <div className="text-2xl font-bold mb-1">2.4K</div>
          <div className="text-white/60">Unique Visitors</div>
        </Card>

        <Card className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
            <Eye size={32} />
          </div>
          <div className="text-2xl font-bold mb-1">12.5K</div>
          <div className="text-white/60">Page Views</div>
        </Card>
      </div>
    </div>
  );
}
