/* @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sftpDarkStart: "#42424a",
        sftpDarkEnd: "#191919",
        sftpRoseStart: "#ec407a",
        sftRoseEnd: "#d81b60",
        sftpGray: "#545459",
      },
      fontFamily: {},
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            background: "#fff",
            foreground: "#000",
            primary: {
              // 50: "#3B096C",
              // 100: "#520F83",
              // 200: "#7318A2",
              // 300: "#9823C2",
              // 400: "#c031e2",
              // 500: "#DD62ED",
              // 600: "#F182F6",
              // 700: "#FCADF9",
              // 800: "#FDD5F9",
              // 900: "#FEECFE",
              DEFAULT: "#ec407a",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
