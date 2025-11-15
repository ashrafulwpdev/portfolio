export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  proficiency: number;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  read: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stats {
  totalProjects: number;
  totalSkills: number;
  totalMessages: number;
  unreadMessages: number;
}
