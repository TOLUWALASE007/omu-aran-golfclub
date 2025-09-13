/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golfGreen: "#2E7D32",
        golfGold: "#C9A24B",
        golfWhite: "#FFFFFF",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
