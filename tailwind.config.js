/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      lg: {'max': '1224px'},
      md: {'max': '960px'},
      sm: {'max': '639px'}
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1224px",
      }
    },
    fontFamily: {
      poppins: "Poppins, sans-serif" 
    },
    extend: {
      colors: {
        maincolor: "#5f27cd",
        lightgray: "#f7f1e3",
        darkgray: "#2f3640"
      }
    },
  },
  plugins: [],
}
