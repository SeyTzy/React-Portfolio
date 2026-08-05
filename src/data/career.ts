import type { ExperienceItem, EducationItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance / Personal Projects',
    period: '2024 — Present',
    summary:
      'Building end-to-end web applications from database schema to polished UI, delivering production-ready features for real-world use cases.',
    highlights: [
      'Designed and shipped 15+ full stack applications',
      'Built REST APIs with ASP.NET Core and Node.js',
      'Crafted responsive UIs with React and Tailwind CSS',
    ],
    icon: 'briefcase',
  },
  {
    role: 'Frontend Developer',
    company: 'University Coursework',
    period: '2024 — Present',
    summary:
      'Developed interactive user interfaces and collaborated on team-based projects, strengthening React, TypeScript and UI engineering fundamentals.',
    highlights: [
      'Implemented reusable component libraries',
      'Applied state management and routing patterns',
      'Improved accessibility and performance audits',
    ],
    icon: 'code',
  },
  {
    role: 'Junior Developer (Internship)',
    company: 'School Projects & Competitions',
    period: '2022 — 2023',
    summary:
      'Started the journey into software development, learning the core principles of programming, version control and web fundamentals.',
    highlights: [
      'Learned C#, SQL and JavaScript fundamentals',
      'Built first responsive websites',
      'Participated in coding competitions',
    ],
    icon: 'zap',
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Management Information Systems (MIS)',
    school: 'SETEC Institute',
    period: '2024 — Present',
    description:
      'Pursuing a degree in MIS, focusing on the intersection of business and technology, with coursework in database management, systems analysis and software development.',
    icon: 'graduation',
  },
  {
    degree: 'Web Development',
    school: 'Self-Directed Learning',
    period: '2023 — Present',
    description:
      'Advanced training in Angular, React, TypeScript, ASP.NET Core and cloud fundamentals through hands-on projects and online courses.',
    icon: 'code',
  },
  {
    degree: 'Computer Science Fundamentals',
    school: 'High School',
    period: '2019 — 2024',
    description:
      'Built a strong mathematical and logical foundation that sparked a lasting passion for problem solving and engineering.',
    icon: 'award',
  },
]
