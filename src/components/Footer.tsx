'use client'

import { nav } from '@/content/site'
import { useLanguage } from '@/lib/language-context'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const { t, language, setLanguage } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/beautysoft', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/beautysoft', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/beautysoft', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/beautysoft', label: 'LinkedIn' },
  ]

  const footerLinks = {
    [t.footer.links.product]: t.footer.productLinks,
    [t.footer.links.company]: t.footer.companyLinks,
    [t.footer.links.support]: t.footer.supportLinks,
  }

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold">
                Beauty<span className="text-primary-400">Soft</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>{t.footer.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>{t.footer.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>{t.footer.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              {t.footer.copyright.replace('{year}', currentYear.toString())}
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-4">
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'it' | 'en')}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="it">{t.footer.languages.italian}</option>
                <option value="en">{t.footer.languages.english}</option>
              </select>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
