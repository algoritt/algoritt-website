import HeroSection from '@/components/ui/homepage/HeroSection';
import AboutSection from '@/components/ui/homepage/AboutSection';
import ServicesSection from '@/components/ui/homepage/ServicesSection';
import USPSection from '@/components/ui/homepage/USPSection';
import WorkingAtAlgoritt from '@/components/ui/homepage/WorkingAtAlgoritt';
import TestimonialsSection from '@/components/ui/homepage/TestimonialsSection';
import StatsSection from '@/components/ui/homepage/StatsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <USPSection />
      <WorkingAtAlgoritt />
      <TestimonialsSection />
      <StatsSection />
    </main>
  )
}
