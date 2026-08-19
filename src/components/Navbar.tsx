import { useState, useEffect } from "react"

const navLinks = ["Home", "About Us", "Services", "Experts", "Career"]

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
  dark?: boolean
  onToggleTheme?: () => void
}

export default function Navbar({ currentPage, onNavigate, dark = false, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Identify pages with dark background hero sections where text needs to be white when transparent
  const isBannerDark = currentPage !== "Home" && currentPage !== "Book"

  // Base dynamic styling variables
  const textColor = scrolled
    ? (dark ? "#e9d5ff" : "#1a1a2e")
    : (isBannerDark ? "#ffffff" : (dark ? "#e9d5ff" : "#1a1a2e"))

  const subtitleColor = scrolled
    ? (dark ? "#9b87c9" : "#6b7280")
    : (isBannerDark ? "rgba(255, 255, 255, 0.7)" : (dark ? "#9b87c9" : "#6b7280"))

  const linkColor = (link: string) => {
    if (currentPage === link) {
      return textColor
    }
    return scrolled
      ? (dark ? "rgba(220, 210, 255, 0.8)" : "#4b5563")
      : (isBannerDark ? "rgba(255, 255, 255, 0.8)" : (dark ? "rgba(220, 210, 255, 0.8)" : "#4b5563"))
  }

  // Beautiful resizable nav container layout classes
  const navContainerClasses = `
    pointer-events-auto transition-all duration-500 ease-out w-full
    ${scrolled
      ? "max-w-[850px] w-[92%] rounded-full py-2 px-6 translate-y-3 sm:translate-y-4"
      : "max-w-[1320px] w-full rounded-none py-4 px-4 sm:px-8 translate-y-0"
    }
  `

  // High-performance custom glassmorphism styling
  const navStyle: React.CSSProperties = scrolled
    ? {
        background: dark ? "rgba(14, 10, 26, 0.65)" : "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(20px) saturate(190%)",
        WebkitBackdropFilter: "blur(20px) saturate(190%)",
        border: dark ? "1px solid rgba(139, 92, 246, 0.2)" : "1px solid rgba(226, 217, 243, 0.6)",
        boxShadow: dark
          ? "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 1px 0 0 rgba(255, 255, 255, 0.1) inset"
          : "0 10px 30px -10px rgba(90, 45, 142, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset",
      }
    : {
        background: "transparent",
        border: "1px solid transparent",
        boxShadow: "none",
      }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none">
      <nav className={navContainerClasses} style={navStyle}>
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => { onNavigate("Home"); setMobileOpen(false) }}
            className="flex items-center gap-1.5 cursor-pointer border-0 bg-transparent p-0"
          >
            <img
              src="https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png"
              alt="ZodiacPluss Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            />
            <div className="leading-tight text-left">
              <div className="flex items-center gap-0.5">
                <span
                  className="text-[14px] sm:text-[15px] font-extrabold tracking-tight transition-colors duration-300"
                  style={{ color: textColor, fontFamily: "'Inter', sans-serif" }}
                >
                  ZodiacPluss
                </span>
                {/* Small lotus leaf */}
                <svg width="9" height="9" viewBox="0 0 27 23" className="-mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9955 5.23258C16.9955 5.23258 13.2157 6.09422 11.5134 8.82218C9.8111 11.5501 10.831 15.1113 10.831 15.1113C10.831 15.1113 14.6108 14.2497 16.3131 11.5217C18.0154 8.79375 16.9955 5.23258 16.9955 5.23258Z" fill="#14b8a6" />
                  <path d="M9.06368 13.1615C9.03535 12.3317 9.09732 11.5304 9.2479 10.7799C9.44551 9.79491 9.79668 8.89344 10.2917 8.10066C10.6208 7.57362 11.0252 7.07669 11.4986 6.6152C10.3244 5.17046 8.70127 4.43803 8.70127 4.43803C8.70127 4.43803 6.32219 7.7019 6.90176 10.6381C7.1973 12.1353 8.20508 13.2578 9.12181 13.9988C9.09487 13.7415 9.07387 13.4606 9.06368 13.1615Z" fill="#14b8a6" />
                  <path d="M7.40645 14.4747C6.38087 13.4429 5.73551 12.2852 5.48846 11.0335C5.37608 10.4642 5.34472 9.85933 5.39329 9.22686C3.43909 9.16719 1.63342 9.88003 1.63342 9.88003C1.63342 9.88003 2.05894 13.6523 4.59799 15.0796C5.89278 15.8075 7.48695 15.7849 8.73866 15.588C8.31719 15.2939 7.85308 14.924 7.40645 14.4747Z" fill="#14b8a6" />
                  <path d="M21.7102 11.7931C21.7102 11.7931 20.2533 10.7942 18.3538 10.5112C18.1546 11.1269 17.8896 11.7021 17.5605 12.2292C17.0655 13.022 16.4009 13.7473 15.5853 14.3849C14.9639 14.8708 14.253 15.3073 13.4723 15.6824C13.1909 15.8176 12.9212 15.935 12.6704 16.0362C13.7958 16.4431 15.3176 16.7424 16.8435 16.2691C19.8361 15.3407 21.7102 11.7931 21.7102 11.7931Z" fill="#14b8a6" />
                  <path d="M18.8867 16.8493C18.3254 17.1935 17.7513 17.458 17.1711 17.638C15.8955 18.0338 14.5154 18.0529 13.0691 17.695C12.4392 17.5392 11.8744 17.3306 11.4 17.1212C11.8194 18.2575 12.5644 19.5951 13.8591 20.323C16.3982 21.7503 20.0892 20.2922 20.0892 20.2922C20.0892 20.2922 19.8807 18.4469 18.8867 16.8493Z" fill="#14b8a6" />
                </svg>
              </div>
              <div
                className="text-[8px] sm:text-[8.5px] tracking-[0.03em] font-medium transition-colors duration-300"
                style={{ color: subtitleColor }}
              >
                Your Personal Wellness Companion
              </div>
            </div>
          </button>

          {/* Desktop Nav Links - centered */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => onNavigate(link)}
                className="relative text-[13.5px] transition-colors duration-200 pb-1 cursor-pointer border-0 bg-transparent"
                style={{
                  color: linkColor(link),
                  fontWeight: currentPage === link ? 700 : 500,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {link}
                {currentPage === link && (
                  <span
                    className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full transition-colors duration-300"
                    style={{ background: textColor }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Day/Night mode toggle */}
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm cursor-pointer transition-transform duration-200 hover:scale-105"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            {/* Connect Us button */}
            <button
              onClick={() => onNavigate("Book")}
              className="flex items-center gap-2 text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90 shadow-sm cursor-pointer border-0"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
            >
              Connect Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile controls: Theme toggle + Sidebar button */}
          <div className="lg:hidden flex items-center gap-1.5">
            <button
              onClick={onToggleTheme}
              className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm transition-transform duration-200 hover:scale-105"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button
              className="p-1 rounded-lg flex items-center justify-center cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden mt-3 rounded-2xl p-4 transition-all duration-300"
            style={{
              background: dark ? "#140e28" : "#ffffff",
              border: dark ? "1px solid rgba(139,92,246,0.2)" : "1px solid #e5e7eb",
              boxShadow: dark ? "0 8px 24px rgba(0,0,0,0.5)" : "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => { onNavigate(link); setMobileOpen(false) }}
                className="block w-full text-left py-2 text-xs font-semibold border-b border-gray-100 dark:border-purple-950/40 last:border-0"
                style={{
                  color: currentPage === link ? "#0d9488" : (dark ? "#e0d0ff" : "#1a1a2e"),
                }}
              >
                {link}
              </button>
            ))}
            {/* Mobile theme toggle + Connect button */}
            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                onClick={onToggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-transform duration-150 hover:scale-105 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}
                title={dark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {dark ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => { onNavigate("Book"); setMobileOpen(false) }}
                className="flex-1 text-white text-xs font-semibold py-2 rounded-full text-center cursor-pointer border-0"
                style={{ background: "linear-gradient(135deg, #0f766e, #14b8a6)" }}
              >
                Connect Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
