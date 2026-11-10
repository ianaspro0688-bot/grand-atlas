import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { LuArrowRight } from 'react-icons/lu'
import { contact } from '../data/index.js'
import logo from '../assets/images/logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Inventories', to: '/units' },
  { label: 'Zones', to: '/zones' },
  { label: 'Developers', to: '/developers' },
  { label: 'Contact Us', to: '/contact' },
]

const aboutLinks = ['Grand Atlas', 'Privacy Policy', 'Legal', 'Help', 'Support']

const socials = [
  { Icon: FaLinkedinIn, label: 'LinkedIn' },
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaTwitter, label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
        <div className="flex flex-col items-start gap-3 text-sm text-neutral-700">
          <img src={logo} alt="Grand Atlas" className="h-20 w-auto" />
          <a href={contact.phoneHref} className="hover:text-brand-700">{contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="hover:text-brand-700">{contact.email}</a>
        </div>

        <div>
          <h3 className="text-sm font-bold text-neutral-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-500">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-brand-700">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-neutral-900">About</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-500">
            {aboutLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-brand-700">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-neutral-900">Get In touch</h3>
          <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Get product updates"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-l-md border border-r-0 border-brand-700 bg-white px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid w-11 cursor-pointer place-items-center rounded-r-md bg-brand-700 text-white transition hover:bg-brand-800"
            >
              <LuArrowRight size={18} />
            </button>
          </form>
          <div className="mt-5 flex gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-8 w-8 place-items-center rounded-full border border-neutral-200 bg-white text-brand-700 shadow-sm transition hover:bg-brand-700 hover:text-white"
              >
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl border-t border-neutral-200 px-6 py-6 text-center text-sm text-neutral-600">
        {contact.copyright}
      </div>
    </footer>
  )
}
