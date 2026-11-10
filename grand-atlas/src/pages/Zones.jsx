import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import useTitle from '../hooks/useTitle.js'
import { projects, zones } from '../data/index.js'
import heroImage from '../assets/images/zones-hero.jpg'

export default function Zones() {
  useTitle('Zones')

  return (
    <>
      <PageHero
        image={heroImage}
        title={
          <>
            Destinations Defined by
            <br className="hidden md:block" /> Distinction
          </>
        }
        subtitle="From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {zones.map((zone) => {
            const count = projects.filter((p) => p.zoneId === zone.id).length
            return (
              <Link
                key={zone.id}
                to={`/zones/${zone.id}`}
                className="group relative block overflow-hidden rounded-xl shadow-md ring-1 ring-black/5"
              >
                <img
                  src={zone.image}
                  alt={zone.name}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent p-4 pt-12 text-white opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                  <p className="font-serif text-lg font-semibold">{zone.name}</p>
                  <p className="text-xs text-white/80">{count} projects</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
