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
          dark: "#4f46e5",
          light: "#d1c0fb"
        }
      },

      fonts: {
        primaryFont: "Playwrite DE Grund",
      }
    },
  },
  plugins: [],
}

