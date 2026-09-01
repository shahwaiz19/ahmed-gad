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
        background: "#fef9f2",
        surface: "#fef9f2",
        "surface-bright": "#fef9f2",
        "surface-card": "#EDE5DC",
        "surface-container": "#f2ede6",
        "surface-container-low": "#f8f3ec",
        "surface-container-high": "#ece7e1",
        "surface-container-highest": "#e7e2db",
        "surface-variant": "#e7e2db",
        "surface-dim": "#ded9d3",
        primary: "#000000",
        "primary-container": "#211a16",
        "primary-fixed": "#ede0d9",
        "primary-fixed-dim": "#d0c4bd",
        "on-primary": "#ffffff",
        "on-background": "#1d1b17",
        "on-surface": "#1d1b17",
        "on-surface-variant": "#4d4540",
        secondary: "#8c4f10",
        "secondary-container": "#fdad67",
        "secondary-fixed": "#ffdcc2",
        "secondary-fixed-dim": "#ffb77b",
        "on-secondary-fixed": "#2e1500",
        "border-subtle": "#D4C8BC",
        outline: "#7f756f",
        "outline-variant": "#d0c4bd",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "Inter", "sans-serif"],
        hand: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      boxShadow: {
        polaroid: "0 15px 35px rgba(29, 27, 23, 0.08), 0 3px 8px rgba(29, 27, 23, 0.04)",
        "polaroid-hover": "0 22px 50px rgba(29, 27, 23, 0.14)",
        journal: "0 25px 60px rgba(29, 27, 23, 0.09), inset 0 0 0 1px #D4C8BC",
        "paper-tag": "0 8px 20px rgba(29, 27, 23, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
