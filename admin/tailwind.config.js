/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
const customColors = {
  primary: "#3d4977",
  secondary: "#35A6EF",
  titr: "#424242",
  caption: "#3c3c3c",
  body: "#F9F9F9",
  border: "#07091920",
};

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "600px",
      lg: "768px",
      xl: "992px",
      "2xl": "1140px",
      "3xl": "1300px",
    },
    colors: {
      ...colors,
      ...customColors,
    },
    fontSize: {
      xxs: ".75rem",
      xs: ".8125rem",
      sm: ".875rem",
      tiny: ".9375rem",
      base: "1rem",
    },
    fontFamily: {
      iranyekan: ["iranyekan"],
    },
    extend: {
      boxShadow: {
        left: "-5px 0px 9px -8px rgba(0,0,0,0.3)",
        right: "5px 0px 9px -8px rgba(0,0,0,0.3)",
        bottom: "0px 5px 9px -8px rgba(0,0,0,0.3)",
        top: "0px -5px 9px -8px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ":root": {
          ...mapColors(customColors),
        },
      });
    }),
  ],
});

const mapColors = (colors) => {
  let object = {};
  for (let item in colors) {
    object[`--color-${item} `] = colors[item];
  }
  return object;
};
