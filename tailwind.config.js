/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'

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
        'medium': ['FUTURA_MEDIUM', 'sans-serif'],
        'heading': ['FUTURA_BOLD', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
    }
  },
  plugins: [
    tailwindScrollbarHide
  ],
}