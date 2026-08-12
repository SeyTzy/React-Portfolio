import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    blurb: 'Pixel-perfect, responsive interfaces',
    skills: [
      { name: 'HTML5', level: 95, icon: 'html' },
      { name: 'CSS3', level: 92, icon: 'css' },
      { name: 'JavaScript', level: 90, icon: 'javascript' },
      { name: 'TypeScript', level: 88, icon: 'typescript' },
      { name: 'React', level: 92, icon: 'react' },
      { name: 'Angular', level: 80, icon: 'angular' },
      { name: 'Tailwind', level: 94, icon: 'tailwind' },
      { name: 'Bootstrap', level: 90, icon: 'bootstrap' },
    ],
  },
  {
    title: 'Backend',
    blurb: 'Robust APIs and services',
    skills: [
      { name: 'ASP.NET Core', level: 86, icon: 'dotnet' },
      { name: 'Laravel', level: 80, icon: 'laravel' },
      { name: 'Node.js', level: 84, icon: 'nodejs' },
      { name: 'Express', level: 82, icon: 'express' },
    ],
  },
  {
    title: 'Database',
    blurb: 'Reliable data architecture',
    skills: [
      { name: 'SQL Server', level: 85, icon: 'sqlserver' },
      { name: 'MySQL', level: 84, icon: 'mysql' },
      { name: 'MongoDB', level: 78, icon: 'mongodb' },
      { name: 'PostgreSQL', level: 80, icon: 'postgresql' },
    ],
  },
  {
    title: 'Tools',
    blurb: 'Modern development workflow',
    skills: [
      { name: 'Git', level: 88, icon: 'git' },
      { name: 'GitHub', level: 90, icon: 'github' },
      { name: 'VS Code', level: 95, icon: 'vscode' },
      { name: 'Visual Studio', level: 86, icon: 'visualstudio' },
      { name: 'Figma', level: 80, icon: 'figma' },
      { name: 'Postman', level: 88, icon: 'postman' },
    ],
  },
]
