export function SectionSkeleton() {
  return (
    <div className="relative py-24 sm:py-32" aria-hidden="true">
      <div className="section-shell">
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-4 sm:mb-20">
          <span className="h-6 w-40 animate-pulse rounded-full bg-primary/10" />
          <span className="h-10 w-72 max-w-full animate-pulse rounded-xl bg-primary/10 sm:h-12" />
          <span className="h-4 w-96 max-w-full animate-pulse rounded bg-primary/5" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-2xl bg-primary/5"
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
