module.exports = {
  options: {
    source: 'src/renderer',
    output: 'dist',
  },
  use: [
    ['@neutrinojs/react', {
      html: { title: 'HostDesktop' },
      devServer: { port: 3000 }
    }]
  ]
};
