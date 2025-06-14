'use client'

import { motion, Variants } from 'framer-motion' // Importar Variants
import { CheckCircle2, Shield, TrendingUp, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Rendimiento Óptimo",
      description: "Plataforma de alta velocidad diseñada para ejecutar operaciones en milisegundos."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Seguridad Avanzada",
      description: "Protección de grado institucional con cifrado AES-256 y autenticación multifactor."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Operaciones Instantáneas",
      description: "Ejecuta tus transacciones al instante con nuestra tecnología de matching engine de última generación."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Interfaz Intuitiva",
      description: "Diseño pensado para traders de todos los niveles, desde principiantes hasta profesionales."
    }
  ]

  // Definir tipos explícitamente
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="caracteristicas" className="py-16 bg-gradient-to-b from-dark to-darker">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Potencia tu Trading</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Diseñado para traders que exigen lo mejor. Nuestra plataforma combina rendimiento, seguridad y facilidad de uso.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-gray-700 rounded-lg w-fit group-hover:bg-primary/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 flex-grow">{feature.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-700 group-hover:border-primary/30 transition-colors duration-300">
                  <button className="text-sm text-primary font-medium hover:text-primary/80 transition-colors">
                    Saber más →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg text-white font-semibold transition-all shadow-lg shadow-primary/30">
              Comenzar ahora
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg text-white font-semibold transition-all">
              Ver todas las características
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features