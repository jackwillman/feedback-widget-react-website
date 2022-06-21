module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors : {
        brand : {
          300 : '#FFAECC',
          500 : '#FF70A6',
          dark : '#09090A'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('tailwind-scrollbar'),
  ],
}
