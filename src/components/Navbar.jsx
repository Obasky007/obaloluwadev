import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "../data/site";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          "ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-cream/85 backdrop-blur-md border-b border-ink/[0.06]"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <nav
            className="flex items-center justify-between h-[68px] md:h-[84px]"
            aria-label="Primary"
          >
            {/* Wordmark */}
            <a
              href="/"
              className="font-display font-semibold text-[19px] md:text-[22px] tracking-tight text-ink flex items-center gap-2"
              data-cursor="link"
              aria-label="Obaloluwa.dev — home"
            >
              <img
                src="/brand-mark.svg"
                alt=""
                className="h-7 w-8 object-contain"
              />
              <span>Obaloluwa</span>
              <span className="text-accent">.dev</span>
            </a>

            {/* Center nav */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={
                      currentPath === item.href ? "page" : undefined
                    }
                    className={`link-underline font-body text-[14px] transition-colors ${currentPath === item.href ? "text-accent" : "text-ink/85 hover:text-ink"}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA + mobile menu toggle */}
            <div className="flex items-center gap-3 md:gap-4">
              <MagneticButton
                href="/contact"
                variant="primary"
                strength={0.45}
                innerStrength={0.7}
                arrow
                className="hidden sm:inline-flex !px-5 !py-2.5 !text-[13px]"
              >
                Let's talk
              </MagneticButton>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-1 text-ink"
                data-cursor="link"
              >
                <Menu size={20} strokeWidth={1.6} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu md:hidden ${menuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between h-[68px]">
          <span className="font-display font-semibold text-[19px] tracking-tight flex items-center gap-2">
            <img
              src="/brand-mark.svg"
              alt=""
              className="h-7 w-8 object-contain"
            />
            <span>Obaloluwa</span>
            <span className="text-accent">.dev</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-10 h-10 text-ink"
          >
            <X size={22} strokeWidth={1.6} />
          </button>
        </div>

        <nav
          className="flex-1 flex flex-col justify-center gap-1"
          aria-label="Mobile"
        >
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={currentPath === item.href ? "page" : undefined}
              className={`group flex items-baseline justify-between py-3 border-b border-ink/10 ${currentPath === item.href ? "text-accent" : "text-ink"}`}
              style={{
                animation: menuOpen
                  ? `hero-rise 0.6s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s both`
                  : "none",
              }}
            >
              <span className="font-display font-medium text-[34px] leading-tight tracking-tight">
                {item.label}
              </span>
              <span className="font-mono text-[11px] text-muted tracking-widest">
                0{i + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <MagneticButton
            href="/contact"
            variant="primary"
            arrow
            onClick={() => setMenuOpen(false)}
            className="w-full justify-center"
          >
            Let's talk
          </MagneticButton>
          <p className="mt-5 font-mono text-[11px] text-muted tracking-widest uppercase">
            {site.availability}
          </p>
        </div>
      </div>
    </>
  );
}
