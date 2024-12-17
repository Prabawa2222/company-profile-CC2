import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InterRegular: ["var(--font-inter-regular)"],
        InterLight: ["var(--font-inter-light)"],
        PolyItalic: ["var(--font-poly-italic)"],
        PolyRegular: ["var(--font-poly-regular)"],
        ArchivoExtraBold: ["var(--font-archivo-extra-bold)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1a73e8", // Custom primary color
        secondary: "#fbbc05", // Custom secondary color
        accent: "#34b7f1", // Custom accent color
      },
    },
  },
  plugins: [],
} satisfies Config;
