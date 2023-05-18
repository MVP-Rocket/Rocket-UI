/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      animation: {
        toastSlideUp: "toastKfSlideUp 0.5s ease forwards",
        toastZoomIn: "toastKfZoomIn 0.5s ease forwards",
      },
      keyframes: {
        toastKfSlideUp: {
          "0%": { transform: "translate(0, 25px)", opacity: "0" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
        toastKfZoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
