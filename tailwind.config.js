/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          lighest: "#f3f7fb",
          dark: "#004990",
        },
        black: {
          light: "#1f1f1f",
          lightest: "#000000cc",
        },
      },
      backgroundImage: {
        "wave-pattern": "url('./src/assets/images/wave.svg')",
      },
    },
  },
  plugins: [],
};
