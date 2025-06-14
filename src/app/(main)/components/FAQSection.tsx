"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cómo puedo crear una cuenta en CryptoVerse?",
      answer: "Puedes crear una cuenta en menos de 2 minutos. Solo necesitas proporcionar tu email, crear una contraseña segura y verificar tu identidad con un documento oficial."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito (Visa, MasterCard), y diversas criptomonedas como Bitcoin y Ethereum para fondear tu cuenta."
    },
    {
      question: "¿Es seguro operar con CryptoVerse?",
      answer: "Absolutamente. Utilizamos cifrado AES-256, autenticación de dos factores y almacenamos el 95% de los fondos en billeteras frías fuera de línea. Además, cumplimos con los estándares de seguridad ISO 27001."
    },
    {
      question: "¿Qué comisiones aplican?",
      answer: "Nuestras comisiones son de las más competitivas del mercado: 0.1% para makers y 0.2% para takers. Para operaciones mayores a $10,000 USD, ofrecemos comisiones personalizadas."
    },
    {
      question: "¿Puedo operar desde mi móvil?",
      answer: "Sí, nuestra plataforma es completamente responsive y además ofrecemos aplicaciones nativas para iOS y Android con todas las funcionalidades de la versión web."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-darker">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Preguntas Frecuentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 border-b border-gray-800"
            >
              <button
                className="flex justify-between items-center w-full py-5 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-gray-300">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection