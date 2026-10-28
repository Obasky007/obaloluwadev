import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/site";
import Reveal from "./Reveal";

/**
 * ProjectVisual
 *
 * Generates a tasteful CSS/HTML preview for each project using the project's
 * accent + palette. NOT a screenshot — a designed visual that reflects the
 * project's domain context (event venue, food, calculator, etc.).
 */
function ProjectVisual({ project, ratio }) {
  const [loaded, setLoaded] = useState(false);
  const aspect =
    {
      tall: "aspect-[3/4]",
      wide: "aspect-[4/3]",
      square: "aspect-square",
    }[ratio] || "aspect-[4/3]";

  // Each project gets a slightly different visual treatment to avoid
  // monotony and reflect the project's nature.
  const Visual = visuals[project.id] || DefaultVisual;

  return (
    <div className={`project-frame ${aspect} w-full`} data-cursor="project">
      {project.preview === false ? (
        <div
          className="project-visual h-full w-full"
          style={{ background: project.palette[0] }}
        >
          <Visual project={project} />
        </div>
      ) : (
        <>
          {project.image && (
            <img
              className="project-preview-fallback"
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="project-preview-bar">
            <span className="project-preview-status">
              <span aria-hidden="true" /> LIVE PREVIEW
            </span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-preview-open"
              aria-label={`Open ${project.title} in a new tab`}
              data-cursor="link"
            >
              Open project <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
          <iframe
            className={`project-live-frame ${loaded ? "is-ready" : ""}`}
            src={project.url}
            title={`${project.title} live preview`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="fullscreen"
            onLoad={() => setLoaded(true)}
          />
        </>
      )}
    </div>
  );
}

function DefaultVisual({ project }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6">
      <span
        className="font-mono text-[10px] tracking-widest uppercase"
        style={{ color: project.palette[2], opacity: 0.6 }}
      >
        {project.category}
      </span>
      <div
        className="font-display font-semibold tracking-tight"
        style={{
          color: project.palette[2],
          fontSize: "clamp(24px, 4vw, 44px)",
          lineHeight: 1,
        }}
      >
        {project.title}
      </div>
    </div>
  );
}

// Per-project visuals — each abstractly reflects the project's domain.
const visuals = {
  "sunlight-royale": ({ project }) => (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: project.palette[0] }}
    >
      <div className="absolute inset-0 flex flex-col p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span
            className="font-display font-semibold text-[14px] md:text-[16px]"
            style={{ color: project.palette[2] }}
          >
            Sunlight Royale
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase"
            style={{ color: project.accent }}
          >
            EVENTS
          </span>
        </div>
        <div className="mt-auto">
          {/* Stylised "hall" silhouette */}
          <svg
            viewBox="0 0 320 120"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMax meet"
          >
            <path
              d="M0 110 L40 70 L80 100 L120 60 L160 90 L200 50 L240 80 L280 65 L320 100 L320 120 L0 120 Z"
              fill={project.palette[2]}
              opacity="0.85"
            />
            <circle cx="240" cy="35" r="14" fill={project.accent} />
          </svg>
          <div
            className="font-display font-semibold tracking-tight mt-3"
            style={{
              color: project.palette[2],
              fontSize: "clamp(22px, 4.5vw, 40px)",
              lineHeight: 0.95,
            }}
          >
            Where moments
            <br />
            become memories.
          </div>
        </div>
      </div>
    </div>
  ),

  "amala-toh-sure": ({ project }) => (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: project.palette[0] }}
    >
      <div className="absolute inset-0 flex flex-col p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span
            className="font-display font-semibold italic text-[14px] md:text-[16px]"
            style={{ color: project.palette[2] }}
          >
            Amala Toh Sure
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase"
            style={{ color: project.accent }}
          >
            MENU
          </span>
        </div>
        <div className="mt-auto">
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[project.accent, project.palette[1], project.palette[2]].map(
              (c, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full"
                  style={{
                    background: c,
                    opacity: i === 1 ? 0.5 : 0.85,
                  }}
                />
              ),
            )}
          </div>
          <div
            className="font-display font-semibold tracking-tight"
            style={{
              color: project.palette[2],
              fontSize: "clamp(22px, 4.5vw, 40px)",
              lineHeight: 0.95,
            }}
          >
            Real food.
            <br />
            Real comfort.
          </div>
        </div>
      </div>
    </div>
  ),

  calcpro: ({ project }) => (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: project.palette[0] }}
    >
      <div className="absolute inset-0 flex flex-col p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span
            className="font-display font-semibold text-[14px] md:text-[16px]"
            style={{ color: project.palette[2] }}
          >
            CalcPro
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase"
            style={{ color: project.accent }}
          >
            APP
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* Calculator grid */}
          <div className="grid grid-cols-4 gap-1.5 w-full max-w-[220px]">
            {[
              "AC",
              "±",
              "%",
              "÷",
              "7",
              "8",
              "9",
              "×",
              "4",
              "5",
              "6",
              "−",
              "1",
              "2",
              "3",
              "+",
              "0",
              ".",
              "=",
            ].map((k, i) => {
              const isOp = ["÷", "×", "−", "+", "="].includes(k);
              return (
                <div
                  key={i}
                  className="aspect-square rounded-md flex items-center justify-center font-mono text-[10px] md:text-[11px]"
                  style={{
                    background: isOp ? project.accent : project.palette[1],
                    color: isOp ? "#fff" : project.palette[2],
                    gridColumn: k === "0" ? "span 2" : "auto",
                  }}
                >
                  {k}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ),

  "cog-testimonies": ({ project }) => (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: project.palette[0] }}
    >
      <div className="absolute inset-0 flex flex-col p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span
            className="font-display font-semibold text-[14px] md:text-[16px]"
            style={{ color: project.palette[2] }}
          >
            Chapel of Grace
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase"
            style={{ color: project.accent }}
          >
            TESTIMONIES
          </span>
        </div>

        {/* Stacked testimony cards — fills the tall frame */}
        <div className="flex-1 flex flex-col justify-center gap-3 py-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg p-3 md:p-4"
              style={{
                background: project.palette[1],
                opacity: 1 - i * 0.2,
                transform: `translateX(${i * 12}px)`,
              }}
            >
              <div
                className="font-mono text-[8px] md:text-[9px] tracking-widest uppercase mb-1.5"
                style={{
                  color: i === 0 ? project.accent : project.palette[2],
                  opacity: 0.7,
                }}
              >
                TESTIMONY · 0{i + 1}
              </div>
              <div className="space-y-1.5">
                <div
                  className="rounded h-2"
                  style={{
                    width: `${90 - i * 12}%`,
                    background: project.palette[2],
                    opacity: 0.5,
                  }}
                />
                <div
                  className="rounded h-2"
                  style={{
                    width: `${75 - i * 10}%`,
                    background: project.palette[2],
                    opacity: 0.35,
                  }}
                />
                <div
                  className="rounded h-2"
                  style={{
                    width: `${60 - i * 8}%`,
                    background: project.palette[2],
                    opacity: 0.25,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <div
            className="font-display font-semibold tracking-tight italic"
            style={{
              color: project.palette[2],
              fontSize: "clamp(20px, 4vw, 34px)",
              lineHeight: 1,
            }}
          >
            Stories of grace,
            <br />
            shared out loud.
          </div>
        </div>
      </div>
    </div>
  ),

  "octagon-omega": ({ project }) => (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: project.palette[0] }}
    >
      <div className="absolute inset-0 flex flex-col p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span
            className="font-display font-semibold text-[14px] md:text-[16px]"
            style={{ color: project.palette[2] }}
          >
            Octagon Omega
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase"
            style={{ color: project.accent }}
          >
            360°
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-40 md:h-40">
            <polygon
              points="100,15 165,55 175,135 100,185 25,135 35,55"
              fill="none"
              stroke={project.palette[2]}
              strokeWidth="1.2"
              opacity="0.4"
            />
            <polygon
              points="100,40 145,65 155,125 100,160 45,125 55,65"
              fill="none"
              stroke={project.accent}
              strokeWidth="1.4"
            />
            <circle cx="100" cy="100" r="6" fill={project.accent} />
          </svg>
        </div>
        <div
          className="font-display font-semibold tracking-tight"
          style={{
            color: project.palette[2],
            fontSize: "clamp(20px, 4vw, 36px)",
            lineHeight: 0.95,
          }}
        >
          Eight angles.
          <br />
          One experience.
        </div>
      </div>
    </div>
  ),

  "3d-interiors": ({ project }) => (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: project.palette[0] }}
    >
      <div className="absolute inset-0 flex flex-col p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span
            className="font-display font-semibold text-[14px] md:text-[16px]"
            style={{ color: project.palette[2] }}
          >
            3D Interiors
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase"
            style={{ color: project.accent }}
          >
            STUDIO
          </span>
        </div>
        <div className="flex-1 flex items-end justify-center">
          <svg viewBox="0 0 280 140" className="w-full h-auto">
            {/* Room in perspective */}
            <path
              d="M40 120 L40 30 L240 30 L240 120 Z"
              fill={project.palette[2]}
              opacity="0.85"
            />
            <path
              d="M40 120 L0 130 L0 20 L40 30 Z"
              fill={project.palette[1]}
              opacity="0.85"
            />
            <path
              d="M0 20 L40 30 L240 30 L200 20 Z"
              fill={project.palette[2]}
              opacity="0.4"
            />
            <rect
              x="100"
              y="60"
              width="60"
              height="60"
              fill={project.accent}
              opacity="0.85"
            />
          </svg>
        </div>
        <div
          className="font-display font-semibold tracking-tight mt-3"
          style={{
            color: project.palette[2],
            fontSize: "clamp(20px, 4vw, 36px)",
            lineHeight: 0.95,
          }}
        >
          Spaces,
          <br />
          visualised.
        </div>
      </div>
    </div>
  ),
};

