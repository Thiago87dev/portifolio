import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorWhite: "#ffffff",
        colorBlack: "#000000",
        colorPrimary: "#00ff00",
        colorSecundary: "#1ed013",
        colorThird: "#24a319",
        colorFourth: "#247719",
        colorFifth: "#1f4f16",
        colorAlmostBlack: "#162a10",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'carHub': "url('/img/img-car-hub.png')",
        
      },
    },
  },
  plugins: [],
};
export default config;
