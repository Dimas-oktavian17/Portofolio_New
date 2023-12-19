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
      spacing: {
        'nav': '4rem',
        'section_x': '5rem',
      },
      colors: {
        fromGradient: 'rgba(255, 233, 244, 0.3)',
        toGradient: 'rgba(234, 243, 255, 0.5)',
        uniqe: "#4A576F",
        primary: "#22242C",
        secondary: "#ECEDEE",
      },
      backgroundImage: {
        'start': "url('/img/startLight.svg')",
        'end': "url('/img/endLight.svg')",
        'startDark': "url('/img/startDark.svg')",
        'endDark': "url('/img/endDark.svg')",
        'Light': "url('/img/BG.svg')",
        'lightMb': "url('/img/Lightmb.svg')",
        'Dark': "url('/img/Dark-bg.svg')",
        'darkMb': "url('/img/Darkmb.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

