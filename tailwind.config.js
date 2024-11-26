/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "rgba(255, 255, 255, 0.03);",
        "50": "#161b1c",
        "100": "#000",
      },
      white: {
        "50": "#E8EBFD;",
        "100": "#fff",
        "200": "#6D98FF",
      },
      pink: {
        "50": "#FFCBEA",
        "100": "#FF64C1",
      },
      green: {
        "50": "#56DFCF",
      },

      blue: {
        "50": "#98B2FF",
        "100": "#819DF9",
      },
    },
    fontFamily: {
      'nunito': ["'Nunito', sans-serif"],
      'nerko': ["'Nerko One', cursive"]
    }
  },
  plugins: [],
}
