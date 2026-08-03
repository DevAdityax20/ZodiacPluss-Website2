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
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-8 py-3.5">
        {/* Logo */}
        <button
          onClick={() => onNavigate("Home")}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <img
            src="/src/imports/Zodiac_Colored_Logo_croped-removebg-preview.png"
            alt="ZodiacPluss Logo"
            className="w-11 h-11 object-contain flex-shrink-0"
          />
          <div className="leading-tight">
            <div className="flex items-center gap-0.5">
              <span
                className="text-[15px] font-bold tracking-[0.02em]"
                style={{ color: "#1a1a2e", fontFamily: "'Inter', sans-serif" }}
              >
                ZodiacPluss
              </span>
              {/* Small lotus leaf */}
              <svg width="10" height="10" viewBox="0 0 20 20" className="-mt-1.5">
                <path d="M10 3 C10 3, 14 6, 14 10 C14 14, 10 16, 10 16 C10 16, 6 14, 6 10 C6 6, 10 3, 10 3Z" fill="#14b8a6" opacity="0.85"/>
                <path d="M5 7 C5 7, 8 8, 9 11 C10 14, 8 16, 8 16 C8 16, 5 14, 4 11 C3 8, 5 7, 5 7Z" fill="#14b8a6" opacity="0.5"/>
                <path d="M15 7 C15 7, 12 8, 11 11 C10 14, 12 16, 12 16 C12 16, 15 14, 16 11 C17 8, 15 7, 15 7Z" fill="#14b8a6" opacity="0.5"/>
              </svg>
            </div>
            <div
              className="text-[8.5px] tracking-[0.04em] font-medium"
              style={{ color: "#6b7280" }}
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
                color: currentPage === link ? "#1a1a2e" : "#4b5563",
                fontWeight: currentPage === link ? 600 : 400,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {link}
              {currentPage === link && (
                <span
                  className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
                  style={{ background: "#1a1a2e" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Small teal circle icon */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
            style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          {/* Book a Session button */}
          <button
            onClick={() => onNavigate("Book")}
            className="flex items-center gap-2 text-white text-[13.5px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 shadow-sm"
            style={{ background: "linear-gradient(135deg, #0f766e, #14b8a6)" }}
          >
            Book a Session
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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2">
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
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { onNavigate(link); setMobileOpen(false) }}
              className="block w-full text-left py-2.5 text-sm font-medium border-b border-gray-100 last:border-0"
              style={{
                color: currentPage === link ? "#0d9488" : "#1a1a2e",
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
            Book a Session
          </button>
        </div>
      )}
    </nav>
  )
}
