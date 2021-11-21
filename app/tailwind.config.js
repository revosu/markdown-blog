module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans JP'],
        hind: ['Hind'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
