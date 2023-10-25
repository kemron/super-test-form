/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors:{
      ...colors,
     'error-red': '#DA2121',
     'arival-gray': '#413C5F',
     'arival-purple': '#817CA5',
    },
    extend: {},
  },
  plugins: [],
}

