/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lipanaBlue : "#10287C",
        lipanaGreen : "#93CE38",
        lipanaLightBlue: "#0E5FFE",
        lipanaDarkBlue : "#070F2E",
        lightGray : "#EEEEEE",
        darkGray: "#474747"
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

