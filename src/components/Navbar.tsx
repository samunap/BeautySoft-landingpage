'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { nav } from '@/content/site'
import { useLanguage } from '@/lib/language-context'
import { Menu, X } from 'lucide-react'
import { trackEvent } from '@/lib/utils'

export default function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleCTAClick = (action: string) => {
    trackEvent('navbar_cta_clicked', { action, position: 'navbar' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-dark">
                Beauty<span className="text-primary-500">Soft</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t.nav.features}
              </a>
              <a
                href="#roles"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t.nav.solutions}
              </a>
              {/* <a
                href="#pricing"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t.nav.pricing}
              </a> */}
              <a
                href="#faq"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t.nav.faq}
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => handleCTAClick('get_started')}
            >
              {t.nav.getStarted}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
                  {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.features}
              </a>
              <a
                href="#roles"
                className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.solutions}
              </a>
              {/* <a
                href="#pricing"
                className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.pricing}
              </a> */}
              <a
                href="#faq"
                className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.faq}
              </a>
              <div className="pt-4 pb-3 border-t border-gray-100">
                <div className="flex flex-col space-y-2">
                  <Button
                    className="justify-start"
                    onClick={() => handleCTAClick('get_started')}
                  >
                    {t.nav.getStarted}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
