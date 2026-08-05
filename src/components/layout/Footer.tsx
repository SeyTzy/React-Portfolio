import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi'
import { NAV_LINKS, SOCIALS, SITE } from '@/constants/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-glass-border">
      <div className="section-shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="Back to home">
              <span className="font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                Dev/
              </span>
              <span className="text-primary font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                Portfolio
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
              Full Stack Developer crafting elegant, high-performance web experiences. Let's build
              something exceptional together.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon =
                  social.label === 'GitHub'
                    ? FiGithub
                    : social.label === 'LinkedIn'
                      ? FiLinkedin
                      : social.label === 'Facebook'
                        ? FiFacebook
                        : FiMail
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-full text-mute transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              })}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold tracking-wider text-body uppercase">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mute transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-body uppercase">Get in Touch</h3>
            <ul className="mt-5 space-y-3 text-sm text-mute">
              <li>{SITE.location}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-primary">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-glass-border pt-8 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-mute">
            © {year} THOEURN SEYHAT. Crafted with <FiHeart className="text-primary" aria-hidden="true" /> using React & Tailwind.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="glass group flex h-11 w-11 items-center justify-center rounded-full text-mute transition-all duration-300 hover:border-primary/50 hover:text-primary"
          >
            <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
