/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: '#002B45',
        bgrey: '#F5F5F5', 
        bgold: '#c39b7d', 
      },
      spacing: {
        '104': '32rem',
        '108': '34rem',
        '109': '38rem',
        '110': '40rem',
        '112': '45rem',

        '116': '50rem',
      },
     },
  },
  plugins: [],
}