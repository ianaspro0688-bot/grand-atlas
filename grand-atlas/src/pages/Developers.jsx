import PageHero from '../components/PageHero.jsx'
import DeveloperCard from '../components/DeveloperCard.jsx'
import useTitle from '../hooks/useTitle.js'
import { developers } from '../data/index.js'
import heroImage from '../assets/images/hero-developers.jpg'

export default function Developers() {
  useTitle('Developers')

  return (
    <>
      <PageHero
        image={heroImage}
        title="Defining the Future Skyline."
        subtitle="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world's most discerning buyers."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {developers.map((d) => (
            <DeveloperCard key={d.id} developer={d} />
          ))}
        </div>
      </section>
    </>
  )
}
