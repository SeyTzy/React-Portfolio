import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function animateTextReveal(selector: string, scope: Element) {
  const elements = scope.querySelectorAll(selector)
  elements.forEach((el) => {
    const words = (el as HTMLElement).innerText.split(' ')
    const html = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="reveal-word inline-block translate-y-full opacity-0">${word}</span></span>`,
      )
      .join(' ')
    el.innerHTML = html

    gsap.to(el.querySelectorAll('.reveal-word'), {
      y: 0,
      opacity: 1,
      stagger: 0.04,
      duration: 0.9,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    })
  })
}

export function createParallax(trigger: Element, target: Element, amount = 80) {
  return gsap.fromTo(
    target,
    { y: amount },
    {
      y: -amount,
      ease: 'none',
      scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
    },
  )
}
