/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        UbuntuSans: ["Ubuntu Sans", "sans-serif"],
        BricolageGrotesque: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        matteWhite: "#f5f5f7",
        matteBlack: "#1d1d1f",
      },
    },
  },
  plugins: [],
};
