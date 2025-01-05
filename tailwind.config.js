/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all React files in the src folder
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      lightgrey: "#A5A5A5",
      darkgrey: "#333333",
      red: {
        500: "#f44336", // Ensure the color is defined if you're customizing
      },
    },
    container: {
      center: true,
      padding: "10rem",
    },
  },
  plugins: [],
};
