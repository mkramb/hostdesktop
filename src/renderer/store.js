import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const preloadState = {
  apps: [
    { title: 'gmail.com', url: 'http://www.gmail.com' },
    { title: 'google.com', url: 'http://www.google.com' },
    { title: 'bing.com', url: 'http://www.bing.com' }
  ]
};

const store = createStore(
  rootReducer,
  preloadState,
  composeWithDevTools(
    applyMiddleware()
  )
);

export {
  store,
  initialState
};
