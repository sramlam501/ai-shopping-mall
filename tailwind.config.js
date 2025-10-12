import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        blacklux: '#0D0D0D',
      },
      borderRadius: {
        xl2: '18px',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
export default config

