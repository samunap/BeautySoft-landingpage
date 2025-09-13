'use client'

import { useLanguage } from '@/lib/language-context'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Search, CalendarCheck, Settings } from 'lucide-react'

const stepIcons = [
  {
    icon: Search,
    label: 'Scopri'
  },
  {
    icon: CalendarCheck,
    label: 'Prenota'
  },
  {
    icon: Settings,
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.howItWorks.steps.map((step, index) => {
            const stepIcon = stepIcons[index]
            const IconComponent = stepIcon.icon
            
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
                  className="rounded-2xl border bg-background/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-300"
                  aria-label={`Passo ${index + 1}: ${step.title}`}
                >
                  <CardHeader className="pb-4">
                    {/* Icon Badge */}
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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
