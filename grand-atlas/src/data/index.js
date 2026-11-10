// ─────────────────────────────────────────────────────────────
//  All site content lives here. Replace with API calls later.
// ─────────────────────────────────────────────────────────────
import villa from '../assets/images/villa.jpg'
import hayah from '../assets/images/hayah.jpg'
import m1 from '../assets/images/masterpiece-1.jpg'
import m2 from '../assets/images/masterpiece-2.jpg'
import m3 from '../assets/images/masterpiece-3.jpg'
import zone1 from '../assets/images/zone-1.jpg'
import zone2 from '../assets/images/zone-2.jpg'
import zone3 from '../assets/images/zone-3.jpg'
import zone4 from '../assets/images/zone-4.jpg'
import unitMain from '../assets/images/unit-main.jpg'
import t1 from '../assets/images/unit-thumb-1.jpg'
import t2 from '../assets/images/unit-thumb-2.jpg'
import t3 from '../assets/images/unit-thumb-3.jpg'
import t4 from '../assets/images/unit-thumb-4.jpg'
import t5 from '../assets/images/unit-thumb-5.jpg'

export const contact = {
  phone: '+1 (7635) 547-12-97',
  phoneHref: 'tel:+17635471297',
  whatsapp: '17635471297',
  email: 'support@lift.agency',
  copyright: '© 2020 Lift Media. All rights reserved',
}

export const stats = [
  { key: 'properties', value: '48', label: 'Properties Managed' },
  { key: 'investments', value: '90M', label: 'Total Managed Investments' },
  { key: 'clients', value: '500', label: 'Happy Clients' },
  { key: 'satisfaction', value: '99%', label: 'Client Satisfaction' },
]

export const masterpieces = [
  { id: 1, title: 'Palm Hills Office No.3', image: m1 },
  { id: 2, title: 'Hacienda Duplex No.4', image: m2 },
  { id: 3, title: 'Sawary Family Villa', image: m3 },
  { id: 4, title: 'Katameya Heights Villa', image: m1 },
  { id: 5, title: 'Marassi Beach Duplex', image: m2 },
  { id: 6, title: 'Mivida Garden Villa', image: m3 },
]

export const zones = [
  { id: 'historic-cairo', name: 'Historic Cairo', image: zone1 },
  { id: 'alexandria', name: 'Alexandria', image: zone2 },
  { id: 'giza', name: 'Giza', image: zone3 },
  { id: 'red-sea', name: 'Red Sea', image: zone4 },
  { id: 'new-cairo', name: 'New Cairo', image: zone1 },
  { id: 'north-coast', name: 'North Coast', image: zone2 },
  { id: 'new-capital', name: 'New Capital', image: zone3 },
  { id: 'ain-sokhna', name: 'Ain Sokhna', image: zone4 },
]

export const developers = [
  { id: 'palm-hills-new-cairo', brand: 'palm-hills', name: 'Palm Hills', subtitle: 'Developments', location: 'New Cairo', image: villa },
  { id: 'hayah-city', brand: 'hayah', name: 'Hayah City', subtitle: 'Hayah Development', location: 'New Cairo', image: hayah },
  { id: 'palm-hills-zayed', brand: 'palm-hills', name: 'Palm Hills', subtitle: 'Developments', location: 'Sheikh Zayed', image: villa },
  { id: 'hayah-capital', brand: 'hayah', name: 'Hayah City', subtitle: 'Hayah Development', location: 'New Capital', image: hayah },
  { id: 'palm-hills-october', brand: 'palm-hills', name: 'Palm Hills', subtitle: 'Developments', location: '6th of October', image: villa },
  { id: 'hayah-north-coast', brand: 'hayah', name: 'Hayah City', subtitle: 'Hayah Development', location: 'North Coast', image: hayah },
]

const shortDescription =
  'Experience the true meaning of modern living in this luxurious apartment featuring spacious rooms, elegant finishes, and breathtaking views.'

export const overview =
  'Nestled in a residential area of Minusio, this magnificent historic villa is for sale, fully renovated and ready to move in. The spacious living areas, flooded with natural light thanks to perfect sun exposure, create a unique and welcoming atmosphere. A well-maintained, low-maintenance garden provides the ideal setting for enjoying outdoor gatherings. Its proximity to essential services and public transport also makes the villa an ideal choice for families.'

