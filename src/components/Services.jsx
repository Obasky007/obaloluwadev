import Reveal from './Reveal'

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description:
      'Give your business a credible online presence that explains what you do, builds trust, and makes it easy for people to contact you.',
    tags: ['Marketing site', 'Credibility', 'Lead generation'],
  },
  {
    number: '02',
    title: 'Landing Pages',
    description:
      'Turn a specific offer, product, or campaign into a focused page designed to guide visitors toward the next step.',
    tags: ['Campaign', 'Conversion focus', 'Single message'],
  },
  {
    number: '03',
    title: 'E-commerce & Web Experiences',
    description:
      'Create useful, engaging online experiences that help people explore products, interact with information, and take action.',
    tags: ['Storefront', 'Interactive', 'Product-led'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-cream-2/60">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 mb-16 md:mb-24">
          <Reveal className="col-span-12 md:col-span-7">
            <span className="eyebrow eyebrow-accent mb-5 block">
              02 / STUDIO CAPABILITIES
            </span>
            <h2
              className="font-display font-medium text-ink tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1 }}
            >
              Websites that do a job
              <br />
              should earn its place.
            </h2>
          </Reveal>
          <Reveal
            className="col-span-12 md:col-span-4 md:col-start-9 flex md:items-end"
            delay={120}
          >
            <p className="font-body text-[15px] md:text-[16px] leading-[1.55] text-muted-2 max-w-sm">
              The studio combines brand thinking, interface design, and practical frontend development to create digital experiences with a clear job to do.
            </p>
          </Reveal>
        </div>

        {/* Service rows — editorial list, not generic cards */}
        <div className="border-t border-ink/10">
          {services.map((s, i) => (
            <Reveal
              key={s.number}
              as="article"
              delay={i * 120}
              className="service-row relative border-b border-ink/10 py-10 md:py-14 pl-8 md:pl-12"
            >
              <span className="service-accent" aria-hidden="true" />
              <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                <div className="col-span-12 md:col-span-2 lg:col-span-1">
                  <span className="font-mono text-[12px] md:text-[13px] tracking-widest text-accent">
                    {s.number}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-5 lg:col-span-5">
                  <h3
                    className="service-title font-display font-medium text-ink tracking-tight"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', lineHeight: 1.05 }}
                  >
                    {s.title}
                  </h3>
                  {/* arrow */}
                  <span className="service-arrow mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-accent">
                    EXPLORE THE FIT
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-span-12 md:col-span-5 lg:col-span-5 lg:col-start-8">
                  <p className="font-body text-[15px] md:text-[16px] leading-[1.55] text-ink-soft">
                    {s.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-muted border border-ink/15 rounded-full px-3 py-1.5"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
