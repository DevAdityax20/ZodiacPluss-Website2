/**
 * CustomCursor — Glowing circular cursor follower (desktop only)
 * Hidden automatically on touch/pointer:coarse devices.
 */
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ringRef  = useRef<HTMLDivElement>(null)
  const dotRef   = useRef<HTMLDivElement>(null)
  const mouse    = useRef({ x: -200, y: -200 })
  const current  = useRef({ x: -200, y: -200 })
  const rafId    = useRef<number>(0)

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  useEffect(() => {
    // Only activate on pointer:fine (mouse) devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.opacity = '1'
      if (dotRef.current)  dotRef.current.style.opacity  = '1'
    }
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = '0'
      if (dotRef.current)  dotRef.current.style.opacity  = '0'
    }

    const onDown = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(0.82)'
      }
    }
    const onUp = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    // Smooth lag lerp loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const loop = () => {
      current.current.x = lerp(current.current.x, mouse.current.x, 0.12)
      current.current.y = lerp(current.current.y, mouse.current.y, 0.12)

      if (ringRef.current) {
        ringRef.current.style.left = `${current.current.x}px`
        ringRef.current.style.top  = `${current.current.y}px`
      }
      if (dotRef.current) {
        // Dot follows instantly
        dotRef.current.style.left = `${mouse.current.x}px`
        dotRef.current.style.top  = `${mouse.current.y}px`
      }
      rafId.current = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      {/* Outer glowing ring — lags behind slightly */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '2px solid rgba(77,216,234,0.95)',
          boxShadow: '0 0 18px 8px rgba(77,216,234,0.35), 0 0 40px 16px rgba(173,234,245,0.18), inset 0 0 14px rgba(255,255,255,0.55)',
          background: 'rgba(255,255,255,0.12)',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'opacity 0.3s, transform 0.15s',
          mixBlendMode: 'normal',
        }}
      />

      {/* Inner dot — snaps to cursor instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'rgba(77,216,234,0.95)',
          boxShadow: '0 0 8px 3px rgba(77,216,234,0.75)',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      />
    </>
  )
}
