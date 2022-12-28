/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily:{
        'montserrat' : ['Montserrat', 'sans-serif'],
      },
      screens:{
        'lg' : '1200px',
      }
    },
  },
  plugins: [],
}
