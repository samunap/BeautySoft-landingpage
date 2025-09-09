'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/language-context'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackEvent } from '@/lib/utils'
import HeroPhoneMockup from './HeroPhoneMockup'
import HeroFloaters from './HeroFloaters'

export default function Hero() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    trackEvent('hero_cta_clicked', { action: 'email_submit', email })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'hero' })
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

  const handleCTAClick = (action: string) => {
    trackEvent('hero_cta_clicked', { action, position: 'hero' })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="h-4 w-4" />
              {t.hero.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              {t.hero.headline}
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
            >
              {t.hero.subline}
            </motion.p>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onSubmit={handleEmailSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <Input
                type="email"
                placeholder={t.hero.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 text-lg"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-6 text-lg font-semibold"
                onClick={() => handleCTAClick('primary')}
              >
                {isSubmitting ? 'Sending...' : t.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.form>

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

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium">4.9/5</span>
              <span>{t.hero.rating}</span>
            </motion.div>

            {/* Micro Trust */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm text-gray-500 max-w-md"
            >
              {t.hero.microTrust}
            </motion.p>

            {/* No Credit Card */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xs text-gray-400"
            >
              {t.hero.noCreditCard}
            </motion.p>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <div className="lg:block relative">
            <HeroFloaters />
            <div className="relative z-[2]">
              <HeroPhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}