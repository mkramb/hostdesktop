import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Launcher } from './launcher';

const load = () => render((
  <AppContainer>
    <Launcher />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept(
    './launcher',
    load
  );
}

load();