/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gogo-green": "#1a5c2a",
        "gogo-gold": "#c8a000",
        "gogo-dark": "#0d3318",
      },
      fontFamily: {
        heading: ["Georgia", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
