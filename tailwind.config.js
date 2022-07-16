/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    margin: {
      badges: '70px',
    },
    extend: {
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],

}
