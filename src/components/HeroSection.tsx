import heroVideo from '@/imports/watermark-removed-generate_a_video_of_this_image.mp4'

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="px-4 pb-0 pt-3">
      {/* Hero card — rounded, contained */}
      <div
        className="relative overflow-hidden w-full"
        style={{
          height: "clamp(520px, 62vw, 720px)",
          borderRadius: "20px",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-right"
          src={heroVideo}
        />

        {/* Fallback gradient if image doesn't load */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(220,190,245,0.85) 0%,
              rgba(235,210,250,0.5) 35%,
              rgba(255,200,180,0.2) 65%,
              transparent 100%
            )`,
          }}
        />

        {/* Left lavender wash for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              95deg,
              rgba(210,185,245,0.92) 0%,
              rgba(220,195,248,0.82) 20%,
              rgba(230,205,250,0.55) 38%,
              rgba(240,215,252,0.25) 52%,
              transparent 68%
            )`,
          }}
        />

        {/* Bottom blend */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(190,170,230,0.3) 0%, transparent 40%)",
          }}
        />

        {/* Text content — left side */}
        <div
          className="absolute inset-0 flex flex-col justify-center"
          style={{
            paddingLeft: "clamp(40px, 8vw, 120px)",
            paddingRight: "clamp(20px, 4vw, 60px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
          }}
        >
          {/* Main heading */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(44px, 6vw, 82px)",
                color: "#1a0e40",
                letterSpacing: "-1.5px",
              }}
            >
              Nurture Your
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(44px, 6vw, 82px)",
                color: "#c2185b",
                letterSpacing: "-1.5px",
              }}
            >
              Mind &amp; Future.
            </span>
          </h1>

          {/* Sub-heading */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 3vw, 38px)",
              color: "#1a0e40",
              marginTop: "12px",
              marginBottom: "28px",
              letterSpacing: "-0.5px",
            }}
          >
            Discover Your Path.
          </p>

          {/* Lotus divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "clamp(60px, 10vw, 120px)",
                height: "1.5px",
                background: "linear-gradient(to right, transparent, #d4609a)",
              }}
            />
            {/* Lotus icon */}
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              {/* Center petal */}
              <path d="M20 8 C20 8, 26 14, 26 21 C26 28, 20 32, 20 32 C20 32, 14 28, 14 21 C14 14, 20 8, 20 8Z" fill="#d4609a" opacity="0.7"/>
              {/* Left petal */}
              <path d="M10 15 C10 15, 16 17, 18 23 C20 29, 16 33, 16 33 C16 33, 10 29, 8 23 C6 17, 10 15, 10 15Z" fill="#d4609a" opacity="0.45"/>
              {/* Right petal */}
              <path d="M30 15 C30 15, 24 17, 22 23 C20 29, 24 33, 24 33 C24 33, 30 29, 32 23 C34 17, 30 15, 30 15Z" fill="#d4609a" opacity="0.45"/>
              {/* Stem */}
              <path d="M20 32 L20 38" stroke="#d4609a" strokeWidth="1" opacity="0.5"/>
            </svg>
            <div
              style={{
                width: "clamp(60px, 10vw, 120px)",
                height: "1.5px",
                background: "linear-gradient(to left, transparent, #d4609a)",
              }}
            />
          </div>
        </div>

        {/* Bottom-right action buttons */}
        <div
          className="absolute flex gap-4"
          style={{
            bottom: "clamp(20px, 3vw, 36px)",
            right: "clamp(20px, 3vw, 40px)",
          }}
        >
          <button
            onClick={() => onNavigate("Services")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(40, 25, 70, 0.5)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            onClick={() => onNavigate("About Us")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(40, 25, 70, 0.45)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Visit Portfolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
