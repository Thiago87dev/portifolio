import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }
      'sg': '560px',
      // => @media (min-width: 560px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        colorWhite: "#ffffff",
        colorBlack: "#000000",
        colorPrimary: "#00ffff",
        colorSecundary: "#1ed0d0",
        colorThird: "#25a2a2",
        colorFourth: "#247777",
        colorFifth: "#1f4f4e",
        colorAlmostBlack: "#162929",
        colorblue: "#3b82f6",
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
