module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors : {
        brand : {
          300 : '#996DFF',
          500 : '#8257e6',
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
