'use client'

import { appScreens } from '@/content/site'
import IphoneMockupCarousel from './IphoneMockupCarousel'
import { useLanguage } from '@/lib/language-context'

export default function ScreensCarousel() {
  const { t } = useLanguage()
  // Map carousel slides to actual images with proper structure
  const slides = appScreens.map((screen, index) => {
    const imageMap = [
      '/booking.png',
      '/management.png', 
      '/management-left.png',
      '/mappa.png',
      '/mappa.png'
    ]
    return {
      name: screen.name,
      image: imageMap[index] || '/mappa.png',
      alt: screen.alt
    }
  })

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            {t.features.ctaTitle.includes('trasformare') ? 'Demo Live' : 'Live Demo'}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            {t.features.ctaTitle.includes('trasformare') ? 'Scopri BeautySoft in Azione' : 'See BeautySoft in Action'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.features.ctaTitle.includes('trasformare') ? 'Scopri l\'interfaccia intuitiva progettata per i professionisti della bellezza e i loro clienti' : 'Experience the intuitive interface designed for beauty professionals and their customers'}
          </p>
        </div>

        <div className="flex justify-center">
          <IphoneMockupCarousel slides={slides} />
        </div>
      </div>
    </section>
  )
}
