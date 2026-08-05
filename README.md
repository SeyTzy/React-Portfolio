# THOEURN SEYHAT — Developer Portfolio

A modern, premium, high-performance developer portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP and React Icons.

## Features

- **Dark mode by default** with an optional light-mode toggle (persisted)
- **Glassmorphism + solid accents** — Apple / Linear / Vercel-inspired design
- **11 sections**: Hero, About, Skills, Experience, Education, Projects, Services, Achievements, Tech Stack, Contact, Footer
- **Animations**: Framer Motion page/scroll reveals, GSAP parallax, mouse-follower glow, floating particles, magnetic buttons, loading screen, typing effect, animated counters, marquee
- **Projects**: filterable 3D glass cards (All / React / Angular / ASP.NET / Full Stack)
- **Extras**: scroll-progress bar, back-to-top button, animated mobile menu, active-section nav highlight, loading skeletons, lazy-loaded sections, code-split vendor bundles
- **SEO**: meta tags, Open Graph, Twitter cards, JSON-LD structured data
- **Accessibility**: ARIA labels, keyboard-friendly controls, reduced-motion support

## Tech Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4 (`@theme` design tokens)
- Framer Motion (variants, layout animations, AnimatePresence)
- GSAP (ScrollTrigger parallax)
- React Icons (Simple Icons / Tabler / Feather)

## Getting Started

```bash
npm install
npm run dev        # start dev server
npm run build      # type-check + production build
npm run preview    # preview production build
npm run lint       # oxlint
```

## Project Structure

```
src/
├── components/
│   ├── effects/    # cursor glow, particles, blobs, scroll progress, parallax
│   ├── layout/     # navbar, mobile menu, footer, loading screen
│   ├── sections/   # one file per page section
│   └── ui/         # Section, Reveal, MagneticButton, skeletons
├── animations/     # framer-motion variants + GSAP setup
├── context/        # theme context
├── data/           # skills, projects, experience, content
├── hooks/          # useTheme, useTyping, useCountUp, useActiveSection
├── constants/      # site config, nav links, socials
├── styles/         # global CSS + Tailwind theme
├── types/          # shared TypeScript interfaces
└── utils/          # cn, icon registry
```

## Customization

- Edit personal details in `src/constants/site.ts`
- Update resume at `public/resume.pdf`
- Swap project/certificate screenshots in `public/projects/` and `public/certificates/`
- Adjust the theme palette in `src/styles/index.css` (`@theme` block)
