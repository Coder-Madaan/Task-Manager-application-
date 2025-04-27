/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB800',
        secondary: '#FFD700',
        dark: {
          100: '#1F1F1F',
          200: '#2D2D2D',
          300: '#3D3D3D',
          400: '#4D4D4D'
        }
      }
    },
  },
  plugins: [],
}