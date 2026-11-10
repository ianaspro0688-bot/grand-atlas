import { useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectsGrid from '../components/ProjectsGrid.jsx'
import Button from '../components/Button.jsx'
import useTitle from '../hooks/useTitle.js'
import { projects, zones } from '../data/index.js'
import banner from '../assets/images/zone-banner.jpg'

export default function ZoneProjects() {
  const { zoneId } = useParams()
  const zone = zones.find((z) => z.id === zoneId)
  useTitle(zone ? `${zone.name} Projects` : 'Zone not found')

  if (!zone) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl font-semibold">Zone not found</h1>
        <Button to="/zones" className="mt-8">Back to zones</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-10">
      <SectionTitle>Zone Projects</SectionTitle>
      <p className="mt-3 text-center text-sm text-neutral-500">{zone.name}</p>

      <div className="mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
        <img src={banner} alt={`${zone.name} aerial view`} className="aspect-[2.4/1] w-full object-cover" />
      </div>

      <div className="mt-10">
        <ProjectsGrid projects={projects.filter((p) => p.zoneId === zone.id)} />
      </div>
    </div>
  )
}
