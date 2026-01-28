/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Kita ganti "dinamik-dark" & "dinamik-lime" dengan tema Ungu Zico
        zico: {
          dark: '#030014', // Background sangat gelap (hampir hitam/ungu tua)
          primary: '#a855f7', // Ungu terang (Purple-500)
          secondary: '#d946ef', // Pink/Fuchsia untuk gradasi
          accent: '#7c3aed', // Violet
          card: 'rgba(17, 25, 40, 0.75)', // Glass backdrop
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'], // Font heading modern
        mono: ['JetBrains Mono', 'monospace'], // Terminal/code font
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}