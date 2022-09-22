/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      "nav-bar": "#494953",
      "background-color": "#EDF2F6",
      "active-color": "#FF5656",
      "nav-font-color": "#FFFFFF"
    },
    extend: {
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
        Madi: ["Ms Madi", "cursive"]
      }
    },
  },
  plugins: [],
}
