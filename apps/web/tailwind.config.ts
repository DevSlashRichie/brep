import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        aqua: "#1fb5a6",
      },
    },
  },
  plugins: [],
};
export default config;
