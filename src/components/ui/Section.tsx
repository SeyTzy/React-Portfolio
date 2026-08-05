import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/animations/variants'
import { cn } from '@/utils/cn'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}

export function Section({ id, children, className, ariaLabel }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel ?? id} className={cn('relative py-24 sm:py-32', className)}>
      <div className="section-shell">{children}</div>
    </section>
  )
}

interface SectionTitleProps {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionTitle({ eyebrow, title, highlight, description, align = 'center' }: SectionTitleProps) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className={cn('relative z-10 mb-14 sm:mb-20', isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl')}
    >
      <motion.span
        variants={fadeUp}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] uppercase text-primary"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" aria-hidden="true" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-heading"
      >
        {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
      </motion.h2>
      {description ? (
        <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
