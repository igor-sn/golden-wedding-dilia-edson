'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const photos = [
  {
    src: '/WhatsApp Image 2025-10-02 at 19.32.05.jpeg',
    alt: 'Edson e Dília - Momento 1',
  },
  {
    src: '/WhatsApp Image 2025-10-02 at 19.41.00.jpeg',
    alt: 'Edson e Dília - Momento 2',
  },
  {
    src: '/WhatsApp Image 2025-10-02 at 19.41.01.jpeg',
    alt: 'Edson e Dília - Momento 3',
  },
  {
    src: '/WhatsApp Image 2025-10-02 at 19.53.52.jpeg',
    alt: 'Edson e Dília - Momento 4',
  },
  {
    src: '/WhatsApp Image 2025-10-02 at 19.54.03.jpeg',
    alt: 'Edson e Dília - Momento 5',
  },
  {
    src: '/WhatsApp Image 2025-10-02 at 19.54.18.jpeg',
    alt: 'Edson e Dília - Momento 6',
  },
  {
    src: '/WhatsApp Image 2025-10-02 at 19.59.37.jpeg',
    alt: 'Edson e Dília - Momento 7',
  },
]

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(timer)
  }, [currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 px-4 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gold-700 gold-text-shadow"
      >
        Uma História de Amor
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        {/* Carrossel Principal */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gold-50 to-amber-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <Image
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              
              {/* Gradiente sutil nas bordas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Brilho dourado sutil nas bordas */}
              <div className="absolute inset-0 border-4 border-gold-300/30 rounded-3xl pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores Modernos - Linha Progressiva */}
        <div className="flex justify-center gap-3 mt-8 mb-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Ver foto ${index + 1}`}
            >
              {/* Linha de fundo */}
              <div className="w-12 md:w-16 h-1 bg-gold-200 rounded-full overflow-hidden">
                {/* Linha de progresso */}
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
                  initial={{ width: 0 }}
                  animate={{
                    width: index === currentIndex ? '100%' : '0%',
                  }}
                  transition={{
                    duration: index === currentIndex ? 5 : 0.3,
                    ease: 'linear',
                  }}
                />
              </div>
              
              {/* Efeito hover */}
              <div className="absolute inset-0 rounded-full group-hover:bg-gold-300/20 transition-colors" />
            </button>
          ))}
        </div>

        {/* Miniaturas Elegantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
                     className="grid grid-cols-7 gap-2 md:gap-3 mt-8"
        >
          {photos.map((photo, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-square rounded-xl md:rounded-2xl overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-4 ring-gold-500 shadow-lg shadow-gold-300/50'
                  : 'ring-2 ring-gold-200 opacity-60 hover:opacity-100 hover:ring-gold-300'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 15vw, 10vw"
              />
              
              {/* Overlay quando ativo */}
              {index === currentIndex && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-gold-500/30 to-transparent"
                />
              )}
            </motion.button>
          ))}
                 </motion.div>
      </div>
    </section>
  )
} 