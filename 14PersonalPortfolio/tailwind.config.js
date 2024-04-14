/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#db2777",
        "secondary": "#ffffff",
        "tertiary": "#171717",
      },
      fontFamily: {
        "primary": "Poppins",
      }
    },
  },
  plugins: [],
}

