import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Phone Shop',
    description:
      'A modern ecommerce experience for mobile devices featuring product catalog, cart, checkout flow and admin inventory panel.',
    image: '/projects/phone-shop.svg',
    categories: ['Angular'],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://angular-mobile-shop-5vjrzntjy-seytzys-projects.vercel.app',
    githubUrl: 'https://github.com/SeyTzy/Angular-mobile-shop',
    featured: true,
  },
  {
    title: 'Student Management System',
    description:
      'A full CRUD application for managing student records with search, filtering, pagination and beautiful reporting tables.',
    image: '/projects/student-mgmt.svg',
    categories: ['Angular'],
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'REST API'],
    liveUrl: 'https://school-manangement-crud-1t94k8f81-seytzys-projects.vercel.app',
    githubUrl: 'https://github.com/SeyTzy/School-Manangement-Crud',
  },
  {
    title: 'ASP.NET Core REST API',
    description:
      'A production-style REST API with JWT authentication, role-based authorization, repository pattern and SQL Server persistence.',
    image: '/projects/api.svg',
    categories: ['ASP.NET'],
    technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'JWT'],
    liveUrl: 'https://seyhatfckboy.setec24.uk/swagger/index.html',
    githubUrl: 'https://github.com/SeyTzy/',
  },
  {
    title: 'Portfolio Website',
    description:
      'This premium portfolio — a high-performance, animated showcase built with React, Vite, Tailwind, GSAP and Framer Motion.',
    image: '/projects/portfolio.svg',
    categories: ['React'],
    technologies: ['HTML', 'CSS', 'JavaScript',],
    liveUrl: 'https://portfolio-v1-5nql11omh-seytzys-projects.vercel.app',
    githubUrl: 'https://github.com/SeyTzy/',
  },
  {
    title: 'E-commerce Platform',
    description:
      'A modern ecommerce experience for mobile devices featuring product catalog, cart, checkout flow and admin inventory panel.',
    image: '/projects/inventrack.svg',
    categories: ['React'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    liveUrl: 'https://e-commerce-platform-3kcb9m8eo-seytzys-projects.vercel.app',
    githubUrl: 'https://github.com/SeyTzy/E-commerce-Platform',
  },

  {
    title: 'MegaMart E-commerce',
    description:
      'A modern ecommerce experience for mobile devices featuring product catalog, cart, checkout flow and admin inventory panel.',
    image: '/projects/api.svg',
    categories: ['Full Stack'],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Rest API'],
    liveUrl: 'https://web-final2-vyn2svycc-seytzys-projects.verel.app',
    githubUrl: 'https://github.com/SeyTzy/Web-Final2',
  },
  {
    title: 'ABA Mobile App UX/UI Design',
    description:
      'Designing a mobile application for ABA therapy, focusing on user experience and interface design to enhance accessibility and usability for users.',
    image: '/projects/portfolio.svg',
    categories: ['Figma'],
    technologies: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/jwToLuXKx6LrPpkP6BbiXX/Final-ABA-Project?node-id=259-1765&t=d6ngL1j1BopdqOly-1&starting-point-node-id=259%3A1765',
    githubUrl: '',
  },
  {
    title: 'Zendo App UX/UI Design',
    description:
      'Designing a mobile application for ABA therapy, focusing on user experience and interface design to enhance accessibility and usability for users.',
    image: '/projects/portfolio.svg',
    categories: ['Figma'],
    technologies: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/cpGbCF408gXxQbF0wMUoed/Final_UX-UI?node-id=3375-217&t=jONEaff5W5ku6LxF-1&starting-point-node-id=3454%3A288',
    githubUrl: '',
  },
]

export const projectFilters = ['All', 'React', 'Angular', 'ASP.NET', 'Full Stack', 'Figma'] as const
