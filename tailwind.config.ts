import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        roadline: {
          black: '#090909',
          charcoal: '#171717',
          red: '#E5222A',
          gray: '#F3F3F3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Inter', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.12em',
      },
    },
  },
  plugins: [],
} satisfies Config
