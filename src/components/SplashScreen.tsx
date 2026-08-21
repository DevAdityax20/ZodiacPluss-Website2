import { useEffect, useState } from 'react'

const LOGO_URL =
  'https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png'

const LOAD_DURATION = 500 // ms — progress goes 0 -> 100%
const EXIT_DELAY = 150 // ms pause at 100% before fading out
const EXIT_DURATION = 450 // ms fade-out transition

interface SplashScreenProps {
  onFinish: () => void
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    let frameId = 0
    let start: number | null = null
    let exitTimer: ReturnType<typeof setTimeout>
    let finishTimer: ReturnType<typeof setTimeout>

    const tick = (t: number) => {
      if (start === null) start = t
      const elapsed = t - start
      const pct = Math.min(100, (elapsed / LOAD_DURATION) * 100)
      setProgress(pct)
      if (pct < 100) {
        frameId = requestAnimationFrame(tick)
      } else {
        exitTimer = setTimeout(() => setExiting(true), EXIT_DELAY)
        finishTimer = setTimeout(onFinish, EXIT_DELAY + EXIT_DURATION)
      }
    }
    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(exitTimer)
      clearTimeout(finishTimer)
      document.body.style.overflow = prevOverflow
    }
  }, [onFinish])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background: '#ffffff',
        opacity: exiting ? 0 : 1,
        transition: `opacity ${EXIT_DURATION}ms ease-out`,
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      <div className="relative flex flex-col items-center px-6">
        {/* Glow behind logo */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
          style={{
            width: 210,
            height: 210,
            background: 'radial-gradient(circle, rgba(20,184,166,0.16) 0%, transparent 72%)',
            animation: 'splash-pulse 1.6s ease-in-out infinite',
          }}
        />

        <img
          src={LOGO_URL}
          alt="ZodiacPluss Logo"
          className="relative w-24 h-24 sm:w-28 sm:h-28 object-contain mb-5"
        />

        <h1
          className="relative text-[26px] sm:text-3xl font-extrabold tracking-tight mb-1.5"
          style={{ fontFamily: "'Inter', sans-serif", color: '#1e1035' }}
        >
          Zodiac Pluss
        </h1>

        <p
          className="relative text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold mb-9"
          style={{ color: '#8b95a8' }}
        >
          Guided by Stars
        </p>

        {/* Progress bar */}
        <div
          className="relative w-[200px] sm:w-[240px] h-1.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(20,184,166,0.14)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: '#14b8a6',
            }}
          />
        </div>
        <span
          className="relative mt-3 text-xs font-bold tabular-nums"
          style={{ color: '#0d5f4f' }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  )
}
