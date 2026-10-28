import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  stamp,
  index,
}) {
  return (
    <section className="page-hero relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-x-8 gap-y-10 px-5 md:px-8 lg:px-12">
        <Reveal className="page-hero-copy col-span-12 md:col-span-7">
          <span className="eyebrow eyebrow-accent mb-6 block">{eyebrow}</span>
          <h1 className="font-display font-semibold text-ink tracking-[-0.03em]">
            {title}
          </h1>
          <p>{description}</p>
        </Reveal>

        <Reveal
          className="col-span-10 col-start-2 md:col-span-5 md:col-start-8"
          delay={120}
        >
          <figure className="page-hero-art">
            <img src={image} alt={imageAlt} loading="eager" />
            <span className="page-hero-stamp">{stamp}</span>
            <span className="page-hero-index" aria-hidden="true">
              {index}
            </span>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
