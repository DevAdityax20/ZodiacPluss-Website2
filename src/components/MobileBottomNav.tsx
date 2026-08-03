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
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-3 py-2 transition-all duration-300"
      style={{
        background: dark
          ? 'rgba(18, 10, 40, 0.88)'
          : 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: dark
          ? '1px solid rgba(139, 92, 246, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.65)',
        boxShadow: dark
          ? '0 -6px 25px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(139, 92, 246, 0.2)'
          : '0 -6px 25px rgba(90, 45, 142, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentPage === item.id || (item.id === 'Book' && currentPage === 'Book')

          if (item.isPrimary) {
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center justify-center relative -top-3 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-200 active:scale-95 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #d81b86 100%)',
                    boxShadow: '0 4px 15px rgba(20, 184, 166, 0.4)',
                  }}
                >
                  {item.icon()}
                </div>
                <span
                  className="text-[10px] font-semibold mt-0.5 tracking-tight"
                  style={{
                    color: isActive
                      ? (dark ? '#2dd4bf' : '#0d9488')
                      : (dark ? 'rgba(220,210,255,0.7)' : '#6b5b8f'),
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
              className="flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 active:scale-95"
              style={{
                color: isActive
                  ? (dark ? '#2dd4bf' : '#d81b86')
                  : (dark ? 'rgba(220, 210, 255, 0.65)' : '#7b6a9f'),
              }}
            >
              <div
                className="relative transition-colors duration-200"
                style={{
                  color: isActive
                    ? (dark ? '#2dd4bf' : '#d81b86')
                    : 'currentColor',
                }}
              >
                {item.icon(isActive)}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: dark ? '#2dd4bf' : '#d81b86' }}
                  />
                )}
              </div>
              <span
                className="text-[10px] mt-1 font-medium tracking-tight"
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
