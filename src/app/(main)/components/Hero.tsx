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

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary/10"
        style={{ y: yBg }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 h-[100px] bg-gradient-to-b from-gray-900 to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 h-[100px] bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center"
          style={{ y: yText }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            Plataforma de trading v3.0 ya disponible
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl leading-tight sm:leading-tight md:leading-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trading avanzado
            </span> para la era cripto
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
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
            <button className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-lg shadow-primary/30 flex items-center justify-center">
              Comenzar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-600 hover:border-gray-400 text-white font-semibold transition-all flex items-center justify-center">
              Explorar mercados
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl"
          >
            {[
              { value: "24/7", label: "Mercados activos" },
              { value: "200+", label: "Criptoactivos" },
              { value: "0.1%", label: "Fees bajos" },
              { value: "10ms", label: "Ejecución rápida" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-2">Desplázate</p>
          <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
        </div>
      </motion.div>

      {/* Floating crypto cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute hidden lg:block left-10 bottom-1/4 z-0"
      >
        <div className="relative w-40 h-48">
          <div className="absolute top-0 left-0 w-32 h-40 bg-primary/10 border border-primary/20 rounded-xl backdrop-blur-sm transform rotate-6" />
          <div className="absolute top-8 left-8 w-32 h-40 bg-gray-800/80 border border-gray-700 rounded-xl backdrop-blur-sm transform -rotate-3 shadow-lg" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute hidden lg:block right-10 top-1/3 z-0"
      >
        <div className="relative w-40 h-48">
          <div className="absolute top-0 left-0 w-32 h-40 bg-secondary/10 border border-secondary/20 rounded-xl backdrop-blur-sm transform -rotate-6" />
          <div className="absolute top-8 left-8 w-32 h-40 bg-gray-800/80 border border-gray-700 rounded-xl backdrop-blur-sm transform rotate-3 shadow-lg" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero