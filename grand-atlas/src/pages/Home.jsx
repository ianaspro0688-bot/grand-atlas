import { Link } from 'react-router-dom'
import { LuArrowRight, LuBuilding2, LuHandCoins, LuSettings, LuSmile } from 'react-icons/lu'
import PageHero from '../components/PageHero.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import Carousel from '../components/Carousel.jsx'
import DeveloperCard from '../components/DeveloperCard.jsx'
import useTitle from '../hooks/useTitle.js'
import { developers, masterpieces, stats } from '../data/index.js'
import heroImage from '../assets/images/hero-home.jpg'
import aboutImage from '../assets/images/masterpiece-3.jpg'

const statIcons = {
  properties: LuBuilding2,
  investments: LuHandCoins,
  clients: LuSmile,
  satisfaction: LuSettings,
}

export default function Home() {
  useTitle('')

  return (
    <>
      <PageHero
        tall
        image={heroImage}
        title={
          <>
            Redefining the Horizon
            <br className="hidden md:block" /> of Modern Luxury Living
          </>
        }
        subtitle="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"
      >
        <Button to="/units" size="lg" className="px-14">Explore</Button>
      </PageHero>

      {/* Benchmarks */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <SectionTitle>Benchmarks of Success</SectionTitle>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map(({ key, value, label }) => {
            const Icon = statIcons[key]
            return (
              <div
                key={key}
                className="flex flex-col items-center rounded-lg bg-white px-4 py-6 text-center shadow-md ring-1 ring-black/5"
              >
                <Icon size={30} className="text-brand-700" aria-hidden="true" />
                <p className="mt-3 text-xl font-bold text-neutral-900">{value}</p>
                <p className="mt-1 text-xs text-neutral-500">{label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
        <SectionTitle>About Grand Atlas</SectionTitle>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-tl-md rounded-tr-[72px] rounded-b-md border-2 border-brand-700">
            <img
              src={aboutImage}
              alt="Modern villa with timber and stone facade"
              loading="lazy"
              className="aspect-[4/3.4] w-full object-cover object-left"
            />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-neutral-600">
            <p>
              We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and
              the individuals who define our global culture. We recognized that for the discerning client, a home is
              rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate
              expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the
              pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor
              of a bespoke, &lsquo;private office&rsquo; approach—one where quality always supersedes quantity, and
              where every client is treated as the sole focus of our firm,
            </p>
            <p>
              We don&rsquo;t just find you a home; we secure your peace of mind through a veil of absolute
              professional confidentiality.
            </p>
            <div className="pt-4">
              <Button to="/contact" size="sm">
                Know More <LuArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Masterpieces */}
      <section className="mx-auto max-w-7xl overflow-hidden px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
        <SectionTitle>Hand-Selected Masterpieces</SectionTitle>
        <div className="mt-10">
          <Carousel label="Hand-selected masterpieces">
            {masterpieces.map((m) => (
              <Link key={m.id} to="/units" className="group block">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-neutral-900 group-hover:text-brand-700">
                  {String(m.id).padStart(2, '0')}. {m.title}
                </h3>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 lg:pb-20">
        <SectionTitle>Strategic Locations</SectionTitle>
        <div className="mt-10 h-[320px] w-full bg-neutral-100 md:h-[440px]">
          <iframe
            title="Map of Grand Atlas locations across Egypt"
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.9%2C29.7%2C33.3%2C31.7&layer=mapnik"
            loading="lazy"
            className="h-full w-full border-0"
          />
        </div>
      </section>

      {/* Future landmarks */}
      <section className="mx-auto max-w-7xl overflow-hidden px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
        <SectionTitle>Future Landmarks</SectionTitle>
        <div className="mt-10">
          <Carousel label="Future landmarks">
            {developers.map((d) => (
              <DeveloperCard key={d.id} developer={d} cta="View Details" />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  )
}
