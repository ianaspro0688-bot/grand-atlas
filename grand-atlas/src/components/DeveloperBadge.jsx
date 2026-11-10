// Simple recreated developer marks. Swap for the real logo images when available.
export default function DeveloperBadge({ brand, name, subtitle }) {
  if (brand === 'palm-hills') {
    return (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <path d="M20 2 38 20 20 38 2 20Z" fill="#b81f3d" />
          <path d="M20 10 30 20 20 30 10 20Z" fill="none" stroke="#fff" strokeWidth="1.5" />
          <path d="M20 15 25 20 20 25 15 20Z" fill="#fff" opacity=".85" />
        </svg>
        <div className="leading-none">
          <div className="text-sm font-bold uppercase tracking-wide text-neutral-900">{name}</div>
          <div className="mt-1 text-[8px] uppercase tracking-[0.35em] text-neutral-500">{subtitle}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-sm border border-amber-700/40 bg-amber-100/70 text-xs font-bold text-amber-800">
        H
      </span>
      <div className="leading-tight">
        <div className="text-base font-bold text-neutral-800">{name}</div>
        <div className="text-[10px] text-neutral-500">{subtitle}</div>
      </div>
    </div>
  )
}
