/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "biru-uhamka": "#004c84",
      },
    },
    fontFamily:{
      sans:['Montserrat']
    }
  },
  plugins: [],
};
