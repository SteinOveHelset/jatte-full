/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*/templates/*/*.html', 
    './*/templates/*/*/*.html', 
    './*/templates/*/*/*/*.html', 
    './*/*.py',
    './static/js/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

