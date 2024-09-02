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
          '100%': { transform: 'rotate(-360)'},
        },
        fadeInOut: {
          '0%': { opacity: '0', transform: 'scale(1.0)' }, // Start invisible and scaled down
          '80%': { opacity: '1', transform: 'scale(1.3)' }, // Fully visible and normal scale
          '100%': { opacity: '0', transform: 'scale(1.3)' }, // End invisible and slightly scaled up
        },
        fadeOut: {
          '0%': { opacity: '0', transform: 'scale(1.0)' }, // Start invisible and scaled down
          '100%': { opacity: '1', transform: 'scale(1.3)' }, // Fully visible and normal scale

        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        'color-change': 'colorChange 2s forwards',
        'fade-in-out': 'fadeInOut 2s forwards',
        'fade-in': 'fadeOut 1s forwards'
      },
  },
},
  plugins: [],
}