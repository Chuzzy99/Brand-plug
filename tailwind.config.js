/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "exsm": "350px",
        "tablet": "700px",
        "laptop": "1200px",
      },
      colors: {
        primary:{
          main: "#FF3C00",
          second: "#661800",
          third: "#FFB199"
        },
        secondary:{
          main: "#363636",
          second: "#161616",
          third: "#8F8F8F"
        },
        background: "#FFF9F8",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
};
