import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        ink: "var(--color-ink)",
        "ink-deep": "var(--color-ink-deep)",
        body: "var(--color-body)",
        mute: "var(--color-mute)",
        ash: "var(--color-ash)",
        hairline: "var(--color-hairline)",
        "hairline-strong": "var(--color-hairline-strong)",
        "surface-soft": "var(--color-surface-soft)",
        "surface-card": "var(--color-surface-card)",
        "surface-dark": "var(--color-surface-dark)",
        "surface-dark-elevated": "var(--color-surface-dark-elevated)",
      },
      fontFamily: {
        mono: [
          "var(--font-ibm-plex-mono)",
          "IBM Plex Mono",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      borderRadius: {
        sm: "4px",
        none: "0px",
      },
      maxWidth: {
        content: "960px",
        frame: "1100px",
      },
      spacing: {
        section: "96px",
      },
      boxShadow: {
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
