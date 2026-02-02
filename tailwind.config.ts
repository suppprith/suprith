/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sequel: ["var(--font-general-sans)"],
      },
    },
  },
  plugins: [],
};
