/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.tsx",
    "./src/components/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    //extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}

