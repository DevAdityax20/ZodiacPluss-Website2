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

        {/* Hero Main Content */}
        {/* Hero Top Content */}
        <div
          className="relative z-10 flex flex-col justify-start max-w-3xl"
          style={{
            paddingLeft: "clamp(20px, 6vw, 90px)",
            paddingRight: "clamp(20px, 4vw, 40px)",
            paddingTop: "clamp(28px, 5vw, 60px)",
          }}
        >
          {/* Top Tagline with ornaments */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent to-[#9d4b79]" />
            <span
              className="text-xs sm:text-sm font-semibold tracking-wide"
              style={{ color: "#7a3b60", fontFamily: "'Inter', sans-serif" }}
            >
              Guiding You Towards
            </span>
            <div className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent to-[#9d4b79]" />
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              lineHeight: 1.08,
            }}
          >
            <span
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-[76px]"
              style={{ color: "#251438", letterSpacing: "-1.5px" }}
            >
              Nurture Your
            </span>
            <span
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-[76px]"
              style={{ color: "#b81d62", letterSpacing: "-1.5px" }}
            >
              Mind &amp; Future.
            </span>
          </h1>
        </div>

        {/* Hero Bottom Content (Placed downwards right above credentials bar) */}
        <div
          className="relative z-10 flex flex-col justify-end max-w-2xl mt-auto mb-2 sm:mb-3"
          style={{
            paddingLeft: "clamp(20px, 6vw, 90px)",
            paddingRight: "clamp(20px, 4vw, 40px)",
          }}
        >
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5"
            style={{ color: "#251438", fontFamily: "'Playfair Display', serif" }}
          >
            Discover Your Path.
          </h2>
          <p
            className="text-xs sm:text-sm md:text-base max-w-md mb-4 leading-relaxed font-medium"
            style={{ color: "#4a385b", fontFamily: "'Inter', sans-serif" }}
          >
            Empowering you with trusted expertise, genuine care and a commitment to your growth.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => onNavigate("Services")}
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-105 cursor-pointer border-0"
              style={{ background: "#332244" }}
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => onNavigate("About Us")}
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.65)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(255, 255, 255, 0.8)",
                color: "#2a183c",
                boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
              }}
            >
              Visit Portfolio
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </button>
          </div>
        </div>

        {/* Floating Credentials Glass Bar at Bottom of Hero */}
        <div className="relative z-10 px-2.5 sm:px-6 pb-2.5 sm:pb-6">
          <div
            className="w-full rounded-xl sm:rounded-3xl p-2 sm:p-4 transition-all duration-300 overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.85)",
              boxShadow: "0 8px 30px rgba(45, 20, 75, 0.08)",
            }}
          >
            {/* Single horizontal scroll row on mobile, 5-col grid on desktop */}
            <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-5 gap-2.5 md:gap-3 divide-x divide-purple-200/60 scrollbar-none">
              {/* Col 1: GST */}
              <div className="flex-shrink-0 min-w-[130px] md:min-w-0 flex flex-col items-center text-center p-1.5 md:p-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-amber-100/60 border border-amber-300/80 flex items-center justify-center mb-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2d4030" strokeWidth="1.8" className="sm:w-5 sm:h-5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m9 15 2 2 4-4" stroke="#10b981" strokeWidth="2.2" />
                  </svg>
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-extrabold tracking-tight text-[#221038] uppercase whitespace-nowrap">
                  GST REGISTERED
                </span>
                <span className="text-[8.5px] sm:text-[10px] text-[#635175] mt-0.5 font-mono whitespace-nowrap">
                  GST No. 07AABCZ1234D1Z5
                </span>
              </div>

              {/* Col 2: DPIIT */}
              <div className="flex-shrink-0 min-w-[135px] md:min-w-0 flex flex-col items-center text-center p-1.5 md:p-2 pl-2.5 md:pl-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-purple-100/60 border border-purple-300/80 flex items-center justify-center mb-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2b1a40" strokeWidth="1.8" className="sm:w-5 sm:h-5">
                    <circle cx="12" cy="7" r="3" />
                    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
                    <path d="M12 12v3" />
                  </svg>
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-extrabold tracking-tight text-[#221038] uppercase whitespace-nowrap">
                  DPIIT RECOGNIZED STARTUP
                </span>
                <span className="text-[8.5px] sm:text-[10px] text-[#635175] mt-0.5 font-mono whitespace-nowrap">
                  CERTIFICATE NO. DIPP123456
                </span>
              </div>

              {/* Col 3: MSME */}
              <div className="flex-shrink-0 min-w-[135px] md:min-w-0 flex flex-col items-center text-center p-1.5 md:p-2 pl-2.5 md:pl-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-emerald-100/60 border border-emerald-300/80 flex items-center justify-center mb-1">
                  <span className="text-[8.5px] sm:text-[10px] font-black text-[#15803d]">MSME</span>
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-extrabold tracking-tight text-[#221038] uppercase whitespace-nowrap">
                  MSME REGISTERED
                </span>
                <span className="text-[8.5px] sm:text-[10px] text-[#635175] mt-0.5 font-mono whitespace-nowrap">
                  UDYAM-DL-01-1234567
                </span>
              </div>

              {/* Col 4: ISO 27001 */}
              <div className="flex-shrink-0 min-w-[135px] md:min-w-0 flex flex-col items-center text-center p-1.5 md:p-2 pl-2.5 md:pl-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-teal-100/60 border border-teal-300/80 flex items-center justify-center mb-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="1.8" className="sm:w-5 sm:h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <rect x="9" y="11" width="6" height="5" rx="1" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-extrabold tracking-tight text-[#221038] uppercase whitespace-nowrap">
                  ISO 27001:2022 CERTIFIED
                </span>
                <span className="text-[8.5px] sm:text-[10px] text-[#635175] mt-0.5 uppercase font-medium whitespace-nowrap">
                  SECURITY MANAGEMENT
                </span>
              </div>

              {/* Col 5: ISO 9001 */}
              <div className="flex-shrink-0 min-w-[135px] md:min-w-0 flex flex-col items-center text-center p-1.5 md:p-2 pl-2.5 md:pl-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-indigo-100/60 border border-indigo-300/80 flex items-center justify-center mb-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="1.8" className="sm:w-5 sm:h-5">
                    <circle cx="12" cy="10" r="6" />
                    <path d="m9 10 2 2 4-4" />
                    <path d="M9 16l-2 5 5-2 5 2-2-5" />
                  </svg>
                </div>
                <span className="text-[9.5px] sm:text-[11px] font-extrabold tracking-tight text-[#221038] uppercase whitespace-nowrap">
                  ISO 9001:2015 CERTIFIED
                </span>
                <span className="text-[8.5px] sm:text-[10px] text-[#635175] mt-0.5 uppercase font-medium whitespace-nowrap">
                  QUALITY MANAGEMENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
