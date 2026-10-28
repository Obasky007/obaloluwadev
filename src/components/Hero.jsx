import MagneticButton from "./MagneticButton";
import InteractiveType from "./InteractiveType";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="mx-auto max-w-[1440px] h-full px-5 md:px-8 lg:px-12"><div className="grid grid-cols-12 h-full"><div className="col-span-3 border-l border-ink/[0.05]" /><div className="col-span-3 border-l border-ink/[0.05]" /><div className="col-span-3 border-l border-ink/[0.05]" /><div className="col-span-3 border-l border-r border-ink/[0.05]" /></div></div>
      </div>
      <div className="hero-playful-note" aria-hidden="true">Your business deserves a good website.</div>
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="hero-stagger">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 md:mb-14" style={{ "--hero-delay": "120ms" }}>
            <span className="eyebrow eyebrow-accent">WE MAKE WEBSITES · {site.location.toUpperCase()} · WORKING WORLDWIDE</span>
            <span className="studio-sticker hidden md:inline-flex eyebrow">NO BORING SITES</span>
          </div>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-y-0">
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h1 className="font-display font-semibold text-ink tracking-[-0.05em]" style={{ fontSize: "clamp(2.7rem, 8.5vw, 8rem)", lineHeight: 0.86 }}>
                <span className="block">Need a</span><span className="block"><span className="hand-underline">website?</span></span><span className="block">We make good ones.</span>
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-3"><span className="studio-sticker eyebrow">DESIGN + BUILD</span><span className="studio-sticker studio-sticker-blue eyebrow">READY TO SHIP</span></div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-end md:items-end md:text-right" style={{ "--hero-delay": "520ms" }}>
              <figure className="hero-project-image mb-7 w-full max-w-[360px] md:max-w-none"><div className="hero-project-image-frame"><img src="/project-interiors.jpg" alt="3D Interiors web experience preview" loading="eager" /><span className="hero-project-image-stamp"><span>RECENT BUILD</span><strong>06</strong></span></div><figcaption>Websites with a little more personality.</figcaption></figure>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.55] text-ink-soft max-w-sm md:max-w-xs">Obaloluwa.dev makes websites for businesses that want to look good, be understood, and get chosen.</p>
              <div className="mt-6 flex flex-col gap-3 md:items-end"><span className="eyebrow text-muted flex items-center gap-2 md:justify-end"><span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />{site.availability}</span></div>
            </div>
          </div>
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center gap-4" style={{ "--hero-delay": "620ms" }}><MagneticButton href="/contact" variant="accent" strength={0.4} innerStrength={0.6} arrow className="!px-7 !py-3.5 !text-[15px]">Hire the studio</MagneticButton><MagneticButton href="/work" variant="secondary" strength={0.25} innerStrength={0.4} arrow className="!px-7 !py-3.5 !text-[15px]">See what we make</MagneticButton></div>
          <div className="mt-20 md:mt-28 lg:mt-36" style={{ "--hero-delay": "760ms" }}><InteractiveType /></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 mt-16 md:mt-20"><div className="flex items-center justify-between border-t border-ink/[0.08] pt-5"><span className="eyebrow text-muted flex items-center gap-3"><span className="inline-block w-6 h-px bg-ink/30" />SCROLL TO MEET THE STUDIO</span><span className="eyebrow text-muted hidden sm:inline-block">WEBSITE MAKERS · 2024—PRESENT</span></div></div>
    </section>
  );
}
