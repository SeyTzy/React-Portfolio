import type { Service, Stat, TechLogo } from '@/types'

export const services: Service[] = [
  {
    icon: 'world',
    title: 'Web Development',
    description: 'Full-cycle web applications engineered for speed, scalability and a delightful user experience.',
  },
  {
    icon: 'code',
    title: 'Frontend Development',
    description: 'Pixel-perfect, accessible interfaces with React, TypeScript and modern CSS architecture.',
  },
  {
    icon: 'server',
    title: 'Backend Development',
    description: 'Robust APIs and business logic with ASP.NET Core, Node.js and clean layered design.',
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'Thoughtful, minimal interfaces inspired by Apple, Linear and Vercel design languages.',
  },
  {
    icon: 'api',
    title: 'API Development',
    description: 'Well-documented REST APIs with authentication, validation and predictable contracts.',
  },
  {
    icon: 'database',
    title: 'Database Design',
    description: 'Normalized schemas, efficient queries and reliable data persistence across SQL and NoSQL.',
  },
  {
    icon: 'mobile',
    title: 'Responsive Website',
    description: 'Flawless experiences on every device — from mobile to tablet, laptop and 4K displays.',
  },
  {
    icon: 'tools',
    title: 'Maintenance',
    description: 'Ongoing support, performance tuning, updates and new features for long-term success.',
  },
]

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Projects', icon: 'zap' },
  { value: 2, suffix: '+', label: 'Years Learning', icon: 'graduation' },
  { value: 10, suffix: '+', label: 'Technologies', icon: 'components' },
  { value: 100, suffix: '%', label: 'Responsive', icon: 'check' },
]

export const techStack: TechLogo[] = [
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Angular', icon: 'angular' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'ASP.NET Core', icon: 'dotnet' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'SQL Server', icon: 'sqlserver' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'VS Code', icon: 'vscode' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Postman', icon: 'postman' },
  { name: 'Vite', icon: 'vite' },
]
