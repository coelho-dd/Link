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
        linkYellow: 'F2EA77',
        linkYellowTwo: 'E2F266',
        linkWeirdYellow: '9CA653'
      }
    },
  },
  plugins: [],
}

