import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { nav, site } from '../data/site'

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear())
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Build contact links — only render what's configured.
  const emailHref =
    site.contact.email && site.contact.email.length > 0
      ? `mailto:${site.contact.email}`
      : null

  const whatsappHref =
    site.contact.whatsapp && site.contact.whatsapp.length > 0
      ? `https://wa.me/${site.contact.whatsapp}`
      : null

  return (
    <footer className="bg-ink text-cream relative">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 pt-20 md:pt-28 pb-10">
        {/* Top — big wordmark + tagline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-16 md:pb-20 border-b border-cream/10">
          <div>
            <p className="eyebrow text-cream/50 mb-5">OBALOLUWA.DEV</p>
            <h2
              className="font-display font-medium text-cream tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}
            >
              Let's make
              <br />
              something
              <br />
              unmistakable.
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-body text-[14px] text-cream/70 max-w-xs">
              {site.role}
            </p>
            {emailHref ? (
              <a
                href={emailHref}
                className="link-underline font-display text-[18px] md:text-[20px] text-cream"
                data-cursor="link"
              >
                {site.contact.email}
              </a>
            ) : (
              <span
                className="font-display text-[18px] md:text-[20px] text-cream/40 italic"
                title="Email not yet configured"
              >
                Email — to be configured
              </span>
            )}
          </div>
        </div>

        {/* Middle — nav + socials */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-12 md:py-16">
          {/* Footer nav */}
          <nav className="col-span-12 md:col-span-5" aria-label="Footer">
            <p className="eyebrow text-cream/50 mb-5">EXPLORE</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline font-body text-[15px] text-cream/85 hover:text-cream"
                    data-cursor="link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="col-span-12 md:col-span-4 md:col-start-7">
            <p className="eyebrow text-cream/50 mb-5">ELSEWHERE</p>
            <ul className="flex flex-col gap-3">
              {site.socials.filter((s) => s.url && s.url.length > 0).map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-2 font-body text-[15px] text-cream/85 hover:text-cream"
                    data-cursor="link"
                  >
                    <span className="link-underline">{s.label}</span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-cream/40 group-hover:text-accent transition-colors">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email placeholder */}
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <p className="eyebrow text-cream/50 mb-5">EMAIL</p>
            {emailHref ? (
              <a
                href={emailHref}
                className="link-underline font-body text-[15px] text-cream/85 hover:text-cream break-all"
                data-cursor="link"
              >
                {site.contact.email}
              </a>
            ) : (
              <span
                className="font-body text-[15px] text-cream/40 italic"
                title="Email not yet configured"
              >
                Direct contact on request
              </span>
            )}
          </div>
        </div>

        {/* Bottom — copyright + back to top */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p className="font-mono text-[11px] tracking-widest uppercase text-cream/50">
              © {year} OBALOLUWA.DEV
            </p>
            <p className="font-mono text-[11px] tracking-widest uppercase text-cream/40">
              DIGITAL STUDIO · WORKING WORLDWIDE
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`group inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-cream/70 hover:text-cream transition-all duration-500 ${
              showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
            data-cursor="link"
          >
            BACK TO TOP
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-cream/30 group-hover:border-accent group-hover:bg-accent transition-colors">
              <ArrowUp size={13} strokeWidth={1.8} className="group-hover:-translate-y-px transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Decorative oversized wordmark */}
      <div
        className="overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="font-display font-semibold tracking-tighter text-cream/5 whitespace-nowrap text-center"
          style={{
            fontSize: 'clamp(80px, 22vw, 320px)',
            lineHeight: 0.85,
            transform: 'translateY(20%)',
          }}
        >
          OBALOLUWA.DEV
        </div>
      </div>
    </footer>
  )
}
