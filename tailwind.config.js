const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--inter-font)", ...fontFamily.sans],
        serif: ["var(--inter-font)", ...fontFamily.serif],
      },
      colors: {
        nero: "#191919",
      },
      keyframes: {
        smoothLoading: {
          "0%": {
            transform: "scale(1) rotate(0)",
          },
          "25%": {
            transform: "scale(0.90) rotate(0)",
          },
          "50%": {
            transform: "scale(1) rotate(360deg)",
          },
          "75%": {
            transform: "scale(0.90) rotate(360deg)",
          },
          "100%": {
            transform: "scale(1) rotate(0)",
          },
        },
      },
      animation: {
        smoothLoading: "smoothLoading 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
