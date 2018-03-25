module.exports = {
  use: [
    ['@neutrinojs/fork', {
      configs: {
        main: { use: ['config/build-main.js'] },
        renderer: { use: ['config/build-renderer.js'] }
      }
    }]
  ]
};
