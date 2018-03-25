module.exports = {
  options: {
    output: 'dist',
  },
  use: [
    ['@neutrinojs/react', {
      html: { title: 'HostDesktop' },
      devServer: { port: 3000 }
    }]
  ]
};