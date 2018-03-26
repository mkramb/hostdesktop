import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  apps: []
};

const { searchAppsStart, searchAppsUpdate } = createActions({
  SEARCH_APPS_START: (term) => ({ term }),
  SEARCH_APPS_UPDATE: (apps) => ({ apps })
});

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
