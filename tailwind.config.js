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
        'xxs': '0.55rem',
        '3xs': '0.4rem',
        '4xs': '0.3rem',
      },
      lineHeight: {
        'super-loose': '0.7rem',
        '14' : '14rem',
      },
      width: {
        '38' : '9.5rem',
        '68': '17rem',
        '85':'22rem',
        '97': '97%',
        '99': '26rem',
        '105': '35rem'
      },
      height: {
        '125': '45rem',
        '115': '35rem',
        '105': '29rem',
      },
      dropShadow: {
        'dark' : '0 0 5px rgba(0, 0, 0, 0.5)',
        'darkest' : '0 0 8px rgba(0, 0, 0, 0.8)',
        'white' : '0 0 5px rgba(255, 255, 255, 0.5)',
        'bright' : '0 0 5px rgba(255, 255, 255, 0.9)',
      },
      boxShadow : {
        'bottom-white' : '0px 4px 9px 7px white',
        'top-white' : '0px -4px 9px 7px white',
        'super' : '0 0 15px rgba(0, 0, 0, 0.5)',
        'super-light' : '0 0 5px rgba(0, 0, 0, 0.4)',

      },
      spacing: {
        '102': '30rem',
        '100': '28rem',
      },
      
     
    },
    plugins: [],
  }
}

