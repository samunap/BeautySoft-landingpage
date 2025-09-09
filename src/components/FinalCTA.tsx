'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackEvent } from '@/lib/utils'

export default function FinalCTA() {
  const { t } = useLanguage()
  
  const handleCTAClick = (action: string) => {
    trackEvent('final_cta_clicked', { action, position: 'final_cta' })
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {t.finalCta.title}
          </h2>

          {/* Subline */}
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t.finalCta.subtitle}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-90">
            {t.finalCta.benefits.map((benefit, index) => (
              <span key={index} className="flex items-center gap-2">
                ✓ {benefit}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary-500 hover:bg-gray-100 group"
              onClick={() => handleCTAClick('start_free')}
            >
              {t.finalCta.startFreeTrial}
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => handleCTAClick('book_demo')}
            >
              {t.finalCta.bookDemo}
            </Button>
          </div>

          {/* Trust Signal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-white/20"
          >
            <p className="text-sm opacity-75">
              {t.finalCta.trustSignal}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
