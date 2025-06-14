'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      ref={ref}
      className="hero-section relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Capa oscura para mejorar contraste - más opaca */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      {/* Background gradient - más oscuro */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-primary/20"
        style={{ y: yBg }}
      />

      {/* Content */}
      <div className="container relative z-30 px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-primary/20 border border-primary/40 text-white font-medium shadow-md"
          >
            Plataforma de trading v3.0 ya disponible
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>

          {/* Main headline - AHORA VISIBLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white max-w-4xl leading-tight sm:leading-tight md:leading-tight mb-6"
          >
            <span className="text-white">Trading avanzado para la era cripto</span>
          </motion.h1>

          {/* Subheadline - más legible */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10 font-semibold"
          >
            Accede a herramientas institucionales con una interfaz diseñada para traders de todos los niveles.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-xl shadow-primary/40 flex items-center justify-center">
              Comenzar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold transition-all flex items-center justify-center">
              Explorar mercados
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-white/80 mb-2">Desplázate</p>
          <ChevronDown className="h-6 w-6 text-white/80 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero