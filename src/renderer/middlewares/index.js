import { combineEpics } from 'redux-observable';
import searchEpic from './search';

const rootEpic = combineEpics(
  searchEpic
);

export default rootEpic;
