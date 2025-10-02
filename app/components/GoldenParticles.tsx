'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GoldenParticles() {
  const [mounted, setMounted] = useState(false)
  const particles = Array.from({ length: 20 })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => {
        const randomX = Math.random() * 100
        const randomY = Math.random() * 100
        const targetX = Math.random() * 100
        const targetY = Math.random() * 100

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-30"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              left: [`${randomX}%`, `${targetX}%`],
              top: [`${randomY}%`, `${targetY}%`],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )
      })}
    </div>
  )
} 