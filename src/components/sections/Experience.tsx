import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { Section, SectionTitle } from '@/components/ui/Section'
import { getIcon } from '@/utils/icons'
import { experience } from '@/data/career'

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience">
      <SectionTitle
        eyebrow="Experience"
        title="My professional"
        highlight="journey"
        description="Every role sharpened my craft from first line of code to production-grade full stack applications."
      />

      <div className="relative mx-auto max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-5 w-px bg-primary/40 sm:left-6"
        />

        <div className="space-y-10">
          {experience.map((item, i) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="group relative pl-16 sm:pl-20"
              >
                <span className="glass absolute top-1 left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full text-lg text-primary transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/30 sm:left-1">
                  <Icon aria-hidden="true" />
                </span>

                <div className="glass-card rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/15 px-3.5 py-1 text-xs font-semibold text-primary ring-1 ring-primary/25">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-glass-border px-3 py-1 text-xs font-medium text-mute">
                      {item.company}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold transition-colors group-hover:text-primary">
                    {item.role}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mute">{item.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-mute">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
