/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#5F33E1',
        foreground: '',
        secondary: '#6E6A7C',
        vlpurple: '#2E1C64',
        lpurple: '#1F1736',
      },
    },
  },
  plugins: [],
}
