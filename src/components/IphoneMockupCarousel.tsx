'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Slide {
  name: string
  image: string
  alt: string
}

interface IphoneMockupCarouselProps {
  slides: Slide[]
}

export default function IphoneMockupCarousel({ slides }: IphoneMockupCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play functionality with hover pause
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, slides.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div 
      className="w-full flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* iPhone Mockup Container */}
      <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]" role="img" aria-roledescription="carousel">
        {/* iPhone Side Buttons */}
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        
        {/* iPhone Screen */}
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
          {/* Carousel Viewport with Framer Motion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative w-[272px] h-[572px]"
              initial={{ opacity: 0, scale: 0.985, x: 16 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.985, x: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Image 
                src={slides[currentIndex].image} 
                alt={slides[currentIndex].alt} 
                fill 
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 272px, 272px"
                className="object-cover select-none" 
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Outside the phone */}
      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-gray-200/50"
          aria-label="Previous screen"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={goToNext}
          className="w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-gray-200/50"
          aria-label="Next screen"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex}
          />
        ))}
      </div>

      {/* Screen Labels */}
      <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 shadow-md hover:shadow-lg backdrop-blur-sm border border-gray-200/50'
            }`}
          >
            {slide.name}
          </button>
        ))}
      </div>
    </div>
  )
}