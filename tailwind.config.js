/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "google": "#DB4437"
      },
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        news: "'Jacquard 24', system-u"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

