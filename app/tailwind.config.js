module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans JP'],
        inter: ['Inter'],
      },
      colors: {
        category : {
          dev: '#e5d732',
          design: '#42c4e3',
          life: '#e34fdd',
        },
      },
      boxShadow: {
        normal: '0 0 30px rgba(0,0,0,0.05)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
