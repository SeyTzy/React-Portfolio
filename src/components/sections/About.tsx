import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiAward, FiCpu, FiBookOpen } from 'react-icons/fi'
import { Section, SectionTitle } from '@/components/ui/Section'
import { useCountUp } from '@/hooks/useCountUp'
import { fadeUp, viewport } from '@/animations/variants'
import { SITE } from '@/constants/site'
import type { IconType } from 'react-icons'

interface MiniStatProps {
  icon: IconType
  label: string
  value: string
  index: number
}

function MiniStat({ icon: Icon, label, value, index }: MiniStatProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.08}
      className="glass-card group flex items-center gap-3 rounded-2xl p-4"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-lg text-primary transition-transform duration-300 group-hover:scale-110">
        <Icon aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold">{value}</p>
        <p className="text-xs text-mute">{label}</p>
      </div>
    </motion.div>
  )
}

function Counters() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const projects = useCountUp(20, { start: inView })
  const years = useCountUp(2, { start: inView })
  const techs = useCountUp(10, { start: inView })

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4">
      <Counter value={projects} label="Projects" />
      <Counter value={years} label="Years Coding" />
      <Counter value={techs} label="Technologies" />
    </div>
  )
}

function Counter({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass-card rounded-2xl p-4 text-center"
    >
      <p className="text-primary font-display text-3xl font-bold sm:text-4xl">{value}+</p>
      <p className="mt-1 text-xs text-mute">{label}</p>
    </motion.div>
  )
}

export function About() {
  return (
    <Section id="about" ariaLabel="About me">
      <SectionTitle
        eyebrow="About Me"
        title="Turning ideas into"
        highlight="digital reality"
        description="A passionate developer who believes great software is born at the intersection of engineering precision and design elegance."
      />

      <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} className="space-y-6">
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-mute">
            Hello! I'm{' '}
            <span className="font-semibold text-body">THOEURN SEYHAT</span>, a Full Stack Developer
            based in {SITE.location}. I'm currently pursuing Software Engineering at{' '}
            <span className="font-semibold text-body">SETEC Institute</span>, where I've transformed a
            deep curiosity for technology into a craft.
          </motion.p>
          <motion.p variants={fadeUp} className="leading-relaxed text-mute">
            My journey spans building complete products — from designing database schemas and REST
            APIs in ASP.NET Core and Node.js, to crafting pixel-perfect, animated interfaces with
            React, TypeScript and Tailwind CSS. I obsess over the small details that make interfaces
            feel premium: fluid motion, thoughtful spacing and buttery performance.
          </motion.p>
          <motion.p variants={fadeUp} className="leading-relaxed text-mute">
            Beyond code, I'm driven by continuous learning. Every project is an opportunity to push
            my standards higher and deliver experiences people genuinely enjoy using.
          </motion.p>

          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              <FiBookOpen className="text-primary" aria-hidden="true" /> Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Web Design', 'Open Source', 'UI Animation', 'Cloud', 'Photography', 'Gaming', 'Tech Blogs'].map(
                (interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-glass-border bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-mute transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                  >
                    {interest}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
            <MiniStat icon={FiMapPin} label="Location" value="Phnom Penh, Cambodia" index={0} />
            <MiniStat icon={FiMail} label="Email" value={SITE.email} index={1} />
            <MiniStat icon={FiCpu} label="Focus" value="Full Stack Web" index={2} />
            <MiniStat icon={FiAward} label="Languages" value="English, Khmer" index={3} />
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewport} className="space-y-6">
          <Counters />

          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6">
            <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase">Language Proficiency</h3>
            <div className="space-y-5">
              {[
                { lang: 'Khmer', level: 100, note: 'Native' },
                { lang: 'English', level: 78, note: 'Professional' },
              ].map((item) => (
                <div key={item.lang}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{item.lang}</span>
                    <span className="text-mute">
                      {item.note} · {item.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-primary/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={viewport}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl border border-primary/40 p-[1.5px]"
          >
            <div className="rounded-2xl bg-bg p-6">
              <p className="font-display text-lg leading-relaxed text-mute">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">— Steve Jobs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
