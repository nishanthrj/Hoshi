/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: {
          DEFAULT: '#110f19',
          50: '#f8f8f8',
          100: '#e1e1e2',
          200: '#b3b3b6',
          300: '#85848a',
          400: '#58565e',
          500: '#2a2832',
          600: '#0d0c14',
          700: '#0a090e',
          800: '#060509',
          900: '#020204',
        },
      },
      fontFamily: {
        sans: ['var(--font-overpass)'],
      },
      screens: {
        'max-xs': {'max': '425px'},
      }
    },
  },
  plugins: [],
}
