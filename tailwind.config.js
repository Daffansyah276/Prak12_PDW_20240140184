/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#eaf5ef',
          100: '#d0eeda',
          200: '#a8e6c1',
          500: '#2d7a4f',
          700: '#1a5c38',
          900: '#1a3a2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
