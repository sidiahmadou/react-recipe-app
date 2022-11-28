/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange:'#FF642F',
        lightOrange:'#FFD7C9',
        lightBlue:'#E3F1FF',
        darkGray:'#7F7F7F',
        lightGray:'#E8E8E8',
        veryLightGray:'#F9F9F9'
      }
    },
  },
  plugins: [],
}
