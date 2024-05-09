/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
      },
      colors: {
        blue: {
          lighest: "#f3f7fb",
          dark: "#004990",
        },
        black: {
          light: "#1f1f1f",
          lightest: "#000000cc",
        },
        // white: {
        //   lighest: "#fdfdfd9e",
        // },
      },
      backgroundImage: {
        "wave-pattern": "url('./src/assets/images/wave.svg')",
      },
    },
  },
  plugins: [],
};
