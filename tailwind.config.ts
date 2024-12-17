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
        primary: "#E0EBE5",
        secondary: "#fbbc05",
        accent: "#34b7f1",
      },
    },
  },
  plugins: [],
} satisfies Config;
