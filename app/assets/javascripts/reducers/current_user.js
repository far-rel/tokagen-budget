import _ from 'underscore';
import cookie from 'react-cookie';
import Reducer from './base';

import store from '../store';

class CurrentUser extends Reducer {

  constructor () {
    super();
    this.initialState = null;
    let jwt = cookie.load('jwt');
    if (!_.isUndefined(jwt)) {
      this.initialState = {
        jwt: jwt
      };
    }
  }

  onLoginFormSubmitSuccess (state, action) {
    return action.response;
  }

  onSessionCheckSuccess (state, action) {
    return action.response
  }

  onSessionCheckFailed (state, action) {
    return null
  }

  onUnauthorized (state, action) {
    return null
  }

}

export default (new CurrentUser()).reducerFunction();
