import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, SectionTitle } from '@/components/ui/Section'
import { useCountUp } from '@/hooks/useCountUp'
import { getIcon } from '@/utils/icons'
import { stats } from '@/data/content'

function StatCard({ value, suffix, label, icon, index }: (typeof stats)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const count = useCountUp(value, { start: inView })
  const Icon = getIcon(icon)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="glass-card group relative overflow-hidden rounded-3xl p-8 text-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-2xl text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        <Icon aria-hidden="true" />
      </span>
      <p className="text-primary mt-5 font-display text-4xl font-bold sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-mute">{label}</p>
    </motion.div>
  )
}

export function Achievements() {
  return (
    <Section id="achievements" ariaLabel="Achievements">
      <SectionTitle
        eyebrow="Achievements"
        title="Numbers that"
        highlight="tell the story"
        description="A snapshot of the dedication, iterations and passion poured into this craft."
      />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </Section>
  )
}
