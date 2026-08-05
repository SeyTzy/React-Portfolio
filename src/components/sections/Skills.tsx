import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, SectionTitle } from '@/components/ui/Section'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'
import { getIcon } from '@/utils/icons'
import { skillCategories } from '@/data/skills'
import type { Skill } from '@/types'

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = getIcon(skill.icon)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 },
        },
      }}
      className="glass-card group relative overflow-hidden rounded-2xl p-5"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-primary/30 blur-2xl opacity-0 transition-opacity duration-500"
        animate={{ opacity: hovered ? 1 : 0 }}
      />

      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-2xl text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-secondary">
          <Icon aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold text-mute">
          {skill.level}
          <span className="text-xs">%</span>
        </span>
      </div>

      <h3 className="mt-4 font-semibold">{skill.name}</h3>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + index * 0.05 }}
          className="relative h-full rounded-full bg-primary"
        >
          <span className="absolute inset-0 animate-pulse-glow bg-white/30 blur-[2px]" />
        </motion.div>
      </div>

      <div
        className="mt-3 h-6 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="flex gap-1.5"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="h-1 w-6 rounded-full"
              style={{
                background:
                  i < Math.round((skill.level / 100) * 5)
                    ? '#3b82f6'
                    : 'rgba(148,163,184,0.2)',
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills">
      <SectionTitle
        eyebrow="Skills"
        title="My technical"
        highlight="arsenal"
        description="A curated toolkit refined through real projects grouped by the areas I love to work in."
      />

      <Stagger className="grid gap-10">
        {skillCategories.map((category) => (
          <StaggerItem key={category.title}>
            <div className="glass-card group rounded-3xl p-6 sm:p-8">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <h3 className="flex items-center gap-3 font-heading text-xl font-semibold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg text-white shadow-lg shadow-primary/25">
                    {category.title.charAt(0)}
                  </span>
                  {category.title}
                </h3>
                <p className="text-sm text-mute">{category.blurb}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
