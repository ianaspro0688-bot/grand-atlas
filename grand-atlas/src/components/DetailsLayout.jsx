import { LuMapPin } from 'react-icons/lu'

/** Shared "heading + At a glance + Overview" block used by unit & project pages. */
export default function DetailsLayout({ title, location, aside, facts, overview, actions }) {
  return (
    <>
      <div className="mt-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-brand-700 md:text-3xl">{title}</h2>
          <p className="mt-2 flex items-center gap-1.5 text-neutral-500">
            <LuMapPin size={16} className="shrink-0" /> {location}
          </p>
        </div>
        {aside}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
        <section>
          <h3 className="text-lg font-bold text-neutral-900">At a glance</h3>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-lg text-neutral-500 marker:text-neutral-400">
            {facts.map(([k, v]) => (
              <li key={k}>
                {k}: {v}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold text-neutral-900">Overview</h3>
          <p className="mt-5 text-lg leading-relaxed text-neutral-500">{overview}</p>
          {actions}
        </section>
      </div>
    </>
  )
}
