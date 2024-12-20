import { Button } from '@/components/ui/button/button'
import Link from 'next/link'
import HeroSection from '@/components/ui/homepage/HeroSection';
import AboutSection from '@/components/ui/homepage/AboutSection';
import ServicesSection from '@/components/ui/homepage/ServicesSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  )
}
