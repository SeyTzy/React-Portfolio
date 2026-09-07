import { Section, SectionTitle } from '@/components/ui/Section'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'

export function GraphicDesign() {
  return (
    <Section id="graphic-design" ariaLabel="Graphic Design work">
      <SectionTitle
        eyebrow="Interior Design"
        title="Graphic"
        highlight="Design & Studio Photography Portfolio"
        description="Click the button below to view my graphic design and studio photography portfolio, showcasing my creative work and visual storytelling skills."
      />
      <div className="mt-16">

        <div className="mt-8 flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/1DWa85IT5d47k5tUWwcOlNXGhWr-gKxI9?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110"
          >
            View My Graphic Design & Studio Photography Work
          </a>
        </div>
      </div>
    </Section>
  )
}
