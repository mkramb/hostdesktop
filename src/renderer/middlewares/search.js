import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { createActions } from 'redux-actions';
import startsWith from 'lodash.startswith';

const { searchAppsStart, searchAppsUpdate } = createActions({
  SEARCH_APPS_START: (term) => ({ term }),
  SEARCH_APPS_UPDATE: (apps) => ({ apps })
});

const searchBySearchTerm = ({ payload: { term } }, apps) => {
  if (term && term.length) {
    return apps.filter(
      ({ title }) => startsWith(title, term)
    );
  }

  return [];
};

const searchEpic = (action$, store) => {
  return action$
    .ofType(searchAppsStart().type)
    .debounceTime(250)
    .map((action) => searchBySearchTerm(action, store.getState().apps))
    .map((apps) => searchAppsUpdate(apps));
};

export default searchEpic;

export {
  searchAppsStart,
  searchAppsUpdate
};
    