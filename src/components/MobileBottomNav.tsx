interface MobileBottomNavProps {
  currentPage: string
  onNavigate: (page: string) => void
  dark?: boolean
}

const navItems = [
  {
    id: 'Home',
    label: 'Home',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 'Services',
    label: 'Services',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: 'Book',
    label: 'Book',
    isPrimary: true,
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8"/>
        <path d="M8 14h5"/>
      </svg>
    ),
  },
  {
    id: 'Experts',
    label: 'Experts',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 'Resources',
    label: 'Resources',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
]

export default function MobileBottomNav({ currentPage, onNavigate, dark = false }: MobileBottomNavProps) {
  // Page matching helper so tabs settle accurately even for sub-pages like About Us or Career
  const getIsActive = (itemId: string) => {
    if (currentPage === itemId) return true
    if (itemId === 'Home' && (currentPage === 'Home' || currentPage === 'About Us')) return true
    if (itemId === 'Services' && currentPage === 'Services') return true
    if (itemId === 'Book' && currentPage === 'Book') return true
    if (itemId === 'Experts' && currentPage === 'Experts') return true
    if (itemId === 'Resources' && (currentPage === 'Resources' || currentPage === 'Career')) return true
    return false
  }

  return (
    <div
      className="md:hidden fixed bottom-3 left-3 right-3 z-50 max-w-md mx-auto transition-all duration-300"
      style={{
        background: dark
          ? 'rgba(18, 10, 34, 0.78)'
          : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderRadius: '999px',
        border: dark
          ? '1px solid rgba(139, 92, 246, 0.3)'
          : '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow: dark
          ? '0 12px 36px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          : '0 12px 36px rgba(31, 15, 61, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        padding: '6px 8px',
      }}
    >
      <div className="flex items-center justify-around relative">
        {navItems.map((item) => {
          const isActive = getIsActive(item.id)

          if (item.isPrimary) {
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center justify-center relative -top-4 group cursor-pointer border-0 bg-transparent p-0"
              >
                <div
                  className="w-13 h-13 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 active:scale-90 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #d81b86 100%)',
                    boxShadow: '0 6px 20px rgba(20, 184, 166, 0.45)',
                    border: '3px solid ' + (dark ? '#0e0a1a' : '#ffffff'),
                  }}
                >
                  {item.icon()}
                </div>
                <span
                  className="text-[10px] font-bold mt-0.5 tracking-tight transition-colors duration-200"
                  style={{
                    color: isActive
                      ? (dark ? '#2dd4bf' : '#0d9488')
                      : (dark ? 'rgba(220,210,255,0.75)' : '#6b5b8f'),
                  }}
                >
                  {item.label}
                </span>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center py-1.5 px-3 rounded-full transition-all duration-300 active:scale-90 cursor-pointer border-0 bg-transparent relative"
              style={{
                color: isActive
                  ? (dark ? '#2dd4bf' : '#d81b86')
                  : (dark ? 'rgba(220, 210, 255, 0.65)' : '#6b5b8f'),
                background: isActive
                  ? (dark ? 'rgba(45, 212, 191, 0.12)' : 'rgba(216, 27, 134, 0.08)')
                  : 'transparent',
              }}
            >
              <div className="relative transition-transform duration-200">
                {item.icon(isActive)}
              </div>
              <span
                className="text-[10px] mt-0.5 tracking-tight transition-all duration-200"
                style={{
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
