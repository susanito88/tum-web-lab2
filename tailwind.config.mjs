/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b0000",
        secondary: "#daa520",
        dark: "#2c1810",
        light: "#f5f5dc",
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "Times New Roman", "serif"],
        script: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
