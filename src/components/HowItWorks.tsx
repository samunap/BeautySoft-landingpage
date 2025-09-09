'use client'

import { howItWorks } from '@/content/site'
import { useLanguage } from '@/lib/language-context'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Image from 'next/image'

const screenshots = [
  {
    src: '/mappa.png',
    alt: 'Schermata mappa',
    label: 'Scopri'
  },
  {
    src: '/booking.png',
    alt: 'Schermata prenotazione',
    label: 'Prenota'
  },
  {
    src: '/management.png',
    alt: 'Schermata gestione',
    label: 'Gestisci'
  }
]

export default function HowItWorks() {
  const { t } = useLanguage()
  
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {t.howItWorks.steps.map((step, index) => {
            const screenshot = screenshots[index]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Card 
                  className="overflow-hidden border-muted hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  aria-label={`Passo ${index + 1}: ${step.title}`}
                >
                  <CardContent className="p-6">
                    {/* Step Label Badge */}
                    <div className="mb-4">
                      <Badge 
                        variant="secondary" 
                        className="rounded-full px-3 py-1 text-sm bg-primary-500/10 text-primary-500 border-0"
                      >
                        {screenshot.label}
                      </Badge>
                    </div>

                    {/* Screenshot */}
                    <div className="aspect-[16/10] mb-6 overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={400}
                        height={250}
                        priority={false}
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
