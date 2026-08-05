export function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="blob animate-blob top-[-10%] left-[-8%] h-[42rem] w-[42rem] bg-primary/20 dark:bg-primary/25" />
      <div className="blob animate-blob top-[35%] right-[-12%] h-[38rem] w-[38rem] bg-accent/20 dark:bg-accent/25 [animation-delay:-6s]" />
      <div className="blob animate-blob bottom-[-15%] left-[25%] h-[40rem] w-[40rem] bg-secondary/15 dark:bg-secondary/20 [animation-delay:-12s]" />
    </div>
  )
}
