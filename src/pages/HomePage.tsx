import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import AppShowcaseSection from '@/components/AppShowcaseSection'
import ZodiacMissionSection from '@/components/ZodiacMissionSection'
import TestimonialsSection from '@/components/TestimonialsSection'

interface HomePageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function HomePage({ onNavigate, dark }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <AboutSection onNavigate={onNavigate} />
      <AppShowcaseSection />
      <ZodiacMissionSection onNavigate={onNavigate} />
      <div className="pb-6" style={{ background: '#f8f6ff' }}>
        <TestimonialsSection />
      </div>
    </>
  )
}
