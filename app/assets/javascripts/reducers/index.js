import { combineReducers } from 'redux';
import loginForm from './login_form';
import currentUser from './current_user';
import personalCost from './personal_cost';
import { routerReducer } from 'react-router-redux';

let todoApp = combineReducers({
  loginForm,
  currentUser,
  personalCost,
  routing: routerReducer
});

export default todoApp;
