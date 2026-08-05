import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiFacebook, FiCheckCircle } from 'react-icons/fi'
import { Section, SectionTitle } from '@/components/ui/Section'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { staggerContainer, staggerItem, viewport } from '@/animations/variants'
import { SITE } from '@/constants/site'
import { cn } from '@/utils/cn'

const CONTACT_INFO = [
  { icon: FiMapPin, label: 'Location', value: SITE.location, href: undefined },
  { icon: FiPhone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
  { icon: FiMail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: FiGithub, label: 'GitHub', value: 'https://github.com/SeyTzy', href: SITE.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/thoeurn-seyhat-19123a402/?trk=public-profile-join-page', href: SITE.linkedin },
  { icon: FiFacebook, label: 'Facebook', value: 'https://web.facebook.com/sey.hat.199157', href: SITE.facebook },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({})

  const validate = () => {
    const next: Partial<typeof initialForm> = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email'
    if (!form.message.trim()) next.message = 'Please write a message'
    return next
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSent(true)
      setForm(initialForm)
      window.setTimeout(() => setSent(false), 5000)
    }
  }

  const inputClasses = (hasError?: string) =>
    cn(
      'w-full rounded-xl border bg-surface/60 px-4 py-3 text-sm text-body placeholder:text-mute/70 outline-none backdrop-blur transition-all duration-300 focus:border-primary/60 focus:ring-2 focus:ring-primary/20',
      hasError ? 'border-red-400/60' : 'border-glass-border',
    )

  return (
    <Section id="contact" ariaLabel="Contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something"
        highlight="amazing"
        description="Have a project in mind or just want to say hi? My inbox is always open I'll get back to you within 24 hours."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="space-y-4"
        >
          {CONTACT_INFO.map((item) => (
            <motion.a
              key={item.label}
              variants={staggerItem}
              href={item.href}
              {...(!item.href ? { 'aria-disabled': true } : {})}
              className={cn(
                'glass-card group flex items-center gap-4 rounded-2xl p-5',
                item.href ? '' : 'pointer-events-none',
              )}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-xl text-primary transition-transform duration-300 group-hover:scale-110">
                <item.icon aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs text-mute uppercase">{item.label}</p>
                <p className="mt-0.5 text-sm font-semibold break-all">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          onSubmit={onSubmit}
          noValidate
          className="glass-card relative overflow-hidden rounded-3xl p-7 sm:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-primary"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div variants={staggerItem}>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wider uppercase">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses(errors.name)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </motion.div>

            <motion.div variants={staggerItem}>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wider uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses(errors.email)}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="mt-5">
            <label htmlFor="subject" className="mb-2 block text-xs font-semibold tracking-wider uppercase">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Project inquiry"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={inputClasses()}
            />
          </motion.div>

          <motion.div variants={staggerItem} className="mt-5">
            <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wider uppercase">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={cn(inputClasses(errors.message), 'resize-none')}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
          </motion.div>

          <motion.div variants={staggerItem} className="mt-7 flex items-center gap-4">
            <MagneticButton type="submit" className="bg-primary text-white shadow-xl shadow-primary/30">
              <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              Send Message
            </MagneticButton>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={sent ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 text-sm font-medium text-emerald-500"
              role="status"
            >
              <FiCheckCircle /> Message sent!
            </motion.p>
          </motion.div>
        </motion.form>
      </div>
    </Section>
  )
}
