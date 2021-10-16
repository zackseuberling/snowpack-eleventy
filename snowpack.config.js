module.exports = {
  mount: {
    _site: { url: "/", static: true },
    src: "/",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
  ],
  devOptions: {
    hmrDelay: 300,
  },
};
