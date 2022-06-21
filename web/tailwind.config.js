module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors : {
        brand : {
          300 : '#FF8EB9',
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
