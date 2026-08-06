import { useState } from "react"

const navLinks = ["Home", "About Us", "Services", "Experts", "Resources", "Career"]

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
  overlay?: boolean
  dark?: boolean
  onToggleTheme?: () => void
}

export default function Navbar({ currentPage, onNavigate, overlay = false, dark = false, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="w-full z-50"
      style={{
        background: dark ? "#120e22" : "#ffffff",
        borderBottom: dark ? "1px solid rgba(139,92,246,0.2)" : "1px solid #e5e7eb",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-8 py-3.5">
        {/* Logo */}
        <button
          onClick={() => onNavigate("Home")}
          className="flex items-center gap-3"
        >
          <img
            src="https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png"
            alt="ZodiacPluss Logo"
            className="w-11 h-11 object-contain flex-shrink-0"
          />
          <div className="leading-tight">
            <div className="flex items-center gap-0.2">
              <span
                className="text-[15px] font-bold tracking-[0.02em]"
                style={{ color: dark ? "#e9d5ff" : "#1a1a2e", fontFamily: "'Inter', sans-serif" }}
              >
                ZodiacPluss
              </span>
              {/* Small lotus leaf */}
              <svg width="10" height="10" viewBox="0 0 27 23" className="-mt-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9955 5.23258C16.9955 5.23258 13.2157 6.09422 11.5134 8.82218C9.8111 11.5501 10.831 15.1113 10.831 15.1113C10.831 15.1113 14.6108 14.2497 16.3131 11.5217C18.0154 8.79375 16.9955 5.23258 16.9955 5.23258Z" fill="#13352C"/>
                <path d="M9.06368 13.1615C9.03535 12.3317 9.09732 11.5304 9.2479 10.7799C9.44551 9.79491 9.79668 8.89344 10.2917 8.10066C10.6208 7.57362 11.0252 7.07669 11.4986 6.6152C10.3244 5.17046 8.70127 4.43803 8.70127 4.43803C8.70127 4.43803 6.32219 7.7019 6.90176 10.6381C7.1973 12.1353 8.20508 13.2578 9.12181 13.9988C9.09487 13.7415 9.07387 13.4606 9.06368 13.1615Z" fill="#13352C"/>
                <path d="M7.40645 14.4747C6.38087 13.4429 5.73551 12.2852 5.48846 11.0335C5.37608 10.4642 5.34472 9.85933 5.39329 9.22686C3.43909 9.16719 1.63342 9.88003 1.63342 9.88003C1.63342 9.88003 2.05894 13.6523 4.59799 15.0796C5.89278 15.8075 7.48695 15.7849 8.73866 15.588C8.31719 15.2939 7.85308 14.924 7.40645 14.4747Z" fill="#13352C"/>
                <path d="M21.7102 11.7931C21.7102 11.7931 20.2533 10.7942 18.3538 10.5112C18.1546 11.1269 17.8896 11.7021 17.5605 12.2292C17.0655 13.022 16.4009 13.7473 15.5853 14.3849C14.9639 14.8708 14.253 15.3073 13.4723 15.6824C13.1909 15.8176 12.9212 15.935 12.6704 16.0362C13.7958 16.4431 15.3176 16.7424 16.8435 16.2691C19.8361 15.3407 21.7102 11.7931 21.7102 11.7931Z" fill="#13352C"/>
                <path d="M18.8867 16.8493C18.3254 17.1935 17.7513 17.458 17.1711 17.638C15.8955 18.0338 14.5154 18.0529 13.0691 17.695C12.4392 17.5392 11.8744 17.3306 11.4 17.1212C11.8194 18.2575 12.5644 19.5951 13.8591 20.323C16.3982 21.7503 20.0892 20.2922 20.0892 20.2922C20.0892 20.2922 19.8807 18.4469 18.8867 16.8493Z" fill="#13352C"/>
              </svg>
            </div>
            <div
              className="text-[8.5px] tracking-[0.04em] font-medium"
              style={{ color: dark ? "#9b87c9" : "#6b7280" }}
            >
              Your Personal Wellness Companion
            </div>
          </div>
        </button>

        {/* Desktop Nav Links - centered */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link)}
              className="relative text-[14px] transition-colors duration-200 pb-1"
              style={{
                color: currentPage === link ? (dark ? "#c084fc" : "#1a1a2e") : (dark ? "rgba(220,210,255,0.8)" : "#4b5563"),
                fontWeight: currentPage === link ? 600 : 400,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {link}
              {currentPage === link && (
                <span
                  className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
                  style={{ background: dark ? "#c084fc" : "#1a1a2e" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Day/Night mode toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm cursor-pointer transition-transform duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          {/* Connect Us button */}
          <button
            onClick={() => onNavigate("Book")}
            className="flex items-center gap-2 text-white text-[13.5px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 shadow-sm"
            style={{ background: "linear-gradient(135deg, #0f766e, #14b8a6)" }}
          >
          Connect Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={dark ? "#e9d5ff" : "#1a1a2e"} strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden mx-4 mb-3 rounded-2xl p-5"
          style={{
            background: dark ? "#1a1040" : "#ffffff",
            border: dark ? "1px solid rgba(139,92,246,0.25)" : "1px solid #e5e7eb",
            boxShadow: dark ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { onNavigate(link); setMobileOpen(false) }}
              className="block w-full text-left py-2.5 text-sm font-medium border-b border-gray-100 last:border-0"
              style={{
                color: currentPage === link ? "#0d9488" : (dark ? "#e0d0ff" : "#1a1a2e"),
                fontWeight: currentPage === link ? 600 : 400,
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => { onNavigate("Book"); setMobileOpen(false) }}
            className="mt-3 w-full text-white text-sm font-semibold py-2.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #0f766e, #14b8a6)" }}
          >
            Connect Us
          </button>
        </div>
      )}
    </nav>
  )
}
