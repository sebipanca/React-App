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
        gray: {
          100: "#f4f4f4",
          200: "#e8e9ea",
          700: "#5d6469",
          900: "#182129",
          "900_01": "#1e1e1e",
        },
        blue_gray: { 100: "#cce6e6", 800: "#464e54", 900: "#2f373e" },
        black: { "900_3f": "#0000003f", "900_28": "#00000028" },
        teal: { 400: "#339999", 600: "#0b8080" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs1: "0px 3px  6px 0px #00000028",
        bs: "0px 5px  15px 0px #0000003f",
      },
      fontFamily: { overpass: "Overpass", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
