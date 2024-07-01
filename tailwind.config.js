/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        rukn_first : 'url("/src/assets/rukn_first.png")'
      },
      colors:{
        title: 'rgb(36, 36, 36)',
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          xl: '1330px',
          l: '920px',

        }
      }
    },
  },
  plugins: [],
}

