import { Project, Skill, Message, SocialLink } from '@/lib/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory, advanced search, and seamless checkout experience.',
    image: '/old_portfolio/assets/img/01.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with AI-driven insights, real-time data visualization, and predictive analytics.',
    image: '/old_portfolio/assets/img/02.jpg',
    technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'Data Science'
  },
  {
    id: '3',
    title: 'Social Media Mobile App',
    description: 'Cross-platform mobile application with real-time messaging, media sharing, and social networking features.',
    image: '/old_portfolio/assets/img/03.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'Mobile Development'
  },
  {
    id: '4',
    title: 'Project Management SaaS',
    description: 'Enterprise-grade project management tool with team collaboration, time tracking, and resource allocation.',
    image: '/old_portfolio/assets/img/01.jpg',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: 'https://example.com',
    featured: false,
    category: 'SaaS'
  },
  {
    id: '5',
    title: 'Healthcare Booking System',
    description: 'Digital health platform connecting patients with healthcare providers, featuring appointment scheduling and telemedicine.',
    image: '/old_portfolio/assets/img/02.jpg',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'WebRTC'],
    liveUrl: 'https://example.com',
    featured: false,
    category: 'Healthcare'
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.',
    image: '/old_portfolio/assets/img/03.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Mapbox', 'Stripe'],
    liveUrl: 'https://example.com',
    featured: false,
    category: 'Real Estate'
  }
];

export const skills: Skill[] = [
  { id: '1', name: 'HTML5', icon: 'Code', category: 'frontend', proficiency: 95 },
  { id: '2', name: 'CSS3', icon: 'Palette', category: 'frontend', proficiency: 95 },
  { id: '3', name: 'JavaScript', icon: 'FileCode', category: 'frontend', proficiency: 92 },
  { id: '4', name: 'TypeScript', icon: 'FileCode2', category: 'frontend', proficiency: 90 },
  { id: '5', name: 'React', icon: 'Atom', category: 'frontend', proficiency: 93 },
  { id: '6', name: 'Next.js', icon: 'Triangle', category: 'frontend', proficiency: 91 },
  { id: '7', name: 'Vue.js', icon: 'Hexagon', category: 'frontend', proficiency: 85 },
  { id: '8', name: 'Tailwind CSS', icon: 'Wind', category: 'frontend', proficiency: 94 },
  { id: '9', name: 'Node.js', icon: 'Server', category: 'backend', proficiency: 88 },
  { id: '10', name: 'Python', icon: 'Code2', category: 'backend', proficiency: 87 },
  { id: '11', name: 'PostgreSQL', icon: 'Database', category: 'backend', proficiency: 85 },
  { id: '12', name: 'MongoDB', icon: 'Database', category: 'backend', proficiency: 86 },
  { id: '13', name: 'Git', icon: 'GitBranch', category: 'tools', proficiency: 90 },
  { id: '14', name: 'Docker', icon: 'Container', category: 'tools', proficiency: 82 },
  { id: '15', name: 'Figma', icon: 'Figma', category: 'design', proficiency: 88 },
  { id: '16', name: 'Adobe XD', icon: 'Layers', category: 'design', proficiency: 85 }
];

export const messages: Message[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    subject: 'Web Development Project',
    message: 'Hi! I\'m interested in discussing a web development project for my startup. Do you have availability for a consultation?',
    createdAt: new Date('2024-11-14T10:30:00'),
    read: false
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@company.com',
    subject: 'Freelance Opportunity',
    message: 'We\'re looking for a talented developer to join our team on a freelance basis. Would love to discuss this opportunity with you.',
    createdAt: new Date('2024-11-13T14:15:00'),
    read: false
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael@tech.io',
    subject: 'Portfolio Inquiry',
    message: 'Your portfolio looks amazing! I\'d like to know more about your process and rates.',
    createdAt: new Date('2024-11-12T09:00:00'),
    read: true
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    email: 'emily@design.co',
    subject: 'Collaboration Request',
    message: 'I\'m a UI/UX designer and I think we could create something amazing together. Let\'s connect!',
    createdAt: new Date('2024-11-11T16:45:00'),
    read: true
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'david@startup.com',
    subject: 'Full Stack Development',
    message: 'Looking for a full-stack developer for a 3-month project. Are you available?',
    createdAt: new Date('2024-11-10T11:20:00'),
    read: true
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { name: 'Email', url: 'mailto:contact@example.com', icon: 'Mail' }
];

export const personalInfo = {
  name: 'Ashraful',
  title: 'Creative Developer & Designer',
  subtitle: 'Building Digital Experiences',
  bio: 'Passionate about creating beautiful and functional digital experiences that make a difference. With expertise in modern web technologies and a keen eye for design, I transform ideas into reality.',
  email: 'contact@ashraful.dev',
  location: 'Remote',
  availability: 'Available for freelance'
};
