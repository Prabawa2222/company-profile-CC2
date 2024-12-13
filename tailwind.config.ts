import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e0ebe5",
        dark: "#020404",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        InterRegular: ["var(--font-inter-regular)"],
        InterLight: ["var(--font-inter-light)"],
        PolyItalic: ["var(--font-poly-italic)"],
        PolyRegular: ["var(--font-poly-regular)"],
        ArchivoExtraBold: ["var(--font-archivo-extra-bold)", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
