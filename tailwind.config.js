import { colors } from "@nextui-org/react";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A192F",
        primary: "#59C6BA",
        secondary: "#F19A3E",
        ...colors,
      },
      fontFamily: {
        "tt-lakes-neue": ['"TT-Lakes-Neue"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
