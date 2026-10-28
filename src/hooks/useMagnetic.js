import { useEffect, useRef, useState } from 'react'

/**
 * useMagnetic
 * A reusable hook that gently pulls an element toward the pointer when the
 * pointer is within or near the element. Designed for desktop/fine-pointer
 * devices only; automatically disabled on touch and reduced-motion users.
 *
 * @param {Object} options
 * @param {number} options.strength  How strongly the element follows the pointer (0..1). Default 0.35
 * @param {number} options.radius    Influence radius in px beyond the element bounds. Default 0
 * @param {number} options.innerStrength  How strongly the inner content moves. Default 0.5
 * @returns {Object} ref + style helpers to apply on the magnetic container & inner element
 */
export function useMagnetic({
  strength = 0.35,
  innerStrength = 0.5,
  radius = 0,
} = {}) {
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const frameRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const innerTargetRef = useRef({ x: 0, y: 0 })
  const innerCurrentRef = useRef({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer || reduceMotion) return
    setEnabled(true)

    const el = containerRef.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy

      // Within the element bounds (with optional radius extension)
      const withinX = Math.abs(dx) < rect.width / 2 + radius
      const withinY = Math.abs(dy) < rect.height / 2 + radius
      if (!withinX || !withinY) {
        targetRef.current = { x: 0, y: 0 }
        innerTargetRef.current = { x: 0, y: 0 }
        return
      }
      targetRef.current = { x: dx * strength, y: dy * strength }
      innerTargetRef.current = { x: dx * innerStrength, y: dy * innerStrength }
    }

    const onLeave = () => {
      targetRef.current = { x: 0, y: 0 }
      innerTargetRef.current = { x: 0, y: 0 }
    }

    // Use document-level listener so the magnetic pull continues slightly
    // past the element edge (smooth return on leave).
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerout', onLeave, { passive: true })

    const tick = () => {
      // Smooth lerp toward target
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18
      innerCurrentRef.current.x +=
        (innerTargetRef.current.x - innerCurrentRef.current.x) * 0.22
      innerCurrentRef.current.y +=
        (innerTargetRef.current.y - innerCurrentRef.current.y) * 0.22

      if (el) {
        el.style.transform = `translate3d(${currentRef.current.x.toFixed(2)}px, ${currentRef.current.y.toFixed(2)}px, 0)`
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${innerCurrentRef.current.x.toFixed(2)}px, ${innerCurrentRef.current.y.toFixed(2)}px, 0)`
      }
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerout', onLeave)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [strength, innerStrength, radius])

  const reset = () => {
    targetRef.current = { x: 0, y: 0 }
    innerTargetRef.current = { x: 0, y: 0 }
  }

  return { containerRef, innerRef, enabled, reset }
}
