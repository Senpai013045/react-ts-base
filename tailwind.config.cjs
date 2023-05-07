/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //gray
        "ui-darkest": "#141B3D",
        "ui-darker": "#1D253F",
        "ui-dark": "#2E3A59",
        "ui-medium": "#c0ccda",
        "ui-light": "#e0e6ed",
        "ui-lighter": "#f9fafc",
        "ui-lightest": "#ffffff",
      },
    },
  },
  plugins: [],
};
