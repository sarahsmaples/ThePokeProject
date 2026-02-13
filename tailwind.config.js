/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        // Vibrant palette from the menu
        neon: {
          green: "#00ff00",
          pink: "#ff7dff",
          magenta: "#fb00ff",
          cyan: "#05ffff",
          blue: "#0f17ff",
        },
        poke: {
          red: "#d6182b",
          orange: "#f26722",
          green: "#048c44",
          pink: "#d43f8a",
        },
        // Keep existing palettes for fallback
        coral: {
          50: "#fff5f2",
          100: "#ffe8e0",
          200: "#ffc9b8",
          300: "#ffa08a",
          400: "#ff7052",
          500: "#ff4d2a",
          600: "#e63610",
          700: "#c02a0a",
          800: "#9a2510",
          900: "#7d2312",
        },
        ocean: {
          50: "#edfcfe",
          100: "#d2f6fc",
          200: "#abecf8",
          300: "#71def2",
          400: "#30c6e4",
          500: "#14a9ca",
          600: "#1488aa",
          700: "#176d8a",
          800: "#1c5971",
          900: "#1c4a5f",
        },
        tropical: {
          50: "#f0fdf0",
          100: "#dcfcdc",
          200: "#bbf7bc",
          300: "#86ef89",
          400: "#4ade50",
          500: "#22c528",
          600: "#16a31b",
          700: "#158019",
          800: "#166518",
          900: "#145316",
        },
        mango: {
          50: "#fffbeb",
          100: "#fff3c6",
          200: "#ffe588",
          300: "#ffd34a",
          400: "#ffbf20",
          500: "#f99d07",
          600: "#dd7602",
          700: "#b75206",
          800: "#943f0c",
          900: "#7a340d",
        },
      },
      fontFamily: {
        display: ['"Luckiest Guy"', "cursive"],
        body: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
