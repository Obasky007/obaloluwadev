import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function AboutPreview({ isPage = false }) {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-cream-2/60">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 md:col-span-4">
            <span className="eyebrow eyebrow-accent mb-5 block">04 / THE STUDIO</span>
            <p className="font-mono text-[11px] tracking-widest uppercase text-muted">BUILT IN NIGERIA · WORKING WORLDWIDE</p>
            <div className="mt-10 hidden md:block">
              <div className="font-display font-semibold text-ink/90 leading-none tracking-tighter" style={{ fontSize: "clamp(80px, 9vw, 140px)" }} aria-hidden="true">O.</div>
              <div className="mt-3 flex items-center gap-3"><span className="block h-px w-12 bg-accent" /><span className="font-mono text-[10px] tracking-widest uppercase text-accent">OBALOLUWA.DEV</span></div>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7 md:col-start-6" delay={100}>
            <h2 className="font-display font-medium text-ink tracking-tight mb-8" style={{ fontSize: "clamp(1.8rem, 3.4vw, 3.2rem)", lineHeight: 1.08 }}>A small digital studio with a sharp point of view.</h2>
            <div className="space-y-5 font-body text-[15px] md:text-[17px] leading-[1.6] text-ink-soft max-w-2xl">
              <p>Obaloluwa.dev designs and builds websites and web experiences for businesses, products, and teams that want to communicate clearly and move with intent.</p>
              <p>The work sits where brand, interface, and frontend craft meet — making digital experiences that feel distinctive, useful, and ready for the real world.</p>
              <p>The studio is led from Nigeria and works with partners across time zones. The person behind the work stays close to the details, while the brand stays focused on the outcome.</p>
            </div>
            <div className="mt-10"><MagneticButton href={isPage ? "/contact" : "/about"} variant="secondary" strength={0.3} innerStrength={0.5} arrow className="!px-6 !py-3 !text-[14px]">{isPage ? "Start a studio project" : "Inside the studio"}</MagneticButton></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
