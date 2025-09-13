'use client'

import { useState } from 'react'
import { faq } from '@/content/site'
import { useLanguage } from '@/lib/language-context'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent } from '@/lib/utils'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    const newIndex = openIndex === index ? null : index
    setOpenIndex(newIndex)
    
    if (newIndex !== null) {
      trackEvent('faq_opened', { question_index: index, question: t.faq.items[index].question })
    }
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            {t.faq.stillHaveQuestions}
          </p>
          <div className="flex justify-center">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=beautysoftapp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-block text-center"
              onClick={() => trackEvent('faq_contact_clicked', { action: 'email_support' })}
            >
              {t.faq.emailSupport}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
