import { combineReducers } from 'redux';
import apps from './apps';
import launcher from './launcher';

const rootReducer = combineReducers({
  apps,
  launcher
});

export default rootReducer;
