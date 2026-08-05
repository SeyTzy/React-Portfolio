import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { Section, SectionTitle } from '@/components/ui/Section'
import { getIcon } from '@/utils/icons'
import { education } from '@/data/career'

export function Education() {
  return (
    <Section id="education" ariaLabel="Education">
      <SectionTitle
        eyebrow="Education"
        title="Where I"
        highlight="learned"
        description="A strong foundation in computer science paired with relentless self-driven learning."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {education.map((item, i) => {
          const Icon = getIcon(item.icon)
          return (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="glass-card group relative flex flex-col overflow-hidden rounded-2xl p-6"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-2xl text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon aria-hidden="true" />
                </span>
                <FiArrowUpRight
                  className="text-xl text-mute opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px] group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <span className="mt-5 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                {item.period}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold leading-snug">{item.degree}</h3>
              <p className="mt-1.5 text-sm font-medium text-secondary">{item.school}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{item.description}</p>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
