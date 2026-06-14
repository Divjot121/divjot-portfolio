import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#05070a",
        foreground: "#f4f7fb",
        muted: "#8993a4",
        line: "rgba(255,255,255,.09)",
        lime: "#c7ff4a",
        cyan: "#72e6ff",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "SF Pro Text", "Segoe UI", "sans-serif"],
        mono: ["SFMono-Regular", "Cascadia Code", "Roboto Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(199,255,74,.12)",
      },
    },
  },
  plugins: [],
};

export default config;
