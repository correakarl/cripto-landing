// tailwind.config.ts

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: 'class', // Activado para soporte de clase .dark
    extend: {
      colors: {
        primary: 'rgb(var(--primary-rgb) / 1)',
        secondary: 'rgb(var(--secondary-rgb) / 1)',
        dark: 'rgb(var(--background-start-rgb) / 1)',
        darker: 'rgb(var(--background-end-rgb) / 1)',
        light: 'rgb(var(--foreground-rgb) / 1)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};