const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      white: colors.white,
      'citwhite': {
        'light': '#FFFEDE',
        'DEFAULT': '#f9f2d2',
        'dark': '#EFE8C8'
      },
      'mauve': {
        'light': '#FFDDFF',
        'DEFAULT': '#f4c5fe',
        'dark': '#EABBF4'
      },
      'chetblue': {
        'light': '#C7E8FF',
        'DEFAULT': '#7fa0dd',
        'dark': '#6B8CC9'
      },
      'gun': {
        'light': '#9396B0',
        'DEFAULT': '#3f425c',
        'dark': '#262943'
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
