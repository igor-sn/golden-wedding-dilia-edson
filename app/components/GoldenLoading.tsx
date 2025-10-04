'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function GoldenLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-gold-100"
        >
          <div className="relative">
            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gold-700 gold-text-shadow mb-2">
                Edson & Dília
              </h1>
              <p className="text-lg md:text-xl text-gold-600">50 Anos de Amor</p>
            </motion.div>

            {/* Coração Central Grande */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex justify-center mb-8"
            >
              <Heart className="w-20 h-20 md:w-24 md:h-24 text-gold-500 fill-gold-400" />
            </motion.div>

            {/* Corações Flutuantes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12
                const radius = 120
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, x],
                      y: [0, y],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeOut',
                    }}
                    className="absolute"
                  >
                    <Heart
                      className={`text-gold-400 fill-gold-300 ${
                        i % 3 === 0 ? 'w-6 h-6' : i % 3 === 1 ? 'w-4 h-4' : 'w-3 h-3'
                      }`}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Texto de Carregamento */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-center text-gold-600 text-sm md:text-base mt-16"
            >
              Preparando seu convite...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 