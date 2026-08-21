import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  strength?: number
  type?: 'button' | 'submit'
  ariaLabel?: string
  target?: string
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  strength = 0.3,
  type = 'button',
  ariaLabel,
  target,
}: MagneticButtonProps) {
  const innerRef = useRef<HTMLSpanElement>(null)

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const inner = innerRef.current
    if (!inner) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    inner.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onLeave = () => {
    const inner = innerRef.current
    if (!inner) return
    inner.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    inner.style.transform = 'translate(0px, 0px)'
    window.setTimeout(() => {
      inner.style.transition = 'transform 0.15s ease-out'
    }, 500)
  }

  const classes = cn(
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-shadow duration-300',
    className,
  )

  const content = (
    <span ref={innerRef} className="relative z-10 inline-flex items-center gap-2 will-change-transform">
      {children}
    </span>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileTap={{ scale: 0.96 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      {content}
    </motion.button>
  )
}
