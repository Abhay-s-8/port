/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        darkBg: '#0C0C0C',
        textMuted: '#D7E2EA',
        cream: '#efeee9',
      },
    },
  },
  plugins: [],
};
