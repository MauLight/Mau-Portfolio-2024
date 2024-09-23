/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdeeff'
      },
      fontFamily: {
        'light': ['FUTURA_LIGHT', 'sans-serif'],
        'body': ['FUTURA_BOOK', 'sans-serif'],
        'heading': ['FUTURA_BOLD', 'sans-serif']
      },
    }
  },
  plugins: [],
}