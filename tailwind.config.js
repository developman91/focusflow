/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1B2D",
        paper: "#F4F7FB",
        iris: { DEFAULT: "#5B4BFF", dark: "#4637E0", soft: "#ECEAFF" },
        lime: { ring: "#C8F169" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        ring: { from: { strokeDashoffset: "534" }, to: { strokeDashoffset: "160" } },
      },
      animation: { ring: "ring 1.8s cubic-bezier(.2,.8,.2,1) .3s both" },
    },
  },
  plugins: [],
};
