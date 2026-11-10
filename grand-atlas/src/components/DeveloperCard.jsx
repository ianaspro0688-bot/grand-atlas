import Button from './Button.jsx'
import DeveloperBadge from './DeveloperBadge.jsx'

export default function DeveloperCard({ developer, cta = 'View Projects', to }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-white p-3 shadow-lg ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-xl shadow-md">
        <img
          src={developer.image}
          alt={`${developer.name} — ${developer.location}`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
        <span className="absolute right-3 top-3 rounded-sm bg-brand-700 px-3 py-0.5 text-xs font-medium text-white">
          {developer.location}
        </span>
      </div>
      <div className="px-2 pt-4">
        <DeveloperBadge brand={developer.brand} name={developer.name} subtitle={developer.subtitle} />
      </div>
      <div className="mt-auto px-2 pb-2 pt-4">
        <Button variant="outline" to={to ?? `/developers/${developer.id}`} className="w-full">
          {cta}
        </Button>
      </div>
    </article>
  )
}
