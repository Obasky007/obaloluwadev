import Reveal from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We clarify the business, the audience, the goals, and what the website needs to accomplish.',
    duration: 'Discovery & direction',
  },
  {
    number: '02',
    title: 'Design & Build',
    description:
      'We shape the experience, develop the interface, and make sure it works across screen sizes.',
    duration: 'Craft & implementation',
  },
  {
    number: '03',
    title: 'Refine & Launch',
    description:
      'We test the important details, resolve issues, and prepare the experience for launch.',
    duration: 'Polish & ship',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 mb-16 md:mb-24">
          <Reveal className="col-span-12 md:col-span-8">
            <span className="eyebrow eyebrow-accent mb-5 block">
              03 / THE STUDIO METHOD
            </span>
            <h2
              className="font-display font-medium text-ink tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1 }}
            >
              From rough idea
              <br />
              to ready for the
              <br />
              real world.
            </h2>
          </Reveal>
          <Reveal
            className="col-span-12 md:col-span-4 md:col-start-9 flex md:items-end"
            delay={120}
          >
            <p className="font-body text-[15px] md:text-[16px] leading-[1.55] text-muted-2 max-w-sm">
              A practical rhythm. Not every project follows an identical path —
              but the same care shows up in every stage.
            </p>
          </Reveal>
        </div>

        {/* Steps — connected sequence */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden md:block absolute top-[44px] left-0 right-0 h-px bg-ink/10"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                as="li"
                delay={i * 150}
                className="relative pt-0"
              >
                {/* Number node */}
                <div className="flex items-center gap-4 mb-6 md:mb-8 relative">
                  <span
                    className="relative z-10 flex items-center justify-center w-[88px] h-12 bg-cream font-mono text-[13px] tracking-widest text-ink border border-ink/15"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
                    {step.duration}
                  </span>
                </div>

                <h3
                  className="font-display font-medium text-ink tracking-tight mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1 }}
                >
                  {step.title}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.55] text-muted-2 max-w-sm">
                  {step.description}
                </p>

                {/* Step connector arrow for desktop */}
                {i < steps.length - 1 && (
                  <span
                    className="hidden md:block absolute top-[36px] -right-4 text-ink/30"
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
