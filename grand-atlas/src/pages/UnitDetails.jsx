import { Link, useParams } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import { LuPhone } from 'react-icons/lu'
import Gallery from '../components/Gallery.jsx'
import DetailsLayout from '../components/DetailsLayout.jsx'
import Button from '../components/Button.jsx'
import useTitle from '../hooks/useTitle.js'
import { contact, formatPrice, units } from '../data/index.js'

export default function UnitDetails() {
  const { unitId } = useParams()
  const unit = units.find((u) => u.id === unitId)
  useTitle(unit?.title ?? 'Unit not found')

  if (!unit) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl font-semibold">Unit not found</h1>
        <p className="mt-3 text-neutral-500">This property may have been removed or sold.</p>
        <Button to="/units" className="mt-8">Browse all units</Button>
      </div>
    )
  }

  const facts = [
    ['Plot size ca.', unit.plotSize],
    ['Living area ca.', unit.livingArea],
    ['Bedrooms', unit.bedrooms],
    ['Bathrooms', unit.bathrooms],
    ['Living rooms', unit.livingRooms],
    ['WC', unit.wc],
    ['External parking', unit.parking],
  ]

  const message = encodeURIComponent(`Hello Grand Atlas, I'm interested in "${unit.title}" (unit #${unit.id}).`)

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-10">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-500">
        <Link to="/units" className="hover:text-brand-700">Units</Link> <span aria-hidden="true">/</span>{' '}
        <span className="text-neutral-700">{unit.title}</span>
      </nav>

      <Gallery main={unit.gallery.main} thumbs={unit.gallery.thumbs} alt={unit.title} />

      <DetailsLayout
        title={unit.headline}
        location={unit.location}
        aside={<p className="text-2xl font-medium text-sand md:text-3xl">{formatPrice(unit.price, true)}</p>}
        facts={facts}
        overview={unit.overview}
        actions={
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={`https://wa.me/${contact.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} /> Contact via WhatsApp
            </Button>
            <Button variant="outline" size="lg" href={contact.phoneHref}>
              <LuPhone size={16} /> Call
            </Button>
          </div>
        }
      />
    </div>
  )
}
