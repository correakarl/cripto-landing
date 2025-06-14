'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/90 to-secondary/90 overflow-hidden">
      {/* Efecto de partículas/ruido de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Efecto de brillo */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ¿Listo para comenzar tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
              viaje cripto?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Únete a miles de traders que ya operan con nuestra plataforma y lleva tus inversiones al siguiente nivel.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(41, 98, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative px-10 py-4 bg-primary hover:bg-primary/90 text-white font-extrabold rounded-full flex items-center justify-center gap-3 text-lg shadow-lg shadow-primary/40 backdrop-blur-sm z-10 overflow-hidden group"
            >
              {/* Efecto glow al hacer hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Contenido visible */}
              <span className="relative z-10">Crear cuenta gratis</span>
              <ArrowRight className="relative z-10 h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-10 py-5 bg-white/10 border-2 border-white/30 hover:border-white/50 text-white font-extrabold rounded-full flex items-center justify-center gap-3 text-lg backdrop-blur-sm transition-all duration-300"
            >
              <Play className="h-5 w-5 fill-white" />
              Ver demostración
            </motion.button>
          </div>

          {/* Badge de confianza */}
          <motion.div
            className="mt-12 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90 text-sm"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-8 w-8 rounded-full bg-white border-2 border-white" />
              ))}
            </div>
            <span>+10,000 traders confían en nosotros</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA