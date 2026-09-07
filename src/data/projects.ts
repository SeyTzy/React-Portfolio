import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Pizza Website',
    description:
      'A modern ecommerce experience for mobile devices featuring product catalog, cart, checkout flow and admin inventory panel.',
    image: '/projects/pizza_web.png',
    categories: ['React'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    liveUrl: 'https://pizza-web-app-delta.vercel.app/',
    githubUrl: 'https://github.com/SeyTzy/pizza-web-app'
  },
   {
    title: 'E-commerce Platform',
    description:
      'A modern ecommerce experience for mobile devices featuring product catalog, cart, checkout flow and admin inventory panel.',
    image: '/projects/ecomerc.png',
    categories: ['React'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    liveUrl: 'https://e-commerce-platform-3kcb9m8eo-seytzys-projects.vercel.app',
    githubUrl: 'https://github.com/SeyTzy/E-commerce-Platform',
  },

  {
    title: 'MegaMart E-commerce',
    description:
      'A modern ecommerce experience for mobile devices featuring product catalog, cart, checkout flow and admin inventory panel.',
    image: '/projects/mega_mart.png',
    categories: ['Angular'],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Rest API'],
    liveUrl: 'https://web-final2-vyn2svycc-seytzys-projects.verel.app',
    githubUrl: 'https://github.com/SeyTzy/Web-Final2',
  },
  {
    title: 'Phone Shop',
    description:
      'A modern ecommerce experience for mobile devices featuring product catalog, cart, checkout flow and admin inventory panel.',
    image: '/projects/phon_shop.png',
    categories: ['Angular'],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://angular-mobile-shop-5vjrzntjy-seytzys-projects.vercel.app',
    githubUrl: 'https://github.com/SeyTzy/Angular-mobile-shop',
    featured: true,
  },
  {
    title: 'ASP.NET Core REST API',
    description:
      'A production-style REST API with JWT authentication, role-based authorization, repository pattern and SQL Server persistence.',
    image: '/projects/web_api.png',
    categories: ['ASP.NET'],
    technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'JWT'],
    liveUrl: 'https://seyhatfckboy.setec24.uk/swagger/index.html',
    githubUrl: 'https://github.com/SeyTzy/',
  },
 
  {
    title: 'Pizza Website UX/UI Design',
    description:
      'Designing a modern and visually appealing website for a pizza restaurant, focusing on user experience and interface design to enhance customer engagement and online ordering.',
    image: '/projects/pizaa_web_ui.png',
    categories: ['Figma'],
    technologies: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/0zkNtG7aNfVB3H9YndVujM/Food-website?node-id=0-1&t=BhVHJ6yFd3AFtu5n-1',
    githubUrl: '',
  },
  {
    title: 'ABA Mobile App UX/UI Design',
    description:
      'Designing a mobile application for ABA therapy, focusing on user experience and interface design to enhance accessibility and usability for users.',
    image: '/projects/aba_app1.jpg',
    categories: ['Figma'],
    technologies: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/jwToLuXKx6LrPpkP6BbiXX/Final-ABA-Project?node-id=259-1765&t=d6ngL1j1BopdqOly-1&starting-point-node-id=259%3A1765',
    githubUrl: '',
  },
  {
    title: 'Zendo App UX/UI Design',
    description:
      'Designing a mobile application for ABA therapy, focusing on user experience and interface design to enhance accessibility and usability for users.',
    image: '/projects/zendo_app.png',
    categories: ['Figma'],
    technologies: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/cpGbCF408gXxQbF0wMUoed/Final_UX-UI?node-id=3375-217&t=jONEaff5W5ku6LxF-1&starting-point-node-id=3454%3A288',
    githubUrl: '',
  },
  {
    title: 'Pizza Website UX/UI Design',
    description:
      'Designing a modern and visually appealing website for a pizza restaurant, focusing on user experience and interface design to enhance customer engagement and online ordering.',
    image: '/projects/pizaa_web_ui.png',
    categories: ['Figma'],
    technologies: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/0zkNtG7aNfVB3H9YndVujM/Food-website?node-id=0-1&t=BhVHJ6yFd3AFtu5n-1',
    githubUrl: '',
  },
]

export const projectFilters = ['All', 'React', 'Angular', 'ASP.NET', 'Full Stack', 'Figma'] as const
