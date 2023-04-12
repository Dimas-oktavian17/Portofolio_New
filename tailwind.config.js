/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        Light: "url('./assets/img/Light.svg')",
        lightMb: "url('./assets/img/Lightmb.svg')",
        Dark: "url('./assets/img/Dark.svg')",
        darkMb: "url('./assets/img/Darkmb.svg')",
      },
    },
  },
  plugins: [],
};
