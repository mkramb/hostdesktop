import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { LauncherConnected } from './components';
import { store } from './store';
import './styles/global';

const getAppComponent = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <LauncherConnected />
    </Provider>
  </MuiThemeProvider>
);

render(
  getAppComponent(),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components', () => {
    render(
      getAppComponent(),
      document.getElementById('root')
    );
  });

  module.hot.accept('./reducers', () => {
    const hotReducer = require('./reducers').default;
    store.replaceReducer(combineReducers(hotReducer));
  });
}
