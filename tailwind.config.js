/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(00deg)' },
        }
      }
    },
    fontFamily: {
      neumachina: ["Pp Neue Machina", 'sans-serif'],
      poppins: ["Poppins", 'sans-serif'],
    },
  },
  plugins: [],
}
