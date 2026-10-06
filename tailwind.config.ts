import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--blue, #1256d1)",
          ink: "var(--ink, #102945)",
          mut: "var(--mut, #2f4c68)",
          lime: "var(--lime, #ffd28d)",
          line: "var(--line, #b6cce4)",
          accent: "#ffd28d",
          orange: "#ff9d3b",
        },
      },
      fontFamily: {
        heading: ["'Canvas Heading'", "Arial", "sans-serif"],
        body: ["'Canvas Body'", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
