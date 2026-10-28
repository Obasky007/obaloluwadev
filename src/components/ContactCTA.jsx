import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { site } from "../data/site";

export default function ContactCTA() {
  // Build WhatsApp link only if a number is configured.
  const whatsappHref =
    site.contact.whatsapp && site.contact.whatsapp.length > 0
      ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
          site.contact.whatsappMessage,
        )}`
      : null;

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-12 md:mb-16">
          <span className="eyebrow eyebrow-accent">
            05 / HAVE SOMETHING IN MIND?
          </span>
        </Reveal>

        {/* Big closing statement */}
        <Reveal delay={100}>
          <h2
            className="font-display font-medium text-ink tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 8rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Let's build
            <br />
            something worth
            <br />
            <span className="hand-underline">remembering</span>.
          </h2>
        </Reveal>

        {/* Supporting text + CTAs */}
        <div className="mt-12 md:mt-20 grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 md:col-span-7" delay={150}>
            <p className="font-body text-[16px] md:text-[19px] leading-[1.55] text-muted-2 max-w-xl">
              Have a business, product, or idea that needs a better online
              experience? Tell me what you're working on.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              {site.contact.email ? (
                <MagneticButton
                  href={`mailto:${site.contact.email}`}
                  variant="primary"
                  strength={0.45}
                  innerStrength={0.7}
                  arrow
                  className="!px-7 !py-3.5 !text-[15px]"
                >
                  Let's discuss your project
                </MagneticButton>
              ) : (
                <span
                  className="inline-flex items-center justify-center rounded-full border border-dashed border-ink/25 px-7 py-3.5 text-[15px] font-display font-medium text-muted"
                  title="Configure an email address in src/data/site.js"
                >
                  Email address not configured
                </span>
              )}

              {whatsappHref ? (
                <MagneticButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  strength={0.3}
                  innerStrength={0.5}
                  arrow
                  className="!px-7 !py-3.5 !text-[15px]"
                >
                  WhatsApp me
                </MagneticButton>
              ) : (
                <span
                  className="inline-flex items-center justify-center rounded-full border border-dashed border-ink/25 px-7 py-3.5 text-[15px] font-display font-medium text-muted"
                  title="WhatsApp number not yet configured"
                >
                  WhatsApp me — coming soon
                </span>
              )}
            </div>
          </Reveal>

          {/* Right column — meta details */}
          <Reveal
            className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-6 md:items-end md:text-right"
            delay={250}
          >
            <div>
              <p className="eyebrow text-muted mb-2">CURRENT STATUS</p>
              <p className="font-body text-[15px] text-ink-soft">
                {site.availability}
              </p>
            </div>
            <div>
              <p className="eyebrow text-muted mb-2">LOCATION</p>
              <p className="font-body text-[15px] text-ink-soft">
                {site.location}
              </p>
            </div>
            <div>
              <p className="eyebrow text-muted mb-2">RESPONSE TIME</p>
              <p className="font-body text-[15px] text-ink-soft">
                Usually within 24 hours
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
