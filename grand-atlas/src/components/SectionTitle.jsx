export default function SectionTitle({ children, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-2xl font-semibold text-neutral-900 md:text-3xl">{children}</h2>
      <span className="mx-auto mt-3 block h-1 w-28 rounded-full bg-brand-500" />
    </div>
  )
}
