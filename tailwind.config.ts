import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";
import { colors } from "./src/styles/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Professionelle Farbpalette
        primary: colors.primary,
        accent: colors.accent,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        'bg-primary': colors.background.primary,
        'bg-secondary': colors.background.secondary,
        'bg-tertiary': colors.background.tertiary,
        'text-primary': colors.text.primary,
        'text-secondary': colors.text.secondary,
        'text-tertiary': colors.text.tertiary,
        'text-muted': colors.text.muted,
        'border-light': colors.border.light,
        'border-medium': colors.border.medium,
        'border-dark': colors.border.dark,
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
