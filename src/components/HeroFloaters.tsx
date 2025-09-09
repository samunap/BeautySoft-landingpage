'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { CalendarCheck, Star, TrendingUp } from 'lucide-react'

const floaterVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  float: (delay: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
      delay
    }
  })
}

const FloaterCard = ({ 
  icon: Icon, 
  title, 
  subtext, 
  className, 
  delay = 0 
}: {
  icon: any
  title: string
  subtext: string
  className: string
  delay?: number
}) => (
  <motion.div
    className={`absolute z-[1] ${className}`}
    variants={floaterVariants}
    initial="initial"
    animate={["animate", "float"]}
    custom={delay}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    aria-hidden="true"
  >
    {/* Subtle glow effect */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-purple-500/10 to-cyan-500/20 blur-2xl opacity-40" />
    
    <Card className="pointer-events-none flex items-start gap-3 rounded-xl border border-muted/30 bg-background/80 backdrop-blur-md shadow-lg px-4 py-3 scale-90 md:scale-100">
      <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{subtext}</div>
      </div>
    </Card>
  </motion.div>
)

export default function HeroFloaters() {
  return (
    <>
      {/* Booking Confirmed - Top Left */}
      <FloaterCard
        icon={CalendarCheck}
        title="Prenotazione confermata"
        subtext="2 minuti fa"
        className="left-[-6%] top-[8%] md:left-[2%] md:top-[6%]"
        delay={0}
      />
      
      {/* Join The App - Middle Right */}
      <FloaterCard
        icon={Star}
        title="Unisciti all'App"
        subtext="500+ Saloni Attivi"
        className="right-[-4%] top-[46%] md:right-[2%]"
        delay={0.2}
      />
      
      {/* Revenue Up - Bottom Right */}
      <FloaterCard
        icon={TrendingUp}
        title="Ricavi +35%"
        subtext="Questo mese"
        className="right-[0] bottom-[-6%] md:right-[4%] md:bottom-[-4%] hidden sm:flex"
        delay={0.4}
      />
    </>
  )
}