import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { gsap } from '@/animations/gsap'

interface GsapParallaxProps {
  children: ReactNode
  className?: string
  amount?: number
}

export function GsapParallax({ children, className, amount = 90 }: GsapParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const tween = gsap.fromTo(
      element,
      { y: amount },
      {
        y: -amount,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [amount])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
