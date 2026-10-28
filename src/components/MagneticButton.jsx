import { forwardRef } from "react";
import { useMagnetic } from "../hooks/useMagnetic";

/**
 * MagneticButton
 *
 * A reusable button/anchor that gently follows the pointer when hovered.
 * Used for hero CTAs, nav CTA, and the final contact CTA.
 *
 * Props:
 *  - as: 'a' | 'button'  (default 'a')
 *  - href, target, rel, onClick, type, etc. — passed through
 *  - strength: 0..1, default 0.35
 *  - variant: 'primary' | 'secondary' | 'ghost'
 *  - arrow: boolean — render trailing arrow
 *  - children: label
 */
const MagneticButton = forwardRef(function MagneticButton(
  {
    as = "a",
    href,
    target,
    rel,
    onClick,
    type,
    className = "",
    strength = 0.35,
    innerStrength = 0.5,
    radius = 0,
    variant = "primary",
    arrow = false,
    arrowPosition = "right",
    children,
    "aria-label": ariaLabel,
    ...rest
  },
  _,
) {
  const { containerRef, innerRef, enabled } = useMagnetic({
    strength,
    innerStrength,
    radius,
  });

  const Tag = as;

  const base =
    "group inline-flex items-center justify-center rounded-full font-display font-medium tracking-tight transition-colors duration-300 select-none";

  const variants = {
    primary:
      "bg-[#f2efe7] text-ink border border-ink/10 hover:border-accent hover:bg-accent hover:text-white focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white",
    secondary:
      "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.02]",
    ghost: "text-ink hover:text-accent",
    accent:
      "bg-accent text-cream hover:bg-accent-deep focus-visible:bg-accent-deep",
  };

  const size = "px-6 py-3 text-sm md:text-[15px]";

  const handleBlur = () => {
    // Reset transform when focus is lost (keyboard nav)
    if (containerRef.current) containerRef.current.style.transform = "";
    if (innerRef.current) innerRef.current.style.transform = "";
  };

  return (
    <Tag
      ref={containerRef}
      href={as === "a" ? href : undefined}
      target={target}
      rel={rel}
      type={as === "button" ? type || "button" : undefined}
      onClick={onClick}
      onBlur={handleBlur}
      aria-label={ariaLabel}
      data-cursor="button"
      className={`magnetic ${base} ${variants[variant] || variants.primary} ${size} ${className}`}
      {...rest}
    >
      <span
        ref={innerRef}
        className="magnetic-inner items-center gap-2"
        style={{ display: "inline-flex" }}
      >
        {arrow && arrowPosition === "left" && (
          <ArrowGlyph className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1" />
        )}
        <span>{children}</span>
        {arrow && arrowPosition === "right" && (
          <ArrowGlyph className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        )}
      </span>
    </Tag>
  );
});

function ArrowGlyph({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MagneticButton;
