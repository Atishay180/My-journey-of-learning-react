/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          dark: 'rgb(70, 26, 66)',
          light: 'rgb(239, 229, 255)',
          darkHover: 'rgba(70, 26, 66, 0.916)',
          lightHover: 'rgb(226, 211, 250)',
        }
      },

      fonts: {
        primaryFont: "Playwrite DE Grund",
      }
    },
  },
  plugins: [],
}

