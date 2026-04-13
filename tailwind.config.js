

export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#131313",
        "primary-container": "#ebbb4d",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-surface-variant": "#d2c5b0",
        "outline": "#9b8f7c",
        "on-secondary-container": "#b6b5b4",
        "on-primary": "#402d00",
        "inverse-on-surface": "#303030",
        "secondary-fixed": "#e4e2e1",
        "primary-fixed-dim": "#f0c051",
        "surface-bright": "#393939",
        "on-secondary": "#303030",
        "surface-variant": "#353535",
        "tertiary-container": "#c1c2c2",
        "on-background": "#e2e2e2",
        "inverse-surface": "#e2e2e2",
        "primary-fixed": "#ffdf9e",
        "on-tertiary-container": "#4e5050",
        "surface-container": "#1f1f1f",
        "surface": "#131313",
        "tertiary": "#dddede",
        "surface-container-highest": "#353535",
        "surface-dim": "#131313",
        "tertiary-fixed-dim": "#c6c6c7",
        "surface-container-lowest": "#0e0e0e",
        "error": "#ffb4ab",
        "secondary-container": "#474747",
        "on-secondary-fixed-variant": "#474747",
        "on-error-container": "#ffdad6",
        "surface-tint": "#f0c051",
        "on-surface": "#e2e2e2",
        "secondary-fixed-dim": "#c8c6c6",
        "inverse-primary": "#795900",
        "tertiary-fixed": "#e2e2e2",
        "on-tertiary-fixed": "#1a1c1c",
        "surface-container-high": "#2a2a2a",
        "on-secondary-fixed": "#1b1c1c",
        "secondary": "#c8c6c6",
        "outline-variant": "#4e4636",
        "on-primary-container": "#664b00",
        "primary": "#ffd98b",
        "surface-container-low": "#1b1b1b",
        "on-tertiary": "#2f3131",
        "on-primary-fixed-variant": "#5b4300",
        "on-tertiary-fixed-variant": "#454747",
        "on-primary-fixed": "#261a00"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
