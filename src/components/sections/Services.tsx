import { FiArrowUpRight } from 'react-icons/fi'
import { Section, SectionTitle } from '@/components/ui/Section'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'
import { getIcon } from '@/utils/icons'
import { services } from '@/data/content'

export function Services() {
  return (
    <Section id="services" ariaLabel="Services">
      <SectionTitle
        eyebrow="Services"
        title="What I can"
        highlight="do for you"
        description="End-to-end capabilities from a striking landing page to a complete, scalable platform."
      />

      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = getIcon(service.icon)
          return (
            <StaggerItem key={service.title}>
              <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-6">
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl text-white shadow-lg shadow-primary/25 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon aria-hidden="true" />
                  </span>
                  <FiArrowUpRight
                    className="text-xl text-mute opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mute">{service.description}</p>
                <span className="mt-5 block h-0.5 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
