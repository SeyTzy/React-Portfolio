import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 2100)
    const doneTimer = window.setTimeout(() => setDone(true), 2700)
    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: hidden ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          aria-label="Loading portfolio"
          aria-busy="true"
        >
          <div className="relative flex items-center justify-center">
            <motion.span
              className="h-24 w-24 rounded-full border-4 border-primary/25 border-t-primary border-r-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute"
            >
              <span className="text-primary text-3xl font-bold tracking-tight font-display">TS</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm font-medium tracking-[0.3em] text-mute uppercase"
          >
            THOEURN SEYHAT
          </motion.p>

          <div className="mt-4 flex gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-primary"
                animate={{ opacity: [0.2, 1, 0.2], y: [0, -6, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
