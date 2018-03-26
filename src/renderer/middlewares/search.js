import { Observable } from 'rxjs/Observable';
import { createActions } from 'redux-actions';
import startsWith from 'lodash.startswith';
import { updateLauncherWindow } from '../services';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

const { searchAppsStart, searchAppsUpdated } = createActions({
  SEARCH_APPS_START: (term) => ({ term }),
  SEARCH_APPS_UPDATED: (apps) => ({ apps })
});

const searchBySearchTerm = ({ payload: { term } }, apps) => {
  return apps.filter(
    ({ title }) => term && startsWith(title, term)
  ) || [];
};

const setLauncherWindow = (apps) => {
  updateLauncherWindow({
    expanded: (apps.length > 0)
  });

  return apps;
};

const searchEpic = (action$, store) => {
  return action$
    .ofType(searchAppsStart().type)
    .debounceTime(250)
    .map((action) => searchBySearchTerm(action, store.getState().apps))
    .map((apps) => setLauncherWindow(apps))
    .map((apps) => searchAppsUpdated(apps));
};

export default searchEpic;

export {
  searchAppsStart,
  searchAppsUpdated
};
    