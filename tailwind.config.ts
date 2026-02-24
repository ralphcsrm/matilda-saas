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
        orange: {
          bg: "#B85A3A",       // deep, cool-toned brick orange — the background
          hover: "#A34E32",    // darker for hover states
        },
        card: {
          DEFAULT: "#252525",  // deep dark grey — the card surface
          deep: "#1A1A1A",     // recessed ceiling / shadow layer
          border: "#2E2E2E",   // subtle card edge
        },
        ink: {
          DEFAULT: "#F2EDE8",  // warm off-white — primary text
          muted: "#A89D95",    // muted text / secondary
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        recess: "0 -4px 24px 0 rgba(0,0,0,0.4), 0 8px 32px 0 rgba(0,0,0,0.5)",
        card: "0 20px 60px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
