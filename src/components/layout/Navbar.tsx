import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiFacebook, FiX, FiMenu, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import { NAV_LINKS, SOCIALS, SITE } from '@/constants/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/cn'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="glass relative flex h-9 w-[4.2rem] items-center rounded-full px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={cn(
          'flex h-7 w-7 items-center justify-center rounded-full shadow-md',
          isDark ? 'bg-primary ml-auto' : 'bg-amber-400',
        )}
      >
        {isDark ? (
          <FiMoon className="text-sm text-white" aria-hidden="true" />
        ) : (
          <FiSun className="text-sm text-white" aria-hidden="true" />
        )}
      </motion.span>
    </button>
  )
}

function SocialLinks() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      {SOCIALS.map((social) => {
        const Icon =
          social.label === 'GitHub'
            ? FiGithub
            : social.label === 'LinkedIn'
              ? FiLinkedin
              : social.label === 'Facebook'
                ? FiFacebook
                : null
        if (!Icon) return null
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-mute transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
          >
            <Icon className="text-sm" />
          </a>
        )
      })}
    </div>
  )
}

export function Navbar() {
  const ids = NAV_LINKS.map((link) => link.href.slice(1))
  const active = useActiveSection(ids)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.4 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6',
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'glass flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 sm:px-6',
            scrolled ? 'shadow-2xl shadow-primary/5' : '',
          )}
        >
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                Dev/
              </span>
              <span className="text-primary font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                Portfolio
              </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300',
                      isActive ? 'text-primary' : 'text-mute hover:text-body',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/20"
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/web_developer_cv.pdf"
              download
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 md:inline-flex"
            >
              Resume
            </a>
            <SocialLinks />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="glass flex h-10 w-10 items-center justify-center rounded-xl text-body lg:hidden"
            >
              {menuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6 sm:px-10">
              <a href="#home" onClick={() => setMenuOpen(false)} className="group flex items-center gap-2.5" aria-label="Home">
                <span className="font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                  Dev/
                </span>
                <span className="font-heading text-lg font-semibold text-primary transition-colors group-hover:text-primary">
                  Portfolio
                </span>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-body transition-colors hover:border-primary/50 hover:text-primary"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-1.5 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
                  className={cn(
                    'group flex items-center gap-3 rounded-full px-4 py-2.5 font-heading text-2xl font-bold transition-colors sm:text-3xl',
                    active === link.href
                      ? 'bg-primary/10 text-primary ring-1 ring-primary/20'
                      : 'text-body/70 hover:text-body',
                  )}
                >
                  {link.label}
                  {active === link.href && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  )}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + NAV_LINKS.length * 0.06, duration: 0.4, ease: 'easeOut' }}
              className="px-8 pb-10 sm:px-10"
            >
              <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-5">
                <div className="flex items-center gap-4">
                  {SOCIALS.map((social) => {
                    const Icon =
                      social.label === 'GitHub'
                        ? FiGithub
                        : social.label === 'LinkedIn'
                          ? FiLinkedin
                          : social.label === 'Facebook'
                            ? FiFacebook
                            : null
                    if (!Icon) return null
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="glass flex h-12 w-12 items-center justify-center rounded-full text-mute transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                      >
                        <Icon className="text-lg" />
                      </a>
                    )
                  })}
                </div>
                <a
                  href={SITE.resumeUrl}
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110"
                >
                  <FiDownload /> Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
