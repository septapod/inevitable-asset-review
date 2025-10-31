import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0F0F0F",
          800: "#1A1A1A",
          700: "#2D2D2D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
