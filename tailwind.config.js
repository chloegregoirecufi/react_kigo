/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'rgba(166, 183, 114, 0.9)',
        orange: 'rgba(249, 79, 13, 0.9)',
        orangeo: 'rgba(249,79, 13, 0.7)',
        whitel: 'rgba(250, 243, 221, 0.9)',
        whiteb: 'rgba(249,249,249,1)',
      },
      

    },
  },
  plugins: [],
}

