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
      profil: ["Tilt Prism", "Tilt Prism"],
    },
    extend: {
      colors: {
        uniqe: "#4A576F",
        primary: "#22242C",
        secondary: "#ECEDEE",
      },
      backgroundImage: {
        start: "url('./assets/img/startLight.svg')",
        end: "url('./assets/img/endLight.svg')",
        startDark: "url('./assets/img/startDark.svg')",
        endDark: "url('./assets/img/endDark.svg')",
        Light: "url('./assets/img/BG.svg')",
        lightMb: "url('./assets/img/Lightmb.svg')",
        Dark: "url('./assets/img/Dark.svg')",
        darkMb: "url('./assets/img/Darkmb.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
