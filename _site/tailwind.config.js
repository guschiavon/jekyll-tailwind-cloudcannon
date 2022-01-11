const customTheme = require('./_data/theme.json')

module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false,
  theme: {
    extend: {
      customTheme,
      fontFamily: {
        "heading": customTheme.fonts.heading_font_family,
        "body": customTheme.fonts.body_font_family
      },
      colors: {
        "primary": customTheme.colors.primary_color,    
        "secondary": customTheme.colors.secondary_color,    
        "tertiary": customTheme.colors.tertiary_color,    
        "accent": customTheme.colors.accent_color,
      }
     },    
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
