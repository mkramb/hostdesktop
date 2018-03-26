import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './middlewares';

const preloadState = {
  apps: [
    { title: 'gmail.com', url: 'http://www.gmail.com' },
    { title: 'google.com', url: 'http://www.google.com' },
    { title: 'bing.com', url: 'http://www.bing.com' }
  ]
};

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
  rootReducer,
  preloadState,
  composeWithDevTools(
    applyMiddleware(epicMiddleware)
  )
);

export {
  store,
  initialState
};
