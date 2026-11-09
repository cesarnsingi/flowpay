import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#10151B", lime: "#C7F36B" }, fontFamily: { sans: ["Arial", "sans-serif"] } } },
  plugins: []
};
export default config;
