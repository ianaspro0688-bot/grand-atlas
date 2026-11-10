import { useState } from 'react'

export default function Gallery({ main, thumbs, alt }) {
  const [current, setCurrent] = useState(main)

  return (
    <div>
      <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
        <img src={current} alt={alt} className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[2.4/1]" />
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2 sm:gap-3">
        {thumbs.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrent(src)}
            aria-label={`Show photo ${i + 1}`}
            aria-pressed={current === src}
            className={`cursor-pointer overflow-hidden rounded-md shadow-md transition ${
              current === src ? 'ring-2 ring-brand-600 ring-offset-2' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <img src={src} alt="" loading="lazy" className="aspect-[3/2] w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
