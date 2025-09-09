'use client'

import { pricing } from '@/content/site'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackEvent } from '@/lib/utils'

export default function PricingTable() {
  const { t } = useLanguage()
  
  const handlePricingClick = (tier: string, action: string) => {
    trackEvent('pricing_tier_selected', { tier, action })
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative bg-white rounded-2xl p-8 border-2 transition-all duration-300
                ${index === 1 
                  ? 'border-primary-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-primary-200 hover:shadow-lg'
                }
              `}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary-500 text-white px-6 py-2">
                    {t.pricing.mostPopular}
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    €{plan.price}
                  </span>
                  <span className="text-gray-600">/mese</span>
                </div>
                <p className="text-sm text-gray-600">
                  {t.pricing.pricesExcludeVat}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.bullets.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  index === 1 
                    ? 'bg-primary-500 hover:bg-primary-600' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                size="lg"
                onClick={() => handlePricingClick(plan.name, plan.cta)}
              >
                {plan.cta}
              </Button>

              {/* Additional Features for Business Plan */}
              {plan.name === 'Business' && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-muted text-center">
                    + Custom integrations available
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Notes */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">
            {t.pricing.features.slice(0, 3).join(' • ')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {t.pricing.features.slice(3).map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            {t.pricing.faqTeaser}
          </p>
          <button 
            className="text-primary-500 hover:text-primary-600 font-medium"
            onClick={() => {
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
              trackEvent('scroll_to_faq', { source: 'pricing' })
            }}
          >
            {t.pricing.viewFaq}
          </button>
        </div>
      </div>
    </section>
  )
}
