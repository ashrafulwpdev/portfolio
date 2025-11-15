'use client';

import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react';
import { socialLinks } from '@/lib/data/portfolio';

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail
};

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 backdrop-blur-lg">
      <div className="container-custom py-12">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-white/80 hover:text-white"
                aria-label={link.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-white/60 text-sm">
          Copyright © Ashraful {new Date().getFullYear()} | Crafted with{' '}
          <Heart size={14} className="inline text-red-500 fill-current" />
        </p>
      </div>
    </footer>
  );
}
