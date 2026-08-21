export const SITE = {
  name: 'THOEURN SEYHAT',
  title: 'Full Stack Developer',
  email: 'thoeurnseyhat@gmail.com',
  phone: '+855 99 649 877',
  location: 'Phnom Penh, Cambodia',
  resumeUrl: '/thoeurn_seyhat_cv.pdf',
  github: 'https://github.com/SeyTzy',
  linkedin: 'https://www.linkedin.com/in/thoeurn-seyhat-19123a402/?trk=public-profile-join-page',
  facebook: 'https://web.facebook.com/sey.hat.199157',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIALS = [
  { label: 'GitHub', href: SITE.github },
  { label: 'LinkedIn', href: SITE.linkedin },
  { label: 'Facebook', href: SITE.facebook },
  { label: 'Email', href: `mailto:${SITE.email}` },
] as const