export const gallery = {
  main: unitMain,
  thumbs: [t1, t2, t3, t4, t5],
}

// ── Projects (shown under each zone) ─────────────────────────
const projectSeeds = [
  { name: 'Sawary Family Villa', units: 50, gyms: 7, area: '15,000m' },
  { name: 'Hacienda Residence', units: 80, gyms: 4, area: '22,500m' },
  { name: 'Palm Hills Office Park', units: 36, gyms: 3, area: '9,800m' },
  { name: 'Katameya Heights', units: 120, gyms: 6, area: '31,000m' },
  { name: 'Marassi Villas', units: 64, gyms: 5, area: '18,200m' },
]

export const projects = zones.flatMap((zone, zi) =>
  projectSeeds.slice(0, zi % 2 === 0 ? 5 : 3).map((seed, i) => ({
    ...seed,
    id: `${zone.id}-${i + 1}`,
    zoneId: zone.id,
    developerId: developers[(zi + i) % developers.length].id,
    image: villa,
    description: shortDescription,
    headline: 'Splendid historic Art Nouveau villa',
    location: 'Minusio, Lake Maggiore, Switzerland — ref. LOC1771',
    overview,
    plotSize: '589 m²',
    livingArea: '300 m²',
    totalUnits: 3000,
    lakes: 3,
    playgrounds: 8,
    publicGyms: 20,
    schools: 50,
    gallery,
  })),
)

// ── Units ────────────────────────────────────────────────────
const unitSeeds = [
  ['Sawary Family Villa', 50000000, 3, 3, 300, 'Available', 'new-cairo', 'Palm Hills'],
  ['Hacienda Duplex No.4', 18500000, 2, 2, 120, 'Available', 'north-coast', 'Hayah Development'],
  ['Palm Hills Office No.3', 7200000, 1, 1, 85, 'Reserved', 'new-cairo', 'Palm Hills'],
  ['Katameya Heights Villa', 32000000, 4, 4, 380, 'Available', 'new-cairo', 'Palm Hills'],
  ['Marassi Beach Duplex', 24500000, 3, 2, 210, 'Sold', 'north-coast', 'Hayah Development'],
  ['Mivida Garden Villa', 27800000, 3, 3, 260, 'Available', 'new-capital', 'Palm Hills'],
  ['Zayed Skyline Apartment', 4300000, 2, 2, 130, 'Available', 'giza', 'Hayah Development'],
  ['Alexandria Corniche Flat', 5900000, 2, 2, 150, 'Reserved', 'alexandria', 'Hayah Development'],
  ['Sokhna Bay Chalet', 3600000, 2, 1, 95, 'Available', 'ain-sokhna', 'Palm Hills'],
  ['Red Sea Pearl Villa', 41000000, 5, 5, 450, 'Available', 'red-sea', 'Palm Hills'],
  ['Heritage Court Residence', 9800000, 3, 2, 175, 'Sold', 'historic-cairo', 'Hayah Development'],
  ['Capital Park Townhouse', 12400000, 4, 3, 220, 'Available', 'new-capital', 'Palm Hills'],
]

export const units = unitSeeds.map(([title, price, bedrooms, bathrooms, area, status, zoneId, developer], i) => {
  const zone = zones.find((z) => z.id === zoneId)
  const project = projects.find((p) => p.zoneId === zoneId)
  return {
    id: String(i + 1),
    title,
    price,
    bedrooms,
    bathrooms,
    area,
    status,
    zoneId,
    zone: zone.name,
    developer,
    project: project.name,
    image: villa,
    description: shortDescription,
    headline: 'Splendid historic Art Nouveau villa',
    location: 'Minusio, Lake Maggiore, Switzerland — ref. LOC1771',
    overview,
    plotSize: '589 m²',
    livingArea: '300 m²',
    livingRooms: 2,
    wc: 1,
    parking: '3, covered',
    gallery,
  }
})

export const formatPrice = (n, spaced = false) => `${n.toLocaleString('en-US')}${spaced ? ' ' : ''}EGP`
