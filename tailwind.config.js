module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_bc": "#000000bc",
          "900_3f": "#0000003f",
          "900_ad": "#000000ad",
        },
        deep_orange: { 500: "#ff4d20" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { oswald: "Oswald" },
      backgroundImage: { gradient: "linear-gradient(180deg ,#ffffff,#ffffff)" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
