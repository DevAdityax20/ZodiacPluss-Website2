import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CredentialsSection from '@/components/CredentialsSection'
import AppShowcaseSection from '@/components/AppShowcaseSection'
import ZodiacMissionSection from '@/components/ZodiacMissionSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import HomeAboutTeamSection from '@/components/HomeAboutTeamSection'
import BrandsMarquee from '@/components/BrandsMarquee'
import ScrollVideoParallax from '@/components/ScrollVideoParallax'

const PARALLAX_VIDEO = 'https://res.cloudinary.com/pp0lpskp/video/upload/v1787222681/Background_video1_btmhwb.mp4'

interface HomePageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function HomePage({ onNavigate, dark }: HomePageProps) {
  return (
    <div className="w-full overflow-hidden pb-16 md:pb-0 transition-colors duration-300">
      {/* Hero — excluded from parallax wrapper */}
      <HeroSection onNavigate={onNavigate} />
      <BrandsMarquee />

      {/* Parallax video sections */}
      <ScrollVideoParallax videoUrl={PARALLAX_VIDEO} overlayOpacity={0.6}>
        <div className="pt-6" style={{ background: dark ? 'rgba(0,0,0,0.0)' : 'transparent' }}>
          <CredentialsSection dark={dark} />
        </div>
        <AboutSection onNavigate={onNavigate} dark={dark} />
        <AppShowcaseSection />
        <ZodiacMissionSection onNavigate={onNavigate} dark={dark} />
        <div className="pb-6">
          <TestimonialsSection />
        </div>
        <HomeAboutTeamSection onNavigate={onNavigate} dark={dark} />
      </ScrollVideoParallax>
    </div>
  )
}

