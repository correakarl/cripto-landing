'use client'

import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      role: 'Trader profesional',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'Desde que uso CryptoVerse, mi eficiencia operando ha aumentado un 200%. La plataforma combina potencia institucional con una interfaz accesible para traders independientes.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Inversor institucional',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'Las herramientas de análisis avanzado y la ejecución ultrarrápida nos han permitido optimizar nuestras estrategias de trading algorítmico como nunca antes.',
      rating: 4
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'CEO de BlockChain Ventures',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'La seguridad y confiabilidad de la plataforma son incomparables. Nuestros clientes están encantados con la experiencia de trading que podemos ofrecerles ahora.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Fernández',
      role: 'Trader de criptomonedas',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      content: 'Como trader independiente, valoro especialmente las bajas comisiones y la profundidad de mercado disponible. Ha cambiado completamente mi forma de operar.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Lo que dicen nuestros usuarios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Miles de traders e instituciones ya confían en nuestra plataforma para sus operaciones cripto.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar and rating */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-4 relative"
                  >
                    <img
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 16.5c0 1.1-1.3 2.1-3 2.1s-3-1-3-2.1V15c0 1.1 1.3 2 3 2s3-.9 3-2v1.5z"/>
                        <path d="M22 16.5c0 1.1-1.3 2.1-3 2.1s-3-1-3-2.1V15c0 1.1 1.3 2 3 2s3-.9 3-2v1.5z"/>
                        <path d="M15 2h-2v12.5c0 1.1 1.3 2 3 2s3-.9 3-2V4c0-1.1-.9-2-2-2h-2z"/>
                      </svg>
                    </div>
                  </motion.div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">Trustpilot</p>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold text-gray-300 mr-3">"</div>
                    <p className="text-lg text-gray-300 italic">
                      {testimonials[currentIndex].content}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-primary">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary w-6' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12"
        >
          {[
            { name: 'CoinGecko', logo: '/logos/coingecko.svg' },
            { name: 'Binance', logo: '/logos/binance.svg' },
            { name: 'CoinMarketCap', logo: '/logos/coinmarketcap.svg' },
            { name: 'Forbes', logo: '/logos/forbes.svg' }
          ].map((company, index) => (
            <motion.div
              key={company.name}
              whileHover={{ y: -3 }}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              {/* Reemplaza con tus propios SVGs o imágenes */}
              <div className="h-8 flex items-center justify-center">
                <span className="text-gray-400 font-medium text-lg">{company.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials