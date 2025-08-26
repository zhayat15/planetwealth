/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'planet-gold': {
          50: '#fdf8f0',
          100: '#faf0e0',
          200: '#f4dfc0',
          300: '#ecc896',
          400: '#e2ad6a',
          500: '#d4a255',
          600: '#c68a3f',
          700: '#a56f35',
          800: '#865a31',
          900: '#6e4a2a',
        }
      }
    },
  },
  plugins: [],
};
