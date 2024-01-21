/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppinsBold: ["Poppins-Bold"],
        poppinsExtraBold: ["Poppins-ExtraBold"],
        poppinsThin: ["Poppins-Thin"],
        poppinsMedium: ["Poppins-Medium"],
        poppinsLight: ["Poppins-Light"],
        poppinsExtraLight: ["Poppins-ExtraLight"],
        poppinsSemiBold: ["Poppins-SemiBold"],
        poppinsBlack: ["Poppins-Black"],
        poppinsRegular: ["Poppins-Regular"],
      },
      colors: {
        primary: {
          200: "#ff99c1",
          light: "#ff66a1",
          400: "#ff3382",
          main: "#ff0063",
          600: "#cc004f",
          dark: "#99003b",
          800: "#660028",
        },
        light: {
          primary: "#3498db",
          secondary: "#e74c3c",
          background: "#Ffff",
          text: "#333333",
          accent: "#FF4081",
          success: "#4CAF50",
          error: "#FF5252",
          warning: "#FFC107",
          info: "#2196F3",
        },
        dark: {
          primary: "#2ecc71",
          secondary: "#f39c12",
          background: "#121212",
          text: "#FFFFFF",
          accent: "#FF4081",
          success: "#4CAF50",
          error: "#FF5252",
          warning: "#FFC107",
          info: "#2196F3",
        },
      },
    },
  },
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
