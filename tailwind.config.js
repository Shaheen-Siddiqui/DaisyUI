/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "primary",
      {
        mytheme: {
          primary: "#4900ff",
          "neutral-content":'#bebebe',
        },
        ".btn-sm": {
          "height": "3rem",
          "min-height": "3rem",
        }
      },
    ],
  },
};
