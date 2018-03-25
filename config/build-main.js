const lib = require('@neutrinojs/library');
const env = require('@neutrinojs/env');

module.exports = (neutrino, opts = {}) => {
  neutrino.options.source = 'src/main';
  neutrino.options.output = 'dist';

  neutrino.config
    .entry('index')
      .clear()
      .add('./src/main/index.js')
    .end();

  neutrino.use(env, ['NODE_ENV']);
  neutrino.use(lib, {
    name: 'index',
    babel: {
      presets: [
        require.resolve('babel-preset-electron')
      ]
    }
  });
};
