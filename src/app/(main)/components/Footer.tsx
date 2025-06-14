"use client"

import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion' // Importar Variants
import { Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const links = [
    {
      title: "Producto",
      items: [
        { name: "Mercado", href: "#market" },
        { name: "Características", href: "#features" },
        { name: "API", href: "#api" },
        { name: "Precios", href: "#precios" }
      ]
    },
    {
      title: "Compañía",
      items: [
        { name: "Sobre nosotros", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Carreras", href: "#careers" },
        { name: "Socios", href: "#partners" }
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Política de privacidad", href: "#privacy" },
        { name: "Términos de servicio", href: "#terms" },
        { name: "Política de cookies", href: "#cookies" },
        { name: "Regulaciones", href: "#compliance" }
      ]
    }
  ]

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      name: "Twitter"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      name: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      name: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contacto@cryptoverse.com",
      name: "Email"
    }
  ]

  // Definir tipos explícitamente
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <footer className="bg-darker border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Logo y descripción */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white inline-flex items-center mb-4">
              <span className="text-primary">Crypto</span>Verse
            </Link>
            <p className="text-gray-400 mb-6">
              La plataforma de trading de criptomonedas más avanzada para inversores institucionales y particulares.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces */}
          {links.map((linkGroup, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">{linkGroup.title}</h3>
              <ul className="space-y-3">
                {linkGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir las últimas actualizaciones y noticias del mercado.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg text-white font-medium transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} CryptoVerse. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#privacy" className="hover:text-primary transition-colors">
              Política de privacidad
            </Link>
            <Link href="#terms" className="hover:text-primary transition-colors">
              Términos de servicio
            </Link>
            <Link href="#cookies" className="hover:text-primary transition-colors">
              Política de cookies
            </Link>
            <Link href="#compliance" className="hover:text-primary transition-colors">
              Regulaciones
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer