import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function AboutPreview({ isPage = false }) {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-cream-2/60">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Left column — header */}
          <Reveal className="col-span-12 md:col-span-4">
            <span className="eyebrow eyebrow-accent mb-5 block">
              04 / A LITTLE ABOUT ME
            </span>
            <p className="font-mono text-[11px] tracking-widest uppercase text-muted">
              BASED IN NIGERIA · WORKING WORLDWIDE
            </p>

            {/* Abstract typographic visual in lieu of portrait */}
            <div className="mt-10 hidden md:block">
              <div
                className="font-display font-semibold text-ink/90 leading-none tracking-tighter"
                style={{ fontSize: "clamp(80px, 9vw, 140px)" }}
                aria-hidden="true"
              >
                O.
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="block h-px w-12 bg-accent" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
                  OBALOLUWA
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right column — body */}
          <Reveal
            className="col-span-12 md:col-span-7 md:col-start-6"
            delay={100}
          >
            <h2
              className="font-display font-medium text-ink tracking-tight mb-8"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 3.2rem)",
                lineHeight: 1.08,
              }}
            >
              I'm Obaloluwa. I care about the details people notice — and the
              ones they don't.
            </h2>

            <div className="space-y-5 font-body text-[15px] md:text-[17px] leading-[1.6] text-ink-soft max-w-2xl">
              <p>
                I'm an independent frontend developer and web designer based in
                Nigeria, working with businesses and people who want to build
                something meaningful online.
              </p>
              <p>
                I care about more than how a website looks. I care about how
                clearly it communicates, how naturally it works, and how easily
                someone can move from discovering a business to taking the next
                step.
              </p>
              <p>
                My focus is turning ideas into thoughtful, functional digital
                experiences.
              </p>
            </div>

            <div className="mt-10">
              <MagneticButton
                href={isPage ? "/contact" : "/about"}
                variant="secondary"
                strength={0.3}
                innerStrength={0.5}
                arrow
                className="!px-6 !py-3 !text-[14px]"
              >
                {isPage ? "Let's talk about a project" : "More about me"}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
