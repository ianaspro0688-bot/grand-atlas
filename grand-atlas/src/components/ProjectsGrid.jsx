import ProjectCard from './ProjectCard.jsx'

export default function ProjectsGrid({ projects }) {
  if (!projects.length) {
    return <p className="py-16 text-center text-neutral-500">No projects available yet.</p>
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
