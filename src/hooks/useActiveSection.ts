import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '')
  const idsKey = ids.join(',')

  useEffect(() => {
    const list = idsKey.split(',')
    const isBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

    const update = () => {
      let current = list[0] ?? ''
      if (isBottom()) {
        current = list[list.length - 1] ?? current
      } else {
        const probe = window.scrollY + window.innerHeight * 0.35
        for (const id of list) {
          const el = document.getElementById(id)
          if (el && el.offsetTop <= probe) {
            current = `#${id}`
          }
        }
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [idsKey])

  return active
}
