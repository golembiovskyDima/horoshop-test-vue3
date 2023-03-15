/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#2C3D39',
      panel: '#627B7A',
      'button-primary': '#418AF2',
    }),
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1024px',
        xl: '1340px',
        '2xl': '1440px',
      },
    },
    extend: {
      animation: {
        rotate: 'rotate 1s linear infinite',
        loader: 'prixClipFix 2s linear infinite',

      },
      keyframes: {
        rotate: {
          "100%": {transform: 'rotate(360deg)'},
        },
        prixClipFix: {
          '0%': {clipPath: 'polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)'},
          '25%': {clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)'},
          '50%': {clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)'},
          '75%': {clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)'},
          '100%': {clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)'},
        }
      }
    },
  },
  plugins: [],
}
