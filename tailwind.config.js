/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./dist/assets/script/**/*.js",
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        separator: "#313131",
        primary1: "#FF5E14",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
