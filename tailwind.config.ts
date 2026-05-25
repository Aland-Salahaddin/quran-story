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
        gold: {
          DEFAULT: "#C9A84C",
          light:   "#E8C96A",
          dim:     "#8B6B2A",
          faint:   "#A07830",
        },
        navy: {
          deep:  "#05070F",
          mid:   "#0A0F1E",
          light: "#111827",
        },
      },
      fontFamily: {
        arabic:  ["Scheherazade New", "Noto Naskh Arabic", "serif"],
        display: ["Cinzel", "serif"],
        sans:    ["Inter", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "fade-in":     "fadeIn 0.5s ease-out both",
        "fade-in-up":  "fadeInUp 0.7s ease-out both",
        float:         "float 4s ease-in-out infinite",
        "pulse-gold":  "pulseGold 2s ease-in-out infinite",
        shimmer:       "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0.4)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(201,168,76,0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E8C96A 0%, #C9A84C 50%, #A07830 100%)",
      },
      boxShadow: {
        gold:   "0 0 20px rgba(201,168,76,0.3)",
        "gold-lg": "0 0 40px rgba(201,168,76,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
