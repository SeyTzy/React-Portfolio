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
  role: 'Networking',
  company: 'University Coursework',
  period: '2024 — Present',
  summary:
    'Built hands-on networking knowledge through university coursework, developing skills in network configuration, troubleshooting, security, and infrastructure management.',
  highlights: [
    'Configured LAN/WAN networks, routers, switches, and IP addressing',
    'Applied TCP/IP, DHCP, DNS, and subnetting concepts',
    'Troubleshot network connectivity and performance issues',
  ],
  icon: 'network',
  },
  {
    role: 'UX/UI Designer',
    company: 'University Coursework',
    period: '2024 — 2025',
    summary:
      'Designed user-centric interfaces and conducted usability testing, focusing on creating intuitive and visually appealing digital experiences.',
    highlights: [
      'Designed wireframes and prototypes for web and mobile applications',
      'Conducted user research and usability testing to inform design decisions',
      'Collaborated with developers to ensure design feasibility and implementation',
    ],
    icon: 'code',
  },
  {
    role: 'Junior Developer (Internship)',
    company: 'School Projects & Competitions',
    period: '2024 — 2025',
    summary:
      'Started the journey into software development, learning the core principles of programming, version control and web fundamentals.',
    highlights: [
      'Learned C#, SQL and JavaScript fundamentals',
      'Built first responsive websites',
      'Participated in coding competitions',
    ],
    icon: 'zap',
  },
  {
    role: 'Studio Photographer',
    company: 'Freelance / Personal Projects',
    period: '2024 — Present',
    summary:
      'Capturing compelling visual stories through careful composition, lighting, and post-processing techniques.',
    highlights: [
      'Photographed 10+ events and portraits, delivering high-quality images to clients',
      'Utilized Adobe Photoshop and Lightroom for post-processing and retouching',
      'Developed a personal photography portfolio website to showcase work and attract clients',
    ],
    icon: 'briefcase',
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Management Information Systems (MIS)',
    school: 'SETEC Institute',
    period: '2024 — Present',
    description:
      'Bachelor\'s degree in Management Information Systems (MIS), focusing on the intersection of business and technology, with coursework in database management, systems analysis and software development.',
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
    period: '2018 — 2024',
    description:
      'Built a strong mathematical and logical foundation that sparked a lasting passion for problem solving and engineering.',
    icon: 'award',
  },
]
