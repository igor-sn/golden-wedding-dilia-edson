'use client'

import { motion } from 'framer-motion'
import { Heart, MapPin, Calendar, Clock, MessageCircle } from 'lucide-react'
import GoldenParticles from './components/GoldenParticles'
import PhotoCarousel from './components/PhotoCarousel'
import GoldenLoading from './components/GoldenLoading'

export default function Home() {
  return (
    <>
      <GoldenLoading />
      <main className="min-h-screen relative overflow-hidden">
        <GoldenParticles />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8 md:mb-12"
          >
            <Heart className="w-16 h-16 md:w-24 md:h-24 mx-auto text-gold-500 fill-gold-400 animate-pulse-slow" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-gold-700 gold-text-shadow"
          >
            Bodas de Ouro
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-serif text-gold-800 mb-4">
              Dília & Edson
            </p>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl text-gold-600">
              <span className="font-bold">50</span>
              <Heart className="w-6 h-6 md:w-8 md:h-8 fill-gold-500 text-gold-500" />
              <span className="font-bold">Anos</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-12 md:mb-16 px-4"
          >
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-serif italic text-gold-700 leading-relaxed">
                Será uma honra contar<br className="md:hidden" /> com sua presença<br />
                nesta celebração tão especial
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="glass-effect rounded-3xl p-8 md:p-12 gold-glow max-w-2xl mx-auto"
          >
            <div className="space-y-8">
              {/* Data e Horário - Lado a Lado */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <Calendar className="w-10 h-10 md:w-12 md:h-12 text-gold-600" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Data</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-800">18 de Outubro</p>
                    <p className="text-base text-gray-700">2025</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <Clock className="w-10 h-10 md:w-12 md:h-12 text-gold-600" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Horário</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-800">19:00h</p>
                    <p className="text-base text-gray-700">Não se atrase!</p>
                  </div>
                </div>
              </div>

              {/* Divisor */}
              <div className="border-t border-gold-300/50"></div>

              {/* Endereço - Ocupando toda a largura */}
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-gold-600" />
                <div>
                  <p className="text-sm text-gray-600 mb-2">Local</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Salão de Festas</p>
                  <p className="text-base md:text-lg text-gray-700">
                    Rua Gonçalves Dias, 800
                  </p>
                  <p className="text-base md:text-lg text-gray-700">
                    Vila Gabriel
                  </p>
                </div>
              </div>

              {/* Divisor */}
              <div className="border-t border-gold-300/50"></div>

              {/* Botão de Confirmação WhatsApp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center"
              >
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Por favor, confirme sua presença até<br className="md:hidden" /> <span className="font-bold text-gold-700">12/10/2025</span>
                </p>
                
                <motion.a
                  href="https://wa.me/5515997998500?text=Olá%2C%20gostaria%20de%20confirmar%20minha%20presença%20para%20as%20Bodas%20de%20Ouro%20de%20Dília%20e%20Edson%20-%2018%2F10%2F2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Confirmar presença</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating golden rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-10 w-24 h-24 md:w-32 md:h-32 border-8 border-gold-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-10 w-32 h-32 md:w-40 md:h-40 border-8 border-gold-300 rounded-full opacity-20"
        />
      </section>

      {/* Photo Carousel Section */}
      <PhotoCarousel />

      {/* Message Section */}
      <section className="py-12 px-4 md:py-16 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-12 gold-glow"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-6 md:mb-8 italic">
              &ldquo;O amor é paciente, o amor é bondoso.<br />
              Não inveja, não se vangloria,<br />
              não se orgulha.&rdquo;
            </p>
            <p className="text-lg md:text-xl text-gold-700 font-semibold">
              1 Coríntios 13:4
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 text-center text-gray-600 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl"
        >
          Com amor, famílias Miranda e Cabello
        </motion.p>
      </footer>
    </main>
    </>
  )
} 