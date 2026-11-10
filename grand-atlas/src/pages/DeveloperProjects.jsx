import { useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectsGrid from '../components/ProjectsGrid.jsx'
import DeveloperBadge from '../components/DeveloperBadge.jsx'
import Button from '../components/Button.jsx'
import useTitle from '../hooks/useTitle.js'
import { developers, projects } from '../data/index.js'

export default function DeveloperProjects() {
  const { developerId } = useParams()
  const developer = developers.find((d) => d.id === developerId)
  useTitle(developer ? `${developer.name} Projects` : 'Developer not found')

  if (!developer) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl font-semibold">Developer not found</h1>
        <Button to="/developers" className="mt-8">Back to developers</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-10">
      <SectionTitle>{developer.name} Projects</SectionTitle>
      <div className="mt-6 flex items-center justify-center gap-4">
        <DeveloperBadge brand={developer.brand} name={developer.name} subtitle={developer.subtitle} />
        <span className="rounded-sm bg-brand-700 px-3 py-0.5 text-xs font-medium text-white">{developer.location}</span>
      </div>
      <div className="mt-10">
        <ProjectsGrid projects={projects.filter((p) => p.developerId === developer.id)} />
      </div>
    </div>
  )
}
