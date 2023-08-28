/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        me: '#A855F7',
      },
      fontFamily: {
        inter: 'Inter',
      },

      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

