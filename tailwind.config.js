/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0A81AB",
        "primary-pink": "#F9DFDC",
      },
    },
  },
  plugins: [],
};
