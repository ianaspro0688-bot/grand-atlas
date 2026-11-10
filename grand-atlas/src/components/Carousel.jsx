import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Scroll-snap carousel with pill pagination.
 * Children are laid out 1 / 2 / 3 per view (mobile / tablet / desktop).
 */
export default function Carousel({ children, label }) {
  const trackRef = useRef(null)
  const [pages, setPages] = useState(1)
  const [page, setPage] = useState(0)

  const measure = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setPages(Math.max(1, Math.ceil((el.scrollWidth - 4) / el.clientWidth)))
    setPage(Math.round(el.scrollLeft / el.clientWidth))
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure, children])

  const goTo = (i) => {
    const el = trackRef.current
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={measure}
        role="region"
        aria-label={label}
        className="scrollbar-none -mx-3 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div key={i} className="w-full shrink-0 snap-start px-3 md:w-1/2 lg:w-1/3">
                {child}
              </div>
            ))
          : children}
      </div>

      {pages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label={`${label} pages`}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                i === page ? 'w-10 bg-brand-700' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
