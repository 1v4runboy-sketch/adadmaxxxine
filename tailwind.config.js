/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        weg: {
          DEFAULT: '#005CAA', // Azul WEG aproximado
          dark: '#0A3158',
        },
      },
      boxShadow: {
        'elevate': '0 6px 24px -8px rgba(0,0,0,0.35)',
      },
      keyframes: {
        pulse15: {
          '0%, 92%': { transform: 'scale(1)' },
          '96%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        spacefade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        pulse15: 'pulse15 15s ease-in-out infinite',
        spacefade: 'spacefade 0.6s ease-out both',
      }
    },
  },
  plugins: [],
}
