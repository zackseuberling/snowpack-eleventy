const cssnano = require("cssnano");
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwind(),
    autoprefixer,
    ...(process.env.ELEVENTY_ENV !== "dev" ? [cssnano()] : []),
  ],
};
