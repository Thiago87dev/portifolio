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
        colorPrimary:"#87cefa", 
        colorSecundary:"#70a8cc", 
        colorThird: "#5a849f", 
        colorFourth: "#446275", 
        colorFifth: "#2f414d",
        colorAlmostBlack:"#1c2329"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
