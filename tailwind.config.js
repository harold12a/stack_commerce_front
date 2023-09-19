/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        t_main: "#FFFFFF",
        t_stroke: "#191970",
        t_highlight: "#7F5AF0",
        t_background1: "#43C6AC",
        t_background2: "#191654",
        t_background3: "#43C6AC",
        t_secondary: "#43C6AC",
        t_paragraph: "#94A1B2",
        t_btn_text: "#7F5AF0",
        t_tertiary: "#2CB67D",
      },

      
    },
  },
  variants: {},
  plugins: [require("flowbite/plugin")],
  content: ["./node_modules/flowbite/**/*.js"],
};
