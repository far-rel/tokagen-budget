import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import Main from './components/main'
import LoginForm from './components/login_form';
import AuthenticatedComponent from './components/authenticated_component';
import UnauthenticatedComponent from './components/unauthenticated_component';
import PersonalCosts from './components/personal_costs';
import { Provider } from 'react-redux';
import store from './store';

let routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <Route component={AuthenticatedComponent} onEnter={AuthenticatedComponent.onEnter(store)}>
          <IndexRedirect to='/personal-costs' />
          <Route path='personal-costs' component={PersonalCosts} />
        </Route>
        <Route component={UnauthenticatedComponent} onEnter={UnauthenticatedComponent.onEnter(store)}>
          <Route path='/login'>
            <IndexRoute component={LoginForm} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default routes;
