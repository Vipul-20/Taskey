/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Metropolis", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "pastel"],
  },
};
