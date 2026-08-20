/**
 * ScrollVideoParallax
 * A sticky looping video background behind scrollable section content.
 * No GSAP / ScrollTrigger — sections scroll naturally over the fixed video.
 */
import { type ReactNode } from 'react'

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
  return (
    <div style={{ position: 'relative', isolation: 'isolate' }}>

      {/* ── Sticky video background ─────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 0,
          height: 0,          // takes no space in flow
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
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Light dark overlay for text readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `rgba(6,4,18,${overlayOpacity})`,
            }}
          />
        </div>
      </div>

      {/* ── Scrollable content sits above video ─────────────────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
