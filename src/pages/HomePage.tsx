import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CredentialsSection from '@/components/CredentialsSection'
import AppShowcaseSection from '@/components/AppShowcaseSection'
import ZodiacMissionSection from '@/components/ZodiacMissionSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import HomeAboutTeamSection from '@/components/HomeAboutTeamSection'

interface HomePageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function HomePage({ onNavigate, dark }: HomePageProps) {
  return (
    <div className="w-full overflow-hidden pb-16 md:pb-0 transition-colors duration-300">
      <HeroSection onNavigate={onNavigate} />
      <div className="pt-6" style={{ background: dark ? '#000000' : 'transparent' }}>
        <CredentialsSection dark={dark} />
      </div>
      <AboutSection onNavigate={onNavigate} dark={dark} />
      <AppShowcaseSection />
      <ZodiacMissionSection onNavigate={onNavigate} />
      <div className="pb-6" style={{ background: dark ? '#000000' : '#f8f6ff' }}>
        <TestimonialsSection />
      </div>
      <HomeAboutTeamSection onNavigate={onNavigate} dark={dark} />
    </div>
  )
}
