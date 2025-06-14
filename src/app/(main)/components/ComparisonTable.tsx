"use client"

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const ComparisonTable = () => {
  const features = [
    { name: 'Trading 24/7', available: [true, true, true] },
    { name: 'Tarifas bajas', available: [true, true, false] },
    { name: 'Seguridad avanzada', available: [true, true, true] },
    { name: 'API institucional', available: [true, false, false] },
    { name: 'Staking', available: [true, true, false] },
    { name: 'Interfaz avanzada', available: [true, false, false] },
    { name: 'Soporte prioritario', available: [true, false, false] },
  ]

  const plans = [
    { name: 'CryptoVerse Pro', price: '$99/mes', recommended: true },
    { name: 'CryptoVerse Estándar', price: '$29/mes', recommended: false },
    { name: 'Competencia Básica', price: '$0', recommended: false },
  ]

  return (
    <section id="comparison" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Comparativa de Plataformas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre por qué CryptoVerse es la elección preferida por traders profesionales.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-gray-400 font-normal">Características</th>
                {plans.map((plan, index) => (
                  <th key={index} className="p-4 text-center">
                    <div className={`relative ${plan.recommended ? 'bg-primary/10 border border-primary/20 rounded-lg p-4' : 'p-4'}`}>
                      <span className="block text-lg font-bold text-white">{plan.name}</span>
                      <span className="block text-gray-400 mt-1">{plan.price}</span>
                      {plan.recommended && (
                        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                          RECOMENDADO
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? 'bg-gray-800/50' : ''}
                >
                  <td className="p-4 text-gray-300">{feature.name}</td>
                  {feature.available.map((available, availIndex) => (
                    <td key={availIndex} className="p-4 text-center">
                      {available ? (
                        <Check className="h-6 w-6 text-green-400 mx-auto" />
                      ) : (
                        <X className="h-6 w-6 text-red-400 mx-auto" />
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-lg shadow-primary/30">
            Comenzar ahora
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTable