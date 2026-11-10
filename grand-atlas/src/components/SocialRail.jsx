import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'

const items = [
  { Icon: FaFacebookF, label: 'Facebook', href: '#' },
  { Icon: FaXTwitter, label: 'X (Twitter)', href: '#' },
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaTiktok, label: 'TikTok', href: '#' },
]

export default function SocialRail() {
  return (
    <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex lg:left-6">
      {items.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="grid h-9 w-9 place-items-center rounded-full border border-white text-white transition hover:bg-white hover:text-brand-700"
        >
          <Icon size={15} />
        </a>
      ))}
    </div>
  )
}
