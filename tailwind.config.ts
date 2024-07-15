import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      courier: ["Courier Prime", "ui-sans-serif", "system-ui"],
      helvetica: ["Helvetica Neue", "ui-sans-serif", "system-ui"],
      inter: ["Inter", "ui-sans-serif", "system-ui"],
      source: ["Source Serif"],
    },
    fontSize: {
      h1: [
        "30px",
        {
          lineHeight: "40px",
          letterSpacing: "-0.2px",
        },
      ],
      h2: [
        "23px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.2px",
        },
      ],
      h3: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.2px",
        },
      ],
      h4: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "0px",
        },
      ],
      h5: [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
        },
      ],
      h6: [
        "11px",
        {
          lineHeight: "18px",
          letterSpacing: "0px",
        },
      ],
    },
    colors: {
      gray: "#666666",
      badge: "#373737",
      black: "#000000",
      lightgray: "#FAFAFA",
      lightorange: "#FFF4D6",
      orange: "#FFB224",
      blue: "#3663F6",
      white: "#FFFFFF",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
