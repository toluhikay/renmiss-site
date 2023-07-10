/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-white": "url('../public/images/AboutWhiteBg.png')",
        "about-white-mobile": "url('../public/images/AboutWhiteBgPhone.png')",
        "about-green": "url('../public/images/AboutGreenBg.png')",
        "about-green-mobile": "url('../public/images/AboutGreenPhoneBg.png')",
      },
    },
  },
  plugins: [],
};
