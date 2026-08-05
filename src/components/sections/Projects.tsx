import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Section, SectionTitle } from '@/components/ui/Section'
import { projects, projectFilters } from '@/data/projects'
import type { Project, ProjectCategory } from '@/types'
import { cn } from '@/utils/cn'

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            width={600}
            height={380}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-bg/40 opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span
                key={category}
                className="glass rounded-full px-3 py-1 text-[11px] font-semibold text-primary"
              >
                {category}
              </span>
            ))}
          </div>
          {project.featured && (
            <span className="glass absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white">
              Featured
            </span>
          )}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-bg/50 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FiExternalLink />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository of ${project.title}`}
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-body transition-transform duration-300 hover:scale-110"
            >
              <FiGithub />
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-glass-border bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-mute"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 border-t border-glass-border pt-5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110"
            >
              <FiExternalLink className="text-sm" /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub for ${project.title}`}
              className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-body transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              <FiGithub className="text-sm" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All')
  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <Section id="projects" ariaLabel="Featured projects">
      <SectionTitle
        eyebrow="Projects"
        title="Featured"
        highlight="work"
        description="A selection of projects that showcase my range from real-time dashboards to full school management platforms."
      />

      <div
        role="tablist"
        aria-label="Filter projects by technology"
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {projectFilters.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={filter === category}
            onClick={() => setFilter(category)}
            className={cn(
              'relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
              filter === category
                ? 'text-white'
                : 'glass text-mute hover:text-body',
            )}
          >
            {filter === category && (
              <motion.span
                layoutId="project-filter"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/30"
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
