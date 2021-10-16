module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./site/**/*.html", "./site/**/*.njk", "./site/**/*.md"],
  variants: {},
  plugins: [],
};
