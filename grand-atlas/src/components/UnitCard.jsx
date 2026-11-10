import { LuBath, LuBedDouble, LuRuler } from 'react-icons/lu'
import Button from './Button.jsx'
import { formatPrice } from '../data/index.js'

const statusStyles = {
  Available: 'bg-green-500',
  Reserved: 'bg-amber-500',
  Sold: 'bg-neutral-500',
}

export default function UnitCard({ unit }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl">
      <div className="relative">
        <img src={unit.image} alt={unit.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
        <span
          className={`absolute right-3 top-3 rounded-md px-3 py-1 text-sm font-medium text-white shadow ${statusStyles[unit.status]}`}
        >
          {unit.status}
        </span>
      </div>

      <ul className="flex divide-x divide-neutral-200 border-y border-neutral-200 bg-neutral-50 py-2.5 text-xs text-neutral-500">
        <li className="flex flex-1 items-center justify-center gap-1.5">
          <LuBedDouble size={16} /> {unit.bedrooms} Bedrooms
        </li>
        <li className="flex flex-1 items-center justify-center gap-1.5">
          <LuBath size={16} /> {unit.bathrooms} Bathrooms
        </li>
        <li className="flex flex-1 items-center justify-center gap-1.5">
          <LuRuler size={16} /> {unit.area}m
        </li>
      </ul>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold text-brand-700">{unit.title}</h3>
          <p className="shrink-0 text-lg font-medium text-sand">{formatPrice(unit.price)}</p>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">{unit.description}</p>
        <div className="mt-auto pt-5">
          <Button variant="outline" to={`/units/${unit.id}`} className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </article>
  )
}
