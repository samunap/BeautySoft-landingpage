'use client'

import { features } from '@/content/site'
import { useLanguage } from '@/lib/language-context'
import { 
  Map, 
  Calendar, 
  Shield, 
  CreditCard, 
  Clock, 
  BarChart3 
} from 'lucide-react'
import { motion } from 'framer-motion'
import NewsletterCTA from './NewsletterCTA'

const iconMap = {
  map: Map,
  calendar: Calendar,
  shield: Shield,
  'credit-card': CreditCard,
  clock: Clock,
  'bar-chart-3': BarChart3,
}

export default function FeaturesGrid() {
  const { t } = useLanguage()
  
  const handleFeatureClick = (feature: string) => {
    trackEvent('feature_card_clicked', { feature })
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-light to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => {
            const iconName = ['map', 'calendar', 'shield', 'credit-card', 'clock', 'bar-chart-3'][index] as keyof typeof iconMap
            const Icon = iconMap[iconName]
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => handleFeatureClick(feature.title)}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                  <Icon className="h-7 w-7 text-primary-500 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Hover arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary-500 text-sm font-medium">
                    Learn more →
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Newsletter CTA Section */}
        <NewsletterCTA />
      </div>
    </section>
  )
}
