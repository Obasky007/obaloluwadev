import { useReveal } from '../hooks/useReveal'

/**
 * Reveal
 *
 * Wraps children in a scroll-triggered reveal. Uses IntersectionObserver
 * (via useReveal) and CSS transitions defined in index.css ([data-reveal]).
 *
 * Props:
 *  - as: tag name (default 'div')
 *  - delay: ms delay before reveal starts (default 0)
 *  - className, children
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  once = true,
  ...rest
}) {
  const [ref, visible] = useReveal({ once })
  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
