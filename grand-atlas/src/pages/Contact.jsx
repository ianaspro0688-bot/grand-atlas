import { useState } from 'react'
import { LuMail, LuPhone } from 'react-icons/lu'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import useTitle from '../hooks/useTitle.js'
import { contact } from '../data/index.js'
import heroImage from '../assets/images/hero-developers.jpg'

const field =
  'w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30'

export default function Contact() {
  useTitle('Contact Us')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: send `Object.fromEntries(new FormData(e.currentTarget))` to your backend / form service.
    setSent(true)
  }

  return (
    <>
      <PageHero
        image={heroImage}
        title="Let’s Talk About Your Next Address"
        subtitle="Register your interest or reach out to our private office — we respond to every inquiry personally and in complete confidence."
      />

      <section className="mx-auto grid max-w-5xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:py-20">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-neutral-900">Get in touch</h2>
          <a href={contact.phoneHref} className="flex items-center gap-3 text-neutral-600 hover:text-brand-700">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700">
              <LuPhone size={18} />
            </span>
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-neutral-600 hover:text-brand-700">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700">
              <LuMail size={18} />
            </span>
            {contact.email}
          </a>
        </div>

        {sent ? (
          <div className="rounded-xl bg-brand-50 p-10 text-center" role="status">
            <h3 className="font-serif text-2xl font-semibold text-brand-700">Thank you</h3>
            <p className="mt-3 text-neutral-600">Your request has been received. Our team will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <input className={field} name="name" required placeholder="Full name" aria-label="Full name" />
            <input className={field} name="phone" type="tel" placeholder="Phone" aria-label="Phone" />
            <input className={`${field} sm:col-span-2`} name="email" type="email" required placeholder="Email" aria-label="Email" />
            <textarea className={`${field} sm:col-span-2`} name="message" rows={5} placeholder="How can we help?" aria-label="Message" />
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full sm:w-auto sm:px-14">Send request</Button>
            </div>
          </form>
        )}
      </section>
    </>
  )
}
