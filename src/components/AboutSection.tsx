import { useState, useEffect, useCallback, useRef } from "react"

interface AboutSectionProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const services = [
  {
    id: "01",
    title: "Personalized Horoscope",
    desc: "Get insights written just for you",
    bg: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "02",
    title: "Live Sessions with Experts",
    desc: "Talk to top astrologers and therapists in real time",
    bg: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "03",
    title: "AI-Powered Astro Insights",
    desc: "Smart technology meets astrology to reveal what matters most.",
    bg: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=400&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "04",
    title: "Therapy That Helps",
    desc: "Compassionate therapists for mental clarity and healing",
    bg: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "05",
    title: "Tarot Card of the Day",
    desc: "Draw a tarot card for daily guidance",
    bg: "https://images.unsplash.com/photo-1627656349459-58c83faa6bdf?w=400&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "06",
    title: "Daily Horoscope",
    desc: "Start each day with cosmic guidance",
    bg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "07",
    title: "Community Support",
    desc: "Connect with like-minded seekers",
    bg: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop&auto=format&q=80",
  },
]

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"/>
      </svg>
    ),
    label: "Trusted Experts",
    sub: "Verified astrologers and therapists",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    label: "Private & Secure",
    sub: "Your conversations are 100% confidential",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: "Holistic Support",
    sub: "Mind, emotions, and life guidance",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    label: "Instant Access",
    sub: "Connect in minutes, anytime, anywhere",
  },
]

export default function AboutSection({ onNavigate, dark = false }: AboutSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = services.length

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-scroll every 3s, pause on hover
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(goNext, 3000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, goNext])

  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: dark ? "#120e22" : "#f8f6ff", transition: "background 0.3s ease" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="lg:w-[42%] flex-shrink-0">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6" style={{ border: dark ? '1px solid rgba(20,184,166,0.35)' : '1px solid #5eead4', color: dark ? '#2dd4bf' : '#0d9488', background: dark ? 'rgba(20,184,166,0.08)' : 'transparent' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"/>
              </svg>
              About ZodiacPluss
            </div>

            {/* Heading */}
            <h2
              className="text-[36px] sm:text-[42px] md:text-[50px] font-semibold leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span style={{ color: dark ? '#e9d5ff' : '#1e0d40' }}>Guidance that</span>
              <br />
              <span style={{ color: dark ? '#2dd4bf' : '#0d5f4f' }}>understands you</span>
            </h2>

            {/* Teal underline accent */}
            <div className="w-12 h-1 bg-teal-500 rounded mb-6" />

            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: dark ? '#a09bc0' : '#4a4a6a' }}>
              ZodiacPluss blends ancient astrology with modern psychological insights to help you understand yourself better and make confident decisions.
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: dark ? 'rgba(139,92,246,0.12)' : '#faf5ff', border: dark ? '1px solid rgba(139,92,246,0.25)' : '1px solid #ede9fe', color: '#5b2d8e' }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: dark ? '#d4c4f0' : '#1e0d40' }}>{f.label}</div>
                    <div className="text-xs leading-tight mt-0.5" style={{ color: dark ? '#8b80aa' : '#6b5b8f' }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate("Services")}
                className="flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md"
                style={{ background: dark ? 'rgba(139,92,246,0.25)' : '#1e0d40' }}
              >
                Explore Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button
                onClick={() => onNavigate("About Us")}
                className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200"
                style={{ border: dark ? '1px solid rgba(200,180,255,0.35)' : '1px solid #1e0d40', color: dark ? '#c4b5fd' : '#1e0d40' }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Auto-scrolling card carousel */}
          <div
            className="lg:w-[58%] w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Carousel viewport */}
            <div className="relative overflow-hidden rounded-2xl" style={{ height: 340 }}>
              {/* Sliding track */}
              <div
                className="flex h-full"
                style={{
                  width: `${total * 100}%`,
                  transform: `translateX(-${(activeIndex * 100) / total}%)`,
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {services.map((svc, i) => (
                  <div
                    key={svc.id}
                    className="h-full flex-shrink-0 px-2"
                    style={{ width: `${100 / total}%` }}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden relative group cursor-pointer">
                      {/* Background image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${svc.bg}')` }}
                      />
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: i === activeIndex
                            ? "linear-gradient(160deg, rgba(10,30,60,0.45) 0%, rgba(5,15,35,0.8) 100%)"
                            : "linear-gradient(160deg, rgba(5,15,35,0.6) 0%, rgba(5,10,25,0.88) 100%)",
                        }}
                      />
                      {/* Content */}
                      <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-white/40 font-semibold">{svc.id}</span>
                          {i === activeIndex && (
                            <div className="w-10 h-10 rounded-full bg-teal-400/20 border border-teal-400/40 flex items-center justify-center">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                              </svg>
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg sm:text-xl leading-snug mb-2">
                            {svc.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs">
                            {svc.desc}
                          </p>
                          {i === activeIndex && (
                            <button className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/30">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nav arrows */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all z-20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all z-20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === activeIndex ? "#14b8a6" : (dark ? "rgba(139,92,246,0.3)" : "#d1c4e9"),
                  }}
                />
              ))}
              <span className="ml-3 text-xs font-mono" style={{ color: dark ? '#8b80aa' : '#6b5b8f' }}>
                {String(activeIndex + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

