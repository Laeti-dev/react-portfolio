/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '750px',
      'lg': '950px'
    },
    colors: {
      "nav-bar-color": "#494953",
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
