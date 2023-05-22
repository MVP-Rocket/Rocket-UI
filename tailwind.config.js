/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        lg: "0 5px 20px 0px rgb(0 0 0 / 0.1), 0 4px 6px -6px rgb(0 0 0 / 0.1)",
        select:
          "0 0 10px -1.5px rgb(0 0 0 / 0.2), 0 4px 6px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
