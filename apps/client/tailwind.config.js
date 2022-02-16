module.exports = {
  mode: 'jit',
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
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      },
      keyframes: {
        'full-pulse': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.9 }
        }
      },
      animation: {
        'full-pulse': 'full-pulse 3s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
