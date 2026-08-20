interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="px-3 sm:px-6 pt-3 pb-4">
      {/* Hero card container — rounded, contained */}
      <div
        className="relative overflow-hidden w-full flex flex-col justify-between"
        style={{
          minHeight: "clamp(640px, 85vh, 860px)",
          borderRadius: "28px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Background video (PRESERVED) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/pp0lpskp/video/upload/v1786020353/herocalmnew_m4wklf.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Soft gradient washes for readability matching lotus video theme */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              110deg,
              rgba(245, 235, 252, 0.85) 0%,
              rgba(240, 225, 250, 0.72) 30%,
              rgba(235, 215, 245, 0.45) 55%,
              rgba(240, 220, 248, 0.15) 75%,
              transparent 100%
            )`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(235, 220, 245, 0.5) 0%, transparent 40%)",
          }}
        />

        {/* Hero Content — Figma style */}
        <div
          className="relative z-10 flex flex-col justify-center flex-1 max-w-3xl"
          style={{
            paddingLeft: "clamp(20px, 6vw, 90px)",
            paddingRight: "clamp(20px, 4vw, 40px)",
            paddingTop: "clamp(80px, 10vw, 120px)",
            paddingBottom: "clamp(20px, 3vw, 40px)",
          }}
        >
          {/* Giant "ZODIAC PLUSS" with cosmic text-clip */}
          <h1
            className="font-black leading-[0.92] tracking-tight mb-6 select-none"
            style={{
              fontSize: "clamp(56px, 8vw, 130px)",
              fontFamily: "'Inter', sans-serif",
              backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ZODIAC<br />PLUSS
          </h1>

          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base" style={{ color: "#5eb8e8" }}>✦</span>
            <span
              className="text-sm sm:text-base font-bold tracking-wide"
              style={{ color: "#2a7d6e", fontFamily: "'Inter', sans-serif" }}
            >
              We Care Your Life!
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl font-semibold leading-snug mb-8 max-w-md"
            style={{ color: "#1a1a2e", fontFamily: "'Inter', sans-serif" }}
          >
            Take Guidance under<br />Professional assistance
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate("Services")}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] cursor-pointer border-0"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => onNavigate("Portfolio")}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] cursor-pointer bg-transparent"
              style={{
                border: "2px solid #1a1a2e",
                color: "#1a1a2e",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Visit Our Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>


        {/* Credentials moved outside hero to be rendered below the hero section */}
      </div>
    </div>
  )
}
