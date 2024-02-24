/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '614px',
      sm: '1002px',
      md: '1022px',
      lg: '1092px',
      xl: '1280px',
    },

    extend: {
      backgroundImage: {
        'button': "url('../assets/imgs/button.png')",
      },
      backgroundPosition: {
        'center': 'center',
      },
      colors: {
        dim: {
          100: '#FFFFFF', // white
          200: '#DFDFDF', // lightgrey
          300: '#F6C700', // yellow
          400: '#5B4500', // darkyellow
          500: '#131313', // black
        },
      },
    },
  },
  plugins: [],
}

