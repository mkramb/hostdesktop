import { handleActions } from 'redux-actions';

const defaultState = {
  apps: []
};

const apps = handleActions(
  {}, defaultState
);

export default apps;
