/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: "#5344ff",
        black: "#000",
        royalblue: {
          "100": "#5a7aec",
          "200": "#254acd",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.2)",
        },
        gray: {
          "100": "#937b7b",
          "200": "#181717",
          "300": "#151414",
          "400": "#121111",
          "500": "#0c0b0b",
        },
        indianred: "#d75959",
        lightcoral: {
          "100": "#f78b8b",
          "200": "#e18282",
        },
        mediumseagreen: "#25bf88",
        silver: {
          "100": "#c5c2c2",
          "200": "#d7b4b4",
        },
        paleturquoise: "#aaf0f4",
        red: "#ff0000",
        lime: "#24ff00",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "13xl": "32px",
      "45xl": "64px",
      "29xl": "48px",
      "17xl": "36px",
      "21xl": "40px",
      base: "16px",
      xl: "20px",
      "109xl": "128px",
      mini: "15px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
