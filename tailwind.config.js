/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricolageGrotesque: ['"Bricolage Grotesque"', "sans-serif"],
        inter: ['"Inter Variable"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
