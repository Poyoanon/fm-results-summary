/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        'reaction-red': 'hsla(0, 100%, 67%, 0.8)',
        'memory-yellow': 'hsla(39, 100%, 56%, 0.8)',
        'verbal-green': 'hsla(166, 100%, 37%, 0.8)',
        'visual-blue': 'hsla(234, 85%, 45%, 0.8)'
      },
      dropShadow: {
        'custom': '0 25px 13px hsl(221, 100%, 96%)',
      }
    },
  },
  plugins: [],
}