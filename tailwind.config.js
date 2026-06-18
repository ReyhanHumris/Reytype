/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "#b9f1ff",
        "surface-container-lowest": "#060e20",
        "inverse-surface": "#dae2fd",
        "primary-fixed-dim": "#abd600",
        "surface-variant": "#2d3449",
        "on-tertiary-container": "#56657c",
        "surface-bright": "#31394d",
        "tertiary-fixed": "#d3e4fe",
        "surface-container": "#171f33",
        "on-primary-fixed-variant": "#3c4d00",
        "secondary-fixed-dim": "#00daf8",
        "on-tertiary-fixed": "#0b1c30",
        "on-surface-variant": "#c4c9ac",
        "on-secondary-fixed": "#001f25",
        "error": "#ffb4ab",
        "surface-tint": "#abd600",
        "on-primary-fixed": "#161e00",
        "on-secondary-fixed-variant": "#004e5a",
        "on-error-container": "#ffdad6",
        "secondary-fixed": "#a5eeff",
        "on-tertiary-fixed-variant": "#38485d",
        "inverse-on-surface": "#283044",
        "on-primary": "#283500",
        "outline": "#8e9379",
        "on-tertiary": "#213145",
        "inverse-primary": "#506600",
        "on-secondary": "#00363f",
        "background": "#0b1326",
        "on-primary-container": "#556d00",
        "primary-container": "#c3f400",
        "outline-variant": "#444933",
        "tertiary": "#ffffff",
        "tertiary-fixed-dim": "#b7c8e1",
        "secondary-container": "#00e0ff",
        "on-error": "#690005",
        "on-surface": "#dae2fd",
        "tertiary-container": "#d3e4fe",
        "primary": "#ffffff",
        "surface-container-high": "#222a3d",
        "surface-container-low": "#131b2e",
        "surface-container-highest": "#2d3449",
        "primary-fixed": "#c3f400",
        "on-background": "#dae2fd",
        "surface-dim": "#0b1326",
        "surface": "#0b1326",
        "error-container": "#93000a",
        "on-secondary-container": "#005f6d"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "gutter": "1.5rem",
        "stack-sm": "0.5rem",
        "stack-lg": "4rem",
        "container-max": "1000px",
        "stack-md": "1.5rem",
        "section-padding": "2rem"
      },
      fontFamily: {
        "display-typing": ["JetBrains Mono"],
        "body-sm": ["Hanken Grotesk"],
        "headline-lg": ["Hanken Grotesk"],
        "display-typing-mobile": ["JetBrains Mono"],
        "metric-label": ["JetBrains Mono"],
        "body-lg": ["Hanken Grotesk"],
        "metric-value": ["JetBrains Mono"],
        "headline-md": ["Hanken Grotesk"]
      },
      fontSize: {
        "display-typing": ["32px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "500"}],
        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "700"}],
        "display-typing-mobile": ["24px", {"lineHeight": "36px", "fontWeight": "500"}],
        "metric-label": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "metric-value": ["32px", {"lineHeight": "32px", "fontWeight": "500"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
      },
      keyframes: {
        "scale-in-center": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "scale-in-center": "scale-in-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "fade-in": "fade-in 0.3s ease-out both"
      }
    },
  },
  plugins: [],
}
