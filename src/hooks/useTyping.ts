import { useEffect, useState } from 'react'

export function useTyping(
  phrases: readonly string[],
  { typeSpeed = 65, deleteSpeed = 38, pause = 1800 }: { typeSpeed?: number; deleteSpeed?: number; pause?: number } = {},
) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[index % phrases.length]
    let timeout: number

    if (!deleting && text === phrase) {
      timeout = window.setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
    } else {
      timeout = window.setTimeout(
        () => {
          setText((prev) =>
            deleting ? phrase.slice(0, prev.length - 1) : phrase.slice(0, prev.length + 1),
          )
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => window.clearTimeout(timeout)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause])

  return text
}
