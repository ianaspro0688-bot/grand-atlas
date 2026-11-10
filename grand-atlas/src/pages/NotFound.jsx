import Button from '../components/Button.jsx'
import useTitle from '../hooks/useTitle.js'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="font-serif text-7xl font-semibold text-brand-700">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 text-neutral-500">The page you’re looking for doesn’t exist or has moved.</p>
      <Button to="/" className="mt-8">Back to home</Button>
    </div>
  )
}
