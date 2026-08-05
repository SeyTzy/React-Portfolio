import { useEffect, useRef, useState } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const glow = glowRef.current
    if (!glow) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf: number

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      glow.style.transform = `translate(${x - 300}px, ${y - 300}px)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full bg-primary/20 opacity-25 will-change-transform"
      style={{ filter: 'blur(90px)' }}
    />
  )
}
