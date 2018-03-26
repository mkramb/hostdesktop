import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { createActions } from 'redux-actions';

const { searchAppsStart, searchAppsUpdate } = createActions({
  SEARCH_APPS_START: (term) => ({ term }),
  SEARCH_APPS_UPDATE: (apps) => ({ apps })
});

const searchEpic = (action$, store) => {
  return action$
    .ofType(searchAppsStart().type)
    .debounceTime(500)
    .mapTo(searchAppsUpdate(
      store.getState().apps
    ));
};

export default searchEpic;

export {
  searchAppsStart,
  searchAppsUpdate
};
    