const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'RussoOne': ['Russo One', 'sans-serif'],
      'Azaret': ['Azaret', 'monospace'],
      'SourceCode': ['Source Code Pro', 'monospace'],
      'Inter': ['Inter', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'terminal': '#191a1b',
        'paper': '#eeeeee',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
