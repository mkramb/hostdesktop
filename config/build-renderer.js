const react = require('@neutrinojs/react');

module.exports = (neutrino) => {
  neutrino.options.source = 'src/renderer';
  neutrino.options.output = 'dist/renderer';

  neutrino.config
    .entry('index')
      .clear()
      .add('./src/renderer/index.js')
    .end();

  neutrino.use(react, {
    html: { title: 'HostDesktop' },
    devServer: { port: 3000 }
  });
};
