/** @type {import('tailwindcss').Config} */
module.exports = {
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
        Dark: "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
