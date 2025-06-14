"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu viaje en el mundo cripto?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Únete a miles de usuarios que ya operan con CryptoVerse y lleva tu trading al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary font-bold rounded-full flex items-center justify-center"
            >
              Crear cuenta gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full"
            >
              Ver demostración
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA