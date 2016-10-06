import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class AuthenticatedComponent extends React.Component {

  componentDidUpdate () {
    if (!this.props.loggedIn) {
      this.props.dispatch(push('/login'))
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

AuthenticatedComponent.onEnter = (store) => {
  return (nextState, replace) => {
    if (store.getState().currentUser == null) {
      replace('/login');
    }
  }
};

let mapStateToProps = state => {
  return {
    loggedIn: (state.currentUser != null)
  }
};

export default connect(mapStateToProps)(AuthenticatedComponent);
