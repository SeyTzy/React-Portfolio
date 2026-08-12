import { Section, SectionTitle } from '@/components/ui/Section'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'

export function GraphicDesign() {
  return (
    <Section id="graphic-design" ariaLabel="Graphic Design work">
      <SectionTitle
        eyebrow="Design"
        title="Graphic"
        highlight="Design"
        description="Selected poster and visual design work."
      />

      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StaggerItem>
          <div className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
            <a
              href="/graphic-design.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View burger king billboard poster full size"
              className="block overflow-hidden"
            >
              <img
                src="/graphic/Billbord_Burger King-01.jpg"
                alt="Burger King billboard poster design"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>
            <div className="flex flex-1 flex-col justify-end p-5">
              <a
                href="/graphic-design.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110"
              >
                View Poster
              </a>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
            <a
              href="/burchur-design.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View house brochure poster full size"
              className="block overflow-hidden"
            >
              <img
                src="/graphic/Brochur_house-01.jpg"
                alt="House brochure poster design"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>
            <div className="flex flex-1 flex-col justify-end p-5">
              <a
                href="/burchur-design.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110"
              >
                View Brochure
              </a>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
            <a
              href="/varman-design.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View watch poster full size"
              className="block overflow-hidden"
            >
              <img
                src="/graphic/Varman_Watch-01.jpg"
                alt="Watch poster design"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>
            <div className="flex flex-1 flex-col justify-end p-5">
              <a
                href="/varman-design.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110"
              >
                View Poster
              </a>
            </div>
          </div>
        </StaggerItem>

      </Stagger>

      <div className="mt-16">
        <h3 className="font-heading text-center text-2xl font-semibold text-body">
          Studio <span className="text-primary">Photography</span>
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed text-mute">
          Selected studio photography portfolio.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/Photo_books.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110"
          >
            View Photography Portfolio
          </a>
        </div>
      </div>
    </Section>
  )
}
