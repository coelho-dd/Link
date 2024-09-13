/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkBlack: '#212426',
        linkWhite: '#D9D9D9',
        linkYellow: '#F2EA77',
        linkYellowTwo: '#E2F266',
        linkWeirdYellow: '#9CA653',
        offWhite: '#F2F2F2',
      }
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      scroll: 'scroll 20s linear infinite',
    }
  },
  plugins: [],
}

