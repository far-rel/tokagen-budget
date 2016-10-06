import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import asyncCall from './middleware/async_call';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

let store = createStore(reducers,
  applyMiddleware(thunkMiddleware,
    createLogger(),
    routerMiddleware(browserHistory),
    asyncCall
  )
);

export default store;
