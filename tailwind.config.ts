import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f8",
          100: "#eceef1",
          200: "#d9dde3",
          500: "#647084",
          700: "#303846",
          900: "#0a0d12",
          950: "#05070a",
        },
        strait: {
          blue: "#275e92",
          red: "#9a3a3a",
          mist: "#a5b4c6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(39, 94, 146, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
