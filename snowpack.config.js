module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      { cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream' }
    ]
  ],
  devOptions: {
    port: 3000,
    open: 'none'
  },
  alias: {
    '@app': './src'
  }
}
