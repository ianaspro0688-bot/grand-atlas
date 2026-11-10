import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu'
import Button from './Button.jsx'
import logo from '../assets/images/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/units', label: 'Units' },
  { to: '/zones', label: 'Zones' },
  { to: '/developers', label: 'Developers' },
  { to: '/contact', label: 'Contact Us' },
]

const linkClass = ({ isActive }) =>
  `relative pb-1 text-base font-bold transition-colors ${
    isActive
      ? 'text-brand-700 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-700'
      : 'text-neutral-500 hover:text-brand-700'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Grand Atlas — Luxury Real Estate" className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-12 lg:flex" aria-label="Main navigation">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" size="sm">Register</Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-neutral-700 hover:bg-neutral-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-neutral-100 py-3 text-base font-bold ${
                    isActive ? 'text-brand-700' : 'text-neutral-600'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <Button to="/contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Register
          </Button>
        </div>
      )}
    </header>
  )
}
