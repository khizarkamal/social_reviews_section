import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        dark_magenta: " hsl(300, 43%, 22%)",
        soft_pink: "hsl(333, 80%, 67%)",
      },
      neutral: {
        grayish_magenta: " hsl(303, 10%, 53%)",
        light_grayish_magenta: "hsl(300, 24%, 96%)",
        white: " hsl(0, 0%, 100%)",
      },
    },
    extend: {
      backgroundImage: {
        image: 'url("/images/bg-pattern-top-desktop.svg")',
        mobileImage: 'url("/images/bg-pattern-top-mobile.svg")',
      },
      fontSize: {
        basic: "15px",
      },
    },
  },
  plugins: [],
};
export default config;
