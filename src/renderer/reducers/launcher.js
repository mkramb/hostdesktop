import { handleActions } from 'redux-actions';
import { searchAppsUpdated } from '../middlewares/search';

const defaultState = {
  apps: []
};

const reducer = handleActions({
  [searchAppsUpdated]: (state, { payload: { apps } }) => {
    return { ...state, apps };
  }
}, defaultState);

export default reducer;
