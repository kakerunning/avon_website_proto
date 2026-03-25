/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        avon: {
          yellow: "#FFD700",
          black: "#000000",
          white: "#FFFFFF",
        },
        ink: "#0A0A0A",
        ash: "#181818",
        smoke: "#F4F2ED",
        mid: "#6B6B6B",
        gold: "#FFD700",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        display: ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
