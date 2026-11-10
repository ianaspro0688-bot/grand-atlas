import SocialRail from './SocialRail.jsx'

export default function PageHero({ image, title, subtitle, children, tall = false }) {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-900">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-black/15 to-black/25" />
      <div
        className={`mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-16 text-center text-white ${
          tall ? 'min-h-[460px] md:min-h-[600px]' : 'min-h-[340px] md:min-h-[440px]'
        }`}
      >
        <h1 className="font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">{subtitle}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
      <SocialRail />
    </section>
  )
}
