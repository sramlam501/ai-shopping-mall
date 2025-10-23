/** @type {import('tailwindcss').Config} */
module.exports = {
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
      borderRadius: { xl2: '18px' },
      fontFamily: {
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: { gold: '0 0 40px rgba(212,175,55,.25)' },
    },
  },
  plugins: [],
};

