const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Main blue palette
        blue: {
          50: '#caf0f8',
          100: '#ade8f4',
          200: '#90e0ef',
          300: '#48cae4',
          400: '#00b4d8',
          500: '#0096c7',
          600: '#0077b6',
          700: '#023e8a',
          800: '#03045e',
        },
        // Dark mode palette
        dark: {
          primary: '#0a0908',
          secondary: '#49111c',
          light: '#f2f4f3',
          accent: '#a9927d',
          muted: '#5e503f',
        }
      },
      fontFamily: {
        'garamond': ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
        'tinos': ['Tinos', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
  ],
}