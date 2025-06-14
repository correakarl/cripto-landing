/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Añade otras rutas según sea necesario
  ],
  darkMode: "class", // o 'media' según prefieras
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        foreground: {
          DEFAULT: '#171717',
          dark: '#ededed',
        },
        primary: {
          DEFAULT: 'rgb(41, 98, 255)',
          light: '#7dd3fc', // Añadido para el gradiente del hero
        },
        secondary: 'rgb(0, 230, 118)',
        gray: {
          600: 'rgb(75, 85, 99)',
          800: 'rgb(31, 41, 55)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/images/hero-bg.png')",
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Opcional, si usas forms
    // require('@tailwindcss/typography'), // Opcional, si usas typography
    // Otros plugins que necesites
  ],
}