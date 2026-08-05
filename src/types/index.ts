import type { IconKey } from '@/utils/icons'

export interface Skill {
  name: string
  level: number
  icon: IconKey
}

export interface SkillCategory {
  title: string
  blurb: string
  skills: Skill[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
  icon: IconKey
}

export interface EducationItem {
  degree: string
  school: string
  period: string
  description: string
  icon: IconKey
}

export type ProjectCategory = 'React' | 'Angular' | 'ASP.NET' | 'Full Stack' | 'Figma' | 'All'

export interface Project {
  title: string
  description: string
  image: string
  categories: Exclude<ProjectCategory, 'All'>[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
}

export interface Service {
  icon: IconKey
  title: string
  description: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  icon: IconKey
}

export interface TechLogo {
  name: string
  icon: IconKey
}
