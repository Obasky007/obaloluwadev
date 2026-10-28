import { useEffect, useRef } from 'react'

/**
 * usePointerProximity
 *
 * Tracks the global pointer position and reports how close the pointer is to
 * the bound element, expressed as a normalized vector from element center to
 * pointer (-1..1 on each axis, with 0,0 = element center).
 *
 * Useful for the hero interactive typography: nearby letters can read this
 * value to subtly shift their position or color.
 *
 * The hook writes directly to a ref object via a callback to avoid triggering
 * React re-renders on every pointermove event.
 *
 * @param {Function} onMove  Callback receiving ({x, y, distance, rect}) where
 *                            x,y are -1..1 normalized relative to element
 *                            center; distance is px from element center.
 * @returns {React.Ref}  Attach to the container element.
 */
export function usePointerProximity(onMove) {
  const ref = useRef(null)
  const frameRef = useRef(null)
  const pointerRef = useRef({ x: -9999, y: -9999 })
  const cbRef = useRef(onMove)
  cbRef.current = onMove

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return

    const onPointerMove = (e) => {
      pointerRef.current = { x: e.clientX, y: e.clientY }
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(emit)
      }
    }

    const emit = () => {
      frameRef.current = null
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const px = pointerRef.current.x
      const py = pointerRef.current.y

      const dx = px - cx
      const dy = py - cy
      const distance = Math.sqrt(dx * dx + dy * dy)
      const nx = dx / (rect.width / 2)
      const ny = dy / (rect.height / 2)

      cbRef.current?.({ x: nx, y: ny, distance, rect, pointerX: px, pointerY: py })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return ref
}
