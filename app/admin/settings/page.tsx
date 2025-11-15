'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/lib/data/portfolio';
import { Save, User, Mail, MapPin, Globe, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  return (
    <div className="space-y-8 pt-16 lg:pt-0 max-w-4xl">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Settings</h1>
        <p className="text-white/60">Manage your portfolio settings and personal information</p>
      </div>

      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-premium flex items-center justify-center">
              <User size={20} />
            </div>
            Personal Information
          </h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue={personalInfo.name}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  defaultValue={personalInfo.title}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subtitle</label>
              <input
                type="text"
                defaultValue={personalInfo.subtitle}
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                rows={4}
                defaultValue={personalInfo.bio}
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    defaultValue={personalInfo.email}
                    className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    defaultValue={personalInfo.location}
                    className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>
                <Save size={18} className="mr-2" />
                Save Changes
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center">
              <LinkIcon size={20} />
            </div>
            Social Links
          </h2>

          <form className="space-y-4">
            {socialLinks.map((link, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2">{link.name}</label>
                <div className="relative">
                  <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="url"
                    defaultValue={link.url}
                    className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-end pt-4">
              <Button>
                <Save size={18} className="mr-2" />
                Save Links
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>

      {/* Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <h2 className="text-2xl font-bold mb-6">Preferences</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg glass">
              <div>
                <h3 className="font-semibold mb-1">Email Notifications</h3>
                <p className="text-sm text-white/60">Receive notifications for new messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-premium"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg glass">
              <div>
                <h3 className="font-semibold mb-1">Show Featured Projects</h3>
                <p className="text-sm text-white/60">Display featured badge on projects</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-premium"></div>
              </label>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
