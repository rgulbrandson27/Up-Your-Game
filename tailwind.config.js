/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%': { color: '#00ff00' }, // Start with green
          '100%': { color: '#000000' }, // End with black
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        'color-change': 'colorChange 2s forwards',
    },
  },
},
  plugins: [],
}