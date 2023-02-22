/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //gray
        "ui-darkest": "#1f2d3d",
        "ui-darker": "#3c4858",
        "ui-dark": "#2c3e50",
        "ui-medium": "#c0ccda",
        "ui-light": "#e0e6ed",
        "ui-lighter": "#f9fafc",
        "ui-lightest": "#ffffff",
      },
    },
  },
  plugins: [],
};
