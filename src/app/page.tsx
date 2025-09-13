import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoWall from '@/components/LogoWall'
import HowItWorks from '@/components/HowItWorks'
import RoleTabs from '@/components/RoleTabs'
import FeaturesGrid from '@/components/FeaturesGrid'
import ScreensCarousel from '@/components/ScreensCarousel'
// import PricingTable from '@/components/PricingTable'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoWall />
      <HowItWorks />
      <RoleTabs />
      <FeaturesGrid />
      <ScreensCarousel />
      {/* <PricingTable /> */}
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
