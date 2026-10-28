import { useEffect, useRef, useState } from "react";

const finePointerQuery = "(hover: hover) and (pointer: fine)";

/**
 * CustomCursor — context-aware cursor system.
 *
 * Visual states:
 *  - default: small red dot + thin ring
 *  - link: smaller dot, tighter ring
 *  - button: accent ring (drives magnetic buttons)
 *  - project: red mini-dot + floating label "VIEW PROJECT ↗"
 *  - typo: large red outline ring (hero typography field)
 *
 * Behavior:
 *  - Hidden on touch/coarse pointers (native cursor preserved).
 *  - Hides when leaving the window.
 *  - Hides during text selection over inputs/textareas/contenteditable.
 *  - Respects prefers-reduced-motion (cursor is static, no spring).
 *  - Uses requestAnimationFrame + CSS transforms for smooth, jank-free motion.
 *  - Pointer events are disabled (cursor never intercepts clicks).
 */
export default function CustomCursor() {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const ringScaleRef = useRef(1);
  const [finePointer, setFinePointer] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(finePointerQuery).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(finePointerQuery);
    const updatePointerType = () => setFinePointer(mediaQuery.matches);
    mediaQuery.addEventListener("change", updatePointerType);
    return () => mediaQuery.removeEventListener("change", updatePointerType);
  }, []);

  useEffect(() => {
    if (!finePointer) {
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Target positions (pointer) and current animated positions
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { x: pointer.x, y: pointer.y };
    const ringPos = { x: pointer.x, y: pointer.y };
    const labelPos = { x: pointer.x, y: pointer.y };

    let raf = 0;
    let initialized = false;
    let lastState = "default";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const detectState = (target) => {
      if (!(target instanceof Element)) return "default";

      // Walk up looking for the closest [data-cursor] attribute.
      // But skip if the target is a text/selection-capable element.
      const editable = target.closest(
        'input, textarea, [contenteditable="true"], [contenteditable=""]',
      );
      if (editable) return "default";

      // If user is actively selecting text, fall back to default cursor feel.
      const sel = window.getSelection();
      if (sel && sel.toString().length > 0) return "default";

      const tagged = target.closest("[data-cursor]");
      if (tagged) return tagged.getAttribute("data-cursor") || "default";

      if (target.closest("a, button")) return "link";
      return "default";
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      if (!initialized) {
        dotPos.x = ringPos.x = labelPos.x = pointer.x;
        dotPos.y = ringPos.y = labelPos.y = pointer.y;
        initialized = true;
      }
      document.body.classList.add("custom-cursor-active");
      if (rootRef.current) {
        rootRef.current.classList.remove("is-hidden");
        rootRef.current.classList.add("is-visible");
      }

      const target = e.target;
      const detected = detectState(target);
      if (detected !== lastState) {
        lastState = detected;
        if (rootRef.current)
          rootRef.current.setAttribute("data-state", detected);
      }

      // Update label content for project hover (read once)
      if (detected === "project") {
        const projEl = target.closest("[data-cursor-label]");
        const text = projEl?.getAttribute("data-cursor-label");
        if (text && labelRef.current) labelRef.current.textContent = text;
      }
    };

    const onLeave = () => {
      document.body.classList.remove("custom-cursor-active");
      if (rootRef.current) {
        rootRef.current.classList.add("is-hidden");
        rootRef.current.classList.remove("is-visible");
      }
    };

    const onDown = () => {
      ringScaleRef.current = 0.85;
    };
    const onUp = () => {
      ringScaleRef.current = 1;
    };

    const tick = () => {
      const dotEase = reduceMotion ? 1 : 0.55;
      const ringEase = reduceMotion ? 1 : 0.18;
      const labelEase = reduceMotion ? 1 : 0.12;
      dotPos.x += (pointer.x - dotPos.x) * dotEase;
      dotPos.y += (pointer.y - dotPos.y) * dotEase;
      ringPos.x += (pointer.x - ringPos.x) * ringEase;
      ringPos.y += (pointer.y - ringPos.y) * ringEase;
      labelPos.x += (pointer.x - labelPos.x) * labelEase;
      labelPos.y += (pointer.y - labelPos.y) * labelEase;

      if (dot)
        dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${ringScaleRef.current})`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${labelPos.x}px, ${labelPos.y}px, 0) translate(28px, 28px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <div
      ref={rootRef}
      className="cursor-root"
      data-state="default"
      aria-hidden="true"
    >
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={labelRef} className="cursor-label">
        VIEW PROJECT ↗
      </div>
    </div>
  );
}
