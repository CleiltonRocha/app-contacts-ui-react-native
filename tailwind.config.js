/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark-900': '#16151E',
        'bg-dark-800': '#1A1924',
        'bg-dark-700': '#24243D',
      },
      fontFamily: {
        regular: 'Roboto_400Regular',
        bold: 'Roboto_700Bold',
      }
    },
  },
  plugins: [],
}

