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
      },
      lineHeight: {
        'super-loose': '0.7rem',
        '14' : '14rem',
      },
      width: {
        '97': '97%',
      },
      dropShadow: {
        'dark' : '0 0 5px rgba(0, 0, 0, 0.5)',
      },
      
     
    },
    plugins: [],
  }
}

