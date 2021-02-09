/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss'
  ],
  devOptions: {
    port: 3000,
    open: 'none'
  },
  alias: {
    '@app': './src'
  }
};
