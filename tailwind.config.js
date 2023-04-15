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
    cursor: {
      code: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNDY0IDMuNDY0QzIgNC45MyAyIDcuMjg2IDIgMTJjMCA0LjcxNCAwIDcuMDcxIDEuNDY0IDguNTM1QzQuOTMgMjIgNy4yODYgMjIgMTIgMjJjNC43MTQgMCA3LjA3MSAwIDguNTM1LTEuNDY1QzIyIDE5LjA3MiAyMiAxNi43MTQgMjIgMTJzMC03LjA3MS0xLjQ2NS04LjUzNkMxOS4wNzIgMiAxNi43MTQgMiAxMiAyUzQuOTI5IDIgMy40NjQgMy40NjRabTIuOTYgNi4wNTZhLjc1Ljc1IDAgMCAxIDEuMDU2LS4wOTZsLjI3Ny4yM2MuNjA1LjUwNCAxLjEyLjkzMyAxLjQ3NiAxLjMyOGMuMzc5LjQyLjY3NC45MDEuNjc0IDEuNTE4cy0uMjk1IDEuMDk5LS42NzQgMS41MThjLS4zNTYuMzk1LS44NzEuODI0LTEuNDc2IDEuMzI4bC0uMjc3LjIzYS43NS43NSAwIDEgMS0uOTYtMS4xNTJsLjIzNC0uMTk1Yy42NTktLjU1IDEuMDktLjkxIDEuMzY2LTEuMjE2Yy4yNjItLjI5LjI4Ny0uNDI3LjI4Ny0uNTEzYzAtLjA4Ni0uMDI1LS4yMjItLjI4Ny0uNTEzYy0uMjc3LS4zMDYtLjcwNy0uNjY3LTEuMzY2LTEuMjE2bC0uMjM0LS4xOTVhLjc1Ljc1IDAgMCAxLS4wOTYtMS4wNTZaTTE3Ljc1IDE1YS43NS43NSAwIDAgMS0uNzUuNzVoLTVhLjc1Ljc1IDAgMCAxIDAtMS41aDVhLjc1Ljc1IDAgMCAxIC43NS43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')",
    },
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
