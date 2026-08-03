import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'
import HomePage from '@/pages/HomePage'
import AboutUsPage from '@/pages/AboutUsPage'
import ServicesPage from '@/pages/ServicesPage'
import ExpertsPage from '@/pages/ExpertsPage'
import ResourcesPage from '@/pages/ResourcesPage'
import BookSessionPage from '@/pages/BookSessionPage'
import CareerPage from '@/pages/CareerPage'

const pageMap: Record<string, string> = {
  'About': 'About Us',
  'Blog': 'Resources',
  'Contact': 'Book',
  'For corporates': 'Services',
  'Corporates': 'Services',
}

/* Dark-mode CSS injected as a <style> tag so it applies globally */
const darkStyles = `
  body { color-scheme: dark; }
  .zodiac-page-bg { background: #0e0a1a !important; }
  .zodiac-main-bg { background: #120e22 !important; }
  .zodiac-nav-glass {
    background: rgba(18, 10, 40, 0.72) !important;
    border-bottom-color: rgba(139, 92, 246, 0.20) !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.35), 0 1px 0 rgba(139,92,246,0.15) inset !important;
  }
  .zodiac-nav-glass .nav-link-text { color: rgba(220,210,255,0.80) !important; }
  .zodiac-nav-glass .nav-link-text:hover { color: #c084fc !important; }
  .zodiac-nav-glass .nav-link-active { color: #c084fc !important; }
  .zodiac-nav-glass .logo-brand-name { color: #e9d5ff !important; }
  .zodiac-nav-glass .logo-brand-sub  { color: #9b87c9 !important; }
`

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  const [dark, setDark] = useState(false)

  const handleNavigate = (page: string) => {
    const resolved = pageMap[page] ?? page
    setCurrentPage(resolved)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':           return <HomePage onNavigate={handleNavigate} dark={dark} />
      case 'About Us':       return <AboutUsPage onNavigate={handleNavigate} dark={dark} />
      case 'Services':       return <ServicesPage onNavigate={handleNavigate} dark={dark} />
      case 'Experts':        return <ExpertsPage onNavigate={handleNavigate} dark={dark} />
      case 'Resources':      return <ResourcesPage onNavigate={handleNavigate} dark={dark} />
      case 'Book':           return <BookSessionPage onNavigate={handleNavigate} dark={dark} />
      case 'Career':         return <CareerPage onNavigate={handleNavigate} dark={dark} />
      default:               return <HomePage onNavigate={handleNavigate} dark={dark} />
    }
  }

  return (
    <>
      {/* Inject dark-mode styles only when active */}
      {dark && <style>{darkStyles}</style>}

      <div
        className="zodiac-page-bg min-h-screen"
        style={{
          background: dark ? '#0e0a1a' : 'white',
          transition: 'background 0.4s ease',
        }}
      >
        {/* Sticky glassmorphism navbar */}
        <div className="sticky top-0 z-50 zodiac-nav-glass">
          <Navbar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            dark={dark}
            onToggleTheme={() => setDark(d => !d)}
          />
        </div>

        {/* Page content */}
        <main
          className="zodiac-main-bg pb-16 md:pb-0"
          style={{
            background: dark ? '#120e22' : '#f8f6ff',
            transition: 'background 0.4s ease',
          }}
        >
          {renderPage()}
        </main>

        {/* Footer */}
        <div className="pb-16 md:pb-0">
          <Footer onNavigate={handleNavigate} />
        </div>

        {/* Mobile bottom glassmorphism navigation */}
        <MobileBottomNav
          currentPage={currentPage}
          onNavigate={handleNavigate}
          dark={dark}
        />
      </div>
    </>
  )
}
