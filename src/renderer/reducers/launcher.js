import { handleActions } from 'redux-actions';
import { searchAppsUpdate } from '../middlewares/search';

const defaultState = {
  apps: []
};

const reducer = handleActions({
  [searchAppsUpdate]: (state, { payload: { apps } }) => {
    return { ...state, apps };
  }
}, defaultState);

export default reducer;

export {
  searchAppsStart,
  searchAppsUpdate
};
