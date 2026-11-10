import { LuBuilding2, LuDumbbell, LuRuler } from 'react-icons/lu'
import Button from './Button.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl">
      <img src={project.image} alt={project.name} loading="lazy" className="aspect-[16/10] w-full object-cover" />

      <ul className="flex divide-x divide-neutral-200 border-y border-neutral-200 bg-neutral-50 py-2.5 text-xs text-neutral-500">
        <li className="flex flex-1 items-center justify-center gap-1.5">
          <LuBuilding2 size={16} /> {project.units} Units
        </li>
        <li className="flex flex-1 items-center justify-center gap-1.5">
          <LuDumbbell size={16} /> {project.gyms} Gyms
        </li>
        <li className="flex flex-1 items-center justify-center gap-1.5">
          <LuRuler size={16} /> {project.area}
        </li>
      </ul>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold text-brand-700">{project.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">{project.description}</p>
        <div className="mt-auto pt-5">
          <Button variant="outline" to={`/projects/${project.id}`} className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </article>
  )
}
