/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'brand' : '#DDAD0D',
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
