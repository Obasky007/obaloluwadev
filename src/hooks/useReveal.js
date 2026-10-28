import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — IntersectionObserver-based scroll reveal.
 *
 * Watches an element and toggles a state when it enters the viewport.
 * Triggers once by default (so reveals don't repeat on scroll-up).
 *
 * @param {Object} options
 * @param {number} options.threshold   0..1, portion of element that must be visible. Default 0.15
 * @param {string} options.rootMargin  Root margin for the observer. Default '0px 0px -10% 0px'
 * @param {boolean} options.once      Only fire the first time. Default true
 * @param {boolean} options.disabled   Skip the observer entirely. Default false
 * @returns {[React.Ref, boolean]}
 */
export function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  disabled = false,
} = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (disabled) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return

    // SSR / no IntersectionObserver fallback — show content
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    // Use a generous bottom rootMargin so elements slightly below the
    // visible fold still reveal (avoids content appearing "empty" in
    // full-page screenshots and feels less janky on fast scrolls).
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) obs.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -5% 0px' }
    )
    obs.observe(el)

    // Safety net: if the observer hasn't fired within 1.2s, reveal anyway.
    // This handles cases like full-page screenshots where elements never
    // truly "enter" the viewport.
    const fallback = setTimeout(() => setVisible(true), 1200)

    return () => {
      obs.disconnect()
      clearTimeout(fallback)
    }
  }, [threshold, rootMargin, once, disabled])

  return [ref, visible]
}
