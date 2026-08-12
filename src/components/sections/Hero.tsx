import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import profileImg from '@/assets/my_pf.jpg'
import { GsapParallax } from '@/components/effects/GsapParallax'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { useTyping } from '@/hooks/useTyping'
import { wordReveal } from '@/animations/variants'
import { SITE } from '@/constants/site'

const ROLES = ['Full Stack Developer', 'UX/UI Designer', 'ASP.NET Core Developer', 'Graphic Designer']

function HeroImage() {
  return (
    <GsapParallax className="relative">
      <div className="relative mx-auto w-64 sm:w-72 lg:w-[24rem]">
      <motion.div
        className="absolute -inset-6 rounded-full bg-primary/40 opacity-60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-full border-2 border-white/10 shadow-2xl shadow-primary/20">
        <img
          src={profileImg}
          alt="Portrait of THOEURN SEYHAT"
          width={512}
          height={512}
          loading="eager"
          decoding="async"
          className="aspect-square w-full object-cover"
        />
        <div className="absolute inset-0 rounded-full bg-primary/10" />
      </div>
      <motion.div
        className="glass absolute -top-3 -left-6 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold sm:-left-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
      </motion.div>
      <motion.div
        className="glass absolute -right-4 bottom-8 flex items-center gap-2 rounded-2xl px-4 py-3 sm:-right-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
          <FiGithub />
        </span>
        <div>
          <p className="text-xs font-semibold">Open Source</p>
          <p className="text-[11px] text-mute">Building with care</p>
        </div>
      </motion.div>
      </div>
    </GsapParallax>
  )
}

export function Hero() {
  const typed = useTyping(ROLES)

  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="section-shell relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            variants={wordReveal}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            Welcome to my portfolio
          </motion.p>

          <h1 className="font-heading text-4xl leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {['THOEURN', 'SEYHAT'].map((word, i) => (
              <motion.span
                key={word}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
                custom={0.3 + i * 0.12}
                className={i === 1 ? 'text-primary inline-block' : 'inline-block'}
              >
                {word}
                {i === 0 ? ' ' : ''}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-4 flex items-center gap-2 font-display text-xl font-medium sm:text-2xl"
          >
            <span className="text-mute">I'm a</span>
            <span className="text-primary font-semibold">
              {typed}
              <span className="ml-0.5 inline-block h-[1.1em] w-[3px] animate-pulse rounded bg-primary align-middle" aria-hidden="true" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
          >
            I craft elegant, high-performance web applications with a meticulous eye for design —
            blending clean architecture, modern technologies and premium user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contact"
              className="bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40"
            >
              Hire Me <FiArrowRight className="transition-transform duration-300" />
            </MagneticButton>

            <MagneticButton
              href="/web_developer_cv.pdf"
              className="glass text-body"
            >
              <FiDownload /> Download CV
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex items-center gap-8 border-t border-glass-border pt-6"
          >
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-sm text-mute transition-colors hover:text-primary"
            >
              <FiGithub className="text-lg" /> GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-sm text-mute transition-colors hover:text-primary"
            >
              <FiLinkedin className="text-lg" /> LinkedIn
            </a>
          </motion.div>
        </div>

        <HeroImage />
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-mute/40 p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-primary"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
