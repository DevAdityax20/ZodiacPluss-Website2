/**
 * ScrollVideoParallax
 * ─────────────────────────────────────────────────────────────
 * Wraps any number of children with a fixed Cloudinary video
 * background. Each child animates in/stays/exits with GSAP
 * ScrollTrigger (y, opacity, scale, blur).
 *
 * Usage:
 *   <ScrollVideoParallax videoUrl="https://res.cloudinary.com/...mp4">
 *     <AboutSection />
 *     <ServicesSection />
 *   </ScrollVideoParallax>
 */

import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollVideoParallaxProps {
  videoUrl: string
  /** Dark overlay opacity (0–1). Default 0.35 */
  overlayOpacity?: number
  children: ReactNode
}

export default function ScrollVideoParallax({
  videoUrl,
  overlayOpacity = 0.35,
  children,
}: ScrollVideoParallaxProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) return

    // Wait one frame so DOM is ready
    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        // Query all .svp-section elements inside the content wrapper
        const sections = contentRef.current?.querySelectorAll<HTMLElement>('.svp-section')
        if (!sections?.length) return

        sections.forEach((el) => {
          // Enter animation (scrubbed with scroll)
          gsap.fromTo(
            el,
            { y: 48, opacity: 0, scale: 0.97 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                end: 'top 30%',
                scrub: 1.5,
              },
            }
          )

          // Exit animation (scrubbed with scroll)
          gsap.fromTo(
            el,
            { y: 0, opacity: 1 },
            {
              y: -36,
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'bottom 60%',
                end: 'bottom 5%',
                scrub: 1.5,
              },
            }
          )
        })
      }, contentRef)

      return () => ctx.revert()
    })

    return () => cancelAnimationFrame(raf)
  }, [prefersReducedMotion])

  return (
    <div style={{ position: 'relative', isolation: 'isolate' }}>

      {/* ── Fixed video background ───────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 0,
          height: 0,          // doesn't push layout
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: '100vh',
          }}
        >
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Very light gradient overlay — just enough for text readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg,
                rgba(8, 5, 22, ${overlayOpacity}) 0%,
                rgba(8, 5, 22, ${overlayOpacity * 0.7}) 50%,
                rgba(8, 5, 22, ${overlayOpacity}) 100%)`,
            }}
          />
        </div>
      </div>

      {/* ── Scrollable content sits above video ─────────────── */}
      <div ref={contentRef} style={{ position: 'relative', zIndex: 1 }}>
        {Array.isArray(children)
          ? (children as ReactNode[]).map((child, i) => (
              <div className="svp-section" key={i}>
                {child}
              </div>
            ))
          : <div className="svp-section">{children}</div>
        }
      </div>
    </div>
  )
}
