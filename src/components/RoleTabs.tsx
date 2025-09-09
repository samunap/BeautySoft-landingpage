'use client'

import { useState } from 'react'
import { roles } from '@/content/site'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Briefcase, Users, Heart, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackEvent } from '@/lib/utils'

const iconMap = {
  briefcase: Briefcase,
  users: Users,
  heart: Heart,
}

export default function RoleTabs() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('owner')

  const handleTabClick = (role: string) => {
    setActiveTab(role)
    trackEvent('role_tab_clicked', { role })
  }

  const handleCTAClick = (role: string, action: string) => {
    trackEvent('role_cta_clicked', { role, action, position: 'roles' })
  }

  const roleData = {
    owner: t.roles.owner,
    staff: t.roles.staff,
    customers: t.roles.customers
  }
  
  const activeRole = roleData[activeTab as keyof typeof roleData]

  return (
    <section id="roles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.roles.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.roles.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => handleTabClick('owner')}
              className={`
                relative px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2
                ${activeTab === 'owner' 
                  ? 'bg-white text-primary-500 shadow-sm' 
                  : 'text-gray-600 hover:text-primary-500'
                }
              `}
            >
              <Briefcase className="h-4 w-4" />
              <span>Proprietari</span>
            </button>
            <button
              onClick={() => handleTabClick('staff')}
              className={`
                relative px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2
                ${activeTab === 'staff' 
                  ? 'bg-white text-primary-500 shadow-sm' 
                  : 'text-gray-600 hover:text-primary-500'
                }
              `}
            >
              <Users className="h-4 w-4" />
              <span>Staff</span>
            </button>
            <button
              onClick={() => handleTabClick('customers')}
              className={`
                relative px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2
                ${activeTab === 'customers' 
                  ? 'bg-white text-primary-500 shadow-sm' 
                  : 'text-gray-600 hover:text-primary-500'
                }
              `}
            >
              <Heart className="h-4 w-4" />
              <span>Clienti</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeRole && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {activeRole.title}
                </h3>
                
                <ul className="space-y-4">
                  {activeRole.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-lg text-gray-600 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button
                    size="lg"
                    onClick={() => handleCTAClick(activeTab, activeRole.cta)}
                  >
                    {activeRole.cta}
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 text-white">
                  <div className="space-y-6">
                    {/* Mock interface elements based on role */}
                    {activeTab === 'owner' && (
                      <>
                        <div className="bg-white/20 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-sm opacity-75">Today&apos;s Revenue</div>
                            <div className="text-2xl font-bold">€1,247</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-1 bg-white/20 rounded h-2"></div>
                            <div className="flex-1 bg-white/40 rounded h-2"></div>
                            <div className="flex-1 bg-white/60 rounded h-2"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/20 rounded-xl p-3 text-center">
                            <div className="text-lg font-bold">12</div>
                            <div className="text-xs opacity-75">Bookings</div>
                          </div>
                          <div className="bg-white/20 rounded-xl p-3 text-center">
                            <div className="text-lg font-bold">95%</div>
                            <div className="text-xs opacity-75">Utilization</div>
                          </div>
                        </div>
                      </>
                    )}

                    {activeTab === 'staff' && (
                      <>
                        <div className="bg-white/20 rounded-xl p-4">
                          <div className="text-sm opacity-75 mb-2">Today&apos;s Schedule</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">9:00 - Maria (Haircut)</span>
                              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">10:30 - John (Beard trim)</span>
                              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">12:00 - Lunch break</span>
                              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-4">
                          <div className="text-sm opacity-75 mb-2">This Week&apos;s Earnings</div>
                          <div className="text-2xl font-bold">€387</div>
                        </div>
                      </>
                    )}

                    {activeTab === 'customers' && (
                      <>
                        <div className="bg-white/20 rounded-xl p-4">
                          <div className="text-sm opacity-75 mb-3">Find nearby salons</div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-white/20 rounded h-16"></div>
                            <div className="bg-white/40 rounded h-16"></div>
                            <div className="bg-white/20 rounded h-16"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-semibold">Next Appointment</div>
                              <div className="text-sm opacity-75">Tomorrow, 2:00 PM</div>
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
