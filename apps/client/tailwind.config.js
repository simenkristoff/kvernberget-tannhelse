const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      heading: ['Roboto', 'sans-serif'],
      sans: ['"Open Sans"', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      dark: colors.slate,
      secondary: colors.sky,
      primary: {
        dark: colors.teal[800],
        base: colors.teal[700],
        light: colors.teal[600],
        accent: colors.teal[500]
      }
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/1': '3 / 1'
      },
      keyframes: {
        'full-pulse': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 }
        }
      },
      animation: {
        'full-pulse': 'full-pulse 5s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
