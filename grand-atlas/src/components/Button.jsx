import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-linear-to-r from-brand-700 to-brand-500 text-white shadow-md hover:from-brand-800 hover:to-brand-600',
  dark: 'bg-linear-to-r from-brand-900 to-brand-700 text-white shadow-md hover:from-brand-800 hover:to-brand-600',
  outline: 'border border-brand-700 bg-white text-brand-700 hover:bg-brand-700 hover:text-white',
  whatsapp: 'bg-green-700 text-white hover:bg-green-800',
}

const sizes = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-2.5 text-sm',
  lg: 'px-10 py-3 text-base',
}

export default function Button({ variant = 'primary', size = 'md', to, href, className = '', children, ...props }) {
  const cls = `inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
