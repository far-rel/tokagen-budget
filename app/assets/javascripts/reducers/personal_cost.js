import { combineReducers } from 'redux';
import list from './personal_cost/list';
import newCost from './personal_cost/new_cost';

export default combineReducers({
  list,
  newCost
});
