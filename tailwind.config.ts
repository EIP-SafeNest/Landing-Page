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
        navy: {
          DEFAULT: "#233d4d",
          50: "#f0f5f7",
          100: "#d6e2e8",
          200: "#adc5d1",
          300: "#84a8ba",
          400: "#5b8ba3",
          500: "#3a6e8a",
          600: "#2e576e",
          700: "#233d4d",
          800: "#1a2e3a",
          900: "#111f27",
        },
        orange: {
          DEFAULT: "#fe7f2d",
          50: "#fff5ed",
          100: "#ffe8d4",
          200: "#ffd0a8",
          300: "#feb071",
          400: "#fe7f2d",
          500: "#fc6510",
          600: "#ed4a06",
          700: "#c53507",
          800: "#9c2b0e",
          900: "#7e260f",
        },
        yellow: {
          DEFAULT: "#fcca46",
          50: "#fefbe8",
          100: "#fef6c3",
          200: "#feea8a",
          300: "#fcca46",
          400: "#f9c02c",
          500: "#e9a50f",
          600: "#c97e0a",
          700: "#a05a0c",
          800: "#844710",
          900: "#703a13",
        },
        green: {
          DEFAULT: "#3b7255",
          50: "#f0f7f3",
          100: "#d9ebe1",
          200: "#b5d7c5",
          300: "#7fb89a",
          400: "#3b7255",
          500: "#2d5a43",
          600: "#234736",
          700: "#1c3a2c",
          800: "#162e23",
          900: "#11241b",
        },
        teal: {
          DEFAULT: "#0a543e",
          50: "#edf7f3",
          100: "#d1ebe1",
          200: "#a5d7c5",
          300: "#6bb89a",
          400: "#3a8a6d",
          500: "#0a543e",
          600: "#084432",
          700: "#063628",
          800: "#052a1f",
          900: "#041f17",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
