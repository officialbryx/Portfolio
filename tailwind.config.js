/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro": ["SF Pro", "sans-serif"],
        sans: ["SF Pro", "system-ui", "sans-serif"], // Make SF Pro the default font
      },
    },
  },
  plugins: [],
};
