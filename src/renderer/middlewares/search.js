
import { Observable } from 'rxjs/Observable';
import { createActions } from 'redux-actions';
import startsWith from 'lodash.startswith';
import { updateLauncher } from '../services';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

const { searchAppsStart, searchAppsUpdate } = createActions({
  SEARCH_APPS_START: (term) => ({ term }),
  SEARCH_APPS_UPDATE: (apps) => ({ apps })
});

const searchBySearchTerm = ({ payload: { term } }, apps) => {
  const filtered = apps.filter(
    ({ title }) => term && startsWith(title, term)
  ) || [];

  updateLauncher({
    expanded: (filtered.length > 0)
  });

  return filtered;
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
    