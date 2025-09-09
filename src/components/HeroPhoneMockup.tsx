'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroPhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', damping: 24, stiffness: 180 }}
      className="mx-auto mt-10 max-w-[320px] md:max-w-[380px] lg:ml-auto lg:max-w-[450px]"
      whileHover={{ scale: 1.02, rotateZ: -0.5 }}
      aria-hidden="true"
    >
      <Image
        src="/management-left.png"
        alt="BeautySoft management dashboard on iPhone mockup"
        width={520}
        height={640}
        priority
        sizes="(max-width: 1024px) 90vw, 38vw"
        className="pointer-events-none select-none w-full h-auto drop-shadow-2xl hover:drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300"
      />
    </motion.div>
  )
}