function ProjectCard({ project, index }) {
  // Vary the column span across the grid for editorial rhythm.
  // Mobile: all stack. Desktop: 6 / 6 / 4 / 8 / 6 / 6 (out of 12).
  const desktopSpan =
    [
      "md:col-span-6",
      "md:col-span-6",
      "md:col-span-4",
      "md:col-span-8",
      "md:col-span-6",
      "md:col-span-6",
    ][index] || "md:col-span-6";

  return (
    <Reveal
      as="article"
      delay={index * 90}
      className={`project-card group col-span-12 ${desktopSpan}`}
    >
      <div className="flex flex-col">
        {/* Visual */}
        <ProjectVisual project={project} ratio={project.ratio} />

        {/* Meta */}
        <div className="mt-5 md:mt-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-[11px] tracking-widest text-muted">
                {project.number}
              </span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-muted">
                {project.category}
              </span>
            </div>
            <h3
              className="project-title font-display font-medium tracking-tight text-ink"
              style={{ fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.05 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
              >
                {project.title}
              </a>
            </h3>
            <p className="mt-3 font-body text-[14px] md:text-[15px] leading-[1.5] text-muted-2 max-w-md">
              {project.description}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-arrow shrink-0 mt-2 text-accent"
            aria-label={`Open ${project.title} in a new tab`}
            data-cursor="link"
          >
            <ArrowUpRight size={22} strokeWidth={1.4} aria-hidden="true" />
          </a>
        </div>

        {/* Footer rule with link */}
        <div className="mt-4 pt-4 border-t border-ink/[0.06] flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
            {project.year} · LIVE
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase text-accent flex items-center gap-1.5"
            data-cursor="link"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            OPEN SITE
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects({ featured = false }) {
  const visibleProjects = featured ? projects.slice(0, 3) : projects;

  return (
    <section
      id={featured ? "featured-work" : "work"}
      className="py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <span className="eyebrow eyebrow-accent mb-5 block">
              {featured ? "01 / SELECTED WORK" : "SELECTED WORK"}
            </span>
            <h2
              className="font-display font-medium text-ink tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", lineHeight: 1 }}
            >
              Some things I've
              <br />
              brought to life.
            </h2>
          </div>
          <p className="font-body text-[14px] md:text-[15px] text-muted-2 max-w-xs md:text-right">
            {featured
              ? "A few recent websites and digital experiences."
              : "Websites and digital experiences I've designed or built."}
          </p>
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-24">
          {visibleProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {featured && (
          <div className="mt-12 flex justify-center md:justify-start">
            <a
              href="/work"
              className="link-underline inline-flex items-center gap-2 font-mono text-[12px] tracking-widest uppercase text-accent"
            >
              View all projects <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
