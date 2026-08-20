import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  strength?: number
  maxDistance?: number
  className?: string
  style?: React.CSSProperties
}

export function MagneticButton({
  children,
  strength = 0.45,
  maxDistance = 50,
  className = '',
  style = {},
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const target = targetRef.current
    if (!container || !target) return

    // Setup quickTo for buttery 60fps magnetic animation
    const xTo = gsap.quickTo(target, 'x', { duration: 0.35, ease: 'power2.out' })
    const yTo = gsap.quickTo(target, 'y', { duration: 0.35, ease: 'power2.out' })

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      let deltaX = (e.clientX - centerX) * strength
      let deltaY = (e.clientY - centerY) * strength

      const dist = Math.hypot(deltaX, deltaY)
      if (dist > maxDistance) {
        const scale = maxDistance / dist
        deltaX *= scale
        deltaY *= scale
      }

      xTo(deltaX)
      yTo(deltaY)
    }

    const handleMouseLeave = () => {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1.1, 0.4)',
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, maxDistance])

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{ display: 'inline-block', ...style }}
    >
      <div ref={targetRef} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  )
}

export default MagneticButton
