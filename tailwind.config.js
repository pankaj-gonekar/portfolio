/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson-red': '#ed2024',
      },
      fontSize: {
        'xsm': '0.6rem',
        '14xl':'13rem',
        'xxs': '0.55rem'
      },
      lineHeight: {
        'super-loose': '0.7rem',
        '14' : '14rem',
      },
      width: {
        '97': '97%',
        '99': '26rem'
      },
      height: {
        '125': '45rem',
        '115': '35rem',
      },
      dropShadow: {
        'dark' : '0 0 5px rgba(0, 0, 0, 0.5)',
        'darkest' : '0 0 8px rgba(0, 0, 0, 0.8)',
        'white' : '0 0 5px rgba(255, 255, 255, 0.5)',

      },
      spacing: {
        '102': '30rem',
        '100': '28rem',
      },
      
     
    },
    plugins: [],
  }
}

