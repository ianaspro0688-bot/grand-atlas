import { useMemo, useState } from 'react'
import { LuChevronDown, LuSearch } from 'react-icons/lu'
import PageHero from '../components/PageHero.jsx'
import UnitCard from '../components/UnitCard.jsx'
import Button from '../components/Button.jsx'
import useTitle from '../hooks/useTitle.js'
import { developers, projects, units, zones } from '../data/index.js'
import heroImage from '../assets/images/units-hero.jpg'

const priceRanges = [
  { value: 'lt5', label: 'Under 5M EGP', test: (p) => p < 5_000_000 },
  { value: '5-20', label: '5M – 20M EGP', test: (p) => p >= 5_000_000 && p <= 20_000_000 },
  { value: 'gt20', label: 'Above 20M EGP', test: (p) => p > 20_000_000 },
]

const unique = (arr) => [...new Set(arr)]

const filterOptions = {
  bedrooms: [1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: n === 5 ? '5+ Bedrooms' : `${n} Bedroom${n > 1 ? 's' : ''}` })),
  developer: unique(developers.map((d) => d.subtitle === 'Developments' ? d.name : d.subtitle)).map((v) => ({ value: v, label: v })),
  zone: zones.map((z) => ({ value: z.name, label: z.name })),
  project: unique(projects.map((p) => p.name)).map((v) => ({ value: v, label: v })),
  status: ['Available', 'Reserved', 'Sold'].map((v) => ({ value: v, label: v })),
  price: priceRanges.map(({ value, label }) => ({ value, label })),
}

const empty = { q: '', bedrooms: '', developer: '', zone: '', project: '', status: '', price: '' }

function matches(unit, f) {
  if (f.q) {
    const hay = `${unit.title} ${unit.description} ${unit.zone} ${unit.developer}`.toLowerCase()
    if (!hay.includes(f.q.trim().toLowerCase())) return false
  }
  if (f.bedrooms) {
    const n = Number(f.bedrooms)
    if (n === 5 ? unit.bedrooms < 5 : unit.bedrooms !== n) return false
  }
  if (f.developer && unit.developer !== f.developer) return false
  if (f.zone && unit.zone !== f.zone) return false
  if (f.project && unit.project !== f.project) return false
  if (f.status && unit.status !== f.status) return false
  if (f.price && !priceRanges.find((r) => r.value === f.price).test(unit.price)) return false
  return true
}

function Select({ name, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        aria-label={placeholder}
        className={`h-full w-full cursor-pointer appearance-none bg-transparent px-4 py-3.5 pr-9 text-sm focus:outline-none focus-visible:bg-brand-50 ${
          value ? 'text-neutral-800' : 'text-neutral-500'
        }`}
      >
        <option value="">{placeholder}</option>
        {filterOptions[name].map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <LuChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" />
    </div>
  )
}

export default function Units() {
  useTitle('Units')
  const [form, setForm] = useState(empty)
  const [applied, setApplied] = useState(empty)

  const results = useMemo(() => units.filter((u) => matches(u, applied)), [applied])
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    setApplied(form)
  }
  const reset = () => {
    setForm(empty)
    setApplied(empty)
  }

  return (
    <>
      <PageHero
        image={heroImage}
        title={
          <>
            Where Visionary Design
            <br className="hidden md:block" /> Meets Daily Life
          </>
        }
        subtitle="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <form onSubmit={onSubmit} role="search" aria-label="Search properties">
          <div className="grid divide-y divide-brand-500/30 overflow-hidden rounded-md border border-brand-500/70 bg-white sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(6,1fr)] lg:divide-x lg:divide-y-0">
            <div className="relative">
              <input
                type="search"
                name="q"
                value={form.q}
                onChange={onChange}
                placeholder="Search Property"
                aria-label="Search property"
                className="h-full w-full bg-transparent px-4 py-3.5 pr-10 text-sm placeholder:text-neutral-400 focus:outline-none focus-visible:bg-brand-50"
              />
              <LuSearch size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            </div>
            <Select name="bedrooms" placeholder="Bedrooms" value={form.bedrooms} onChange={onChange} />
            <Select name="developer" placeholder="Developer" value={form.developer} onChange={onChange} />
            <Select name="zone" placeholder="Zone" value={form.zone} onChange={onChange} />
            <Select name="project" placeholder="Projects" value={form.project} onChange={onChange} />
            <Select name="status" placeholder="Status" value={form.status} onChange={onChange} />
            <Select name="price" placeholder="Price Range" value={form.price} onChange={onChange} />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button type="submit" variant="dark" size="lg" className="min-w-64">Search</Button>
            {JSON.stringify(applied) !== JSON.stringify(empty) && (
              <button
                type="button"
                onClick={reset}
                className="cursor-pointer px-3 py-2 text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </form>

        <p className="mt-10 text-sm text-neutral-500" aria-live="polite">
          {results.length} {results.length === 1 ? 'property' : 'properties'} found
        </p>

        {results.length ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {results.map((u) => (
              <UnitCard key={u.id} unit={u} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-neutral-300 py-20 text-center text-neutral-500">
            No properties match your search. Try adjusting the filters.
          </div>
        )}
      </section>
    </>
  )
}
