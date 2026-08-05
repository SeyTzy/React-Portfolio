import { Section, SectionTitle } from '@/components/ui/Section'
import { getIcon } from '@/utils/icons'
import { techStack } from '@/data/content'

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...techStack, ...techStack]
  return (
    <div className="group relative overflow-hidden" aria-hidden={reverse}>
      <div
        className={`flex w-max items-center gap-4 animate-marquee ${
          reverse ? '[animation-direction:reverse]' : ''
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((tech, i) => {
          const Icon = getIcon(tech.icon)
          return (
            <div
              key={`${tech.name}-${i}`}
              className="glass flex items-center gap-3 rounded-2xl border-bg/50 px-6 py-4"
            >
              <Icon className="text-2xl text-primary transition-transform duration-300 hover:scale-125 hover:text-secondary" aria-hidden="true" />
              <span className="whitespace-nowrap text-sm font-semibold">{tech.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <Section id="tech-stack" ariaLabel="Technologies I use">
      <SectionTitle
        eyebrow="Tech Stack"
        title="Powered by"
        highlight="modern tools"
        description="The technologies I reach for daily to build fast, reliable and beautiful software."
      />

      <div className="relative" aria-label="Technology marquee">
        <div className="space-y-4">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-bg sm:w-32" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-bg sm:w-32" aria-hidden="true" />
      </div>
    </Section>
  )
}
