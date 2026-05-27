import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: "#C41E1E",
            light: "#E53935",
            dark: "#8B0000",
            50: "#FFF5F5",
            100: "#FFE0E0",
          },
          green: {
            DEFAULT: "#2D7A2D",
            light: "#4CAF50",
            dark: "#1B5E20",
            50: "#F1F8E9",
            100: "#DCEDC8",
          },
          dark: "#1A0A0A",
        },
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