import { useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import Gallery from '../components/Gallery.jsx'
import DetailsLayout from '../components/DetailsLayout.jsx'
import DeveloperBadge from '../components/DeveloperBadge.jsx'
import Button from '../components/Button.jsx'
import useTitle from '../hooks/useTitle.js'
import { developers, projects } from '../data/index.js'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)
  useTitle(project ? `${project.name} Project` : 'Project not found')

  if (!project) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl font-semibold">Project not found</h1>
        <Button to="/zones" className="mt-8">Back to zones</Button>
      </div>
    )
  }

  const developer = developers.find((d) => d.id === project.developerId)
  const facts = [
    ['Plot size ca.', project.plotSize],
    ['Living area ca.', project.livingArea],
    ['Units', project.totalUnits],
    ['Man made Lakes', project.lakes],
    ['Playground', project.playgrounds],
    ['Public gyms', project.publicGyms],
    ['Schools', project.schools],
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-10">
      <SectionTitle>{project.name} Project</SectionTitle>
      <div className="mt-8">
        <Gallery main={project.gallery.main} thumbs={project.gallery.thumbs} alt={project.name} />
      </div>

      <DetailsLayout
        title={project.headline}
        location={project.location}
        aside={
          developer && <DeveloperBadge brand={developer.brand} name={developer.name} subtitle={developer.subtitle} />
        }
        facts={facts}
        overview={project.overview}
      />
    </div>
  )
}
