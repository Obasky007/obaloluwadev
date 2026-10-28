import { useRef } from 'react'
import { usePointerProximity } from '../hooks/usePointerProximity'

/**
 * InteractiveType
 *
 * The hero signature element. An editorial composition built from the four
 * words: DESIGN. BUILD. REFINE. LAUNCH.
 *
 * Pointer proximity causes nearby letters to subtly translate (a few px) and
 * drift toward the pointer. The red period on DESIGN and the accent on
 * LAUNCH's arrow shift slightly to create a sense of responsiveness.
 *
 * On touch devices and reduced-motion users, the composition is purely
 * static — no interaction is required to read it.
 */
export default function InteractiveType() {
  const containerRef = usePointerProximity((data) => {
    if (!containerRef.current) return
    const letters = containerRef.current.querySelectorAll('[data-letter]')
    if (!letters.length) return

    const maxDist = 220 // px influence radius
    const maxShift = 8 // px translation
    const maxLetterSpacing = 0.05 // em extra letter spacing

    letters.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = data.pointerX - cx
      const dy = data.pointerY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const t = Math.max(0, 1 - dist / maxDist)

      // Direction from letter to pointer, normalized
      const inv = dist === 0 ? 0 : 1 / dist
      const shiftX = dx * inv * t * maxShift
      const shiftY = dy * inv * t * maxShift

      el.style.transform = `translate3d(${shiftX.toFixed(2)}px, ${shiftY.toFixed(2)}px, 0)`
      // Letters nearer the pointer grow slightly bolder / tighter
      const weight = 500 + Math.round(t * 200) // 500 -> 700
      el.style.fontWeight = String(weight)
      const ls = (1 - t) * 0 - t * maxLetterSpacing
      el.style.letterSpacing = `${ls}em`
    })
  })

  const words = ['DESIGN', 'BUILD', 'REFINE', 'LAUNCH']

  return (
    <div
      ref={containerRef}
      className="typo-field relative"
      data-cursor="typo"
      aria-hidden="false"
    >
      <div className="flex items-center gap-3 mb-5 md:mb-7">
        <span className="eyebrow text-muted">A WORKING PHILOSOPHY</span>
        <span className="flex-1 h-px bg-ink/10" />
      </div>

      {/* The composition itself */}
      <div className="flex flex-col gap-1 md:gap-3 -mx-1">
        {words.map((word, i) => {
          // Vary scale and indent for editorial feel
          const indent = i % 2 === 0 ? '0' : '8%'
          const scale = i === 0 ? 1 : 0.85 - i * 0.04
          return (
            <div
              key={word}
              className="flex items-baseline"
              style={{ paddingLeft: `clamp(0px, ${indent}, 80px)` }}
            >
              <span
                className="font-mono text-[11px] tracking-widest text-muted mr-4 md:mr-6 self-center"
                style={{ fontSize: 'clamp(10px, 1vw, 12px)' }}
              >
                0{i + 1}
              </span>
              <span
                className="typo-word text-ink"
                style={{
                  fontSize: `clamp(3.2rem, ${10 * scale}vw, ${8.5 * scale}rem)`,
                }}
              >
                {word.split('').map((char, j) => (
                  <span
                    key={`${word}-${j}`}
                    data-letter
                    className="typo-letter"
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </span>
                ))}
                <span className="typo-period">.</span>
              </span>

              {/* Trailing marker line for the last word — anchor */}
              {i === words.length - 1 && (
                <span className="hidden md:inline-flex items-center gap-2 ml-6 self-center">
                  <span className="block w-12 h-px bg-accent" />
                  <span className="font-mono text-[11px] tracking-widest text-accent">
                    READY
                  </span>
                </span>
              )}
            </div>
          )
        })}
      </div>

      {/* Footnote */}
      <p className="mt-6 md:mt-8 font-body text-[13px] md:text-[14px] text-muted max-w-md">
        A simple working rhythm — turn ideas into clear, useful, considered
        interfaces, one step at a time.
      </p>
    </div>
  )
}
