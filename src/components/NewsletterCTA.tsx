'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/language-context'
import { ArrowRight, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackEvent } from '@/lib/utils'

export default function NewsletterCTA() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    trackEvent('newsletter_cta_clicked', { action: 'email_submit', email, source: 'features_cta' })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'features_cta' })
      })

      const data = await response.json()
      
      if (response.ok) {
        if (data.already) {
          setMessage(t.hero.alreadySubscribedMessage)
        } else {
          setMessage(t.hero.successMessage)
        }
        setEmail('')
      } else {
        if (data.code === 'VALIDATION_ERROR') {
          setMessage('Please enter a valid email address')
        } else if (data.code === 'RATE_LIMITED') {
          setMessage('Too many requests. Please try again later.')
        } else {
          setMessage(t.hero.errorMessage)
        }
      }
    } catch (error) {
      setMessage(t.hero.errorMessage)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const handleCTAClick = () => {
    trackEvent('newsletter_cta_clicked', { action: 'primary_button', position: 'features_cta' })
    // Smooth scroll to hero section email input
    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
      // Focus on the email input after scroll
      setTimeout(() => {
        const emailInput = heroSection.querySelector('input[type="email"]') as HTMLInputElement
        if (emailInput) {
          emailInput.focus()
        }
      }, 800)
    }
  }

  return (
    <section id="newsletter" className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/3 to-accent-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Mail className="h-4 w-4" />
              {t.features.ctaTitle.includes('trasformare') ? 'Rimani Informato' : 'Stay Informed'}
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              {t.features.ctaTitle}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              {t.features.ctaSubtitle}
            </motion.p>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-md mx-auto space-y-4"
            >
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={t.hero.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 text-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-6 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
                >
                  {isSubmitting ? (t.features.ctaTitle.includes('trasformare') ? 'Invio...' : 'Sending...') : (t.features.ctaTitle.includes('trasformare') ? 'Iscriviti' : 'Subscribe')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm p-3 rounded-lg ${
                    message === t.hero.successMessage
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </motion.div>


          </div>
        </motion.div>
      </div>
    </section>
  )
}